// Login form fields
import { emailPattern } from "@/utils/validation/patterns";

export default [
  {
    type: "text",
    label: "Email",
    maxLength: 128,
    name: "email",
    errorMessage: "Please enter a valid name",
    required: true,
    pattern: emailPattern,
  },
  {
    type: "password",
    label: "Password",
    maxLength: 128,
    name: "password",
    required: true,
    errorMessage: "Incorrect password",
    autoComplete: "on",
  },
];
