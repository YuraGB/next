// Login form fields

import { emailPattern, requirePattern } from "@/utils/validation/patterns";

export default [
  {
    type: "text",
    label: "First name",
    name: "firstName",
    maxLength: 128,
    errorMessage: "Please enter a valid name",
    pattern: requirePattern,
    required: true,
    additionalClasses: "w-[48%] mr-auto",
  },
  {
    type: "text",
    label: "Last name",
    maxLength: 128,
    name: "lastName",
    errorMessage: "Please enter a valid name",
    required: true,
    pattern: requirePattern,
    additionalClasses: "w-[48%]",
  },
  {
    type: "email",
    label: "email",
    maxLength: 128,
    name: "email",
    errorMessage: "Please enter a valid name",
    required: true,
    pattern: emailPattern,
    additionalClasses: "w-full",
  },
  {
    type: "password",
    label: "password",
    name: "password",
    maxLength: 128,
    required: true,
    pattern: requirePattern,
    errorMessage: "Incorrect password",
    autoComplete: "on",
    additionalClasses: "w-full",
  },
];
