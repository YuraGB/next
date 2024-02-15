import React from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/skeleton";

const TaleListSkeleton = (): React.ReactNode => {
  return (
    <Card className="w-full" isPressable isBlurred isHoverable>
      <Skeleton className={"min-h-[380px] w-full"}>
        <CardHeader className="relative flex gap-3 p-0">
          <div className="flex flex-col">
            <p className="p-2" />
          </div>
        </CardHeader>
      </Skeleton>
      <Divider />
      <CardFooter className={"flex justify-between"}>
        <Skeleton className={"w-[20%] rounded p-2"}>
          <p className={"w-[20%] p-2"} />
        </Skeleton>

        <Skeleton className={"w-[10%] rounded p-2"}>
          <p className={"w-[20%] p-2"} />
        </Skeleton>
      </CardFooter>
    </Card>
  );
};

export default React.memo(TaleListSkeleton);
