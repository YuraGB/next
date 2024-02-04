"use client";
import React, { type ReactNode, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import ScrollToTop from "react-scroll-to-top";
const BackgroundSwithcer = dynamic(
  () => import("@/components/BackgroundSwitcher/BackgroundSwithcer")
);

type Props = {
  children?: ReactNode | ReactNode[];
  additionalClasses?: string;
  showBackground?: boolean;
};

export default function PageWrapper({
  children,
  additionalClasses = "",
  showBackground = true,
}: Props): React.ReactNode {
  const wrapperClass = `${additionalClasses} relative m-auto mt-0 flex w-full max-w-7xl flex-col items-center bg-background-100 bg-opacity-50 pt-12 backdrop-blur-[5px] [grow:1] sm:backdrop-blur-[5px] md:p-24`;
  return (
    <React.Fragment>
      {" "}
      {showBackground ? (
        <Suspense fallback={null}>
          <BackgroundSwithcer />
        </Suspense>
      ) : null}
      <main className={wrapperClass}>
        {children}
        <Toaster />
      </main>
      <ScrollToTop smooth color="#6f00ff" />
    </React.Fragment>
  );
}
