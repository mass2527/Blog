import { css } from 'styled-components';

import { ReactNode } from 'react';

import Link from 'next/link';

import Card from './Card';
import { Heading, Text } from './Typography';

function ContentCard({
  href,
  title,
  categories,
  description,
  footer,
}: {
  href: string;
  title: string;
  categories?: string[];
  description: string;
  footer?: ReactNode;
}) {
  return (
    <Card as="li">
      <Link href={href}>
        <a>
          <article
            css={css`
              padding: ${({ theme }) => theme.spacers[16]};
            `}
          >
            <Heading
              css={css`
                @media screen and (min-width: 960px) {
                  font-size: ${({ theme }) => theme.fontSizes[32]};
                }
              `}
            >
              {title}
            </Heading>
            <Text>{description}</Text>
            {categories && categories.length > 0 && (
              <ul
                css={css`
                  font-size: ${({ theme }) => theme.fontSizes[14]};
                  color: ${({ theme }) => theme.colors.mauve11};
                `}
              >
                {categories.map(category => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            )}
            {footer}
          </article>
        </a>
      </Link>
    </Card>
  );
}

export default ContentCard;
