import { css } from "styled-components";

function HorizontalLine() {
  return (
    <hr
      css={css`
        border: 0;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.mauve6};
      `}
    />
  );
}

export default HorizontalLine;
