import { signIn } from 'next-auth/react'
import { Inputs } from '@/modules/types/formTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (data: Partial<Inputs>) => {
  const { email, password } = data
  if (email && password) {
    try {
      return await signIn('credentials', {
        email: email,
        password: password,
        redirect: false,
      })
    } catch (e) {
      throw e
    }
  } else {
    throw 'The email or password is missing'
  }
}
