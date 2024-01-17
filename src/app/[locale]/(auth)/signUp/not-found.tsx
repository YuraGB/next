import Link from 'next/link'
import { Metadata } from 'next'
import React from 'react'
import { Pages } from '@/utils/pages'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Not found Page',
  description: 'testing Nextjs 14 Not found',
}

export default function NotFound(): React.ReactNode {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={Pages.HOME}>Return Home</Link>
    </div>
  )
}
