"use client";
import React, { type ReactNode } from "react";
import TaleItemSkeleton from "@/app/[locale]/fairyTales/modules/components/taleItem/taleItemSkeleton";

const TalesListSkeleton = (): ReactNode => {
  return (
    <section className={"grid w-full grid-cols-1 justify-start gap-2"}>
      {Array(3)
        .fill(1)
        .map((item, index) => (
          <TaleItemSkeleton key={index} />
        ))}
    </section>
  );
};

export default TalesListSkeleton;
