"use client";
/* eslint-disable */
import React from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Pages } from "@/utils/pages";
import placeholder from "@/assets/placeholder.webp";
import RatingComponent from "@/modules/rating/Rating";
import CreatedAt from "@/app/[locale]/fairyTales/modules/components/taleItem/CreatedAt";
import { type TFindAllTales } from "@/server/actions/types";

const TaleItem = ({ tale }: { tale: TFindAllTales }): React.ReactNode | null => {
  const router = useRouter();

  if (!tale) {
    return null;
  }

  const { id, title, categoryTale, mainImage, createdAt, shortDescription, rating } = tale;

  // eslint-disable-next-line no-shadow
  const onClick = (id: string): void => {
    if (id) {
      router.push(`${Pages.FAIRY_TALES}/${id}`, { scroll: true });
    }
  };

  return (
    <Card className="w-full rounded-[0]" isPressable isBlurred isHoverable>
      <CardHeader
        className="relative flex h-[300px] w-full flex-col items-start gap-3 overflow-hidden rounded-[0] p-0"
        onClick={() => {
          onClick(id);
        }}
      >
        <Image
          alt="nextui logo"
          height={200}
          src={mainImage ? mainImage : placeholder}
          width={600}
          className={"absolute left-0 top-0 h-[300px] min-h-full w-full object-cover"}
        />
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="left-0 top-0 flex max-h-[50%] w-full max-w-[100%] flex-col sm:max-w-[50%]">
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <p className="text-md color-inherit relative bottom-0 z-10 flex h-auto w-full items-center overflow-hidden rounded-b-large border-t-1 border-default-600 bg-black/40 p-3 font-['cinzel_decorativeregular'] text-[22px] text-amber-50 subpixel-antialiased backdrop-blur backdrop-saturate-150 dark:border-default-100">
            {title}
          </p>
        </div>
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="button-[50%] left-6 mt-3 flex h-[50%] w-full max-w-[50%] flex-col items-start">
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <p className="color-inherit relative line-clamp-4 items-center p-0 pl-4 text-left font-['cormorant_it'] text-[18px]  italic text-amber-50 subpixel-antialiased  backdrop-blur ">
            {shortDescription}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardFooter
        className={
          "flex justify-between rounded-[0] border-t-1 border-default-600 bg-white p-2 px-6 text-gray-700 sm:p-3 dark:border-default-100"
        }
      >
        <div className={"flex flex-col items-start justify-start"}>
          <p>Category: {categoryTale.name}</p>
          <CreatedAt createdAt={createdAt} />
        </div>

        <div className={"relative"}>
          <div className={"absolute size-full [z-index:1]"} />
          <RatingComponent rating={rating} taleId={id} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default React.memo(TaleItem);
