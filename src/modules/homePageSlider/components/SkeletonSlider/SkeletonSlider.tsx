import { Skeleton } from "@nextui-org/skeleton";
import { type ReactNode } from "react";

const SkeletonSlider = (): ReactNode => {
  return <Skeleton className={"min-h-[300px] w-full"} />;
};

export default SkeletonSlider;
