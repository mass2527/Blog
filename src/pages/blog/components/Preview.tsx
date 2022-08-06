import styled from "styled-components";

import { ReactNode } from "react";

function Preview({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.mauve7};
  border-radius: ${({ theme }) => theme.radiuses[8]};
  padding: ${({ theme }) => theme.spacers[24]};
`;

export default Preview;
