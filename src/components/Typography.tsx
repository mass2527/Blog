import styled, { CSSProperties } from "styled-components";

import React, { ElementType, ReactNode } from "react";

import { Color, fontSizes, fontWeights } from "@/styles/theme";

interface TypographyProps {
  as?: ElementType;
  fontSize?: keyof typeof fontSizes;
  fontWeight?: keyof typeof fontWeights;
  color?: Color;
  textAlign?: CSSProperties["textAlign"];
  children: ReactNode;
}

function Typography({
  as,
  fontSize = 16,
  fontWeight = 400,
  color = "mauve12",
  textAlign = "start",
  children,
}: TypographyProps) {
  return (
    <StyledTypography
      as={as}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $color={color}
      $textAlign={textAlign}
    >
      {children}
    </StyledTypography>
  );
}

const StyledTypography = styled.p<{
  $fontSize: keyof typeof fontSizes;
  $fontWeight: keyof typeof fontWeights;
  $color: Color;
  $textAlign: CSSProperties["textAlign"];
}>`
  font-size: ${({ $fontSize }) => fontSizes[$fontSize]};
  font-weight: ${({ $fontWeight }) => fontWeights[$fontWeight]};
  color: ${({ theme, $color }) => theme.colors[$color]};
  text-align: ${({ $textAlign }) => $textAlign};
`;

interface TextProps extends TypographyProps {
  as?:
    | "p"
    | "span"
    | "i"
    | "u"
    | "abbr"
    | "cite"
    | "del"
    | "strong"
    | "em"
    | "ins"
    | "kbd"
    | "mark"
    | "s"
    | "samp"
    | "sub"
    | "sup"
    | "time";
}
export function Text({ as = "p", ...props }: TextProps) {
  return <Typography as={as} {...props} />;
}

interface HeadingProps extends TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export function Heading({
  as = "h2",
  fontSize = 32,
  fontWeight = 700,

  ...props
}: HeadingProps) {
  return (
    <Typography
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    />
  );
}
