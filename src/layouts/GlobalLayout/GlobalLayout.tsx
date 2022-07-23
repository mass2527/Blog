import { ReactNode } from "react";

import GlobalHeader from "./GlobalHeader";
import GlobalMain from "./GlobalMain";

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <GlobalHeader />
      <GlobalMain>{children}</GlobalMain>
    </div>
  );
}

export default GlobalLayout;
