import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useRef, useState } from "react";

type SocialItemAdminProps = {
  nameRef: React.RefObject<HTMLSelectElement>;
  urlRef: React.RefObject<HTMLInputElement>;
  canSubmit: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    defaultValue: string,
    secondFieldValidation: boolean
  ) => void;
};

export const useUpdateSocialLink = (): SocialItemAdminProps => {
  const nameRef = useRef<HTMLSelectElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    defaultValue: string,
    secondFieldValidation: boolean
  ): void => {
    const { value } = e.target;
    setCanSubmit(!(defaultValue === value && secondFieldValidation));
  };

  return {
    nameRef,
    urlRef,
    canSubmit,
    onChange,
  };
};
