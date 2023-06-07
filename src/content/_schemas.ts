import { z } from "astro:content";

export const blogSchema = z
  .object({
    pubDate: z.date(),
    title: z.string(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    description: z.string(),
  })
  // .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
