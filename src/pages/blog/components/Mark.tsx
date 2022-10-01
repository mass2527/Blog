import styled from "styled-components";

const Mark = styled.mark`
  display: block;
  text-align: center;
  background-color: transparent;
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.violet6};
  color: ${({ theme }) => theme.colors.mauve12};
  padding: ${({ theme }) => theme.spacers[24]};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
  border-radius: ${({ theme }) => theme.radiuses[8]};
`;

export default Mark;
