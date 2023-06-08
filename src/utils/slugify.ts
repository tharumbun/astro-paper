import { slug as slugger } from "github-slugger";

export const slugify = (post: BlogFrontmatter, fileName: string) => {
  const fileSlug = slugger(fileName);
  return post.postSlug ? slugger(post.postSlug) : fileSlug;
};

export default slugify;
