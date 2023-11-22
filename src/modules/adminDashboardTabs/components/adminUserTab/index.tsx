import React from 'react'
import UsersList from '@/modules/adminDashboardTabs/components/adminUserTab/components/usersList/UsersList'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AdminUserTab = ({ data }) => {
  return (
    <article>
      <UsersList usersData={data} />
    </article>
  )
}

export default React.memo(AdminUserTab)
