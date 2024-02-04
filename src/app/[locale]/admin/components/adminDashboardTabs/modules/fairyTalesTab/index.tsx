import React, { type FC, useCallback, useRef } from "react";
import TalesList from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleList/talesList";
import { type Tale } from ".prisma/client";
import TaleModal from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/taleModal";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Button } from "@nextui-org/button";
import { type TFindAllTales } from "@/server/actions/types";

const AdminTalesTab: FC<{ tales: TFindAllTales[] | undefined }> = ({ tales }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editedTale = useRef<Tale | null>(null);
  const onEdit = useCallback(
    (tale: Tale) => {
      editedTale.current = null;
      onOpen();
      editedTale.current = tale;
    },
    [onOpen]
  );

  const createTale = useCallback(() => {
    editedTale.current = null;
    onOpen();
  }, [onOpen]);

  return (
    <article className={"w-full"}>
      <div className={"p-6 text-center"}>
        <Button onClick={createTale}>Create a tale</Button>
      </div>

      <TalesList tales={tales} onEdit={onEdit} />
      <TaleModal isOpen={isOpen} onClose={onClose} initialValues={editedTale.current} />
    </article>
  );
};

export default React.memo(AdminTalesTab);
