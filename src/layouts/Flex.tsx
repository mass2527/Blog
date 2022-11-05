import styled from 'styled-components';

import { CSSProperties } from 'react';

import { spacers } from '@/styles/theme';

import { Box } from './Box';

export const Flex = styled(Box)<{
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  gap?: keyof typeof spacers;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ theme, gap }) => gap && theme.spacers[gap]};
`;
