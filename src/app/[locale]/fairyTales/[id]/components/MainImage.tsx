import { type ReactNode, useState } from "react";
import ImageComponent from "next/image";
import placeholder from "@/assets/placeholder.webp";
import { type Image } from ".prisma/client";

type TProps = {
  src: Image | undefined;
  alt: string;
  width?: number;
  height?: number;
  classes?: string;
};
const MainImage = ({ src, alt, width = 700, height = 200, classes }: TProps): ReactNode => {
  const [image, setImage] = useState<string | undefined>(() => {
    return src?.url ? src.url : placeholder.src;
  });

  return (
    <ImageComponent
      width={width}
      height={height}
      alt={alt}
      src={image ?? ""}
      loading={"lazy"}
      className={`h-auto w-full object-cover ${classes}`}
      onError={() => {
        setImage(placeholder.src);
      }}
      placeholder={"blur"}
      blurDataURL={
        // this is our placeholder version using imgix query parameters.
        "https://my-company-images-prd.imgix.net/public/bg-desktop.png?auto=format&blur=200&px=24"
      }
    />
  );
};

export default MainImage;
