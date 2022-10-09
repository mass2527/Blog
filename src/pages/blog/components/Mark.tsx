import styled from "styled-components";

const Mark = styled.mark`
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.violet2};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.violet4};
  color: ${({ theme }) => theme.colors.violet12};
  padding: ${({ theme }) => theme.spacers[24]};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
  border-radius: ${({ theme }) => theme.radiuses[8]};
`;

export default Mark;
