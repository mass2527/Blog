import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeaderWrapper>
        <Header>
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
        </Header>
      </HeaderWrapper>
      {children}
    </div>
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
  display: flex;
  gap: ${({ theme }) => theme.spacers[16]};
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacers[24]};

  a {
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }
`;

export default GlobalLayout;
