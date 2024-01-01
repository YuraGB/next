'use client'
import React from 'react'
import { User } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'
import { useUsersList } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/components/usersList/useUsersList'
import { UserItem } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/components/userItem/UserItem'

export type UsersListProps = {
  usersData: Promise<Partial<User>[] | null | undefined>
}

const UsersList = (): React.ReactNode | null => {
  const { users } = useUsersList()
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
