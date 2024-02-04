import React from "react";
import TaleItem from "@/app/[locale]/fairyTales/modules/components/taleItem/taleItem";
import TalesListSkeleton from "@/app/[locale]/fairyTales/modules/components/talesList/taleListSkeleton";
import { getAllFairyTales } from "@/server/actions/getAllFairyTales";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const TalesList = async () => {
  const tales = await getAllFairyTales();

  if (!tales || tales.length === 0) {
    return <TalesListSkeleton />;
  }

  return (
    <section className={"grid grid-cols-1 justify-start gap-3 lg:grid-cols-2"}>
      {tales.map((tale) => (
        <TaleItem key={tale.id} tale={tale} />
      ))}
    </section>
  );
};

export default TalesList;
