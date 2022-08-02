import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import React, { ReactNode } from "react";

const PRE_THEMES = ["blue", "pink"] as const;
type PreThemes = typeof PRE_THEMES[number];
interface PreProps {
  children?: ReactNode;
  theme?: PreThemes;
}

function Pre({ children, theme = "blue" }: PreProps) {
  if (!PRE_THEMES.includes(theme)) {
    throw new Error(
      `올바르지 않은 theme "${theme}"이(가) 입력되었습니다. 가능한 옵션: ${PRE_THEMES}`
    );
  }

  return <Wrapper $theme={theme}>{children}</Wrapper>;
}

const PRE_STYLES: Record<PreThemes, ReturnType<typeof css>> = {
  blue: css`
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.gray12};

    .highlight-word {
      background-color: ${({ theme }) => theme.colors.blue5};
    }

    .token.parameter {
      color: ${({ theme }) => theme.colors.gray12};
    }

    .token.tag,
    .token.class-name,
    .token.selector,
    .token.selector .class,
    .token.function {
      color: ${({ theme }) => theme.colors.blue11};
    }

    .token.attr-value,
    .token.class,
    .token.string,
    .token.number,
    .token.unit,
    .token.color {
      color: ${({ theme }) => theme.colors.teal11};
    }

    .token.attr-name,
    .token.keyword,
    .token.rule,
    .token.operator,
    .token.pseudo-class,
    .token.important {
      color: ${({ theme }) => theme.colors.blue11};
    }

    .token.punctuation,
    .token.module,
    .token.property {
      color: ${({ theme }) => theme.colors.blue11};
    }

    .token.comment {
      color: ${({ theme }) => theme.colors.gray11};
    }

    .token.deleted:not(.prefix) {
      color: ${({ theme }) => theme.colors.red11};
    }

    .token.inserted:not(.prefix) {
      color: ${({ theme }) => theme.colors.teal11};
    }
  `,
  pink: css`
    background-color: ${({ theme }) => theme.colors.pink2};
    color: ${({ theme }) => theme.colors.pink11};

    .highlight-word {
      background-color: ${({ theme }) => theme.colors.pink5};
    }

    .token.parameter {
      color: ${({ theme }) => theme.colors.gray12};
    }

    .token.tag,
    .token.class-name,
    .token.selector,
    .token.selector .class,
    .token.function {
      color: ${({ theme }) => theme.colors.blue11};
    }

    .token.attr-value,
    .token.class,
    .token.string,
    .token.number,
    .token.unit,
    .token.color {
      color: ${({ theme }) => theme.colors.violet11};
    }

    .token.attr-name,
    .token.keyword,
    .token.rule,
    .token.operator,
    .token.pseudo-class,
    .token.important {
      color: ${({ theme }) => theme.colors.blue11};
    }

    .token.punctuation,
    .token.module,
    .token.property {
      color: ${({ theme }) => theme.colors.pink11};
    }

    .token.comment {
      color: ${({ theme }) => theme.colors.gray11};
    }

    .token.deleted:not(.prefix) {
      color: ${({ theme }) => theme.colors.red11};
    }

    .token.inserted:not(.prefix) {
      color: ${({ theme }) => theme.colors.violet11};
    }
  `,
} as const;

const Wrapper = styled.pre<{ $theme: PreThemes }>`
  box-sizing: border-box;
  overflow: auto;
  white-space: pre;

  border-radius: ${({ theme }) => theme.radiuses[8]};
  padding: ${({ theme }) => theme.spacers[24]};

  font-family: Fira Mono, monospace;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: ${({ theme }) => theme.fontSizes[24]};

  & > code {
    display: block;
  }

  ${({ $theme }) => PRE_STYLES[$theme]};

  .highlight-word {
    padding: ${({ theme }) => theme.spacers[4]};
    border-radius: ${({ theme }) => theme.radiuses[4]};
  }

  .highlight-line[data-highlighted="false"],
  .highlight-line[data-highlighted="false"] * {
    color: ${({ theme }) => theme.colors.gray10};
  }

  .token.atapply .token:not(.rule):not(.important) {
    color: "inherit";
  }

  .language-shell .token:not(.comment) {
    color: "inherit";
  }

  .language-css .token.function {
    color: "inherit";
  }

  .token.deleted:not(.prefix),
  .token.inserted:not(.prefix) {
    display: block;
  }

  .token.deleted.prefix,
  .token.inserted.prefix {
    user-select: none;
  }
`;

export default Pre;
