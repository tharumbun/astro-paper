import { slug as slugger } from "github-slugger";
import type { BlogFrontmatter } from "@content/_schemas";

export const getFileNameSlug = (filename: string) => {
  const extension = filename.split(".").pop();
  const name = filename.replace(extension, "");
  return slugger(name);
};

export const slugify = (post: BlogFrontmatter) => {
  const filename = post.filename;
  return getFileNameSlug(filename);
};

export const slugifyAll = (arr: string[]) => arr.map(str => getFileNameSlug(str));

export default slugify;
