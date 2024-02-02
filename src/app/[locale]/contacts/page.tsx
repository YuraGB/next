import { ReactNode } from 'react'
import Title from '@/app/[locale]/contacts/_components/Title/Title'
import ContuctUsForm from '@/app/[locale]/contacts/_components/ContactUsForm/ContuctUsForm'
import PageWrapper from '@/components/pageWrapper/PageWrapper'

const ContactPage = (): ReactNode => {
  return (
    <PageWrapper>
      <article>
        <Title />
        <ContuctUsForm />
      </article>
    </PageWrapper>
  )
}

export default ContactPage
