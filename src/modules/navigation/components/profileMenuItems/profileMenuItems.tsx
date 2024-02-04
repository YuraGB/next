"use client";
import React, { memo, type ReactNode } from "react";
import { useSession } from "next-auth/react";
import NotLoggedInItems from "@/modules/navigation/components/profileMenuItems/notLoggedInItems";
import LoggedInItems from "@/modules/navigation/components/profileMenuItems/loggedInItems";
import { SkeletonComponent } from "@/modules/navigation/components/skeleton/Skeleton";

const ProfileMenuItems = (): ReactNode => {
  const { status, data } = useSession();
  const isLoggedIn = status === "authenticated";

  if (status === "loading") {
    return <SkeletonComponent />;
  }

  return isLoggedIn ? <LoggedInItems user={data?.user} /> : <NotLoggedInItems />;
};

export default memo(ProfileMenuItems);
