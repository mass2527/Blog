import styled from "styled-components";

import { ReactNode } from "react";

export function Preview({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray7};
  border-radius: ${({ theme }) => theme.radiuses[8]};
  padding: ${({ theme }) => theme.spacers[24]};
`;
