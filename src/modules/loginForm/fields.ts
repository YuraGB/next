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
    type: 'text',
    label: 'email',
    isInvalid: true,
    required: true,
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    errorMessage: 'Please enter a valid email',
  },
]
