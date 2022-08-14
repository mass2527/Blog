import { GetServerSideProps } from "next";

import { blogFilePaths, bundleMDXWithOptions } from "@/utils/blog";

function generateSiteMap(slugs: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${slugs
       .map((slug) => {
         return `
       <url>
           <loc>https://blog-mass2527.vercel.app/${slug}</loc>
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
    blogFilePaths.map(async (filePath) => {
      const { slug } = await bundleMDXWithOptions(filePath);
      return slug;
    })
  );

  const allPageSlugs = [
    ...blogSlugs.map((slug) => `blog/${slug}`),
    "",
    "blog",
    "personal",
    "snippets",
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
