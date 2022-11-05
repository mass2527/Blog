import styled from 'styled-components';

const BlockQuote = styled.blockquote`
  border-left: 6px solid ${({ theme }) => theme.colors.violet9};
  margin-left: 0;
  padding: ${({ theme }) => theme.spacers[8]} ${({ theme }) => theme.spacers[32]};
  background-color: ${({ theme }) => theme.colors.violet2};
  width: 100%;
  box-sizing: border-box;

  > p {
    margin: 0;
  }
`;

export default BlockQuote;
