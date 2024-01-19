import React, { Suspense } from 'react'
import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ForgotPasswordFormLazy = dynamic(
  () =>
    import(
      '@/app/[locale]/(auth)/forgotPassword/components/forgotPasswordForm/ForgotPasswordForm'
    )
)

export const metadata: Metadata = {
  title: 'Gyb Nextjs Forgot Password Page',
  description: 'testing Nextjs 14 Forgot Password page',
  keywords: ['yuhur', 'Forgot password page'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function ForgotPassword() {
  return (
    <PageWrapper>
      <h1 className={'mb-6'}> Forgot password ?</h1>
      <Suspense fallback={<p>Loading</p>}>
        <ForgotPasswordFormLazy />
      </Suspense>
    </PageWrapper>
  )
}
