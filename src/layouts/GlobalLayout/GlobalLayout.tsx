import { ReactNode } from "react";

import GlobalFooter from "./GlobalFooter";
import GlobalHeader from "./GlobalHeader";
import GlobalMain from "./GlobalMain";

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <GlobalHeader />
      <GlobalMain>{children}</GlobalMain>
      <GlobalFooter />
    </div>
  );
}

export default GlobalLayout;
