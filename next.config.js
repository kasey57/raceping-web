/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: produces a plain `out/` folder (HTML/CSS/JS) that can be
  // uploaded to any shared hosting (cPanel/Plesk) as-is.
  output: 'export',
  // Emit /terms/index.html instead of /terms.html so routes resolve
  // on plain static hosts (GitHub Pages, cPanel) without rewrites.
  trailingSlash: true,
  // next/image optimization needs a Node server; use original files instead.
  images: { unoptimized: true },
  // Project pages live under https://<user>.github.io/<repo> (/...).
  // Baked in at build time via NEXT_PUBLIC_BASE_PATH (see .github/workflows/deploy.yml).
  // Leave empty for user sites (<user>.github.io) and custom domains.
  // NOTE: NEXT_PUBLIC_* is used (not NEXT_*) so the value also reaches
  // browser code, where image URLs are prefixed manually (see app/page.js).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

module.exports = nextConfig;
