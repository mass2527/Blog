import styled from "styled-components";

import React, { ElementType } from "react";

import { Color, fontSizes, fontWeights } from "@/styles/theme";

interface TypographyProps {
  as?: ElementType;
  fontSize?: keyof typeof fontSizes;
  fontWeight?: keyof typeof fontWeights;
  color?: Color;
  children: string;
}

function Typography({
  as,
  fontSize = 16,
  fontWeight = 400,
  color = "mauve12",
  children,
}: TypographyProps) {
  return (
    <StyledTypography
      as={as}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $color={color}
    >
      {children}
    </StyledTypography>
  );
}

const StyledTypography = styled.p<{
  $fontSize: keyof typeof fontSizes;
  $fontWeight: keyof typeof fontWeights;
  $color: Color;
}>`
  font-size: ${({ $fontSize }) => fontSizes[$fontSize]};
  font-weight: ${({ $fontWeight }) => fontWeights[$fontWeight]};
  color: ${({ theme, $color }) => theme.colors[$color]};
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
