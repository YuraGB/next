import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import React, { type ReactNode } from "react";
import { Skeleton } from "@nextui-org/skeleton";

const TaleItemSkeleton = (): ReactNode => (
  <Card className="w-full max-w-full" isPressable isBlurred isHoverable>
    <CardHeader className="relative flex gap-3 p-0">
      <Skeleton className={"h-[400px] w-full object-cover"} />
    </CardHeader>
    <Divider />
    <CardFooter
      className={
        "absolute bottom-0 z-10 flex justify-between border-t-1 border-default-600 bg-black/40 text-amber-50 dark:border-default-100"
      }
    ></CardFooter>
  </Card>
);

export default TaleItemSkeleton;
