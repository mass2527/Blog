import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import path from "path";

export const BLOG_PATH = path.join(process.cwd(), "src", "contents", "blog");

export const blogFilePaths = fs
  .readdirSync(BLOG_PATH)
  .filter((file) => file.endsWith(".mdx"));

const mdxToSlug = (mdxFilePath: string) => mdxFilePath.replace(".mdx", "");

export const blogSlugs = blogFilePaths.map(mdxToSlug);

export const bundleMDXWithOptions = async (filePath: string) => {
  const mdxSource = fs.readFileSync(path.join(BLOG_PATH, filePath), "utf8");
  const slug = mdxToSlug(filePath);

  // TODO: add options

  const result = await bundleMDX({ source: mdxSource });
  return { ...result, slug };
};
