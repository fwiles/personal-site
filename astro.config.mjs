// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { EXCLUDED_SITEMAP_PATHS } from './src/sitemap-exclude';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://fransiscowiles.com',

  integrations: [
    sitemap({
      filter: (page) => !EXCLUDED_SITEMAP_PATHS.has(page),
    }),
  ],

  adapter: cloudflare(),
});