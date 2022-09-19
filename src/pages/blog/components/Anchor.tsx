import React, { ReactNode } from "react";

function Anchor({ children, href }: { children?: ReactNode; href?: string }) {
  const isInternalLink = href?.startsWith("#");
  const attributes = isInternalLink
    ? undefined
    : { target: "_blank", rel: "noreferrer" };

  return (
    <a href={href} {...attributes}>
      {children}
    </a>
  );
}

export default Anchor;
