import styled, { CSSProperties } from "styled-components";

import { spacers } from "@/styles/theme";

import { Box } from "./Box";

export const Flex = styled(Box)<{
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: keyof typeof spacers;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ theme, gap }) => gap && theme.spacers[gap]};
`;
