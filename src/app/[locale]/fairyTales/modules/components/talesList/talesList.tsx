"use client";
import React, { Fragment, type ReactNode } from "react";
import TaleItem from "@/app/[locale]/fairyTales/modules/components/taleItem/taleItem";
import { useTaleList } from "@/app/[locale]/fairyTales/modules/components/talesList/useTaleList";
import { Button } from "@nextui-org/button";
import TalesListSkeleton from "@/app/[locale]/fairyTales/modules/components/talesList/taleListSkeleton";
import Toolbar from "@/app/[locale]/fairyTales/modules/components/toolBar/Toolbar";

const TalesList = (): ReactNode => {
  const { load, taleList, isFetchingNextPage, status, showLoadMore, onSetSort } = useTaleList();
  if (status === "pending") return <TalesListSkeleton />;

  return (
    <Fragment>
      <Toolbar setSort={onSetSort} />
      <section className={"grid w-full grid-cols-1 justify-start gap-3 lg:grid-cols-2"}>
        {taleList?.map((tale) => (tale ? <TaleItem key={tale.id} tale={tale} /> : null))}
      </section>{" "}
      {showLoadMore.current ? (
        <Button
          isLoading={isFetchingNextPage}
          color="primary"
          variant="shadow"
          size={"lg"}
          className={"top-2"}
          ref={load}
        >
          Load more
        </Button>
      ) : null}
    </Fragment>
  );
};

export default TalesList;
