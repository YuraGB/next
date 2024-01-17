import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React from 'react'
import { getAllFairyTales } from '@/server/actions/getAllFairyTales'
import { getTale } from '@/server/actions/getTale'
import TaleContent from '@/app/[locale]/fairyTales/[id]/components/taleContent'

export const dynamicParams = true
export const revalidate = 60

export const metadata: Metadata = {
  title: 'The tale',
  description: 'tale description',
  keywords: ['yuhur', 'Fairy tales'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default async function FairyTale({
  params,
}: {
  params: { id: string }
}) {
  const taleData = await getTale(params.id)

  return (
    <PageWrapper>
      {taleData ? <TaleContent taleContent={taleData} /> : null}
    </PageWrapper>
  )
}

export async function generateStaticParams() {
  const tales = await getAllFairyTales()

  if (tales && tales.length) {
    return tales.map(({ id }) => id)
  }
  return []
}
