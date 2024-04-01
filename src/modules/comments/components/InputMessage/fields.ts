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
  additionalClasses?: string;
};

export const useFormFields = (): Field[] => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage } = useIntl();
  return [
    {
      type: "text",
      label: formatMessage({ id: "user.nickname", defaultMessage: "User nickname" }),
      name: "name",
      errorMessage: formatMessage({
        id: "nickNameFieldError",
        defaultMessage: "Please enter your nickname",
      }),
      required: true,
      additionalClasses: "w-full",
    },
    {
      type: "text",
      label: formatMessage({ id: "email.input", defaultMessage: "Email" }),
      name: "email",
      errorMessage: formatMessage({
        id: "emailFieldError",
        defaultMessage: "Please enter your email",
      }),
      required: true,
      additionalClasses: "w-full",
      pattern: emailPattern,
    },
    {
      type: "textarea",
      label: formatMessage({ id: "comment.field", defaultMessage: "Comment" }),
      name: "comment",
      errorMessage: formatMessage({
        id: "commentFieldError",
        defaultMessage: "Please enter a comment",
      }),
      required: true,
      additionalClasses: "w-full",
    },
  ];
};
