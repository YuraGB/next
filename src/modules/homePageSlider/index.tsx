"use client";
import React from "react";
import Carousel from "@/components/carousel";
import type { TFindAllTales } from "@/server/actions/types";
import Slide from "@/modules/homePageSlider/components/Slide/Slide";
import { SwiperSlide } from "swiper/swiper-react";
import { useHPSlider } from "@/modules/homePageSlider/useHPSlider";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const HomePageSlider = () => {
  const { slides } = useHPSlider();

  return (
    <section className={"relative mb-4 w-full"}>
      <Carousel>
        {slides?.length
          ? slides
              .filter((e) => e.mainImage)
              .map((item: TFindAllTales) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Slide item={item} key={item.id} />
                  </SwiperSlide>
                );
              })
          : []}
      </Carousel>
    </section>
  );
};

export default HomePageSlider;
