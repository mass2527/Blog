import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

import rehypeHighlightCode from "./rehype-highlight-code";
import rehypeMetaAttribute from "./rehype-meta-attribute";

export const BLOG_PATH = path.join(process.cwd(), "src", "contents", "blog");

export const blogFilePaths = fs.readdirSync(BLOG_PATH);

const MDXToSLug = (mdxFilePath: string) => mdxFilePath.replace(".mdx", "");
export const slugToMDX = (slug: string) => slug + ".mdx";

export const blogSlugs = blogFilePaths.map(MDXToSLug);

export const bundleMDXWithOptions = async (filePath: string) => {
  const mdxSource = fs.readFileSync(
    path.join(
      BLOG_PATH,
      filePath.endsWith(".mdx")
        ? filePath
        : `${filePath.replace(".mdx", "")}/index.mdx`
    ),
    "utf8"
  );
  const slug = MDXToSLug(filePath);

  const result = await bundleMDX({
    source: mdxSource,
    // cwd: path.dirname(filePath),
    mdxOptions(options, _frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkGfm], // Support GFM (autolink literals, footnotes, strikethrough, tables, tasklists)
        [remarkToc, { tight: false }], // Generate a table of contents
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypeMetaAttribute],
        [rehypeHighlightCode],
        [rehypeSlug], // Add ids to headings.
        [rehypeAutolinkHeadings, { behavior: "wrap" }], // Add links to headings with ids
        [
          rehypeRaw,
          {
            passThrough: [
              "mdxFlowExpression",
              "mdxJsxFlowElement",
              "mdxJsxTextElement",
              "mdxTextExpression",
              "mdxjsEsm",
            ],
          },
        ],
        // [rehypeImgSize, { dir: "public" }],
      ];

      return options;
    },
    esbuildOptions(options) {
      options.platform = "node";

      return options;
    },
  });
  return { ...result, slug };
};

export interface Frontmatter {
  title: string;
  category: string;
  // seoTitle?: string;
  // subtitle?: string;
  summary: string;
  // image?: string;
  published: boolean;
  publishedAt: string;
  // updatedAt: string;
}

export interface BundleMDXResult
  extends Omit<Awaited<ReturnType<typeof bundleMDX>>, "frontmatter"> {
  frontmatter: Frontmatter;
  slug: string;
}
