import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { Skeleton } from "@nextui-org/skeleton";
import React, { type ReactNode } from "react";

const Loading = (): ReactNode => {
  return (
    <PageWrapper>
      <Skeleton className={"mb-4 h-[48px] w-full"} />
      {new Array(4).fill(0).map((item, index) => (
        <Skeleton key={`${index + item}`} className={"mb-2 h-[400px] w-full"} />
      ))}
    </PageWrapper>
  );
};

export default Loading;
