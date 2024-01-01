import React from 'react'
import UsersList from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/components/usersList/UsersList'

const AdminUserTab = () => {
  return (
    <article className={'w-full'}>
      <UsersList />
    </article>
  )
}

export default React.memo(AdminUserTab)
