import { useCallback, useEffect, useRef } from "react";

export function usePreservedCallback<
  // eslint-disable-next-line no-unused-vars
  Callback extends (...args: unknown[]) => unknown
>(callback: Callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: unknown[]) => {
    return callbackRef.current(...args);
  }, []) as Callback;
}
