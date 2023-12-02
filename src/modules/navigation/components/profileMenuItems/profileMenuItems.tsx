'use client'
import React, { memo } from 'react'
import { useSession } from 'next-auth/react'
import NotLoggedInItems from '@/modules/navigation/components/profileMenuItems/notLoggedInItems'
import LoggedInItems from '@/modules/navigation/components/profileMenuItems/loggedInItems'

const ProfileMenuItems = () => {
  const { status, data } = useSession()
  const isLoggedIn = status === 'authenticated'

  return isLoggedIn ? <LoggedInItems user={data?.user} /> : <NotLoggedInItems />
}

export default memo(ProfileMenuItems)
