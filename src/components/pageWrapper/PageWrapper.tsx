'use client'
import React, { ReactNode, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import dynamic from 'next/dynamic'
import ScrollToTop from 'react-scroll-to-top'
const BackgroundSwithcer = dynamic(
  () => import('@/components/BackgroundSwitcher/BackgroundSwithcer')
)

interface Props {
  children?: ReactNode | ReactNode[]
  additionalClasses?: string
  showBackground?: boolean
}

export default function PageWrapper({
  children,
  additionalClasses = '',
  showBackground = true,
}: Props): React.ReactNode {
  return (
    <>
      {' '}
      {showBackground ? (
        <Suspense fallback={null}>
          <BackgroundSwithcer />
        </Suspense>
      ) : null}
      <main
        className={` ${additionalClasses} flex flex-col pt-12 items-center [flex-grow:1] max-w-7xl m-auto sm:p-24 relative mt-0 w-full backdrop-blur-[10px] sm:backdrop-blur-md bg-opacity-50 bg-background-100`}
      >
        {children}
        <Toaster />
      </main>
      <ScrollToTop smooth color="#6f00ff" />
    </>
  )
}
