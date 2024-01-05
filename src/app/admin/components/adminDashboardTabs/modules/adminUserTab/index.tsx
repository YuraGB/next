import React, { FC } from 'react'
import UsersList from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/components/usersList/UsersList'
import { TUsers } from '@/app/admin/components/adminDashboardTabs/useUsersList'

const AdminUserTab: FC<{ users: TUsers | undefined }> = ({ users }) => {
  return (
    <article className={'w-full'}>
      <UsersList users={users} />
    </article>
  )
}

export default React.memo(AdminUserTab)
