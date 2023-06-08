import { slug as slugger } from "github-slugger";
import type { BlogFrontmatter } from "@content/_schemas";

export function slugifyStr(str: string): string {
  const extension = str.split(".").pop();
  const name = str.replace(extension, "");
  return slugger(name);
}

export const slugify = (post: BlogFrontmatter) => {
  const filename = post.filename;
  return getFileNameSlug(filename);
};

export const slugifyAll = (arr: string[]) => arr.map(str => getFileNameSlug(str));

export default slugify;
