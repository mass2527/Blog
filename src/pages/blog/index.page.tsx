import styled from "styled-components";

import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

import { Heading, Text } from "@/components/Typography";
import {
  blogFilePaths,
  BundleMDXResult,
  bundleMDXWithOptions,
} from "@/utils/blog";

const Blog = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul>
      {blogs.map(({ frontmatter, slug }) => {
        return (
          <li key={frontmatter.title}>
            <Link href={`/blog/${slug}`}>
              <a>
                <article>
                  <Heading>{frontmatter.title}</Heading>
                  <Text>{frontmatter.summary}</Text>
                  <time>{frontmatter.publishedAt}</time>
                </article>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export async function getStaticProps() {
  const blogs = (
    await Promise.all(
      blogFilePaths.map(async (filePath) => {
        const { frontmatter, slug } = await bundleMDXWithOptions(filePath);
        return { frontmatter, slug } as Pick<
          BundleMDXResult,
          "frontmatter" | "slug"
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
