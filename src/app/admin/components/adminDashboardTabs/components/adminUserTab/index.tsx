import React from 'react'
import UsersList from '@/app/admin/components/adminDashboardTabs/components/adminUserTab/components/usersList/UsersList'
import { User } from '@/app/admin/components/adminDashboardTabs/components/adminUserTab/model/User'

type UserInProps = {
  data: User[]
}

const AdminUserTab = ({ data }: UserInProps): React.ReactNode => {
  return (
    <article className={'w-full'}>
      <UsersList usersData={data} />
    </article>
  )
}

export default React.memo(AdminUserTab)
