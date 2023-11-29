// import { signIn } from 'next-auth/react'
import LoginForm from '@/modules/loginForm/LoginForm'
import PageWrapper from '@/components/pageWrapper/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Login Page',
  description: 'testing Nextjs 14 Login page',
}

export default function Login(/*props: {
  searchParams: { callbackUrl: string }
}*/) {
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

      <LoginForm />
      {/*<form onSubmit={onSubmit}>*/}
      {/*  <button type={'submit'}> click</button>*/}
      {/*</form>*/}
    </PageWrapper>
  )
}
