import { useEffect, useRef, useState } from "react";

export const useBackgroundHook = (callback = () => undefined) => {
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
