import { GetServerSideProps } from "next";

import { bundleMDXWithOptions } from "@/utils/bundle";
import {
  blogFiles,
  BlogFrontmatter,
  getFormattedCategory,
  snippetFiles,
  SnippetFrontmatter,
} from "@/utils/contents";

function generateSiteMap(slugs: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${slugs
       .map((slug) => {
         return `
       <url>
           <loc>https://philly.im/${slug}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const blogSlugs = await Promise.all(
    blogFiles.map(async (fileName) => {
      const { slug } = await bundleMDXWithOptions<BlogFrontmatter>(
        "blog",
        fileName
      );
      return slug;
    })
  );
  const snippets = await Promise.all(
    snippetFiles.map(async (fileName) => {
      const { frontmatter, slug } =
        await bundleMDXWithOptions<SnippetFrontmatter>("snippet", fileName);

      return { frontmatter, slug };
    })
  );
  const snippetSlugs = snippets.map(({ frontmatter, slug }) => {
    const { category } = frontmatter;
    const formattedCategory = getFormattedCategory(category);

    return `${formattedCategory}/${slug}`;
  });

  const allPageSlugs = [
    ...blogSlugs.map((slug) => `blog/${slug}`),
    ...snippetSlugs.map((slug) => `snippet/${slug}`),
    "",
    "blog",
    "personal",
    "snippet",
  ];

  const sitemap = generateSiteMap(allPageSlugs);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
