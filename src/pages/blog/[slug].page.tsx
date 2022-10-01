import { getMDXComponent } from "mdx-bundler/client";
import styled from "styled-components";

import { useMemo } from "react";

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import SEO from "@/components/SEO";
import TimeInfo from "@/components/TimeInfo";
import Pre from "@/pages/blog/components/Pre";
import ResponsiveIFrame from "@/pages/blog/components/ResponsiveIFrame";
import {
  blogFilePaths,
  blogSlugs,
  BundleMDXResult,
  bundleMDXWithOptions,
} from "@/utils/blog";

import Anchor from "./components/Anchor";
import BlockQuote from "./components/BlockQuote";
import Code from "./components/Code";
import Highlight from "./components/Highlight";
import Live from "./components/Live";
import Mark from "./components/Mark";
import Preview from "./components/Preview";
import RegisterLink from "./components/RegisterLink";

const BlogPost = ({
  frontmatter,
  code,
  matter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const BlogMDXContent = useMemo(() => getMDXComponent(code), [code]);

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
      <BlogContentWrapper>
        <BlogMDXContent
          components={{
            ResponsiveIFrame,
            pre: Pre,
            Live,
            code: Code,
            Highlight,
            RegisterLink,
            Preview,
            blockquote: BlockQuote,
            a: Anchor,
            Mark,
          }}
        />
      </BlogContentWrapper>
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

const BlogContentWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacers[48]};

  h2 {
    margin-top: ${({ theme }) => theme.spacers[48]};
    margin-bottom: ${({ theme }) => theme.spacers[24]};
  }

  h3 {
    margin-top: ${({ theme }) => theme.spacers[32]};
    margin-bottom: ${({ theme }) => theme.spacers[16]};
  }

  ul {
    list-style-type: circle;
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.spacers[16]};

    > li {
      margin-bottom: ${({ theme }) => theme.spacers[8]};
    }
  }

  ol > li {
    list-style: decimal;
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
  const { frontmatter, code, matter } = await bundleMDXWithOptions(
    blogFilePaths.find((path) => path.startsWith(params?.slug!))!
  );

  return {
    props: {
      frontmatter,
      code,
      matter,
    } as Pick<BundleMDXResult, "frontmatter" | "code" | "matter">,
  };
}

export default BlogPost;
