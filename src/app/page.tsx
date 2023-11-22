import Link from 'next/link'
import { Button } from '@nextui-org/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Link href={'/admin'}>Admin</Link>
      <Button>Press me</Button>
    </main>
  )
}
