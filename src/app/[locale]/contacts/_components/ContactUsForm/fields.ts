import { emailPattern } from "@/utils/validation/patterns";
import { useIntl } from "react-intl";

type Field = {
  type: string;
  label: string;
  name: string;
  maxLength?: number;
  required?: boolean;
  pattern?: RegExp;
  errorMessage?: string;
  description?: string;
  placeholder?: string;
};

export const useContactUsFields = (): Field[] => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage } = useIntl();
  return [
    {
      type: "text",
      label: formatMessage({ id: "email.input" }),
      name: "email",
      maxLength: 128,
      required: true,
      pattern: emailPattern,
      errorMessage: formatMessage({ id: "emailFieldError" }),
      description: formatMessage({
        id: "email.field.description",
        defaultMessage: "We'll never share your email with anyone else.",
      }),
    },
    {
      type: "text",
      label: formatMessage({ id: "name.input", defaultMessage: "Name" }),
      name: "name",
      maxLength: 128,
      required: true,
      errorMessage: formatMessage({
        id: "nameFieldError",
        defaultMessage: "Please enter your name",
      }),
    },
    {
      type: "textarea",
      label: formatMessage({ id: "message.input", defaultMessage: "Message" }),
      name: "message",
      maxLength: 512,
      required: true,
      errorMessage: formatMessage({
        id: "messageFieldError",
        defaultMessage: "Please enter your message",
      }),
      placeholder: "Your message here",
    },
  ];
};
