"use client";
import React, { type FC, memo } from "react";
import { type Tale } from ".prisma/client";
import TaleAdminItem from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleItem/taleListItem";
import TaleListSkeleton from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleList/taleListSkeleton";
import { type TFindAllTales } from "@/server/actions/types";

const TalesList: FC<{
  tales: TFindAllTales[] | undefined;
  onEdit: (tale: Tale) => void;
}> = ({ tales, onEdit }) => {
  if (!tales) {
    return <TaleListSkeleton />;
  }

  return (
    <section className={"grid max-w-full grid-cols-1 justify-start gap-2 sm:grid-cols-2"}>
      {tales.map((tale) => (
        <TaleAdminItem key={tale.id} tale={tale} onEdit={onEdit} />
      ))}
    </section>
  );
};

export default memo(TalesList);
