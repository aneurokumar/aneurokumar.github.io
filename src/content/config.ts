import { defineCollection, z } from "astro:content";

const shared = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    created: z.string().option(),
    "last-modified": z.string().optional(),
    type: z.string().optional(),
    public: z.boolean().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({...shared}),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({...shared}),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({...shared}),
  }),
});

const brain = defineCollection({
  type: "content",
  schema: z.object({shared}),
  }),
});

export const collections = { work, projects, blog, brain };
