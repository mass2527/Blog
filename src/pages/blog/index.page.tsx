import type { InferGetStaticPropsType } from 'next';

import ContentCard from '@/components/ContentCard';
import Page from '@/components/Page';
import TimeInfo from '@/components/TimeInfo';
import { Flex } from '@/layouts/Flex';
import { bundleMDXWithOptions } from '@/utils/bundle';
import { blogFiles, BlogFrontmatter } from '@/utils/contents';

const Blog = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page title="Blog" description="프론트엔드 엔지니어링">
      <Flex as="ul" flexDirection="column" gap={32}>
        {blogs.map(({ frontmatter, slug, matter }) => {
          return (
            <ContentCard
              key={frontmatter.title}
              href={`/blog/${slug}`}
              title={frontmatter.title}
              description={frontmatter.summary}
              footer={<TimeInfo publishedAt={frontmatter.publishedAt} content={matter.content} />}
            />
          );
        })}
      </Flex>
    </Page>
  );
};

export async function getStaticProps() {
  const blogs = (
    await Promise.all(
      blogFiles.map(async fileName => {
        const { frontmatter, slug, matter } = await bundleMDXWithOptions<BlogFrontmatter>('blog', fileName);

        return { frontmatter, slug, matter };
      })
    )
  )
    .filter(({ frontmatter }) => process.env.NODE_ENV === 'development' || frontmatter.published)
    .sort(
      (current, next) =>
        new Date(next.frontmatter.publishedAt).getTime() - new Date(current.frontmatter.publishedAt).getTime()
    );

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
