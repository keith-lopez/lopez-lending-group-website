import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    category: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
