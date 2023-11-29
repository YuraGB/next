import { RegistrationForm } from '@/modules/registrationForm/RegistrationForm'
import { Metadata } from 'next'
import PageWrapper from '@/components/pageWrapper/PageWrapper'

export const metadata: Metadata = {
  title: 'Gyb Next js Sign Up Page',
  description: 'Authorization with Next Auth',
}
export default function RegisterPage() {
  return (
    <PageWrapper>
      <h1>Registration</h1>
      <RegistrationForm />
    </PageWrapper>
  )
}
