import rangeParser from "parse-numeric-range";

import { useEffect, useRef } from "react";

interface HighlightProps {
  id: string;
  index: string;
}

function Highlight({ id, index, ...props }: HighlightProps) {
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;

    const codeBlock = document.getElementById(id);
    if (!codeBlock) return;

    const allHighlightWords = codeBlock.querySelectorAll(".highlight-word");
    const targetIndex = rangeParser(index).map((i) => i - 1);
    if (Math.max(...targetIndex) >= allHighlightWords.length) return;

    const addClass = () =>
      targetIndex.forEach((i) => allHighlightWords[i].classList.add("on"));
    const removeClass = () =>
      targetIndex.forEach((i) => allHighlightWords[i].classList.remove("on"));

    trigger?.addEventListener("mouseenter", addClass);
    trigger?.addEventListener("mouseleave", removeClass);

    return () => {
      trigger?.removeEventListener("mouseenter", addClass);
      trigger?.removeEventListener("mouseleave", removeClass);
    };
  }, [id, index]);

  return <code ref={triggerRef} {...props} />;
}

export default Highlight;
