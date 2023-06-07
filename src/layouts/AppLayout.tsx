import styled from 'styled-components';

import React, { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

// import AudioPlayer from '@/components/AudioPlayer';
import { flexRow } from '@/styles/utils';

import { Flex } from './Flex';

const MENU_LINKS = [
  { path: '/', name: 'Home' },
  { path: '/blog', name: 'Blog' },
  { path: '/personal', name: 'Personal' },
  { path: '/project', name: 'Project' },
];

const EXTERNAL_LINKS = [
  { path: 'https://github.com/mass2527', name: 'Github' },
  { path: 'https://www.linkedin.com/in/%EB%8F%99%ED%98%B8-%EA%B9%80-733227200/', name: 'LinkedIn' },
];

function AppLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  return (
    <>
      <HeaderWrapper>
        <Header>
          <Links>
            {MENU_LINKS.map(({ path, name }) => {
              let isActive: boolean;
              if (pathname === '/') {
                isActive = pathname === path;
              } else {
                isActive = path !== '/' && pathname.startsWith(path);
              }

              return (
                <Link key={name} href={path}>
                  <Anchor isActive={isActive}>{name}</Anchor>
                </Link>
              );
            })}
          </Links>
        </Header>
      </HeaderWrapper>
      <Main>{children}</Main>
      <Flex>
        <Footer>
          {/* <AudioPlayer /> */}

          {EXTERNAL_LINKS.map(({ name, path }) => (
            <a key={name} href={path} target="_blank" rel="noreferrer">
              {name}
            </a>
          ))}
        </Footer>
      </Flex>
    </>
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
  ${flexRow('space-between', 'center')};
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

const Anchor = styled.a<{ isActive: boolean }>`
  position: relative;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.mauve12 : 'undefined')};
`;

const Main = styled.main`
  min-height: calc(100vh - 65px);

  display: grid;
  grid-template-columns:
    1fr min(${({ theme }) => theme.sizes.maxWidth}, calc(100% - ${({ theme }) => theme.spacers[16]} * 2))
    1fr;
  column-gap: ${({ theme }) => theme.spacers[16]};

  & > * {
    grid-column: 2;
  }
`;

const Footer = styled.footer`
  ${flexRow()};
  gap: ${({ theme }) => theme.spacers[8]};
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.mauve6};
  margin: auto;
  padding: ${({ theme }) => theme.spacers[24]};
  font-size: ${({ theme }) => theme.fontSizes[14]};
`;

export default AppLayout;
