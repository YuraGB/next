import { type Image } from ".prisma/client";

export type Fields = {
  type: string;
  required: boolean;
  label: string;
  name: string;
  errorMessage: string;
  isInvalid?: boolean;
  accept?: string;
  pattern?: RegExp;
  description?: string;
  autoComplete?: string;
  additionalClasses?: string;
  defaultValue?: string | null | Image | Date | Image[];
  disabled?: boolean;
  validateCb?: (value: string) => boolean;
  maxLength?: number;
  minLength?: number;
};

export type Inputs = {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
