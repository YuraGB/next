import { RegistrationForm } from '@/modules/registrationForm/RegistrationForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gyb Nextjs Sign Up Page',
  description: 'Authorization with Next Auth',
}
export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Registration</h1>
      <RegistrationForm />
    </main>
  )
}
