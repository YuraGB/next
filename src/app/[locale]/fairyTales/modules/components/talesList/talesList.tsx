'use client'
import React from 'react'
import { useFairyTales } from '@/app/[locale]/fairyTales/modules/components/talesList/useFairyTales'
import TaleItem from '@/app/[locale]/fairyTales/modules/components/taleItem/taleItem'
import TalesListSkeleton from '@/app/[locale]/fairyTales/modules/components/talesList/taleListSkeleton'

const TalesList = () => {
  const { tales } = useFairyTales()

  if (!tales || tales.length === 0) {
    return <TalesListSkeleton />
  }

  return (
    <section className={'grid justify-start gap-2'}>
      {tales.map((tale) => (
        <TaleItem key={tale.id} tale={tale} />
      ))}
    </section>
  )
}

export default React.memo(TalesList)
