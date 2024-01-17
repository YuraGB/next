import React from 'react'
import TaleItem from '@/app/[locale]/fairyTales/modules/components/taleItem/taleItem'
import TalesListSkeleton from '@/app/[locale]/fairyTales/modules/components/talesList/taleListSkeleton'
import { getAllFairyTales } from '@/server/actions/getAllFairyTales'

const TalesList = async () => {
  const tales = await getAllFairyTales()

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

export default TalesList
