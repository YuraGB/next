import { useEffect, useState } from 'react'
import { User } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'
import { getUsers } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/service/getUsers'

export type TUsers = Partial<User>[]
export const useUsersList = () => {
  const [users, setUsers] = useState<TUsers>()
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
