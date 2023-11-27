'use client'
import { signIn } from 'next-auth/react'

export default function Login(props: {
  searchParams: { callbackUrl: string }
}) {
  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    await signIn('credentials', {
      username: 'Yurii',
      password: '123',
      redirect: true,
      callbackUrl: props.searchParams?.callbackUrl,
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Login</h1>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <form onSubmit={onSubmit}>
        <button type={'submit'}> click</button>
      </form>
    </main>
  )
}
