"use client";
import React, { type FC, memo } from "react";
import { type Tale } from ".prisma/client";
import { type TFindAllTales } from "@/server/actions/types";
import TaleListSkeleton from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/fairyTalesTab/components/taleList/taleListSkeleton";
import TaleAdminItem from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/fairyTalesTab/components/taleItem/taleListItem";

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
