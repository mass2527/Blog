import { css } from 'styled-components';

import React from 'react';

import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import SEO from '@/components/SEO';
import { Heading } from '@/components/Typography';
import { bundleMDXWithOptions } from '@/utils/bundle';
import { projectFiles, ProjectFrontmatter } from '@/utils/contents';

import MDXContent from '../blog/components/MDXContent';

function ProjectDetailPage({ frontmatter, code }: InferGetStaticPropsType<typeof getStaticProps>) {
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
            PROJECT
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
  const projects = await Promise.all(
    projectFiles.map(async fileName => {
      const { frontmatter, slug } = await bundleMDXWithOptions<ProjectFrontmatter>('project', fileName);

      return { frontmatter, slug };
    })
  );
  const paths = projects.map(({ slug }) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const projectFile = projectFiles.find(fileName => fileName.includes(params?.slug!))!;

  const { frontmatter, code, matter } = await bundleMDXWithOptions<ProjectFrontmatter>('project', projectFile);

  return {
    props: { frontmatter, code, matter },
  };
}

export default ProjectDetailPage;
