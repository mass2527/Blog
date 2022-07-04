import styled from "styled-components";

import { ReactNode } from "react";

function GlobalMain({ children }: { children: ReactNode }) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  min-height: calc(100vh - 65px);

  display: grid;
  grid-template-columns:
    1fr min(
      ${({ theme }) => theme.sizes.maxWidth},
      calc(100% - ${({ theme }) => theme.spacers[16]} * 2)
    )
    1fr;
  column-gap: ${({ theme }) => theme.spacers[16]};

  & > * {
    grid-column: 2;
  }
`;

export default GlobalMain;
