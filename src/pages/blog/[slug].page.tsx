import { getMDXComponent } from "mdx-bundler/client";
import styled from "styled-components";

import { useMemo } from "react";

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import Pre from "@/pages/blog/components/Pre";
import ResponsiveIFrame from "@/pages/blog/components/ResponsiveIFrame";
import {
  blogFilePaths,
  blogSlugs,
  BundleMDXResult,
  bundleMDXWithOptions,
} from "@/utils/blog";

import Code from "./components/Code";
import Highlight from "./components/Highlight";
import Preview from "./components/Preview";
import RegisterLink from "./components/RegisterLink";

const BlogPost = ({
  frontmatter,
  code,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const BlogMDXContent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <BlogHeader>
        {/* TODO: add category */}
        <time>{frontmatter.publishedAt}</time>
        <h1>{frontmatter.title}</h1>
      </BlogHeader>
      <BlogContentWrapper>
        <BlogMDXContent
          components={{
            ResponsiveIFrame,
            pre: Pre,
            code: Code,
            Highlight,
            RegisterLink,
            Preview,
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

  a {
    color: ${({ theme }) => theme.colors.mauve11};
    :hover {
      text-decoration-line: underline;
      text-decoration-thickness: 0.1px;
      text-underline-position: under;
    }
  }
  h2 > a {
    color: ${({ theme }) => theme.colors.mauve12};
  }

  li,
  p {
    > a {
      color: ${({ theme }) => theme.colors.blue11};
    }
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

  p > code {
    font-family: Söhne Mono, menlo, monospace;
    padding: 0px 3px 2px;
    background-color: ${({ theme }) => theme.colors.violet3};
    color: ${({ theme }) => theme.colors.violet11};
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
  const { frontmatter, code } = await bundleMDXWithOptions(
    blogFilePaths.find((path) => path.startsWith(params?.slug!))!
  );

  return {
    props: {
      frontmatter,
      code,
    } as Pick<BundleMDXResult, "frontmatter" | "code">,
  };
}

export default BlogPost;
