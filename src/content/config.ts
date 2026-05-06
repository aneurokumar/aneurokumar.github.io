import { defineCollection, z } from "astro:content";

const base = {
  tags: z.array(z.string()).optional(),
  created: z.string().optional(),
  "last-modified": z.string().optional(),
  type: z.string().optional(),
  public: z.boolean().optional(),
  draft: z.boolean().optional(),
};

const blog = defineCollection({
  type: "content",
  schema: z.object({
    ...base,
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    ...base,
    title: z.string(),
    description: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.string(), z.coerce.date()]).optional(),
    company: z.string().optional(),
    role: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    ...base,
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const brain = defineCollection({
  type: "content",
  schema: z.object({
    ...base,
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, work, projects, brain };
