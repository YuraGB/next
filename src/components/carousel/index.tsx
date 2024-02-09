"use client";

import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { type ReactNode } from "react";
import { type SwiperProps } from "swiper/swiper-react";

type Props = {
  children: ReactNode[];
  config?: SwiperProps | NonNullable<unknown>;
};
// eslint-disable-next-line react/display-name
export default function Carousel({ children, config = {} }: Props): ReactNode {
  const configDefault = {
    spaceBetween: 10,
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    },
    speed: 2000,
    loop: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    modules: [Navigation, A11y, Autoplay, Pagination],
    breakpoints: {
      // when window width is >= 640px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      },
    },
    ...config,
  };

  return (
    <Swiper {...configDefault} className={"sm:!pb-12"}>
      {children}
    </Swiper>
  );
}
