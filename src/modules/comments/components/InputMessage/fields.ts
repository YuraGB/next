import { emailPattern } from "@/utils/validation/patterns";

const commentFields = [
  {
    type: "text",
    label: "User nickname",
    name: "name",
    errorMessage: "Please enter your nickname",
    required: true,
    additionalClasses: "w-full",
  },
  {
    type: "text",
    label: "Email",
    name: "email",
    errorMessage: "Please enter your email",
    required: true,
    additionalClasses: "w-full",
    pattern: emailPattern,
  },
  {
    type: "textarea",
    label: "Comment",
    name: "comment",
    errorMessage: "Please enter a comment",
    required: true,
    additionalClasses: "w-full",
  },
];

export default commentFields;
