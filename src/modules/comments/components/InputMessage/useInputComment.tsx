import { type SubmitHandler, useForm } from "react-hook-form";
import commentFields from "./fields";
import formFieldsMapping from "@/modules/utils/formFieldsMapping";
import { type TCreateComment } from "@/server/actions/addComment";
import { useAddCommentService } from "@/modules/comments/components/service/addCommentService";
import { useEffect } from "react";

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
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Partial<TSubmitData>>();

  const { mutate, error, status, data } = useAddCommentService(taleId ?? "");

  const fields = formFieldsMapping(commentFields, errors, register);

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
