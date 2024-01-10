import React, { FC } from 'react'
import UsersList from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/components/usersList/UsersList'
import { User } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'

const AdminUserTab: FC<{ users: User[] | undefined | null }> = ({ users }) => {
  return (
    <article className={'w-full'}>
      <UsersList users={users} />
    </article>
  )
}

export default React.memo(AdminUserTab)
