import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), react(), sitemap()],
  site: 'https://amantorestaurante.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
     prefixDefaultLocale: false, // Todos los idiomas tendrán prefijo (/en, /es)
    },
  },
});