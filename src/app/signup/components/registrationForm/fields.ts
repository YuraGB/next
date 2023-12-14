// Login form fields

// eslint-disable-next-line import/no-anonymous-default-export
import { emailPattern, requirePattern } from '@/utils/validation/patterns'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    type: 'text',
    label: 'firstName',
    errorMessage: 'Please enter a valid name',
    pattern: requirePattern,
    required: true,
    additionalClasses: 'w-[48%] mr-auto',
  },
  {
    type: 'text',
    label: 'lastName',
    errorMessage: 'Please enter a valid name',
    required: true,
    pattern: requirePattern,
    additionalClasses: 'w-[48%]',
  },
  {
    type: 'text',
    label: 'email',
    errorMessage: 'Please enter a valid name',
    required: true,
    pattern: emailPattern,
    additionalClasses: 'w-full',
  },
  {
    type: 'password',
    label: 'password',
    required: true,
    pattern: requirePattern,
    errorMessage: 'Incorrect password',
    autoComplete: 'on',
    additionalClasses: 'w-full',
  },
]
