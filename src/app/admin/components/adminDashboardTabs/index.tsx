'use client'
import React, { Suspense, useState } from 'react'
import { Tab, Tabs } from '@nextui-org/tabs'
import AdminUserTab from '@/app/admin/components/adminDashboardTabs/modules/adminUserTab'
import AdminBlogTab from '@/app/admin/components/adminDashboardTabs/modules/blogDashboardTab'

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
        <Suspense fallback={<p>....</p>}>
          <AdminUserTab />
        </Suspense>
      </Tab>
      <Tab key="blog" title="Blog" className={'w-full'}>
        <Suspense fallback={<p>....</p>}>
          <AdminBlogTab />
        </Suspense>
      </Tab>
      <Tab key="features" title="Features" className={'w-full'}></Tab>
    </Tabs>
  )
}
