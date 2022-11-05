import styled, { css } from 'styled-components';

import React, { CSSProperties, ReactNode } from 'react';

import { Color, fontSizes, fontWeights } from '@/styles/theme';

interface TypographyProps {
  fontSize?: keyof typeof fontSizes;
  fontWeight?: keyof typeof fontWeights;
  color?: Color;
  textAlign?: CSSProperties['textAlign'];
  children: ReactNode;
}

const Typography = styled.p<TypographyProps>(
  ({ fontSize = 16, fontWeight = 400, color = 'mauve12', textAlign = 'start', theme }) => `
    font-size: ${fontSizes[fontSize]};
    font-weight: ${fontWeights[fontWeight]};
    color: ${theme.colors[color]};
    text-align: ${textAlign};
`
);

interface TextProps extends TypographyProps {
  as?:
    | 'p'
    | 'span'
    | 'i'
    | 'u'
    | 'abbr'
    | 'cite'
    | 'del'
    | 'strong'
    | 'em'
    | 'ins'
    | 'kbd'
    | 'mark'
    | 's'
    | 'samp'
    | 'sub'
    | 'sup'
    | 'time';
}
export function Text({ as = 'p', ...props }: TextProps) {
  return (
    <Typography
      css={css`
        margin-top: 0;
      `}
      as={as}
      {...props}
    />
  );
}

interface HeadingProps extends TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export function Heading({ as = 'h2', fontSize = 24, fontWeight = 700, ...props }: HeadingProps) {
  return (
    <Typography
      css={css`
        margin: 0 0 0.5em;
      `}
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    />
  );
}
