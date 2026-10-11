// Fetches live bot reach (guild + user counts) from the Discord API and writes
// stats.json for the static site build. Runs nightly in GitHub Actions with
// DISCORD_BOT_TOKEN (repo secret) and on demand locally.
// Fail-soft: on any API error the previous stats.json is kept, so a Discord
// outage never breaks the site build.

import { writeFile } from 'node:fs/promises';

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const OUT = new URL('../stats.json', import.meta.url);

async function api(path, attempt = 0) {
  const res = await fetch(`https://discord.com/api/v10${path}`, {
    headers: { Authorization: `Bot ${TOKEN}` },
    signal: AbortSignal.timeout(15000),
  });
  if (res.status === 429 && attempt < 3) {
    const retry = Math.min(30, Math.max(1, Number(res.headers.get('retry-after') ?? 5) || 5));
    await new Promise((r) => setTimeout(r, retry * 1000));
    return api(path, attempt + 1);
  }
  if (!res.ok) throw new Error(`Discord API ${res.status} on ${path}`);
  return res.json();
}

async function listGuilds() {
  const guilds = [];
  let after = null;
  for (;;) {
    const page = await api(`/users/@me/guilds?limit=200${after ? `&after=${after}` : ''}`);
    if (!Array.isArray(page) || page.length === 0) break;
    guilds.push(...page);
    if (page.length < 200) break;
    after = page[page.length - 1].id;
  }
  return guilds;
}

try {
  if (!TOKEN) throw new Error('DISCORD_BOT_TOKEN is not set');
  const guilds = await listGuilds();
  let users = 0;
  for (const guild of guilds) {
    const full = await api(`/guilds/${guild.id}?with_counts=true`);
    if (!Number.isFinite(full.approximate_member_count)) throw new Error('Missing member count');
    users += full.approximate_member_count;
  }
  const stats = { guilds: guilds.length, users, updatedAt: new Date().toISOString() };
  await writeFile(OUT, JSON.stringify(stats, null, 2) + '\n');
  console.log(`stats: ${stats.guilds} guilds, ${stats.users} users`);
} catch (error) {
  console.warn(`stats: refresh failed, keeping previous file: ${error.message}`);
}
