import { slug as slugger } from "github-slugger";
import type { BlogFrontmatter } from "@content/_schemas";

export const slugify = (post: BlogFrontmatter, fileName: string) => {
  const fileSlug = slugger(fileName);
  return post.postSlug ? slugger(post.postSlug) : fileSlug;
};
const slugify = (post: BlogFrontmatter) =>
  post.postSlug ? slugger(post.postSlug) : slugger(post.title);
export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));
export default slugify;
