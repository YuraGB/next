import { emailPattern } from "@/utils/validation/patterns";

export default [
  {
    type: "text",
    label: "Email",
    maxLength: 128,
    name: "email",
    required: true,
    pattern: emailPattern,
    errorMessage: "Please enter a valid email",
    description: "The  email letter with password recovery will be sent on this email address",
  },
];
