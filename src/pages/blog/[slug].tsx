import { getMDXComponent } from "mdx-bundler/client";
import rangeParser from "parse-numeric-range";
import styled from "styled-components";

import { useEffect, useMemo, useRef } from "react";

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import Pre from "@/components/Pre";
import ResponsiveIFrame from "@/components/ResponsiveIFrame";
import {
  blogFilePaths,
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
        <BlogMDXContent
          components={{
            ResponsiveIFrame,
            pre: Pre,
            code: ({ children, id, collapsible }) => {
              const isCollapsible = typeof collapsible !== "undefined";
              const content = <code id={id}>{children}</code>;

              if (isCollapsible) {
                return <details>{content}</details>;
              }

              return content;
            },
            H: ({ id, index, ...props }) => {
              const triggerRef = useRef<HTMLElement>(null);

              useEffect(() => {
                const trigger = triggerRef.current;

                const codeBlock = document.getElementById(id);
                if (!codeBlock) return;

                const allHighlightWords =
                  codeBlock.querySelectorAll(".highlight-word");
                const targetIndex = rangeParser(index).map((i) => i - 1);
                if (Math.max(...targetIndex) >= allHighlightWords.length)
                  return;

                const addClass = () =>
                  targetIndex.forEach((i) =>
                    allHighlightWords[i].classList.add("on")
                  );
                const removeClass = () =>
                  targetIndex.forEach((i) =>
                    allHighlightWords[i].classList.remove("on")
                  );

                trigger?.addEventListener("mouseenter", addClass);
                trigger?.addEventListener("mouseleave", removeClass);

                return () => {
                  trigger?.removeEventListener("mouseenter", addClass);
                  trigger?.removeEventListener("mouseleave", removeClass);
                };
              }, [id, index]);

              return <code ref={triggerRef} {...props} />;
            },
            RegisterLink: ({ id, index, href }) => {
              const isExternal = href.startsWith("http");

              useEffect(() => {
                const codeBlock = document.getElementById(id);
                if (!codeBlock) return;

                const allHighlightWords =
                  codeBlock.querySelectorAll(".highlight-word");
                const target = allHighlightWords[index - 1];
                if (!target) return;

                target.replaceWith(
                  Object.assign(document.createElement("a"), {
                    href,
                    innerHTML: target.innerHTML,
                    className: target.className,
                    ...(isExternal
                      ? { target: "_blank", rel: "noopener" }
                      : {}),
                  })
                );
              }, [id, index, href, isExternal]);

              return null;
            },
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
