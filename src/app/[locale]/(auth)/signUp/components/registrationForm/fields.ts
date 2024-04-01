// Login form fields

import { emailPattern, requirePattern } from "@/utils/validation/patterns";
import { useIntl } from "react-intl";
type RegistrationField = {
  type: string;
  label: string;
  name: string;
  maxLength?: number;
  required: boolean;
  pattern?: RegExp;
  errorMessage: string;
  autoComplete?: string;
  additionalClasses?: string;
};

export const useRegistrationFields = (): RegistrationField[] => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage } = useIntl();
  return [
    {
      type: "text",
      label: formatMessage({ id: "first.name.input", defaultMessage: "First name" }),
      name: "firstName",
      maxLength: 128,
      errorMessage: formatMessage({
        id: "firstNameFieldError",
        defaultMessage: "Please enter a valid name",
      }),
      pattern: requirePattern,
      required: true,
      additionalClasses: "w-[48%] mr-auto",
    },
    {
      type: "text",
      label: formatMessage({ id: "last.name.input", defaultMessage: "Last name" }),
      maxLength: 128,
      name: "lastName",
      errorMessage: formatMessage({
        id: "lastNameFieldError",
        defaultMessage: "Please enter a valid last name",
      }),
      required: true,
      pattern: requirePattern,
      additionalClasses: "w-[48%]",
    },
    {
      type: "email",
      label: formatMessage({ id: "email.input", defaultMessage: "Email" }),
      maxLength: 128,
      name: "email",
      errorMessage: formatMessage({
        id: "emailFieldError",
        defaultMessage: "Please enter a valid email",
      }),
      required: true,
      pattern: emailPattern,
      additionalClasses: "w-full",
    },
    {
      type: "password",
      label: formatMessage({ id: "password.input", defaultMessage: "Password" }),
      name: "password",
      maxLength: 128,
      required: true,
      pattern: requirePattern,
      errorMessage: formatMessage({
        id: "password.input.error",
        defaultMessage: "Incorrect password",
      }),
      autoComplete: "on",
      additionalClasses: "w-full",
    },
  ];
};
