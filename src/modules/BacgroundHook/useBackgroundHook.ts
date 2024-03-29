import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line
export const useBackgroundHook = (callback = () => {}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(function () {
      if (ref.current) {
        ref.current.style.opacity = "1";
      }
    }, 2);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      callback();
    }
  }, [callback, mounted]);

  return { mounted, ref };
};
