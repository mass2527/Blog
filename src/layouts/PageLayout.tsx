import { css } from "styled-components";

import { ReactNode } from "react";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        padding: ${({ theme }) => theme.spacers[48]} 0;
      `}
    >
      {children}
    </div>
  );
}

export default PageLayout;
