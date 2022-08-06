import React, { ReactNode } from "react";

interface CodeProps {
  children?: ReactNode;
  id?: string;
  collapsible?: boolean;
}

function Code({ children, id, collapsible }: CodeProps) {
  const isCollapsible = typeof collapsible !== "undefined";
  const content = <code id={id}>{children}</code>;

  if (isCollapsible) {
    return <details>{content}</details>;
  }

  return content;
}

export default Code;
