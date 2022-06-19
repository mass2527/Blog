import { useEffect, useState } from "react";
import useIsFirstRender from "./useIsFirstRender";

const getMatches = (mediaQueryString: string) =>
  typeof window === "undefined"
    ? false
    : window.matchMedia(mediaQueryString).matches;

function useMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState(() => getMatches(mediaQueryString));
  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    if (isFirstRender) {
      setMatches(getMatches(mediaQueryString));
    }

    const mediaQueryList = window.matchMedia(mediaQueryString);
    const handleMediaQueryListChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handleMediaQueryListChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryListChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaQueryString]);

  return matches;
}

export default useMediaQuery;
