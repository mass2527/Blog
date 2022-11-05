import styled from 'styled-components';

import React, { ReactNode } from 'react';

import Link from 'next/link';

type LinkKind = 'external' | 'internal(same page)' | 'internal(aother page)';

function Anchor({ children, href }: { children?: ReactNode; href?: string }) {
  if (!href) {
    throw new Error(`<a>${children}</a>의 href가 입력되지 않았습니다.`);
  }

  let linkKind: LinkKind;
  if (href.startsWith('https://')) {
    linkKind = 'external';
  } else if (href.startsWith('#')) {
    linkKind = 'internal(same page)';
  } else {
    linkKind = 'internal(aother page)';
  }

  if (linkKind === 'internal(aother page)') {
    return (
      <Link href={href}>
        <StyledAnchor>{children}</StyledAnchor>
      </Link>
    );
  }

  const attributes = linkKind === 'external' ? { target: '_blank', rel: 'noreferrer' } : undefined;

  return (
    <StyledAnchor href={href} {...attributes}>
      {children}
    </StyledAnchor>
  );
}

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.colors.mauve11};
  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 0.1px;
    text-underline-position: under;
  }

  h2 > & {
    color: ${({ theme }) => theme.colors.mauve12};
  }

  li > && {
    color: ${({ theme }) => theme.colors.blue11};
  }
  p > && {
    color: ${({ theme }) => theme.colors.blue11};
  }
`;

export default Anchor;
