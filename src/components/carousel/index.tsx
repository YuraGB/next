"use client";

import { Navigation, A11y } from "swiper/modules";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { type ReactNode } from "react";
import type { Swiper as SwiperClass } from "swiper/types";
import { type SwiperProps } from "swiper/swiper-react";

type Props = {
  children: ReactNode[];
  config?: SwiperProps;
};
// eslint-disable-next-line react/display-name
export default function Carousel({ children }: Props): ReactNode {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper: SwiperClass): void => {
        console.log(swiper);
      }}
      onSlideChange={(): void => {
        console.log("slide change");
      }}
    >
      {children}
    </Swiper>
  );
}
