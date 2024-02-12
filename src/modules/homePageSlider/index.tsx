"use client";
import React, { type ReactNode } from "react";
import Carousel from "@/components/carousel";
import type { TaleWithRelations } from "@/server/actions/types";
import Slide from "@/modules/homePageSlider/components/Slide/Slide";
import { SwiperSlide } from "swiper/react";
import { useHPSlider } from "@/modules/homePageSlider/useHPSlider";
import SkeletonSlider from "@/modules/homePageSlider/components/SkeletonSlider/SkeletonSlider";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const HomePageSlider = (): ReactNode | null => {
  const { slides, isLoading } = useHPSlider();

  if (!isLoading && slides?.length === 0) {
    return null;
  }

  return (
    <section className={"relative mb-4 w-full"}>
      <Carousel>
        {slides?.length
          ? slides
              .filter((e) => e.mainImage)
              .map((item: TaleWithRelations) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Slide item={item} key={item.id} />
                  </SwiperSlide>
                );
              })
          : new Array(4).fill(0).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                <SkeletonSlider />
              </SwiperSlide>
            ))}
      </Carousel>
    </section>
  );
};

export default HomePageSlider;
