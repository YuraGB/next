import React from 'react'
import { User as UserComponent } from '@nextui-org/react'
import { User } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'

type UserItemProps = {
  user: Partial<User> | null | undefined
}

export const UserItem = ({ user }: UserItemProps): React.ReactNode | null => {
  if (!user) {
    return null
  }

  const { name, imageUrl, role } = user

  return (
    <UserComponent
      name={name}
      description={role?.toLowerCase()}
      avatarProps={{
        src: imageUrl ? imageUrl : '',
      }}
      className={'justify-start'}
    />
  )
}
