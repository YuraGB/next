// eslint-disable-next-line import/no-anonymous-default-export
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
    label: 'Category',
    name: 'forAge',
    errorMessage: 'Please enter the category',
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
    pattern:
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    description: 'The url of the image',
    errorMessage: 'Please attach a valid file',
    required: true,
    additionalClasses: 'w-full',
  },

  {
    type: 'textarea',
    label: 'Content',
    name: 'content',
    errorMessage: 'Please enter a content',
    required: true,
    additionalClasses: 'w-full',
  },
]
