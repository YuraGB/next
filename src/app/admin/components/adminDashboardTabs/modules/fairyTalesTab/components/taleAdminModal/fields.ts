export default [
  {
    type: 'text',
    label: 'Title',
    name: 'title',
    errorMessage: 'Please enter the title',
    required: true,
    additionalClasses: 'w-full',
  },
  {
    type: 'text',
    label: 'Short description',
    name: 'shortDescription',
    errorMessage: 'Please enter a short description',
    required: true,
    additionalClasses: 'w-full',
  },

  {
    type: 'text',
    name: 'mainImage',
    label: 'Main image',
    description: 'The url of the image',
    errorMessage: 'Please attach a valid file',
    required: true,
    additionalClasses: 'w-full',
  },

  {
    type: 'textarea',
    label: 'content',
    name: 'Content',
    errorMessage: 'Please enter a content',
    required: true,
    additionalClasses: 'w-full',
  },
]
