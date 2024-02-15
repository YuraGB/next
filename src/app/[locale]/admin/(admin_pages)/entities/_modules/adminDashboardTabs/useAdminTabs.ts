"use client";
import { type Dispatch, type SetStateAction, useState } from "react";
import { useFairyTales } from "@/app/[locale]/fairyTales/modules/components/talesList/useFairyTales";
import { type TFindAllTales } from "@/server/actions/types";
import { usePostList } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/usePostList";
import { useUsersList } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/useUsersList";
import { type PostT } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/blogDashboardTab/model/Post";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";

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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const { posts } = usePostList();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
