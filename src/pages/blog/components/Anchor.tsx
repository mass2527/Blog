import React, { ReactNode } from "react";

function Anchor({ children, href }: { children?: ReactNode; href?: string }) {
  const hasHash = href?.startsWith("#");
  const attributes = hasHash
    ? { target: "_self" }
    : { target: "_blank", rel: "noreferrer" };

  return (
    <a href={href} {...attributes}>
      {children}
    </a>
  );
}

export default Anchor;
