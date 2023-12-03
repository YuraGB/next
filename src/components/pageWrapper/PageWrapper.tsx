import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface Props {
  children?: ReactNode | ReactNode[]
  additionalClasses?: string
}

export default function PageWrapper({
  children,
  additionalClasses,
}: Props): React.ReactNode {
  return (
    <main
      className={` ${additionalClasses} flex flex-col pt-12 items-center grow-1 max-w-7xl m-auto sm:p-24`}
    >
      {children}
      <Toaster />
    </main>
  )
}
