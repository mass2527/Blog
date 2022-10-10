import debounce from "lodash/debounce";

import { useEffect, useMemo } from "react";

import { usePreservedCallback } from "./usePreservedCallback";

// eslint-disable-next-line no-unused-vars
export function useDebounce<Callback extends (...args: unknown[]) => unknown>(
  callback: Callback,
  wait: number
) {
  const preservedCallback = usePreservedCallback(callback);

  const debouncedCallback = useMemo(() => {
    return debounce(preservedCallback, wait);
  }, [preservedCallback, wait]);

  useEffect(() => {
    return () => {
      debouncedCallback.cancel();
    };
  }, [debouncedCallback]);

  return debouncedCallback;
}
