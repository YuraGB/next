export type User = {
  id: string
  name: string
  password: string
  role: Role
}

export type Role = 'ADMIN' | 'USER' | 'guest' | string
