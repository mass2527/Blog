import styled from "styled-components";

import Link from "next/link";

import { flexRow } from "@/styles/utils";

const LINKS = [
  { path: "/", name: "Home" },
  { path: "/blog", name: "Blog" },
  { path: "/personal", name: "Personal" },
  { path: "/snippet", name: "Snippet" },
];

function GlobalHeader() {
  return (
    <HeaderWrapper>
      <Header>
        <Links>
          {LINKS.map(({ path, name }) => (
            <Link key={name} href={path}>
              <a>{name}</a>
            </Link>
          ))}
        </Links>
      </Header>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  height: ${({ theme }) => theme.sizes.headerHeight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mauve6};
  z-index: 1;
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
