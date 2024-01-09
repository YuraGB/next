'use client'
import React, { FC } from 'react'
import { UserItem } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/components/userItem/UserItem'
import UserListSkeleton from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/components/usersList/UserListSkeleton'
import { User } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'

const UsersList: FC<{ users: User[] | undefined | null }> = ({
  users,
}): React.ReactNode | null => {
  if (!users || users.length === 0) {
    return <UserListSkeleton showSkeleton={!users} />
  }

  return (
    <section className={'grid justify-start gap-2'}>
      {users.map((userData: User) => (
        <UserItem key={userData.id} user={userData} />
      ))}
    </section>
  )
}

export default React.memo(UsersList)
