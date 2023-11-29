import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function PageWrapper({ children }: Props): React.ReactNode {
  return (
    <main className="flex flex-col p-24 items-center grow-1">{children}</main>
  )
}
