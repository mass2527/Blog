import React from "react";

import { InferGetStaticPropsType } from "next";

import ContentCard from "@/components/ContentCard";
import Page from "@/components/Page";
import { Flex } from "@/layouts/Flex";
import { bundleMDXWithOptions } from "@/utils/bundle";
import {
  getFormattedCategory,
  snippetFiles,
  SnippetFrontmatter,
} from "@/utils/contents";

function SnippetPage({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page
      title="Snippet"
      description="개별 문제에 대해 재사용 가능한 소스 코드"
    >
      <Flex as="ul" flexDirection="column" gap={32}>
        {snippets.map(({ frontmatter, slug }) => {
          return (
            <ContentCard
              key={frontmatter.title}
              href={`/snippet/${frontmatter.category}/${slug}`}
              title={frontmatter.title}
              description={frontmatter.description}
            />
          );
        })}
      </Flex>
    </Page>
  );
}

export async function getStaticProps() {
  const snippets = (
    await Promise.all(
      snippetFiles.map(async (fileName) => {
        const { frontmatter, slug } =
          await bundleMDXWithOptions<SnippetFrontmatter>("snippet", fileName);

        return {
          frontmatter: {
            ...frontmatter,
            category: getFormattedCategory(frontmatter.category),
          },
          slug,
        };
      })
    )
  ).sort(
    (current, next) =>
      new Date(next.frontmatter.publishedAt).getTime() -
      new Date(current.frontmatter.publishedAt).getTime()
  );

  return {
    props: {
      snippets,
    },
  };
}

export default SnippetPage;
