import styled from "styled-components";

const Mark = styled.mark`
  display: block;
  text-align: center;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.plum3},
    -15px 0 30px -15px ${({ theme }) => theme.colors.orange8},
    0 0 30px -15px ${({ theme }) => theme.colors.pink8},
    15px 0 30px -15px ${({ theme }) => theme.colors.violet8};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mauve12};
  padding: ${({ theme }) => theme.spacers[24]};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
  border-radius: ${({ theme }) => theme.radiuses[8]};
`;

export default Mark;
