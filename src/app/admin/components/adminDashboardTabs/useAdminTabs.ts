'use client'
import { Dispatch, SetStateAction, useState } from 'react'

export type TabNames = 'users' | 'blog' | 'features'

export type AdminTabs = {
  tabNames: TabNames[]
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

export const useAdminTabs = (): AdminTabs => {
  const tabNames: TabNames[] = ['users', 'blog', 'features']
  const [selected, setSelected] = useState<string>('users')

  return {
    tabNames,
    selected,
    setSelected,
  }
}
