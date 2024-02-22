"use client";
import React, { type FC } from "react";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";
import UserListSkeleton from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/components/usersList/UserListSkeleton";
import UserItem from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/components/userItem/UserItem";

const UsersList: FC<{
  users: User[] | undefined | null;
  onEdit: (user: User) => void;
}> = ({ users, onEdit }): React.ReactNode | null => {
  if (!users || users.length === 0) {
    return <UserListSkeleton showSkeleton={!users} />;
  }

  return (
    <section className={"grid justify-start gap-2 sm:grid-cols-3"}>
      {users.map((userData: User) => (
        <UserItem key={userData.id} user={userData} onEdit={onEdit} />
      ))}
    </section>
  );
};

export default React.memo(UsersList);
