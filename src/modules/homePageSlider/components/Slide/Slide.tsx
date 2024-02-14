import { type TaleWithRelations } from "@/server/actions/types";
import Image from "next/image";
import React, { type ReactNode } from "react";

const Slide = ({ item }: { item: TaleWithRelations }): ReactNode => {
  // eslint-disable-next-line
  const {
    title,
    shortDescription,
    createdAt,
    mainImage: { url },
  } = item;

  return (
    <section className={"flex flex-col overflow-x-hidden bg-gray-100 shadow-lg"}>
      <div className={"min-h-[100px]"}>
        <Image
          src={url}
          alt={title}
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
        {title}
      </span>
      <span
        slot="container-end"
        className={"line-clamp-3 h-[71px] px-2 py-1 text-[14px] text-foreground"}
      >
        {shortDescription}
      </span>
      <div className={"flex justify-end border-t-1 border-l-gray-500 py-2"}>
        <span slot="wrapper-start text" className={"px-2 text-[12px] text-gray-900"}>
          {createdAt.toLocaleString()}
        </span>
      </div>
    </section>
  );
};

export default Slide;
