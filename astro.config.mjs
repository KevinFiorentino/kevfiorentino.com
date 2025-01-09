import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel";
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://kevfiorentino.com',
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks, // Usalo directamente sin cadena de texto
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        }
      ]
    ]
  },
  adapter: vercel()
});
