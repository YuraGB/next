'use client'
import React from 'react'
import { useFairyTales } from '@/app/fairyTales/modules/components/talesList/useFairyTales'
import TaleItem from '@/app/fairyTales/modules/components/taleItem/taleItem'

const TalesList = () => {
  const { tales } = useFairyTales()

  if (!tales || tales.length === 0) {
    return null
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
