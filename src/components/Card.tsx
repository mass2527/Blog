import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteA2};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.whiteA4};
  backdrop-filter: blur(8px);
  border-radius: ${({ theme }) => theme.radiuses[8]};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.whiteA4};
  }
`;

export default Card;
