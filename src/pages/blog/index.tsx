import styled from "styled-components";

import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

import { Heading, Text } from "@/components/Typography";
import { blogFilePaths, bundleMDXWithOptions } from "@/utils/blog";

const Blog = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul>
      {blogs.map(({ title, summary, publishedAt, slug }) => {
        return (
          <li key={title}>
            <Link href={`/blog/${slug}`}>
              <StyledLink>
                <article>
                  <Heading color="blue11">{title}</Heading>
                  <Text>{summary}</Text>
                  <Text as="time" color="gray11" fontSize={14}>
                    {publishedAt}
                  </Text>
                </article>
              </StyledLink>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const StyledLink = styled.a`
  &:hover {
    h2 {
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.blue11} 0%,
        ${({ theme }) => theme.colors.crimson11} 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
`
`;

export async function getStaticProps() {
  const blogs = (
    await Promise.all(
      blogFilePaths.map(async (filePath) => {
        const { frontmatter, slug } = await bundleMDXWithOptions(filePath);
        return { ...frontmatter, slug } as {
          published: boolean;
          publishedAt: string;
          title: string;
          summary: string;
          slug: string;
        };
      })
    )
  )
    .filter(
      ({ published }) => process.env.NODE_ENV === "development" || published
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
