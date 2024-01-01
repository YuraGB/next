import { useEffect, useState } from 'react'
import { User } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'
import { getUsers } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/service/getUsers'

export const useUsersList = () => {
  const [users, setUsers] = useState<Partial<User>[]>()
  useEffect(() => {
    getUsers()
      .then((resp) => {
        if (resp) {
          setUsers(resp)
        }
      })
      .catch(console.log)
  }, [])

  return { users }
}
