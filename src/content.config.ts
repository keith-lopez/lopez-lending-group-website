import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    category: z.enum([
      "First-Time Buyers",
      "Refinancing",
      "Investment",
      "Market Updates",
      "For Agents",
    ]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
