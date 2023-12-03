import { RegistrationForm } from '@/modules/registrationForm/RegistrationForm'
import { Metadata } from 'next'
import PageWrapper from '@/components/pageWrapper/PageWrapper'
import React from 'react'

export const metadata: Metadata = {
  title: 'Gyb Next js Sign Up Page',
  description: 'Authorization with Next Auth',
  keywords: ['yuhur', 'Sign up page'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function RegisterPage(): React.ReactNode {
  return (
    <PageWrapper>
      <h1>Registration</h1>
      <RegistrationForm />
    </PageWrapper>
  )
}
