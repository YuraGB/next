import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import React, { type ReactNode } from "react";
import { Skeleton } from "@nextui-org/skeleton";

const TaleItemSkeleton = (): ReactNode => (
  <Card className="w-full rounded-[0]" isPressable isBlurred isHoverable>
    <CardHeader className="relative flex h-[300px] w-full flex-col items-start gap-3 overflow-hidden rounded-[0] p-0">
      <Skeleton className={"h-[300px] w-full object-cover"} />
    </CardHeader>
    <Divider />
    <CardFooter
      className={"flex h-[73px] border-t-1 bg-gray-400/40 dark:border-default-100"}
    ></CardFooter>
  </Card>
);

export default TaleItemSkeleton;
