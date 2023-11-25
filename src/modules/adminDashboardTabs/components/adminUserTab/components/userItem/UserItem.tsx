import React from 'react'
import { User } from '@/modules/adminDashboardTabs/components/adminUserTab/model/User'
import {User as UserComponent} from "@nextui-org/react";

type UserItemProps = {
  user: User
}

export const UserItem = ({ user }: UserItemProps): React.ReactNode => {
  const { name } = user
  return (
    <UserComponent
      name={name}
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
  )
}
