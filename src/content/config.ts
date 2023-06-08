import { defineCollection } from "astro:content";
import { blogSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
  url: z.string(),
});

export const collections = { blog };
