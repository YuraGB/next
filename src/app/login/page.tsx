import LoginForm from '@/app/login/components/loginForm/LoginForm'
import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Login Page',
  description: 'testing Nextjs 14 Login page',
  keywords: ['yuhur', 'login page'],
  authors: [
    {
      name: 'Yurii Hurianov',
      url: 'https://www.linkedin.com/in/yurii-hurianov-685373172/',
    },
  ],
}

export default function Login(): React.ReactNode {
  return (
    <PageWrapper>
      <h1>Login</h1>
      <LoginForm redirectUrl={'/'} />
    </PageWrapper>
  )
}
