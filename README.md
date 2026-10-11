# RacePing Web

Static website for the RacePing Discord bot (Next.js 16 + React 19 + Tailwind CSS 4).
Hosted separately from the bot — this folder is ignored by the bot repo's
`.gitignore` and is meant to live in its own repository.

Landing page, full command reference and bilingual Privacy/Terms pages. Node.js 20.9+ is required; Node.js 24 is used for local verification.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is in `out/`. Upload its contents to a static host or serve
that directory locally. `next start` does not serve an `output: 'export'` build.

## Languages

Two languages, all copy in `app/i18n.js`:

- `EN` — default
- `PL` — Polish

Toggle in the header (`EN / PL`). Choice persists in `localStorage`
(`raceping-lang`); first visit follows the browser language.

## GitHub Pages

This project is ready for GitHub Pages hosting:

1. Create a repo (e.g. `raceping-web`) and push the contents of this folder
   (`raceping-web/`) to its root (including `.github/workflows/deploy.yml`).
2. On GitHub: Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` builds and publishes to
   `https://<user>.github.io/raceping-web/`.
4. For a user site (`<user>.github.io`) or a custom domain, set
   `NEXT_PUBLIC_BASE_PATH` to `''` in the workflow instead.

Manual alternative: `npm run build`, then upload the contents of `out/`
(`.nojekyll` included) to any static host.

## Conventions

- English copy (matches the bot's docs).
- Brand color `#e10600` (see `tailwind.config.js` → `brand`).
- The Discord invite URL lives in `app/site.js` (`INVITE_URL`).
- Set `NEXT_PUBLIC_BMC_URL` to a public donation profile at build time to show the support button. It stays hidden while no address is configured.
- Hero output is a labelled example. Server membership counts are approximate totals, including bots and overlapping memberships, not unique bot users. The stats script retains the previous file if any server request fails.
- Legal licence and commercial-use decisions require the owner's confirmation; translations do not establish a new licence.
