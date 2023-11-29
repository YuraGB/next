// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: string
    } & DefaultSession
  }

  interface User {
    role: string
    id: string
  }

  interface DefaultUser {
    role: string
    id: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: string
  }
}
