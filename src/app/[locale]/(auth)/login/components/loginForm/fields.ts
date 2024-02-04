// Login form fields
import { emailPattern } from "@/utils/validation/patterns";

export default [
  {
    type: "text",
    label: "email",
    maxLength: 128,
    name: "email",
    errorMessage: "Please enter a valid name",
    required: true,
    pattern: emailPattern,
  },
  {
    type: "password",
    label: "password",
    maxLength: 128,
    name: "password",
    required: true,
    errorMessage: "Incorrect password",
    autoComplete: "on",
  },
];
