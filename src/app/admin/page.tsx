import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import { AdminDashboardTabs } from '@/app/admin/components/adminDashboardTabs'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Admin Page',
  description: 'testing Nextjs 14 Dashboard',
  keywords: ['yuhur', 'Dashboard'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function Admin() {
  return (
    <PageWrapper additionalClasses={'items-start'}>
      <h1>Admin page</h1>
      <Suspense fallback={<p>Loading</p>}>
        <AdminDashboardTabs />
      </Suspense>
    </PageWrapper>
  )
}
