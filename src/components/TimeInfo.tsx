// @ts-ignore
import calculateReadingTime from "reading-time/lib/reading-time";
import { css } from "styled-components";

import React from "react";

import { Frontmatter } from "@/utils/bundle";

import { Text } from "./Typography";

function TimeInfo({
  publishedAt,
  content,
}: {
  publishedAt: Frontmatter["publishedAt"];
  content: string;
}) {
  const { minutes } = calculateReadingTime(content);
  const readingTime = Math.round(minutes);

  return (
    <div>
      <time
        css={css`
          font-size: ${({ theme }) => theme.fontSizes[14]};
          font-weight: ${({ theme }) => theme.fontWeights[400]};
          color: ${({ theme }) => theme.colors.mauve11};
        `}
        dateTime={publishedAt}
      >
        {publishedAt.replace(/-/g, ". ")} —
      </time>
      <Text as="span" fontSize={14} color="mauve11">
        {" "}
        {readingTime}분
      </Text>
    </div>
  );
}

export default TimeInfo;
