import Link from 'next/link'
import { ReactNode } from 'react'

export default function NotFound(): ReactNode {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
