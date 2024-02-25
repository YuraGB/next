import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type Inputs } from "@/modules/types/formTypes";
import fields from "@/app/[locale]/(auth)/forgotPassword/components/forgotPasswordForm/fields";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import { useResetPassword } from "@/app/[locale]/(auth)/forgotPassword/components/forgotPasswordForm/api/resetPasswordApi";
import toast from "react-hot-toast";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<Inputs>>();

  const { mutate: sendEmail, status, error, data: sentEmailData } = useResetPassword();

  const onSubmit: SubmitHandler<Partial<Inputs>> = (data) => {
    sendEmail({
      receiver: data.email!,
      subject: "Reset password",
      react: "ResetEmail", // this is the name of the email template
      baseUrl: window.location.origin,
    });
  };

  useEffect(() => {
    if (sentEmailData) {
      //error catch from findUser or created token or resetPassword
      if ("isError" in sentEmailData) {
        toast.error(sentEmailData.message);
      }

      //success from resend
      if ("data" in sentEmailData) {
        toast.success("Email sent successfully");
      }

      //error from resend
      if ("error" in sentEmailData) {
        console.log(sentEmailData.error);
        toast.error("An error occurred while sending the email");
      }
    }
  }, [sentEmailData]);

  // unKnown error
  useEffect(() => {
    if (error) {
      toast.error("An error occurred while sending the email");
    }
  }, [error]);

  const formFields: React.ReactNode[] = formFieldsMapping(fields, errors, register);

  return {
    formFields,
    handleSubmit,
    onSubmit,
    isValid,
    isLoading: status === "pending",
  };
};
