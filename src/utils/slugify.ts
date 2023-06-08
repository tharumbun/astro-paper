import { slug as slugger } from "github-slugger";
import type { BlogFrontmatter } from "@content/_schemas";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: BlogFrontmatter) =>
const slug = slugger(url);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
