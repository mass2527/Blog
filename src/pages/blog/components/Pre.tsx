import styled from "styled-components";
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";

import { ReactNode, useRef } from "react";

import useClipboard from "@/hooks/useClipboard";

function Pre({ children }: { children?: ReactNode }) {
  const [isCopied, copy] = useClipboard();
  const preRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = () => {
    if (preRef.current === null) return;

    const codeElement =
      preRef.current.querySelector("code") ||
      preRef.current.querySelector("div[code]");
    if (codeElement === null) return;

    const code = codeElement.innerText.replace(/\n{2}/g, "\n");
    copy(code);
  };

  return (
    <StyledPre ref={preRef}>
      {children}

      <CopyButton
        type="button"
        aria-label={isCopied ? "복사 완료" : "코드를 클립보드에 복사"}
        onClick={copyToClipboard}
        isCopied={isCopied}
      >
        {isCopied ? <CheckIcon /> : <ClipboardIcon />}
      </CopyButton>
    </StyledPre>
  );
}

const StyledPre = styled.pre`
  position: relative;
  box-sizing: border-box;
  overflow: auto;
  white-space: pre;

  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.mauve6};
  border-radius: ${({ theme }) => theme.radiuses[8]};

  font-family: Söhne Mono, menlo, monospace;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: ${({ theme }) => theme.fontSizes[24]};

  & > code {
    display: block;
    margin: ${({ theme }) => theme.spacers[24]};
  }

  textarea {
    border-radius: ${({ theme }) => theme.radiuses[8]};
    outline-color: ${({ theme }) => theme.colors.blue8};
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

const CopyButton = styled.button<{ isCopied: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacers[16]};
  right: ${({ theme }) => theme.spacers[16]};
  width: 25px;
  height: 25px;
  padding: 0;
  opacity: 0;
  border: none;
  cursor: ${({ isCopied }) => isCopied && "not-allowed"};

  ${StyledPre}:hover & {
    opacity: 1;
    transition: all 150ms linear 0s;
  }

  &:hover {
    background-color: ${({ isCopied, theme: { colors } }) =>
      isCopied ? colors.whiteA5 : colors.whiteA4};
  }

  &:focus {
    opacity: 1;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.whiteA8},
      0 0 0 1px ${({ theme }) => theme.colors.whiteA8};
  }
`;

export default Pre;
