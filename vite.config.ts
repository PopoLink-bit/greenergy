import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv, Plugin} from 'vite';
import {
  buildCanonicalUrl,
  buildPageJsonLd,
  buildRobotsTxt,
  buildSitemapXml,
  resolveVerifiedSocialImage,
  SEO_ROUTES,
  serializeJsonLd,
} from './src/utils/seo';

/**
 * Write route-aware SEO files after the production build. Product backgrounds are
 * versioned static assets in public/backgrounds/energetic and must NEVER be
 * regenerated or overwritten by Vite during development or deployment.
 */
function writeSeoFiles(): Plugin {
  return {
    name: 'greenergy-seo-output',
    closeBundle() {
      // Generate route-specific initial HTML metadata for '/' (dist/index.html) and '/about-us' (dist/about-us/index.html)
      const distIndexPath = path.resolve(__dirname, 'dist/index.html');
      if (fs.existsSync(distIndexPath)) {
        const env = loadEnv('production', __dirname, '');
        const rawSiteUrl = env.VITE_SITE_URL || process.env.VITE_SITE_URL || '';
        const rawOgImage =
          env.VITE_OG_IMAGE_URL || process.env.VITE_OG_IMAGE_URL || '';
        const rawOgAlt =
          env.VITE_OG_IMAGE_ALT ||
          process.env.VITE_OG_IMAGE_ALT ||
          'GREENERGY Natural Snacks — Fava Beans Chips, Chickpea Protein Snacks & Protein Cookies';

        const escapeHtml = (str: string) =>
          str
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        const baseHtml = fs.readFileSync(distIndexPath, 'utf-8');

        const renderRouteHtml = (routeKey: 'home' | 'about-us') => {
          const route = SEO_ROUTES[routeKey];
          const canonicalUrl = buildCanonicalUrl(route.path, rawSiteUrl);
          const verifiedImage = rawOgImage
            ? resolveVerifiedSocialImage(rawSiteUrl, rawOgImage, rawOgAlt)
            : null;
          const ogImageUrl = verifiedImage?.url || null;
          const ogImageAlt = verifiedImage?.alt || rawOgAlt;
          const twitterCard = ogImageUrl ? 'summary_large_image' : 'summary';
          const jsonLdContent = serializeJsonLd(
            buildPageJsonLd(routeKey, rawSiteUrl)
          );

          let html = baseHtml;
          html = html.replace(
            /<html\s+lang="[^"]*"/i,
            `<html lang="${route.lang}"`
          );
          html = html.replace(
            /<title>[\s\S]*?<\/title>/i,
            `<title>${escapeHtml(route.title)}</title>`
          );
          html = html.replace(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
            `<meta name="description" content="${escapeHtml(route.description)}" />`
          );
          html = html.replace(
            /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
            `<meta property="og:title" content="${escapeHtml(route.title)}" />`
          );
          html = html.replace(
            /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
            `<meta property="og:description" content="${escapeHtml(route.description)}" />`
          );
          html = html.replace(
            /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/i,
            `<meta property="og:locale" content="${route.ogLocale}" />`
          );
          html = html.replace(
            /<meta\s+name="twitter:card"\s+content="[^"]*"\s*\/?>/i,
            `<meta name="twitter:card" content="${twitterCard}" />`
          );
          html = html.replace(
            /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
            `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
          );
          html = html.replace(
            /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
            `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
          );
          html = html.replace(
            /<script\s+id="greenergy-jsonld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
            `<script id="greenergy-jsonld" type="application/ld+json">\n${jsonLdContent}\n    </script>`
          );

          const extraTags: string[] = [];
          if (canonicalUrl) {
            extraTags.push(
              `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
              `    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`
            );
          }
          if (ogImageUrl) {
            extraTags.push(
              `    <meta property="og:image" content="${escapeHtml(ogImageUrl)}" />`,
              `    <meta property="og:image:alt" content="${escapeHtml(ogImageAlt)}" />`,
              `    <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />`,
              `    <meta name="twitter:image:alt" content="${escapeHtml(ogImageAlt)}" />`
            );
          }

          if (extraTags.length > 0) {
            html = html.replace(
              /(<meta\s+name="twitter:description"[^>]*>)/i,
              `$1\n${extraTags.join('\n')}`
            );
          }

          return html;
        };

        // Write updated dist/index.html for '/'
        fs.writeFileSync(distIndexPath, renderRouteHtml('home'), 'utf-8');

        // Write static dist/about-us/index.html for '/about-us'
        const aboutDir = path.resolve(__dirname, 'dist/about-us');
        if (!fs.existsSync(aboutDir)) {
          fs.mkdirSync(aboutDir, {recursive: true});
        }
        fs.writeFileSync(
          path.join(aboutDir, 'index.html'),
          renderRouteHtml('about-us'),
          'utf-8'
        );

        // Write domain-aware dist/robots.txt and dist/sitemap.xml
        fs.writeFileSync(
          path.resolve(__dirname, 'dist/robots.txt'),
          buildRobotsTxt(rawSiteUrl),
          'utf-8'
        );
        fs.writeFileSync(
          path.resolve(__dirname, 'dist/sitemap.xml'),
          buildSitemapXml(rawSiteUrl),
          'utf-8'
        );
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    publicDir: 'public',
    plugins: [writeSeoFiles(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
