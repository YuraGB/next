'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { usePostList } from '@/app/admin/components/adminDashboardTabs/usePostList'
import { useUsersList } from '@/app/admin/components/adminDashboardTabs/useUsersList'
import { PostT } from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab/model/Post'
import { User } from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab/model/User'
import { useFairyTales } from '@/app/fairyTales/modules/components/talesList/useFairyTales'
import { Tale } from '.prisma/client'

export enum tabNames {
  USERS = 'USERS',
  BLOG = 'BLOG',
  TALES = 'TALES',
}

export type AdminTabs = {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  posts: PostT[] | undefined
  users: User[] | undefined | null
  tales: Tale[] | undefined
}

export const useAdminTabs = (): AdminTabs => {
  const [selected, setSelected] = useState<string>('users')

  const { posts } = usePostList()
  const { users } = useUsersList()
  const { tales } = useFairyTales()

  return {
    selected,
    setSelected,
    posts,
    users,
    tales,
  }
}
