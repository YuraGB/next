import React from 'react'
import { UserItem } from '@/modules/adminDashboardTabs/components/adminUserTab/components/userItem/UserItem'
import { User } from '@/modules/adminDashboardTabs/components/adminUserTab/model/User'

type UsersListProps = {
  usersData: User[]
}

const UsersList = ({ usersData }: UsersListProps): React.ReactNode | null => {
  if (!usersData) {
    return null
  }

  console.log('usersData', usersData)
  return (
    <section  className={"grid justify-start gap-2"}>
      {usersData.map((userData) => (
        <UserItem key={userData.id} user={userData} />
      ))}
    </section>
  )
}

export default React.memo(UsersList)
