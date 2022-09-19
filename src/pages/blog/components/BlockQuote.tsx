import styled from "styled-components";

const BlockQuote = styled.blockquote`
  border-left: 6px solid ${({ theme }) => theme.colors.violet9};
  margin-left: 0;
  padding-left: ${({ theme }) => theme.spacers[32]};
`;

export default BlockQuote;
