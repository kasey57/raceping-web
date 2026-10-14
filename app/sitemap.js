const SITE = 'https://raceping.xyz';
const routes = ['', 'series/', 'overview/', 'commands/'];

export const dynamic = 'force-static';

export default function sitemap() {
  return routes.flatMap((route) => [
    { url: `${SITE}/${route}`, changeFrequency: route ? 'monthly' : 'weekly', priority: route ? 0.75 : 1 },
    { url: `${SITE}/pl/${route}`, changeFrequency: route ? 'monthly' : 'weekly', priority: route ? 0.75 : 1 },
  ]);
}
