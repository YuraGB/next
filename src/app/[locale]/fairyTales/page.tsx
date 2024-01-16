import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import TalesList from '@/app/[locale]/fairyTales/modules/components/talesList/talesList'
import { FormattedMessage } from 'react-intl'
import PageTitle from '@/app/[locale]/fairyTales/components/pageTitle/PageTitle'

export const metadata: Metadata = {
  title: 'Fairy tales page',
  description: 'Catalog of the Fairy Tales',
  keywords: ['Fairy tales', 'Catalog of the Fairy Tales'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function FairyTales() {
  return (
    <PageWrapper>
      <PageTitle />
      <TalesList />
    </PageWrapper>
  )
}
