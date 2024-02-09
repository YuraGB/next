"use client";
import React, { useMemo } from "react";
import Carousel from "@/components/carousel";
import { getAllFairyTales } from "@/server/actions/getAllFairyTales";
import { useQuery } from "@tanstack/react-query";
import type { TFindAllTales } from "@/server/actions/types";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

// server component
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const HomePageSlider = () => {
  const { data: slides } = useQuery({
    queryKey: ["allTales"],
    queryFn: () => getAllFairyTales(),
  });

  const items = useMemo(() => {
    if (slides?.length) {
      return slides
        .filter((e) => e.mainImage)
        .map((item: TFindAllTales) => {
          return (
            <SwiperSlide key={item.id}>
              <section className={"flex flex-col overflow-x-hidden bg-gray-100 shadow-lg"}>
                <div className={"min-h-[100px]"}>
                  <Image
                    src={item.mainImage}
                    alt={item.title}
                    height={200}
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
            </SwiperSlide>
          );
        });
    }
    return [];
  }, [slides]);

  return (
    <section className={"min-h-[300px] w-full"}>
      <Carousel>{items}</Carousel>
    </section>
  );
};

export default HomePageSlider;
