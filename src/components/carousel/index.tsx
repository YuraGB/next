"use client";

import { Navigation, A11y, Autoplay } from "swiper/modules";
import { type Swiper as SwiperType } from "swiper";

import { Fragment, type ReactNode, useRef } from "react";
import { type SwiperProps, Swiper } from "swiper/react";
import { Button } from "@nextui-org/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import LeftArrow from "@/components/carousel/LeftArrow";
import RightArrow from "@/components/carousel/RightArrow";

type Props = {
  children: ReactNode[];
  config?: SwiperProps | NonNullable<unknown>;
};
// eslint-disable-next-line react/display-name
export default function Carousel({ children, config = {} }: Props): ReactNode {
  const swiperRef = useRef<SwiperType>();
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
    navigation: true,
    scrollbar: { draggable: true },
    modules: [Navigation, A11y, Autoplay],
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
    <Fragment>
      <Swiper
        {...configDefault}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children}
      </Swiper>
      <div>
        <Button
          type={"button"}
          className={
            "absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg md:left-[-50px]"
          }
          isIconOnly={true}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label={"slide before"}
        >
          <LeftArrow />
        </Button>
        <Button
          className={
            "absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg  md:right-[-50px]"
          }
          aria-label={"slide after"}
          type={"button"}
          isIconOnly={true}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <RightArrow />
        </Button>
      </div>
    </Fragment>
  );
}
