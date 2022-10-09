import { css } from "styled-components";

import { ReactNode } from "react";

import Link from "next/link";

import Card from "./Card";
import { Heading, Text } from "./Typography";

function ContentCard({
  href,
  title,
  description,
  footer,
}: {
  href: string;
  title: string;
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
            {footer}
          </article>
        </a>
      </Link>
    </Card>
  );
}

export default ContentCard;
