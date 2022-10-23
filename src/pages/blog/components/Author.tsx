import React from 'react';

function Author({ children }: { children: string }) {
  return (
    <p
      css={`
        padding-left: 38px;
        margin-top: -8px;
      `}
    >
      — {children}
    </p>
  );
}

export default Author;
