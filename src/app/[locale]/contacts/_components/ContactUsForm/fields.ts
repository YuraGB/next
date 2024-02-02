// eslint-disable-next-line import/no-anonymous-default-export
import { emailPattern } from '@/utils/validation/patterns'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    type: 'text',
    label: 'Email',
    name: 'email',
    required: true,
    pattern: emailPattern,
    errorMessage: 'Please enter a valid email',
    description: 'The email on what we will answer you back',
  },
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    required: true,
    errorMessage: 'Please enter your name',
  },
  {
    type: 'textarea',
    label: 'Message',
    name: 'message',
    required: true,
    errorMessage: 'Please enter your message',
    placeholder: 'Your message here',
  },
]
