import { useEffect } from 'react';

interface RegisterLinkProps {
  id: string;
  index: string;
  href?: string;
}

function RegisterLink({ id, index, href }: RegisterLinkProps) {
  const isExternal = href?.startsWith('http');

  useEffect(() => {
    const codeBlock = document.getElementById(id);
    if (!codeBlock) return;

    const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
    const target = allHighlightWords[Number(index) - 1];
    if (!target) return;

    target.replaceWith(
      Object.assign(document.createElement('a'), {
        href,
        innerHTML: target.innerHTML,
        className: target.className,
        ...(isExternal ? { target: '_blank', rel: 'noopener' } : {}),
      })
    );
  }, [id, index, href, isExternal]);

  return null;
}

export default RegisterLink;
