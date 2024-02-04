import { memo, type ReactNode } from "react";
import Image from "next/image";

const Paragraph = ({
  content,
  image,
  isOdd,
}: {
  content: string;
  image: string | undefined;
  isOdd: boolean;
}): ReactNode => {
  return (
    <div className={"relative my-3 flex min-h-[400px] items-center justify-between"}>
      <p
        className={`max-w-full p-6 font-['cormorant_it'] text-xl italic text-amber-50 backdrop-blur [z-index:1] lg:max-w-[50%] ${
          isOdd ? "ml-auto" : "mr-auto"
        }`}
      >
        {content}
      </p>
      {image ? (
        <Image
          src={image}
          fetchPriority={"low"}
          alt={"Yuhur photo"}
          width={900}
          height={300}
          loading={"lazy"}
          className="absolute box-border block h-auto min-h-full w-full max-w-full object-cover"
        />
      ) : null}
    </div>
  );
};

export default memo(Paragraph);
