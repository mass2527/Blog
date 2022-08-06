import styled, { css } from "styled-components";

import { ButtonHTMLAttributes } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "crimson" | "red" | "cyan" | "yellow" | "blue" | "mauve";
type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
}

function Button({
  type = "button",
  size = "medium",
  color = "crimson",
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      $size={size}
      $color={color}
      $variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  $size: ButtonSize;
  $color: ButtonColor;
  $variant: ButtonVariant;
}>`
  color: ${({ theme: { colors }, $color }) => colors[`${$color}11`]};
  padding: 0 ${({ theme }) => theme.spacers[16]};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
  word-break: keep-all;

  ${({ theme: { spacers, fontSizes }, $size }) =>
    ({
      small: css`
        height: ${spacers[32]};
        font-size: ${fontSizes[14]};
      `,
      medium: css`
        height: ${spacers[40]};
        font-size: ${fontSizes[14]};
      `,
      large: css`
        height: ${spacers[48]};
        font-size: ${fontSizes[16]};
      `,
    }[$size])};

  ${({ theme: { colors }, $color, $variant }) =>
    ({
      primary: css`
        background-color: ${colors[`${$color}4`]};

        &:hover {
          background-color: ${colors[`${$color}5`]};
        }
        &:active {
          background-color: ${colors[`${$color}6`]};
        }
        &:disabled {
          background-color: ${colors.mauve4};
          color: ${colors.mauve11};
        }
      `,
      outline: css`
        background-color: ${colors[`${$color}1`]};
        border: 1px solid ${colors[`${$color}7`]};

        &:hover {
          border: 1px solid ${colors[`${$color}8`]};
        }
        &:active {
          border: 1px solid ${colors[`${$color}9`]};
        }
        &:disabled {
          background-color: ${colors.mauve1};
          border: 1px solid ${colors.mauve7};
          color: ${colors.mauve11};
        }
      `,
      ghost: css`
        &:hover {
          color: ${({ theme }) => theme.colors.mauve12};
        }
      `,
    }[$variant])};
`;

export default Button;
