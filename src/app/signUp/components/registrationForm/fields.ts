// Login form fields

// eslint-disable-next-line import/no-anonymous-default-export
import { emailPattern, requirePattern } from '@/utils/validation/patterns'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    type: 'text',
    label: 'First name',
    name: 'firstName',
    errorMessage: 'Please enter a valid name',
    pattern: requirePattern,
    required: true,
    additionalClasses: 'w-[48%] mr-auto',
  },
  {
    type: 'text',
    label: 'Last name',
    name: 'lastName',
    errorMessage: 'Please enter a valid name',
    required: true,
    pattern: requirePattern,
    additionalClasses: 'w-[48%]',
  },
  {
    type: 'email',
    label: 'email',
    name: 'email',
    errorMessage: 'Please enter a valid name',
    required: true,
    pattern: emailPattern,
    additionalClasses: 'w-full',
  },
  {
    type: 'password',
    label: 'password',
    name: 'password',
    required: true,
    pattern: requirePattern,
    errorMessage: 'Incorrect password',
    autoComplete: 'on',
    additionalClasses: 'w-full',
  },
]
