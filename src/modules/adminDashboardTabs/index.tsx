'use client'
import React, { useState } from 'react'
import { Tab, Tabs } from '@nextui-org/tabs'
import AdminUserTab from '@/modules/adminDashboardTabs/components/adminUserTab'
import usersData from './components/adminUserTab/dummyData.json'

export const AdminDashboardTabs = (): React.ReactNode => {
  const [selected, setSelected] = useState<string>('users')

  return (
    <Tabs
      aria-label="Options"
      fullWidth={true}
      variant="bordered"
      selectedKey={selected}
      onSelectionChange={(key) => setSelected(key as string)}
    >
      <Tab key="users" title="Users" className={'w-full'}>
        <AdminUserTab data={usersData} />
      </Tab>
      <Tab key="blog" title="Blog"></Tab>
      <Tab key="features" title="Features"></Tab>
    </Tabs>
  )
}
