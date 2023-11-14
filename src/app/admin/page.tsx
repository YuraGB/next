import Link from 'next/link'

export default function Admin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>admin</h1>
      <Link href={'/'}>Home</Link>
    </main>
  )
}
