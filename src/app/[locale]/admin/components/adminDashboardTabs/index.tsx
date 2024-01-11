'use client'
import React, { memo, Suspense } from 'react'
import { Tab, Tabs } from '@nextui-org/tabs'
import AdminUserTab from '@/app/[locale]/admin/components/adminDashboardTabs/modules/adminUserTab'
import AdminBlogTab from '@/app/[locale]/admin/components/adminDashboardTabs/modules/blogDashboardTab'
import {
  tabNames,
  useAdminTabs,
} from '@/app/[locale]/admin/components/adminDashboardTabs/useAdminTabs'
import AdminTalesTab from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab'

export const AdminDashboardTabs = (): React.ReactNode => {
  const { selected, tales, setSelected, posts, users } = useAdminTabs()

  return (
    <Tabs
      aria-label="Options"
      fullWidth={true}
      variant="bordered"
      selectedKey={selected}
      onSelectionChange={(key) => setSelected(key as string)}
    >
      <Tab key={tabNames.USERS} title="Users" className={'w-full'}>
        <Suspense fallback={<p>....</p>}>
          <AdminUserTab users={users} />
        </Suspense>
      </Tab>
      <Tab key={tabNames.BLOG} title="Blog" className={'w-full'}>
        <Suspense fallback={<p>....</p>}>
          <AdminBlogTab posts={posts} />
        </Suspense>
      </Tab>
      <Tab key={tabNames.TALES} title="Tales" className={'w-full'}>
        <Suspense fallback={<p>....</p>}>
          <AdminTalesTab tales={tales} />
        </Suspense>
      </Tab>
    </Tabs>
  )
}

export default memo(AdminDashboardTabs)
