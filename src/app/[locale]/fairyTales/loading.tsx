import PageWrapper from "@/components/pageWrapper/PageWrapper";
import PageTitle from "@/app/[locale]/fairyTales/components/pageTitle/PageTitle";
import { Skeleton } from "@nextui-org/skeleton";
import TalesListSkeleton from "@/app/[locale]/fairyTales/modules/components/talesList/taleListSkeleton";
import React, { type ReactNode } from "react";

const Loading = (): ReactNode => {
  return (
    <PageWrapper>
      <Skeleton className={"mb-4 h-[48px] w-full"} />
      <PageTitle />
      <TalesListSkeleton />
    </PageWrapper>
  );
};

export default Loading;
