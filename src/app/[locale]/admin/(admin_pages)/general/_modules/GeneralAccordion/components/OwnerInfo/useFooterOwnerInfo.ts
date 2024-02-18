import type { OwnerInfo } from ".prisma/client";
import { useCreateFooterOwner } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/api/owner/useCreateFooterOwner";
import { useUpdateOwnerInfoMutation } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/api/owner/useUpdateOwnerInfoMutation";
import { type TOwnerInfo } from "@/server/actions/FooterService/FooterOwnerInfo/types";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { canSubmit } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/OwnerInfo/util";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useFooterOwnerInfo = (footerOwnerInfo?: OwnerInfo | null) => {
  const { id, name = "", phone = "", email = "", address = "" } = footerOwnerInfo ?? {};

  const {
    mutate: createOwnerInfo,
    status: statusOwnerCreate,
    error: errorcreateOwnerInfo,
  } = useCreateFooterOwner();

  const {
    mutate: updateOwnerInfo,
    status: statusOwnerUpdate,
    error: errorUpdateOwnerInfo,
  } = useUpdateOwnerInfoMutation();

  useEffect(() => {
    if (statusOwnerCreate === "success" || statusOwnerUpdate === "success") {
      toast.success("Owner info updated successfully");
    }
  }, [statusOwnerUpdate, statusOwnerCreate]);

  useEffect(() => {
    if (errorcreateOwnerInfo ?? errorUpdateOwnerInfo) {
      toast.error("Something went wrong");
    }
  }, [errorcreateOwnerInfo, errorUpdateOwnerInfo]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as TOwnerInfo;

    if (id) {
      const canBeSubmitted = canSubmit(data, { name, phone, email, address });
      if (canBeSubmitted) {
        updateOwnerInfo({ id, data });
      } else {
        toast.error("Nothing to update");
      }
    } else {
      createOwnerInfo(data);
    }
  };

  return {
    onSubmit,
    errorcreateOwnerInfo,
    isLoading: statusOwnerCreate === "pending" || statusOwnerUpdate === "pending",
    errorUpdateOwnerInfo,
  };
};
