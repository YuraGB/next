// app/components/ThemeSwitcher.tsx
"use client";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";
import { memo, type ReactNode, useEffect, useState } from "react";
import ImageSwitcher from "@/components/themeSwitcher/ImageSwitcher";
import { Skeleton } from "@nextui-org/skeleton";

const ThemeSwitcher = (): ReactNode => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = theme === "light";

  return (
    <div className={"mr-2 flex items-center"}>
      <Button
        onClick={() => {
          setTheme(isLight ? "dark" : "light");
        }}
        isIconOnly={true}
        variant={"shadow"}
      >
        {mounted ? (
          <ImageSwitcher theme={theme} />
        ) : (
          <Skeleton
            style={{
              width: "40px",
              height: "40px",
            }}
            className={"rounded-[12px]"}
          />
        )}
      </Button>
    </div>
  );
};

export default memo(ThemeSwitcher);
