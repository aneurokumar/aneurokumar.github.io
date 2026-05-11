import remarkWikiLink from 'remark-wiki-link';
import { visit } from 'unist-util-visit';
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

function remarkFixImages() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url && node.url.includes('public/brain/images/')) {
        const filename = node.url.split('public/brain/images/').pop();
        node.url = `/brain/images/${filename}`;
      }
    });
  };
}

export default defineConfig({
  site: "https://aneurokumar.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [
      remarkFixImages,
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
