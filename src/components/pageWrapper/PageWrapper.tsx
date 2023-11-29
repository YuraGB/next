import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  additionalClasses?: string
}

export default function PageWrapper({
  children,
  additionalClasses,
}: Props): React.ReactNode {
  return (
    <main
      className={` ${additionalClasses} flex flex-col p-24 items-center grow-1 max-w-7xl m-auto`}
    >
      {children}
    </main>
  )
}
