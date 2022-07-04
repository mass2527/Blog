import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import styled from "styled-components";

import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

import { Heading, Text } from "@/components/Typography";

const Blog = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul>
      {blogs.map(({ title, summary, publishedAt }) => (
        <li key={title}>
          <Link href="/">
            <StyledLink>
              <article>
                <Heading color="crimson11">{title}</Heading>
                <Text>{summary}</Text>
                <Text as="time" color="gray11" fontSize={14}>
                  {publishedAt}
                </Text>
              </article>
            </StyledLink>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const StyledLink = styled.a`
  &:hover {
    h2 {
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.crimson11} 0%,
        ${({ theme }) => theme.colors.yellow11} 100%
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
  const BLOG_PATH = path.join(process.cwd(), "src", "contents", "blog");
  const blogFilePaths = fs
    .readdirSync(BLOG_PATH)
    .filter((file) => file.endsWith(".mdx"));
  const blogs = (
    await Promise.all(
      blogFilePaths.map(async (filePath) => {
        const mdxSource = fs.readFileSync(
          path.join(BLOG_PATH, filePath),
          "utf8"
        );
        const { frontmatter } = await bundleMDX({ source: mdxSource });
        return frontmatter as {
          published: boolean;
          publishedAt: string;
          title: string;
          summary: string;
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
