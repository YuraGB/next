import { type Slide } from "@/modules/homePageSlider/types";
import React, { type ReactNode } from "react";
import ImageComponent from "next/image";

type Props = {
  photo: Slide;
};

export const shimmer = (w: number, h: number): ReactNode => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e4e4e7" offset="20%" />
      <stop stop-color="#DDDDDEFF" offset="50%" />
      <stop stop-color="#e4e4e7" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e4e4e7" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string): string =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

const PhotoItem = ({ photo }: Props): ReactNode | null => {
  if (!photo) return null;
  return (
    <div
      className={"flex items-center justify-center"}
      style={{ position: "relative", width: "auto", height: "300px" }}
    >
      <ImageComponent
        src={photo.image}
        fetchPriority={"high"}
        priority={true}
        alt={"Yuhur photo"}
        width={0}
        height={0}
        loading={"eager"}
        className="m-auto min-h-[200px] w-[200px] rounded-[50%]"
        sizes={"200px"}
      />
    </div>
  );
};

export default PhotoItem;
