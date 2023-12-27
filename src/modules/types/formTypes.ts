export type Fields = {
  type: string
  required: boolean
  label: string
  name?: string
  errorMessage: string
  isInvalid?: boolean
  pattern?: RegExp
  description?: string
  autoComplete?: string
  additionalClasses?: string
}

export type Inputs = {
  name: string
  email: string
  password: string
  firstName: string
  lastName: string
}
