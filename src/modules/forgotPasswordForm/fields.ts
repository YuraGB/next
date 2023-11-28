export default [
  {
    type: 'text',
    label: 'email',
    isInvalid: true,
    required: true,
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    errorMessage: 'Please enter a valid email',
    description:
      'The  email letter with password recovery will be sent on this email address',
  },
]
