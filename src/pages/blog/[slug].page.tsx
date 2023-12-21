import styled, { css } from 'styled-components';
import Toastify from 'toastify-js';
import { Share1Icon } from '@radix-ui/react-icons';

import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import Button from '@/components/Button';
import SEO from '@/components/SEO';
import TimeInfo from '@/components/TimeInfo';
import { useClipboard } from '@/hooks/useClipboard';
import { screenReaderOnly } from '@/styles/utils';
import { bundleMDXWithOptions } from '@/utils/bundle';
import { blogFiles, BlogFrontmatter, blogSlugs } from '@/utils/contents';

import MDXContent from './components/MDXContent';

const BlogPost = ({ frontmatter, code, matter }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [, copy] = useClipboard();

  const shareArticle = async () => {
    const url = location.href;

    if (navigator.share) {
      try {
        navigator.share({
          title: frontmatter.title,
          text: frontmatter.summary,
          url,
        });
        return;
      } catch (error) {
        console.error('Error Sharing', error);
      }
    }

    try {
      await copy(url);
      Toastify({
        text: '링크가 복사되었습니다.',
        position: 'center',
        style: {
          background: '#000',
        },
      }).showToast();
    } catch (error) {
      console.error('Error Clipboard', error);
    }
  };

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.summary} />
      <BlogHeader>
        {/* TODO: add category */}
        <TimeInfo publishedAt={frontmatter.publishedAt} content={matter.content} />
        <h1>{frontmatter.title}</h1>
      </BlogHeader>
      <MDXContent code={code} />
      <div
        css={css`
          position: fixed;
          inset: auto ${({ theme }) => theme.spacers[16]} ${({ theme }) => theme.spacers[48]} auto;
        `}
      >
        <Button
          css={css`
            display: flex;
            gap: ${({ theme }) => theme.spacers[4]};

            @media screen and (max-width: 1200px) {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          `}
          onClick={shareArticle}
        >
          <Share1Icon aria-hidden />
          <span
            css={`
              @media screen and (max-width: 1200px) {
                ${screenReaderOnly};
              }
            `}
          >
            아티클 공유하기
          </span>
        </Button>
      </div>
    </>
  );
};

const BlogHeader = styled.div`
  padding: ${({ theme }) => theme.spacers[24]} 0 ${({ theme }) => theme.spacers[48]};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes[48]};
    max-width: ${({ theme }) => theme.sizes.maxWidth};
    margin-top: ${({ theme }) => theme.spacers[32]};
    margin-bottom: 0;

    @media screen and (max-width: 960px) {
      font-size: ${({ theme }) => theme.fontSizes[32]};
    }
  }
`;

export async function getStaticPaths() {
  const paths = blogSlugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: // TODO: find getStaticProps type
GetStaticPropsContext<{ slug: string }>) {
  const { frontmatter, code, matter } = await bundleMDXWithOptions<BlogFrontmatter>(
    'blog',
    blogFiles.find(fileName => fileName.startsWith(params?.slug ?? ''))!
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
