"use client";
import { useEffect } from "react";
import start from "@/modules/BackgroundNight/util/canvasCalculations";
import { useBackgroundHook } from "@/modules/BacgroundHook/useBackgroundHook";

const BackgroundNight = () => {
  const handler = () => {
    start("dark");
  };
  const { ref } = useBackgroundHook(handler);

  useEffect(() => {
    window?.addEventListener("resize", handler);

    return () => {
      window?.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.5s ease-in-out",
        opacity: 0,
      }}
    >
      <canvas className={"fixed inset-0 size-full bg-transparent"} id={"canvas"}></canvas>
    </div>
  );
};

export default BackgroundNight;
