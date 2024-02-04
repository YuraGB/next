import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import React, { type ReactNode } from "react";
import { Skeleton } from "@nextui-org/skeleton";

export const SkeletonComponent = (): ReactNode => {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Skeleton className={"flex size-12 rounded-full"} />
      </NavbarItem>
    </NavbarContent>
  );
};
