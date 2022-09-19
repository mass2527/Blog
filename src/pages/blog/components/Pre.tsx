import styled from "styled-components";

const Pre = styled.pre`
  box-sizing: border-box;
  overflow: auto;
  white-space: pre;

  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.mauve6};
  border-radius: ${({ theme }) => theme.radiuses[8]};
  padding: ${({ theme }) => theme.spacers[24]};

  font-family: Söhne Mono, menlo, monospace;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: ${({ theme }) => theme.fontSizes[24]};

  & > code {
    display: block;
  }

  background-color: transparent;
  color: ${({ theme }) => theme.colors.mauve12};

  .token.parameter {
    color: ${({ theme }) => theme.colors.mauve12};
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
    color: ${({ theme }) => theme.colors.cyan11};
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
    color: ${({ theme }) => theme.colors.mauve10};
  }

  .token.deleted:not(.prefix) {
    color: ${({ theme }) => theme.colors.red11};
  }

  .token.inserted:not(.prefix) {
    color: ${({ theme }) => theme.colors.cyan11};
  }

  .highlight-word,
  .highlight-word * {
    border-radius: ${({ theme }) => theme.radiuses[2]};
    background-color: ${({ theme }) => theme.colors.violet3};
    color: ${({ theme }) => theme.colors.violet11} !important;
    display: inline-block;

    &.on {
      background-color: ${({ theme }) => theme.colors.violet5};
    }
  }

  .highlight-line[data-highlighted="false"],
  .highlight-line[data-highlighted="false"] * {
    color: ${({ theme }) => theme.colors.mauve10};
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
