import type React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type Inputs } from "@/modules/types/formTypes";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import fields from "./fields";
import validateFields from "@/utils/validation/validateFields";
import { createUser } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/createUser";
import toast from "react-hot-toast";
import signInService from "@/app/[locale]/(auth)/login/components/loginForm/service/signInService";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Partial<Inputs>> = async (data) => {
    const areAllFieldsFilled = validateFields(data);

    if (areAllFieldsFilled) {
      const newUser = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email ? data.email : "",
        hashPassword: data.password ? data.password : "",
      };

      const user = await createUser({
        data: newUser,
        //select -> the fields that will return after creation
        select: {
          email: true,
          hashPassword: true,
        },
      });

      if (user?.email && user.hashPassword) {
        const response = await signInService({
          email: user.email,
          password: data.password,
        });

        if (response?.ok) {
          router.push("/");
        }

        if (response?.error) {
          toast.error("The password or email is wrong");
        }
      }
    }
  };

  const formFields: React.ReactNode[] = formFieldsMapping(fields, errors, register);

  return { formFields, handleSubmit, onSubmit, isValid };
};
