"use client";
import React, { Fragment, type ReactNode } from "react";
import TaleItem from "@/app/[locale]/fairyTales/modules/components/taleItem/taleItem";
import { useTaleList } from "@/app/[locale]/fairyTales/modules/components/talesList/useTaleList";
import { Button } from "@nextui-org/button";
import TalesListSkeleton from "@/app/[locale]/fairyTales/modules/components/talesList/taleListSkeleton";

const TalesList = (): ReactNode => {
  const { taleList, fetchNextPage, isFetchingNextPage, status } = useTaleList();
  if (status === "pending") return <TalesListSkeleton />;

  return (
    <Fragment>
      <section className={"grid w-full grid-cols-1 justify-start gap-3 lg:grid-cols-2"}>
        {taleList?.map((tale) => (tale ? <TaleItem key={tale.id} tale={tale} /> : null))}
      </section>{" "}
      <Button
        isLoading={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        color="primary"
        variant="shadow"
        size={"lg"}
        className={"top-2"}
      >
        Load more
      </Button>
    </Fragment>
  );
};

export default TalesList;
