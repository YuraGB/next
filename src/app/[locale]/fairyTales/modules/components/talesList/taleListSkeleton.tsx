'use client'
import React from 'react'
import TaleItemSkeleton from '@/app/[locale]/fairyTales/modules/components/taleItem/taleItemSkeleton'

const TalesListSkeleton = () => {
  return (
    <section className={'grid grid-cols-1 justify-start gap-2 w-full'}>
      {Array(3)
        .fill(1)
        .map((item, index) => (
          <TaleItemSkeleton key={index} />
        ))}
    </section>
  )
}

export default TalesListSkeleton
