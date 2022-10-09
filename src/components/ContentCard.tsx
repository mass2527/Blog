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
          <article>
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
