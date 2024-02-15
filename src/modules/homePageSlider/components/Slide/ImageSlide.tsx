import placeholder from "@/assets/placeholder.webp";
import Image from "next/image";
import React, { type FC, useState } from "react";

type TProps = {
  url: string | undefined;
  title: string;
};

const ImageSlide: FC<TProps> = ({ url, title }) => {
  const [image, setImage] = useState<string>(() => {
    return url ? url : placeholder.src;
  });

  return (
    <Image
      src={image}
      alt={title}
      height={142}
      width={300}
      loading={"lazy"}
      className={"h-auto w-[500px]"}
      onError={() => {
        setImage(placeholder.src);
      }}
    />
  );
};

export default ImageSlide;
