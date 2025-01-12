import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel";
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";

const icon = '<span class="copy"/>#</span>';

export default defineConfig({
  site: 'https://kevfiorentino.com',
  integrations: [react(), tailwind(), mdx(), sitemap()],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        }
      ],
      [
        rehypeAutolinkHeadings, {
          behavior: "apend",
          content: fromHtmlIsomorphic(icon, {
            fragment: true
          }).children
        }
      ]
    ],
  },
  adapter: vercel()
});
