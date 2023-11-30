import LoginForm from '@/modules/loginForm/LoginForm'
import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'

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

export default function Login() {
  return (
    <PageWrapper>
      <h1>Login</h1>
      <LoginForm redirectUrl={'/'} />
    </PageWrapper>
  )
}
