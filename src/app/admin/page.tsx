import { AdminDashboardTabs } from '@/modules/adminDashboardTabs'

export default function Admin() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>admin</h1>
      <AdminDashboardTabs />
    </main>
  )
}
