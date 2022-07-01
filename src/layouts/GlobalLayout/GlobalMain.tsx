import { ReactNode } from "react";
import styled from "styled-components";

function GlobalMain({ children }: { children: ReactNode }) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  min-height: calc(100vh - 65px);
`;

export default GlobalMain;
