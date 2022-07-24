import styled, { CSSProperties } from "styled-components";

import { ReactNode } from "react";

import { Color } from "@/styles/theme";
import { TransientProps } from "@/utils/type";

interface BoxProps {
  bg?: Color | CSSProperties["backgroundColor"];
  children: ReactNode | ReactNode[];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

function Box({ bg = "transparent", width, height, children }: BoxProps) {
  return (
    <Wrapper $bg={bg} $width={width} $height={height}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<TransientProps<Omit<BoxProps, "children">>>`
  background-color: ${({ theme, $bg }) => {
    if (typeof $bg === "undefined") return;
    return $bg in theme.colors ? theme.colors[$bg as Color] : $bg;
  }};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export default Box;
