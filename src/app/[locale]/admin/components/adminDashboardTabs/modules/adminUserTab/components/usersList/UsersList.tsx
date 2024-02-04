"use client";
import React, { type FC } from "react";
import UserItem from "@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/components/userItem/UserItem";
import UserListSkeleton from "@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/components/usersList/UserListSkeleton";
import { type User } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab/model/User";

const UsersList: FC<{
  users: User[] | undefined | null;
  onEdit: (user: User) => void;
}> = ({ users, onEdit }): React.ReactNode | null => {
  if (!users || users.length === 0) {
    return <UserListSkeleton showSkeleton={!users} />;
  }

  return (
    <section className={"grid justify-start gap-2"}>
      {users.map((userData: User) => (
        <UserItem key={userData.id} user={userData} onEdit={onEdit} />
      ))}
    </section>
  );
};

export default React.memo(UsersList);
