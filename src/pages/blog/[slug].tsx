import { getMDXComponent } from "mdx-bundler/client";
import styled from "styled-components";

import { useMemo } from "react";

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import {
  blogSlugs,
  BundleMDXResult,
  bundleMDXWithOptions,
  slugToMDX,
} from "@/utils/blog";

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
        <BlogMDXContent />
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
  h2 {
    margin-top: ${({ theme }) => theme.spacers[48]};
    margin-bottom: ${({ theme }) => theme.spacers[24]};
  }
  h3 {
    margin-top: ${({ theme }) => theme.spacers[32]};
    margin-bottom: ${({ theme }) => theme.spacers[16]};
  }

  a {
    color: ${({ theme }) => theme.colors.gray11};
    :hover {
      text-decoration-line: underline;
      text-decoration-thickness: 0.1px;
      text-underline-position: under;
    }
  }
  h2 > a {
    color: ${({ theme }) => theme.colors.gray12};
  }
  p > a {
    color: ${({ theme }) => theme.colors.blue11};
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.spacers[16]};
    margin-left: ${({ theme }) => theme.spacers[24]};

    > li {
      margin-bottom: ${({ theme }) => theme.spacers[8]};
      &:before {
        position: absolute;
        margin-left: -15px;
        color: ${({ theme }) => theme.colors.gray11};
      }
    }
  }
  ul > li {
    &:before {
      content: "-";
    }
  }
  ol > li {
    list-style: decimal;
  }

  pre {
    padding: ${({ theme }) => theme.spacers[24]};
    border-radius: ${({ theme }) => theme.radiuses[4]};
    overflow-x: auto;

    background-color: transparent !important;
    border: 1px solid ${({ theme }) => theme.colors.gray6};
  }

  p > code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    color: ${({ theme }) => theme.colors.crimson11};

    &:before {
      content: "\`";
    }
    &:after {
      content: "\`";
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
  const { frontmatter, code } = await bundleMDXWithOptions(
    slugToMDX(params?.slug!)
  );

  return {
    props: {
      frontmatter,
      code,
    } as Pick<BundleMDXResult, "frontmatter" | "code">,
  };
}

export default BlogPost;
