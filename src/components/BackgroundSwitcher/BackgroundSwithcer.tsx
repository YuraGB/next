"use client";
import { useTheme } from "next-themes";
import BackgroundNight from "@/modules/BackgroundNight/Canvas";
import BackgroundDay from "@/modules/BackgroundDay";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";

const BackgroundSwithcer = (): ReactNode => {
  const { theme } = useTheme();
  const pathname = usePathname();

  if (pathname.includes("admin")) {
    return null;
  }

  return theme === "dark" ? <BackgroundNight /> : <BackgroundDay />;
};

export default BackgroundSwithcer;
