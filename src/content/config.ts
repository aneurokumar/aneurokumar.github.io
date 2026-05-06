import { defineCollection, z } from "astro:content";

const shared = {
  title: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  created: z.string().optional(),
  "last-modified": z.string().optional(),
  type: z.string().optional(),
  public: z.boolean().optional(),
  draft: z.boolean().optional(),
  date: z.coerce.date().optional(),
};

const blog = defineCollection({
  type: "content",
  schema: z.object({ ...shared }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    ...shared,
    company: z.string().optional(),
    role: z.string().optional(),
    dateStart: z.coerce.date().optional(),
    dateEnd: z.union([z.string(), z.coerce.date()]).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    ...shared,
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const brain = defineCollection({
  type: "content",
  schema: z.object({ ...shared }),
});

export const collections = { blog, work, projects, brain };
