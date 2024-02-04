import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

export const useUserId = () => {
  const { data: sessionData } = useSession()
  const user = sessionData?.user

  return useMemo(() => {
    if (user) {
      return user.id ? user.id : null
    }
  }, [user])
}
