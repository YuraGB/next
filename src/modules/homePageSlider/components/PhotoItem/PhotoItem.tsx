import React, { type ReactNode } from "react";
import { SwiperSlide } from "swiper/swiper-react";
import Image from "next/image";
import type { TFindAllTales } from "@/server/actions/types";

type Props = {
  item: TFindAllTales;
};

const PhotoItem = ({ item }: Props): ReactNode | null => {
  if (!item) return null;

  return (
    <SwiperSlide>
      <Image
        src={item.mainImage}
        alt={item.title}
        height={0}
        width={0}
        loading={"lazy"}
        className={"h-auto w-[300px]"}
      />
      <span slot="container-start">Container Start</span>
      <span slot="container-end">Container End</span>
      <span slot="wrapper-start">Wrapper Start</span>
      <span slot="wrapper-end">Wrapper End</span>
    </SwiperSlide>
  );
};

export default PhotoItem;
