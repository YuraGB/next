import React, { type FC } from "react";
import { User as UserComponent } from "@nextui-org/react";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";

type UserItemProps = {
  user: Partial<User>;
  onEdit: (user: User) => void;
};

const UserItem: FC<UserItemProps> = ({ user, onEdit }): React.ReactNode | null => {
  if (!user) {
    return null;
  }

  const { name, role, imageUrl } = user;

  return (
    <UserComponent
      isFocusable={true}
      name={name}
      description={role?.toLowerCase()}
      avatarProps={{
        src: imageUrl ? imageUrl : "",
      }}
      className={"cursor-pointer justify-start bg-foreground-300 p-2"}
      onClick={() => {
        onEdit(user as User);
      }}
    />
  );
};

export default React.memo(UserItem);
