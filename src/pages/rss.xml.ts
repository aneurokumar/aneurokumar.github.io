import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
  .filter(post => !post.data.draft);

  const projects = (await getCollection("projects"))
    .filter(project => !project.data.draft);

  const items = [...blog, ...projects]
    .sort((a, b) => {
      const dateA = a.data.created ? new Date(String(a.data.created)).valueOf() : 0;
      const dateB = b.data.created ? new Date(String(b.data.created)).valueOf() : 0;
      return dateB - dateA;
    });


  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
    title: item.data.title ?? item.slug,
    description: item.data.description ?? "",
    pubDate: item.data.created ? new Date(String(item.data.created)) : new Date(),
    link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
