import { type OwnerInfo } from ".prisma/client";
import { type FC } from "react";
import { useFooterOwnerInfo } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/OwnerInfo/useFooterOwnerInfo";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export type FooterOwnerInfoProps = { footerOwnerInfo?: OwnerInfo | null };

const FooterOwnerInfo: FC<FooterOwnerInfoProps> = ({ footerOwnerInfo }) => {
  const { onSubmit, isLoading } = useFooterOwnerInfo(footerOwnerInfo);
  const { name, email, address, phone } = footerOwnerInfo ?? {};
  console.log("footerOwnerInfo", footerOwnerInfo);
  return (
    <form onSubmit={onSubmit} className={"flex flex-col gap-3"}>
      <Input label={"Owner name"} type="text" name="name" isRequired={true} defaultValue={name} />
      <Input
        label={"Owner address"}
        type="text"
        name="address"
        isRequired={true}
        defaultValue={address}
      />
      <Input
        label={"Owner email"}
        type="text"
        name="email"
        isRequired={true}
        defaultValue={email}
      />
      <Input
        label={"Owner phone"}
        type="text"
        name="phone"
        isRequired={true}
        defaultValue={phone}
      />
      <Button color={"success"} type="submit" isLoading={isLoading}>
        Save
      </Button>
    </form>
  );
};

export default FooterOwnerInfo;
