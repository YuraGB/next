import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useEffect, useRef } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type Inputs } from "@/modules/types/formTypes";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import fields from "./fields";
import validateFields from "@/utils/validation/validateFields";
import { useServiceCreate } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/useServiceCreate";
import { useServiceSignIn } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/useServiceSignIn";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>();

  const refPassword = useRef<string | null>(null);
  const router = useRouter();

  const { createNewUser, newUserData, onCreateStatus } = useServiceCreate();
  const { signIn, signInData, onSignInStatus } = useServiceSignIn();

  const onSubmit: SubmitHandler<Partial<Inputs>> = async (data) => {
    const areAllFieldsFilled = validateFields(data);

    if (areAllFieldsFilled) {
      const newUser = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email ? data.email : "",
        hashPassword: data.password ? data.password : "",
      };

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

    return;
  };

  useEffect(() => {
    if (newUserData && "email" in newUserData && refPassword.current) {
      console.log("newUserData", newUserData);
      console.log("refPassword", refPassword.current);
      signIn({
        email: newUserData.email,
        password: refPassword.current,
      });
    }
  }, [newUserData]);

  useEffect(() => {
    if (signInData?.ok === true) {
      router.push("/");
    }
  }, [signInData]);

  const formFields: React.ReactNode[] = formFieldsMapping(fields, errors, register);

  return {
    formFields,
    handleSubmit,
    onSubmit,
    isValid,
    loading: onCreateStatus === "pending" || onSignInStatus === "pending",
  };
};
