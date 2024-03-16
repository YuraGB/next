"use client";
import { type ReactNode } from "react";
import ImageComponent from "next/image";
import { getRandomInt } from "@/utils/getRandom";

type Props = {
  numberOfThePet?: string;
};

const Avatar = ({ numberOfThePet }: Props): ReactNode => {
  let imageLoad;
  if (!numberOfThePet) {
    imageLoad = getRandomInt(17);
  } else {
    imageLoad = numberOfThePet;
  }

  return <ImageComponent src={`/images/${imageLoad}.webp`} alt="Avatar" width={100} height={100} />;
};

export default Avatar;
