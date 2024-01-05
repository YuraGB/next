'use client'
import React, { FC } from 'react'
import { TUsers } from '@/app/admin/components/adminDashboardTabs/useUsersList'
import { UserItem } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/components/userItem/UserItem'

const UsersList: FC<{ users: TUsers | undefined }> = ({
  users,
}): React.ReactNode | null => {
  if (!users || users.length === 0) {
    return null
  }

  return (
    <section className={'grid justify-start gap-2'}>
      {users.map((userData) => (
        <UserItem key={userData.id} user={userData} />
      ))}
    </section>
  )
}

export default React.memo(UsersList)
