const userPopupFields = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    errorMessage: 'Please enter the name',
    required: true,
    additionalClasses: 'w-full',
  },
  {
    type: 'text',
    label: 'Last name',
    name: 'lastName',
    errorMessage: 'Please enter the last name',
    required: true,
    additionalClasses: 'w-full',
  },
  {
    type: 'email',
    label: 'Email',
    name: 'email',
    errorMessage: 'Please enter an email',
    required: true,
    additionalClasses: 'w-full',
  },
  {
    type: 'text',
    label: 'Role',
    name: 'role',
    errorMessage: 'Please enter a role',
    required: true,
    additionalClasses: 'w-full',
    pattern: /^(VISITOR)$|^(USER)$|^(ADMIN)$/,
  },
]

export default userPopupFields
