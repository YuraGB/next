import { Skeleton } from "@nextui-org/skeleton";
import { type ReactNode } from "react";

const SocialLinsSkeleton = (): ReactNode => {
  return (
    <article
      className={
        "grid size-[100px] grid-cols-2 items-center justify-center gap-1 [justify-items:center]"
      }
    >
      {Array.from({ length: 4 })
        .fill(0)
        .map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Skeleton key={index} className={"size-[40px]"} />
        ))}
    </article>
  );
};

export default SocialLinsSkeleton;
