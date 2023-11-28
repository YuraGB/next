import { ForgotPasswordForm } from '@/modules/forgotPasswordForm/ForgotPasswordForm'

export default function ForgotPassword() {
  return (
    <main className="flex min-h-screen flex-col p-24 items-center">
      <h1 className={'mb-6'}> Forgot password ?</h1>
      <ForgotPasswordForm />
    </main>
  )
}
