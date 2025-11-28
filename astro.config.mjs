// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://mesartim.cz',

  // i18n configuration
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'ru', 'uk', 'de', 'pl'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // Vercel adapter for static + edge functions (forms)
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  // Output static for maximum performance
  output: 'static',

  // Build optimizations
  build: {
    inlineStylesheets: 'auto',
  },

  // Prefetch for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
