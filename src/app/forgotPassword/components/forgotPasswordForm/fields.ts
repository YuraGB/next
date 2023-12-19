// eslint-disable-next-line import/no-anonymous-default-export
import { emailPattern } from '@/utils/validation/patterns'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    type: 'text',
    label: 'email',
    name: 'email',
    required: true,
    pattern: emailPattern,
    errorMessage: 'Please enter a valid email',
    description:
      'The  email letter with password recovery will be sent on this email address',
  },
]
