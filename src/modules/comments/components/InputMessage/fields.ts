const commentFields = [
  {
    type: 'textarea',
    label: 'Comment',
    name: 'comment_text',
    errorMessage: 'Please enter a comment',
    required: true,
    additionalClasses: 'w-full',
  },
  {
    type: 'text',
    label: 'user nickname',
    name: 'user_nickname',
    errorMessage: 'Please enter a user nickname',
    required: true,
    additionalClasses: 'w-full',
  },
]

export default commentFields
