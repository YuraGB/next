// Login form fields
import { emailPattern } from "@/utils/validation/patterns";
import { useIntl } from "react-intl";

type LoginField = {
  type: string;
  label: string;
  name: string;
  maxLength?: number;
  required: boolean;
  pattern?: RegExp;
  errorMessage: string;
  autoComplete?: string;
};

export const userLoginFields = (): LoginField[] => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage } = useIntl();
  return [
    {
      type: "text",
      label: formatMessage({ id: "email.input", defaultMessage: "Email" }),
      maxLength: 128,
      name: "email",
      errorMessage: formatMessage({
        id: "emailFieldError",
        defaultMessage: "Please enter a valid email",
      }),
      required: true,
      pattern: emailPattern,
    },
    {
      type: "password",
      label: formatMessage({ id: "password.input", defaultMessage: "Password" }),
      maxLength: 128,
      name: "password",
      required: true,
      errorMessage: formatMessage({
        id: "passwordFieldError",
        defaultMessage: "Please enter a valid password",
      }),
      autoComplete: "on",
    },
  ];
};
