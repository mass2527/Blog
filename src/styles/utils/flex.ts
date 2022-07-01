import { css, CSSProperties } from 'styled-components';

const flex = (
  flexDirection: CSSProperties['flexDirection'],
  justifyContent: CSSProperties['justifyContent'] = 'normal',
  alignItems: CSSProperties['alignItems'] = 'normal'
) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
};

export const flexRow = (
  justifyContent?: CSSProperties['justifyContent'],
  alignItems?: CSSProperties['alignItems']
) => flex('row', justifyContent, alignItems);

export const flexColumn = (
  justifyContent?: CSSProperties['justifyContent'],
  alignItems?: CSSProperties['alignItems']
) => flex('column', justifyContent, alignItems);
