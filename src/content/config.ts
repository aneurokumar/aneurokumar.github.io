import { defineCollection, z } from "astro:content";

const shared = {
  title: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  created: z.string().optional(),
  "last-modified": z.string().optional(),
  type: z.string().optional(),
  public: z.boolean().optional(),
};

const blog = defineCollection({
  type: "content",
  schema: z.object({ ...shared }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({ ...shared }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({ ...shared }),
});

const brain = defineCollection({
  type: "content",
  schema: z.object({ ...shared }),
});

export const collections = { blog, work, projects, brain };
