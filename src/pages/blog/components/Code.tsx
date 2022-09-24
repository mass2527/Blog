import styled from "styled-components";

import React, { ReactNode } from "react";

interface CodeProps {
  children?: ReactNode;
  id?: string;
  collapsible?: boolean;
}

function Code({ children, id, collapsible }: CodeProps) {
  const isCollapsible = typeof collapsible !== "undefined";
  const content = <StyledCode id={id}>{children}</StyledCode>;

  if (isCollapsible) {
    return <details>{content}</details>;
  }

  return content;
}

const StyledCode = styled.code`
  p > & {
    font-family: Söhne Mono, menlo, monospace;
    padding: 0px 3px 2px;
    background-color: ${({ theme }) => theme.colors.violet3};
    color: ${({ theme }) => theme.colors.violet11};
  }
`;

export default Code;
