import React from 'react'
import { UserItem } from '@/app/admin/components/adminDashboardTabs/components/adminUserTab/components/userItem/UserItem'
import { User } from '@/app/admin/components/adminDashboardTabs/components/adminUserTab/model/User'

type UsersListProps = {
  usersData: User[]
}

const UsersList = ({ usersData }: UsersListProps): React.ReactNode | null => {
  if (!usersData) {
    return null
  }
  return (
    <section className={'grid justify-start gap-2'}>
      {usersData.map((userData) => (
        <UserItem key={userData.id} user={userData} />
      ))}
    </section>
  )
}

export default React.memo(UsersList)
