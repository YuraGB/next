import type { TFindAllTales } from "@/server/actions/types";
import Image from "next/image";
import React, { type ReactNode } from "react";

const Slide = ({ item }: { item: TFindAllTales }): ReactNode => {
  return (
    <section className={"flex flex-col overflow-x-hidden bg-gray-100 shadow-lg"}>
      <div className={"min-h-[100px]"}>
        <Image
          src={item.mainImage}
          alt={item.title}
          height={142}
          width={300}
          loading={"lazy"}
          className={"h-auto w-[500px]"}
        />
      </div>
      <span
        slot="container-start"
        className={
          "strong flex min-h-[60px] items-center justify-center px-2 align-middle text-[16px] text-gray-900"
        }
      >
        {item.title}
      </span>
      <span
        slot="container-end"
        className={"line-clamp-3 h-[71px] px-2 py-1 text-[14px] text-foreground"}
      >
        {item.shortDescription}
      </span>
      <div className={"flex justify-end border-t-1 border-l-gray-500 py-2"}>
        <span slot="wrapper-start text" className={"px-2 text-[12px] text-gray-900"}>
          {item.createdAt.toLocaleString()}
        </span>
      </div>
    </section>
  );
};

export default Slide;
