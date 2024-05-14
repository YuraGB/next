import { type SubmitHandler, useForm } from "react-hook-form";
import { useFormFields } from "./fields";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import { type TCreateComment } from "@/server/actions/CommentServises/addComment";
import { useAddCommentService } from "@/modules/comments/components/service/addCommentService";
import { useEffect, useMemo } from "react";
import { getRandomInt } from "@/utils/getRandom";
import { useSession } from "next-auth/react";
import { type User } from "next-auth";

type TSubmitData = {
  comment: string;
  name: string;
  email: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useInputComment = (taleId: string | undefined) => {
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<TSubmitData>>();
  const { data: sessionData } = useSession();
  let fieldsData = useFormFields();

  const { mutate, error, status, data } = useAddCommentService(taleId ?? "");

  const fields = useMemo(() => {
    // if the user is logged in, fill the name and email fields
    if (sessionData?.user) {
      const { email, name } = sessionData.user as User;

      fieldsData = fieldsData.map((field) => {
        if (field.name === "name" && name) {
          setValue("name", name);
          return { ...field, defaultValue: name, disabled: true };
        }
        if (field.name === "email" && email) {
          setValue("email", email);
          return { ...field, defaultValue: email, disabled: true };
        }
        return field;
      });
    }

    return formFieldsMapping(fieldsData, errors, register);
  }, [sessionData?.user?.user, errors, register]);

  useEffect(() => {
    if (status === "success") {
      reset();
    }
  }, [reset, status]);

  // eslint-disable-next-line no-shadow
  const onSubmit: SubmitHandler<Partial<TSubmitData>> = (data) => {
    const { comment, name, email } = data;

    if (taleId && comment && name && email) {
      const commentData: TCreateComment = {
        comment,
        taleId,
        avatar: getRandomInt(17).toString(),
        user: {
          name,
          email,
        },
      };
      mutate(commentData);
    }
  };

  return {
    fields,
    handleSubmit,
    isValid,
    onSubmit,
    error,
    status,
    data,
  };
};
