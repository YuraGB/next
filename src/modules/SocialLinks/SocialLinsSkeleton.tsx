import { Skeleton } from "@nextui-org/skeleton";
import { type ReactNode } from "react";

const SocialLinsSkeleton = (): ReactNode => {
  return (
    <article
      className={
        "grid size-[100px] grid-cols-2 items-center justify-center gap-1 [justify-items:center]"
      }
    >
      {new Array(4).fill(1).map((item, index) => (
        <Skeleton key={`${index + item}`} className={"size-[40px]"} />
      ))}
    </article>
  );
};

export default SocialLinsSkeleton;
