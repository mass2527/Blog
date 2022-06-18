import Link from "next/link";
import styled from "styled-components";
import { flexRow } from "styles/utils/flex";

function GlobalHeader() {
  return (
    <HeaderWrapper>
      <Header>
        <Links>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/tech">
            <a>Tech</a>
          </Link>
          <Link href="/personal">
            <a>Personal</a>
          </Link>
          <Link href="/snippets">
            <a>Snippets</a>
          </Link>
        </Links>
        <DarkModeSwitch type="button">1</DarkModeSwitch>
      </Header>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
  /* backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(0, 0, 0, 0.5); */
`;

const Header = styled.header`
  ${flexRow("space-between", "center")};
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacers[24]};
`;

const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacers[16]};

  a {
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }
`;

const DarkModeSwitch = styled.button``;

export default GlobalHeader;
