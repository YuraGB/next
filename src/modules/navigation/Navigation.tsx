'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import React from 'react'

export const Navigation = (): React.ReactNode => {
  const { data: session } = useSession()
  console.log('render')

  return (
    <nav>
      <Link href={'/'}>Homes</Link>
    </nav>
  )
}
