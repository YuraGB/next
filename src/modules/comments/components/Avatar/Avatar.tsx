"use client";
import { type ReactNode } from "react";
// import { getRandomInt } from "@/utils/getRandom";
import ImageComponent from "next/image";

// type Props = {
//   numberOfThePet?: number;
// };

const Avatar = (): ReactNode => {
  // let imageLoad;
  // if (!numberOfThePet) {
  //   imageLoad = getRandomInt(17);
  // } else {
  //   imageLoad = numberOfThePet;
  // }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  return <ImageComponent src={"/1.png"} alt="Avatar" width={100} height={100} />;
};

export default Avatar;
