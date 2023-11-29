// import { signIn } from 'next-auth/react'
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

export default function Login(props: {
  searchParams: { callbackUrl: string }
}) {
  const redirectUrl = props?.searchParams?.callbackUrl ?? ''
  console.log(redirectUrl)

  // const onSubmit = async (e: SubmitEvent) => {
  //   e.preventDefault()
  //   await signIn('credentials', {
  //     username: 'Yurii',
  //     password: '123',
  //     redirect: true,
  //     callbackUrl: props.searchParams?.callbackUrl,
  //   })
  // }

  return (
    <PageWrapper>
      <h1>Login</h1>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}

      <LoginForm redirectUrl={redirectUrl} />
      {/*<form onSubmit={onSubmit}>*/}
      {/*  <button type={'submit'}> click</button>*/}
      {/*</form>*/}
    </PageWrapper>
  )
}
