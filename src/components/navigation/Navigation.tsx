'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export const Navigation = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <nav>
      <Link href={'/'}>Homes</Link>
    </nav>
  )
}
