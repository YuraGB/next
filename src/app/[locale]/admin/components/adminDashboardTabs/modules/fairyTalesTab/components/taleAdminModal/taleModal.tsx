"use client";
import React, { memo } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useTaleModal } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/useTaleModal";
import { type Tale } from ".prisma/client";
import ImagesInputs from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/imagesInputs/imagesInputs";
import { FormattedMessage } from "react-intl";
import CategorySelect from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/categorySelect/CategorySelect";

type propsInit = {
  initialValues: Tale | null;
};
const TaleModal = ({
  isOpen = false,
  onClose = () => undefined,
  initialValues = null,
}: { isOpen: boolean; onClose: () => void } & propsInit) => {
  const { handleSubmit, register, onSubmit, formFields } = useTaleModal(initialValues, onClose);

  return (
    <Modal size={"5xl"} isOpen={isOpen} onClose={onClose} className={"max-h-full overflow-auto"}>
      <ModalContent>
        {(onCl) => (
          <React.Fragment>
            <ModalHeader className="flex flex-col gap-1">
              {initialValues ? (
                <FormattedMessage id={"modal.admin.editTale"} />
              ) : (
                <FormattedMessage id={"modal.admin.addTale"} />
              )}
            </ModalHeader>
            <ModalBody>
              <form
                className={"mt-3 flex w-full max-w-xl flex-wrap bg-white p-4"}
                aria-label={"registration form"}
                onSubmit={handleSubmit(onSubmit)}
              >
                {formFields}
                <CategorySelect register={register} />
                <ImagesInputs register={register} initialImages={initialValues?.images} />
                <Button
                  variant={"flat"}
                  color={"primary"}
                  fullWidth={true}
                  className={"mb-4"}
                  type={"submit"}
                >
                  {initialValues ? "Edit the tale" : "Create a fairy tale"}
                </Button>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onCl}>
                Close
              </Button>
            </ModalFooter>
          </React.Fragment>
        )}
      </ModalContent>
    </Modal>
  );
};

export default memo(TaleModal);
