import React from 'react'
import UsersList from '@/modules/adminDashboardTabs/components/adminUserTab/components/usersList/UsersList'
import { User } from '@/modules/adminDashboardTabs/components/adminUserTab/model/User'

type UserInProps = {
  data: User[]
}

const AdminUserTab = ({ data }: UserInProps): React.ReactNode => {
  return (
    <article>
      <UsersList usersData={data} />
    </article>
  )
}

export default React.memo(AdminUserTab)
