// Login form fields

// eslint-disable-next-line import/no-anonymous-default-export
import { emailPattern } from '@/utils/validation/patterns'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    type: 'text',
    label: 'email',
    name: 'email',
    errorMessage: 'Please enter a valid name',
    required: true,
    pattern: emailPattern,
  },
  {
    type: 'password',
    label: 'password',
    name: 'password',
    required: true,
    errorMessage: 'Incorrect password',
    autoComplete: 'on',
  },
]
