import { useUpdateCopyright } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/api/copyright/useUpdateCopyright";
import toast from "react-hot-toast";
import { type Copyright } from ".prisma/client";
import { useEffect } from "react";
import { useCreateCopyright } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/api/copyright/useCreateCopyright";

// eslint-disable-next-line
export const useCopyright = (
  copyrightBlock: Omit<Copyright, "updatedAt" | "createdAt"> | null | undefined = {
    content: "",
    owner: "",
    year: "",
    id: "",
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
  const { status: updateStatus, mutate: updateCopyright, error } = useUpdateCopyright();
  const {
    status: createStatus,
    mutate: createCopyright,
    error: createError,
  } = useCreateCopyright();
  const { content, owner, year, id } = copyrightBlock ?? {};

  useEffect(() => {
    if (updateStatus === "error" || createStatus === "error") {
      const message = error?.message ?? createError?.message;
      toast.error(message ?? "Error");
    }
  }, [createError, error, updateStatus, createStatus]);

  useEffect(() => {
    if (createStatus === "success" || updateStatus === "success") {
      toast.success("Success");
    }
  }, [createStatus, updateStatus]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      content: formData.get("content") as string,
      owner: formData.get("owner") as string,
      year: formData.get("year") as string,
    };

    if (!id) {
      createCopyright(data);
      return;
    }

    if (data.content !== content || data.owner !== owner || data.year !== year) {
      updateCopyright({ id, data });
    } else {
      toast.error("No changes to update.");
    }
  };

  return {
    onSubmit,
    isLoading: updateStatus === "pending" || createStatus === "pending",
  };
};
