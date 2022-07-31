import styled from "styled-components";

import React, { ReactNode } from "react";

function Pre({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.pre`
  box-sizing: border-box;
  overflow: auto;
  white-space: pre;

  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: ${({ theme }) => theme.radiuses[8]};
  padding: ${({ theme }) => theme.spacers[24]};

  font-family: Fira Mono, monospace;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: ${({ theme }) => theme.fontSizes[24]};
  color: ${({ theme }) => theme.colors.gray12};

  & > code {
    display: block;
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

  .token.deleted:not(.prefix) {
    color: ${({ theme }) => theme.colors.red11};
  }

  .token.inserted:not(.prefix) {
    color: ${({ theme }) => theme.colors.teal11};
  }

  .token.deleted.prefix,
  .token.inserted.prefix {
    user-select: none;
  }
`;

export default Pre;
