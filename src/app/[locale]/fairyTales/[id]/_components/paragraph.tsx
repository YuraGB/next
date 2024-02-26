import { memo, type ReactNode, useState } from "react";
import ImageComponent from "next/image";
import { type Image } from ".prisma/client";
import placeholder from "@/assets/placeholder.webp";

const Paragraph = ({
  content,
  image,
  isOdd,
}: {
  content: string;
  image: Image | undefined;
  isOdd: boolean;
}): ReactNode => {
  const [img, setImg] = useState<string | undefined>(() => {
    return image?.url ? image.url : placeholder.src;
  });

  return (
    <div className={"relative my-3 flex min-h-[400px] items-center justify-between"}>
      <p
        className={`max-w-full p-6 font-['cormorant_it'] text-xl italic text-amber-50 backdrop-blur [text-shadow:-1px_1px_1px_#091001] [z-index:1] lg:max-w-[50%] ${
          isOdd ? "ml-auto" : "mr-auto"
        }`}
      >
        {content}
      </p>
      {img ? (
        <ImageComponent
          src={img}
          fetchPriority={"low"}
          alt={"Yuhur photo"}
          onError={() => {
            setImg(placeholder.src);
          }}
          width={900}
          height={300}
          loading={"lazy"}
          className="absolute box-border block h-auto min-h-full w-full max-w-full object-cover"
        />
      ) : (
        <ImageComponent
          src={placeholder.src}
          fetchPriority={"low"}
          alt={"Yuhur photo"}
          width={900}
          height={300}
          loading={"lazy"}
          className="absolute box-border block h-auto min-h-full w-full max-w-full object-cover"
        />
      )}
    </div>
  );
};

export default memo(Paragraph);
