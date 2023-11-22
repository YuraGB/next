import React from 'react'
import { User } from '@/modules/adminDashboardTabs/components/adminUserTab/model/User'

type UserItemProps = {
  user: User
}

export const UserItem = ({ user }: UserItemProps): React.ReactNode => {
  const { name } = user
  return (
    <section>
      <p>{name}</p>
    </section>
  )
}
