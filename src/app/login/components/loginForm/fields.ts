// Login form fields

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    type: 'text',
    label: 'name',
    errorMessage: 'Please enter a valid name',
    required: true,
    isInvalid: true,
  },
  {
    type: 'password',
    label: 'password',
    isInvalid: true,
    required: true,
    errorMessage: 'Incorrect password',
    autoComplete: 'on',
  },
]
