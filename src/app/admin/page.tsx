import { AdminDashboardTabs } from '@/modules/adminDashboardTabs'
import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Admin Page',
  description: 'testing Nextjs 14 Dashboard',
}

export default async function Admin() {
  return (
    <PageWrapper additionalClasses={'items-start'}>
      <h1>Admin page</h1>
      <AdminDashboardTabs />
    </PageWrapper>
  )
}
