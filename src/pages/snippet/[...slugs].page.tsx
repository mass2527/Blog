import { css } from 'styled-components';

import React from 'react';

import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import SEO from '@/components/SEO';
import { Heading } from '@/components/Typography';
import { bundleMDXWithOptions } from '@/utils/bundle';
import { getFormattedCategory, snippetFiles, SnippetFrontmatter } from '@/utils/contents';

import MDXContent from '../blog/components/MDXContent';

function SnippetDetailPage({ frontmatter, code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div>
        <div
          css={css`
            padding-top: ${({ theme }) => theme.spacers[16]};
          `}
        >
          <Heading as="h1" textAlign="center" fontSize={16} color="crimson11" fontWeight={500}>
            SNIPPET
          </Heading>
          <Heading
            textAlign="center"
            css={`
              margin-top: 0;
            `}
          >
            {frontmatter.title}
          </Heading>
        </div>
        <MDXContent code={code} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const snippets = await Promise.all(
    snippetFiles.map(async fileName => {
      const { frontmatter, slug } = await bundleMDXWithOptions<SnippetFrontmatter>('snippet', fileName);

      return { frontmatter, slug };
    })
  );
  const paths = snippets.map(({ frontmatter, slug }) => {
    const { category } = frontmatter;
    const formattedCategory = getFormattedCategory(category);

    return {
      params: { slugs: [formattedCategory, slug] },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slugs: string[] }>) {
  const slugs = params?.slugs ?? [];
  const snippetFile = snippetFiles.find(fileName => fileName.includes(slugs[1]))!;

  const { frontmatter, code, matter } = await bundleMDXWithOptions<SnippetFrontmatter>('snippet', snippetFile);

  return {
    props: { frontmatter, code, matter },
  };
}

export default SnippetDetailPage;
