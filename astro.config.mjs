import remarkWikiLink from 'remark-wiki-link';
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://aneurokumar.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [
      [remarkWikiLink, {
        pageResolver: (name) => {
          const clean = name.replace(/^(\.\.\/)*/, '').toLowerCase().replace(/ /g, '-');
          return [clean];
        },
        hrefTemplate: (permalink) => `/brain/${permalink}`,
        aliasDivider: '|'
      }]
    ]
  },
});
