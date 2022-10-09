import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

import { getContentPath, removeMDXFileExtension } from "./path";
import rehypeHighlightCode from "./rehype-highlight-code";
import rehypeMetaAttribute from "./rehype-meta-attribute";

export const bundleMDXWithOptions = async <T extends Frontmatter>(
  content: Parameters<typeof getContentPath>[0],
  fileName: string
) => {
  const contentPath = getContentPath(content);

  const mdxSource = fs.readFileSync(
    path.join(
      contentPath,
      fileName.endsWith(".mdx")
        ? fileName
        : `${fileName.replace(".mdx", "")}/index.mdx`
    ),
    "utf8"
  );
  const slug = removeMDXFileExtension(fileName);

  const result = (await bundleMDX({
    source: mdxSource,
    cwd: fileName.endsWith(".mdx")
      ? contentPath
      : path.join(contentPath, fileName),
    mdxOptions(options) {
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
  })) as BundleMDXResult<T>;

  return { ...result, slug };
};

export interface Frontmatter {
  title: string;
  category: string;
  publishedAt: string;
}

export interface BundleMDXResult<T extends Frontmatter>
  extends Awaited<ReturnType<typeof bundleMDX>> {
  frontmatter: T;
}
