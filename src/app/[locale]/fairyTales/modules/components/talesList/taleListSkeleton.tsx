"use client";
import React, { type ReactNode } from "react";
import TaleItemSkeleton from "@/app/[locale]/fairyTales/modules/components/taleItem/taleItemSkeleton";

const TalesListSkeleton = (): ReactNode => {
  return (
    <section className="grid w-full grid-cols-1 justify-start gap-3 lg:grid-cols-2">
      {Array(6)
        .fill(1)
        .map((item: number, index) => item + index)
        .map((item) => (
          // eslint-disable-next-line react/no-array-index-key
          <TaleItemSkeleton key={item} />
        ))}
    </section>
  );
};

export default TalesListSkeleton;
