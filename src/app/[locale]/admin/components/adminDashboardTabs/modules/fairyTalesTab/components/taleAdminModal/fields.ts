export default [
  {
    type: "text",
    label: "Title",
    maxLength: 128,
    name: "title",
    errorMessage: "Please enter the title",
    required: true,
    additionalClasses: "w-full",
  },
  {
    type: "text",
    label: "Category",
    maxLength: 128,
    name: "forAge",
    errorMessage: "Please enter the category",
    required: true,
    additionalClasses: "w-full",
  },
  {
    type: "text",
    label: "Short description",
    name: "shortDescription",
    maxLength: 512,
    errorMessage: "Please enter a short description",
    required: true,
    additionalClasses: "w-full",
  },

  {
    type: "uploadSingleImage",
    name: "mainImage",
    label: "Main_images",
    pattern:
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    description: "The url of the images",
    errorMessage: "Please attach a valid file",
    required: true,
    additionalClasses: "w-full",
  },

  {
    type: "textarea",
    label: "Content",
    name: "content",
    maxLength: 1028,
    errorMessage: "Please enter a content",
    required: true,
    additionalClasses: "w-full",
  },
];
