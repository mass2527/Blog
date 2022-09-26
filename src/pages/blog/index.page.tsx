import calculateReadingTime from "reading-time";

import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

import SEO from "@/components/SEO";
import { Heading, Text } from "@/components/Typography";
import {
  blogFilePaths,
  BundleMDXResult,
  bundleMDXWithOptions,
} from "@/utils/blog";

const Blog = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <SEO
        title="Blog"
        description="프론트엔드와 관련된 다양한 지식을 공유합니다."
      />
      <ul>
        {blogs.map(({ frontmatter, slug, matter }) => {
          const { minutes } = calculateReadingTime(matter.content);
          const readingTime = Math.round(minutes);

          return (
            <li key={frontmatter.title}>
              <Link href={`/blog/${slug}`}>
                <a>
                  <article>
                    <Heading>{frontmatter.title}</Heading>
                    <Text>{frontmatter.summary}</Text>
                    <time>{frontmatter.publishedAt.replace(/-/g, ". ")} —</time>
                    <Text as="span" fontSize={14} color="mauve11">
                      {" "}
                      {readingTime}분
                    </Text>
                  </article>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const blogs = (
    await Promise.all(
      blogFilePaths.map(async (filePath) => {
        const { frontmatter, slug, matter } = await bundleMDXWithOptions(
          filePath
        );

        return { frontmatter, slug, matter } as Pick<
          BundleMDXResult,
          "frontmatter" | "slug" | "matter"
        >;
      })
    )
  )
    .filter(
      ({ frontmatter }) =>
        process.env.NODE_ENV === "development" || frontmatter.published
    )
    .sort(
      (current, next) =>
        new Date(next.frontmatter.publishedAt).getTime() -
        new Date(current.frontmatter.publishedAt).getTime()
    );

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
