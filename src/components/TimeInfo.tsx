// @ts-ignore
import calculateReadingTime from "reading-time/lib/reading-time";

import React from "react";

import { Frontmatter } from "@/utils/blog";

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
      <time dateTime={publishedAt}>{publishedAt.replace(/-/g, ". ")} —</time>
      <Text as="span" fontSize={14} color="mauve11">
        {" "}
        {readingTime}분
      </Text>
    </div>
  );
}

export default TimeInfo;
