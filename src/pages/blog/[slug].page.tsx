import styled from "styled-components";

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import SEO from "@/components/SEO";
import TimeInfo from "@/components/TimeInfo";
import { bundleMDXWithOptions } from "@/utils/bundle";
import { blogFiles, BlogFrontmatter, blogSlugs } from "@/utils/contents";

import MDXContent from "./components/MDXContent";

const BlogPost = ({
  frontmatter,
  code,
  matter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.summary} />
      <BlogHeader>
        {/* TODO: add category */}
        <TimeInfo
          publishedAt={frontmatter.publishedAt}
          content={matter.content}
        />
        <h1>{frontmatter.title}</h1>
      </BlogHeader>
      <MDXContent code={code} />
    </>
  );
};

const BlogHeader = styled.div`
  padding: ${({ theme }) => theme.spacers[24]} 0
    ${({ theme }) => theme.spacers[48]};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes[64]};
    max-width: ${({ theme }) => theme.sizes.maxWidth};
    margin-top: ${({ theme }) => theme.spacers[32]};
    margin-bottom: 0;

    @media screen and (max-width: 960px) {
      font-size: ${({ theme }) => theme.fontSizes[32]};
    }
  }
`;

export async function getStaticPaths() {
  const paths = blogSlugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: // TODO: find getStaticProps type
GetStaticPropsContext<{ slug: string }>) {
  const { frontmatter, code, matter } =
    await bundleMDXWithOptions<BlogFrontmatter>(
      "blog",
      blogFiles.find((fileName) => fileName.startsWith(params?.slug ?? ""))!
    );

  return {
    props: {
      frontmatter,
      code,
      matter,
    },
  };
}

export default BlogPost;
