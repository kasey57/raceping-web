# RacePing Web

Landing page for the RacePing Discord bot (Next.js 14 + Tailwind CSS 3).
Hosted separately from the bot — this folder is ignored by the bot repo's
`.gitignore` and is meant to live in its own repository.

No dashboard yet: single static landing page (hero, series, features,
commands, setup steps, FAQ).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

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
- The Discord invite URL lives in `app/page.js` (`INVITE_URL`).
