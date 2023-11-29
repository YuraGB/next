import React, { lazy, Suspense } from 'react'
import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'

const ForgotPasswordFormLazy = lazy(
  () => import('@/modules/forgotPasswordForm/ForgotPasswordForm')
)

export const metadata: Metadata = {
  title: 'Gyb Nextjs Forgot Password Page',
  description: 'testing Nextjs 14 Forgot Password page',
}

export default function ForgotPassword() {
  return (
    <PageWrapper>
      <h1 className={'mb-6'}> Forgot password ?</h1>
      <Suspense>
        <ForgotPasswordFormLazy />
      </Suspense>
    </PageWrapper>
  )
}
