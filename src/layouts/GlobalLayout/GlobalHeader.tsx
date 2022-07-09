import styled from "styled-components";

import Link from "next/link";

import { flexRow } from "@/styles/utils/flex";

function GlobalHeader() {
  return (
    <HeaderWrapper>
      <Header>
        <Links>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/personal">
            <a>Personal</a>
          </Link>
          <Link href="/snippets">
            <a>Snippets</a>
          </Link>
        </Links>
      </Header>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: ${({ theme }) => theme.sizes.headerHeight};
`;

const Header = styled.header`
  ${flexRow("space-between", "center")};
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  width: 100%;
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacers[24]};
  font-size: ${({ theme }) => theme.fontSizes[14]};
`;

const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacers[16]};
`;

export default GlobalHeader;
