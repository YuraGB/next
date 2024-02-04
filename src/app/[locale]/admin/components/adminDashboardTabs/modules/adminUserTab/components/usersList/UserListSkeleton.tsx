import React, { type ReactNode } from "react";
import { Skeleton } from "@nextui-org/skeleton";

const UserListSkeleton = ({ showSkeleton }: { showSkeleton: boolean }): ReactNode | null => {
  if (!showSkeleton) {
    return null;
  }
  return (
    <section className={"grid justify-start gap-2"}>
      <div className="flex w-full max-w-[300px] items-center gap-3">
        <div>
          <Skeleton className="flex size-12 rounded-full" />
        </div>
        <div className="flex w-[300px] flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
      <div className="flex w-full max-w-[300px] items-center gap-3">
        <div>
          <Skeleton className="flex size-12 rounded-full" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
      <div className="flex w-full max-w-[300px] items-center gap-3">
        <div>
          <Skeleton className="flex size-12 rounded-full" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default React.memo(UserListSkeleton);
