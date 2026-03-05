import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shulhan-shuk.co.il',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  image: {
    // Enable image optimization with sharp
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  // Output static HTML by default (best for SEO + performance)
  output: 'static',
  build: {
    // Inline small styles for faster LCP
    inlineStylesheets: 'auto',
  },
});
