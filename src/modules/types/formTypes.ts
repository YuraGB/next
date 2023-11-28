export type Fields = {
  type: string
  required: boolean
  label: string
  errorMessage: string
  isInvalid: boolean
  pattern?: RegExp
  description?: string
}

export type Inputs = {
  name: string
  email: string
}
