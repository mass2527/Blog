import { css } from 'styled-components';

import { CSSProperties } from 'react';

export const center = css`
  display: grid;
  place-items: center;
`;

function flex(
  flexDirection: CSSProperties['flexDirection'],
  justifyContent: CSSProperties['justifyContent'] = 'normal',
  alignItems: CSSProperties['alignItems'] = 'normal'
) {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
}

export function flexRow(justifyContent?: CSSProperties['justifyContent'], alignItems?: CSSProperties['alignItems']) {
  return flex('row', justifyContent, alignItems);
}

export function flexColumn(justifyContent?: CSSProperties['justifyContent'], alignItems?: CSSProperties['alignItems']) {
  return flex('column', justifyContent, alignItems);
}

// https://web.dev/hiding-and-updating-content/
export const screenReaderOnly = css`
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
