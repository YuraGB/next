"use client";
import { type Dispatch, type SetStateAction, useState } from "react";
import { usePostList } from "@/app/[locale]/admin/components/adminDashboardTabs/usePostList";
import { useUsersList } from "@/app/[locale]/admin/components/adminDashboardTabs/useUsersList";
import { type PostT } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/blogDashboardTab/model/Post";
import { type User } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User";
import { useFairyTales } from "@/app/[locale]/fairyTales/modules/components/talesList/useFairyTales";
import { type TFindAllTales } from "@/server/actions/types";

// eslint-disable-next-line no-shadow
export enum tabNames {
  USERS = "USERS",
  BLOG = "BLOG",
  TALES = "TALES",
}

export type AdminTabs = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  posts: PostT[] | undefined;
  users: User[] | undefined | null;
  tales: TFindAllTales[] | undefined;
};

export const useAdminTabs = (): AdminTabs => {
  const [selected, setSelected] = useState<string>("users");

  const { posts } = usePostList();
  const { users } = useUsersList();
  const { tales } = useFairyTales();

  return {
    selected,
    setSelected,
    posts,
    users,
    tales,
  };
};
