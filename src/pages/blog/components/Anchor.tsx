import React, { ReactNode } from "react";

import Link from "next/link";

type LinkKind = "external" | "internal(same page)" | "internal(aother page)";

function Anchor({ children, href }: { children?: ReactNode; href?: string }) {
  if (!href) {
    throw new Error(`<a>${children}</a>의 href가 입력되지 않았습니다.`);
  }

  let linkKind: LinkKind;
  if (href.startsWith("https://")) {
    linkKind = "external";
  } else if (href.startsWith("#")) {
    linkKind = "internal(same page)";
  } else {
    linkKind = "internal(aother page)";
  }

  if (linkKind === "internal(aother page)") {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }

  const attributes =
    linkKind === "external"
      ? { target: "_blank", rel: "noreferrer" }
      : undefined;

  return (
    <a href={href} {...attributes}>
      {children}
    </a>
  );
}

export default Anchor;
