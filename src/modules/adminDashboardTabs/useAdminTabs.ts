'use client'
import { Dispatch, SetStateAction, useState } from 'react'

export type TabNames = 'users' | 'photos' | 'music'

export type AdminTabs = {
  tabNames: TabNames[]
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

export const useAdminTabs = (): AdminTabs => {
  const tabNames: TabNames[] = ['users', 'photos', 'music']
  const [selected, setSelected] = useState<string>('users')

  return {
    tabNames,
    selected,
    setSelected,
  }
}
