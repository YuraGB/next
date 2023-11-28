import { RegistrationForm } from '@/modules/registrationForm/RegistrationForm'

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Registration</h1>
      <RegistrationForm />
    </main>
  )
}
