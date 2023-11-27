'use client'
import Link from 'next/link'
import React from 'react'

export const Navigation = (): React.ReactNode => {
  return (
    <div>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/login'}>Login</Link>
      </nav>
    </div>
  )
}
