"use client";
import React, { type ReactNode } from "react";
import Carousel from "@/components/carousel";
import type { TaleWithRelations } from "@/server/actions/types";
import Slide from "@/modules/homePageSlider/components/Slide/Slide";
import { SwiperSlide } from "swiper/react";
import { useHPSlider } from "@/modules/homePageSlider/useHPSlider";
import SkeletonSlider from "@/modules/homePageSlider/components/SkeletonSlider/SkeletonSlider";
import { FormattedMessage } from "react-intl";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const HomePageSlider = (): ReactNode | null => {
  const { slides, isLoading } = useHPSlider();

  if (!isLoading && slides?.length === 0) {
    return null;
  }

  return (
    <section className={"relative mb-4 w-full"}>
      <h3 className={"mb-4 flex justify-center text-2xl font-bold text-foreground"}>
        <FormattedMessage id={"hp.slider.title"} defaultMessage={"The list of magic"} />
      </h3>
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
          : new Array(4).fill(0).map((item, index) => (
              <SwiperSlide key={`${index + item}`}>
                <SkeletonSlider />
              </SwiperSlide>
            ))}
      </Carousel>
    </section>
  );
};

export default HomePageSlider;
