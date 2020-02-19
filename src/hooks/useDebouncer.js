import { useCallback, useRef } from "react";

const useDebouncer = (func, delay = 0) => {
  const ref = useRef({});
  ref.current.func = func;

  const debouncer = useCallback((...args) => {
    // Clear old timeout if one exists
    if (ref.current.timeout) {
      clearTimeout(ref.current.timeout);
    }

    ref.current.timeout = setTimeout(() => {
      ref.current.func(...args);
      ref.current.timeout = undefined;
    }, delay);
  },
    [delay]);

  return debouncer;
}

export default useDebouncer;