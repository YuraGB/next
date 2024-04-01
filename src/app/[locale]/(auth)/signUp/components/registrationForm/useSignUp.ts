import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useEffect, useRef } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type Inputs } from "@/modules/types/formTypes";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import { useRegistrationFields } from "./fields";
import validateFields from "@/utils/validation/validateFields";
import { useServiceCreate } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/useServiceCreate";
import { useServiceSignIn } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/useServiceSignIn";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>();

  const fields = useRegistrationFields();

  // save the password to use it in the signIn mutation
  const refPassword = useRef<string | null>(null);

  const { createNewUser, newUserData, onCreateStatus } = useServiceCreate();
  const { signIn, onSignInStatus } = useServiceSignIn();

  const onSubmit: SubmitHandler<Partial<Inputs>> = (data): void => {
    const areAllFieldsFilled = validateFields(data);

    if (areAllFieldsFilled) {
      const newUser = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email ?? "",
        hashPassword: data.password ?? "",
      };

      // save the password to use it in the signIn mutation
      refPassword.current = newUser.hashPassword;

      createNewUser({
        data: newUser,
        //select -> the fields that will return after creation
        select: {
          email: true,
          hashPassword: true,
        },
      });
    }
  };

  useEffect(() => {
    if (newUserData && "email" in newUserData && refPassword.current) {
      signIn({
        email: newUserData.email,
        password: refPassword.current,
      });

      // reset the password
      refPassword.current = null;
    }
  }, [newUserData]);

  const formFields: React.ReactNode[] = formFieldsMapping(fields, errors, register);

  return {
    formFields,
    handleSubmit,
    onSubmit,
    isValid,
    loading: onCreateStatus === "pending" || onSignInStatus === "pending",
  };
};
