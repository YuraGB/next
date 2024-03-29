import React, { type FC, useCallback, useRef } from "react";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Button } from "@nextui-org/button";
import UsersList from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/components/usersList/UsersList";
import UserPopup from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/components/UserModal/UserPopup";
import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";

const AdminUserTab: FC<{ users: User[] | undefined | null }> = ({ users }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editedUser = useRef<User | null>(null);

  const onEdit = useCallback(
    (user: User) => {
      editedUser.current = null;
      onOpen();
      editedUser.current = user;
    },
    [onOpen]
  );

  const createUser = useCallback(() => {
    editedUser.current = null;
    onOpen();
  }, [onOpen]);

  return (
    <article className={"w-full"}>
      <div className={"p-6 text-center"}>
        <Button onClick={createUser}>Create a user</Button>
      </div>
      <UsersList users={users} onEdit={onEdit} />
      <UserPopup isOpen={isOpen} onClose={onClose} initialValues={editedUser.current} />
    </article>
  );
};

export default React.memo(AdminUserTab);
