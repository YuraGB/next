import { type FC, type ReactNode } from "react";
import { useInputComment } from "@/modules/comments/components/InputMessage/useInputComment";
import { FormattedMessage } from "react-intl";
import { Button } from "@nextui-org/button";

type TProps = {
  isVisible: boolean;
  taleId?: string;
};

const InputMessage: FC<TProps> = ({ isVisible, taleId }): ReactNode | null => {
  const { handleSubmit, onSubmit, fields, status } = useInputComment(taleId);

  if (!isVisible) {
    return null;
  }

  return (
    <form
      className={"mt-3 flex w-full max-w-xl flex-wrap bg-white p-4"}
      aria-label={"registration form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields}

      <Button
        variant={"solid"}
        size={"lg"}
        color={"primary"}
        disabled={status === "pending"}
        isLoading={status === "pending"}
        type="submit"
      >
        <FormattedMessage id={"submit.message"} defaultMessage={"Place the comment"} />
      </Button>
    </form>
  );
};

export default InputMessage;
