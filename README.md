# GREENERGY Natural — Product Showcase

A responsive React + TypeScript + Vite brand presentation for GREENERGY.
It is a showroom, not an e-commerce store.

## Run locally

Install Node.js 20+ and run:

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run lint
npm run build
```

No Gemini API key is needed to run this static website.

## Production assets

- `public/products/`: original packshots and GREENERGY logo (do not edit).
- `public/backgrounds/energetic/`: the approved separate desktop and mobile food-advertising scenes.
- `public/backgrounds/greenergy-intro-bg.*`: intro fallback assets.
- `src/data/flavors.ts`: published product catalog.
- `src/data/product-descriptions/`: product copy.
- `src/components/Preloader.tsx`: active circular preloader and floating brand-family composition.
- `vite.config.ts`: Vite build and static SEO-output logic.

The Vite build deliberately **does not overwrite** approved images. Older AI-generated image experiments were removed from the project.

## Production environment (optional until domain verified)

- `VITE_SITE_URL`: official deployed HTTPS site URL, for SEO canonical and sitemap.
- `VITE_OG_IMAGE_URL`: verified social-sharing image URL.
- `VITE_OG_IMAGE_ALT`: approved social-sharing image description.

Do not put secrets in `VITE_` environment variables.

## Deployment

Vercel uses the standard Vite output folder `dist`. The repository includes `vercel.json` for the `/about-us` route and security/indexing response headers.
