import { useCallback, useRef } from "react";

const useDebouncer = (func, delay = 0) => {
  const ref = useRef({ id: 0 });
  ref.current.func = func;

  const debouncer = useCallback((...args) => {
    ref.current.promise = new Promise((resolve, reject) => {
      // Set resolve and reject to current ref
      ref.current.resolve = resolve;
      ref.current.reject = reject;
    })

    // Clear old timeout if one exists
    if (ref.current.timeout) {
      clearTimeout(ref.current.timeout);
    }

    ref.current.timeout = setTimeout(async () => {
      ref.current.timeout = undefined;

      // Increment id when the async request goes out
      const id = ref.current.id + 1;

      ref.current.id = id;

      const checkLatest = () => id === ref.current.id;

      try {
        const response = await ref.current.func(...args);

        if (checkLatest()) {
          ref.current.resolve(response);
        }
      } catch (err) {
        if (checkLatest()) {
          ref.current.reject(err);
        }
      }
    }, delay);

    return ref.current.promise;
  },
    [delay, ref.current.resolve]
  );

  return debouncer;
}

export default useDebouncer;