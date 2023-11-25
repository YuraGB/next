import React from 'react'
import UsersList from '@/modules/adminDashboardTabs/components/adminUserTab/components/usersList/UsersList'

const AdminUserTab = ({ data }) => {
  return (
    <article>
      <UsersList usersData={data} />
    </article>
  )
}

export default React.memo(AdminUserTab)
