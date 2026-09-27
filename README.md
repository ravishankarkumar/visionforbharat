# Vision for Bharat, 2075

A quiet, long-term journal of constructive ideas and policy proposals for India’s future.

## Local development

```sh
npm install
npm run dev
```

The development server starts at `http://localhost:4321` by default.

## Quality checks

```sh
npm run check
npm run build
```

The production-ready static site is written to `dist/`.

## Content

Proposal essays live in `src/content/proposals/`. Their frontmatter is validated by the collection schema in `src/content.config.ts`. Set `draft: true` to exclude an unfinished entry from routes, archives, RSS, and the sitemap.

## Domain and deployment

The canonical site URL is configured as `https://visionforbharat.com` in `astro.config.mjs`. `public/CNAME` is included for GitHub Pages and contains:

```text
visionforbharat.com
```

The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` whenever `main` is pushed. In the repository settings, select **GitHub Actions** as the Pages source, add the custom domain, enable HTTPS after DNS resolves, and create the DNS records requested by GitHub for the apex domain.

If a different hosting provider is selected, keep the Astro `site` value and DNS configuration in sync; some providers do not use the `CNAME` file.

## Project notes

The homepage illustration is in `src/assets/images/vision-2075-hero.png` and is optimised by Astro at build time.
