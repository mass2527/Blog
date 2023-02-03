import React from 'react';

import { InferGetStaticPropsType } from 'next';

import ContentCard from '@/components/ContentCard';
import Page from '@/components/Page';
import { Flex } from '@/layouts/Flex';
import { bundleMDXWithOptions } from '@/utils/bundle';
import { projectFiles, ProjectFrontmatter } from '@/utils/contents';

function ProjectPage({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title="Project" description="프로젝트 저장소">
      <Flex as="ul" flexDirection="column" gap={32}>
        {projects.map(({ frontmatter, slug }) => {
          return (
            <ContentCard
              key={frontmatter.title}
              href={`/project/${slug}`}
              title={frontmatter.title}
              categories={frontmatter.category.split(',')}
              description={frontmatter.description}
            />
          );
        })}
      </Flex>
    </Page>
  );
}

export async function getStaticProps() {
  const projects = (
    await Promise.all(
      projectFiles.map(async fileName => {
        const { frontmatter, slug } = await bundleMDXWithOptions<ProjectFrontmatter>('project', fileName);

        return {
          frontmatter,
          slug,
        };
      })
    )
  ).sort(
    (current, next) =>
      new Date(next.frontmatter.publishedAt).getTime() - new Date(current.frontmatter.publishedAt).getTime()
  );

  return {
    props: {
      projects,
    },
  };
}

export default ProjectPage;
