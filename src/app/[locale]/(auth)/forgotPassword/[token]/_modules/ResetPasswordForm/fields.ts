export default [
  {
    type: "text",
    name: "password",
    description: "New password",
    placeholder: "Enter new password",
    required: true,
    minLength: 8,
    errorMessage: "Password must be at least 8 characters long",
    maxLength: 30,
    label: "New password",
  },
  {
    type: "text",
    name: "confirmPassword",
    label: "Confirm Password",
    errorMessage: "Passwords do not match",
    description: "Confirm Password",
    placeholder: "Confirm new password",
    required: true,
    minLength: 8,
    maxLength: 30,
  },
];
