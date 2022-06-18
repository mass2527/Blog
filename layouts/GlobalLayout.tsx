import { ReactNode } from "react";

import GlobalHeader from "./GlobalHeader";

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <GlobalHeader />
      {children}
    </div>
  );
}

export default GlobalLayout;
