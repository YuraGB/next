import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const id: NodeJS.Timeout = setTimeout((): void => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
};
export default useDebounce;
