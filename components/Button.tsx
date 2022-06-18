import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "crimson" | "red" | "teal" | "yellow" | "blue";
type ButtonVariant = "primary" | "outline" | "link";

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
        color: ${colors[`${$color}11`]};

        &:hover {
          background-color: ${colors[`${$color}5`]};
        }
        &:active {
          background-color: ${colors[`${$color}6`]};
        }
        &:disabled {
          background-color: ${colors.gray4};
          color: ${colors.gray11};
        }
      `,
      outline: css`
        background-color: ${colors[`${$color}1`]};
        border: 1px solid ${colors[`${$color}7`]};
        color: ${colors[`${$color}11`]};

        &:hover {
          border: 1px solid ${colors[`${$color}8`]};
        }
        &:active {
          border: 1px solid ${colors[`${$color}9`]};
        }
        &:disabled {
          background-color: ${colors.gray1};
          border: 1px solid ${colors.gray7};
          color: ${colors.gray11};
        }
      `,
      link: css`
        color: ${({ theme }) => theme.colors.gray11};
        &:hover {
          color: ${({ theme }) => theme.colors.gray12};
        }
      `,
    }[$variant])};
`;

export default Button;
