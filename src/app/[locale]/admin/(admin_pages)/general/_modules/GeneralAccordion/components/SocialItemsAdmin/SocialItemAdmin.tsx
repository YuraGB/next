import { Input } from "@nextui-org/input";
import React, { type FC } from "react";
import { Button } from "@nextui-org/react";
import { FormattedMessage } from "react-intl";
import { updateSocialLink } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/SocialItemsAdmin/useSocialItemAdmin";
import type { TSocialLink } from "@/server/actions/FooterService/FooterSocials/types";
import SelectItemName from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/SocialItemsAdmin/SelectItemName";

type SocialItemAdminProps = {
  url: string;
  name: string;
  id: string;
  isLoading?: boolean;
  onSubmit?: ({ id, data }: { id: string; data: TSocialLink }) => void;
};

const SocialItemAdmin: FC<SocialItemAdminProps> = ({ url, name, onSubmit, id, isLoading }) => {
  const { nameRef, urlRef, onChange, canSubmit } = updateSocialLink();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (onSubmit && canSubmit) {
      onSubmit({
        id,
        data: { url: urlRef.current?.value ?? "", name: nameRef.current?.value ?? "" },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={"mb-3"}>
      <div className="grid grid-cols-[1fr_1fr_200px] items-center justify-between gap-2">
        <SelectItemName name={name} onChange={onChange} urlRef={urlRef} url={url} ref={nameRef} />
        <Input
          type="text"
          ref={urlRef}
          isRequired={true}
          name={url}
          className="w-full"
          placeholder="URL"
          defaultValue={url}
          onChange={(e) => {
            onChange(e, url, nameRef.current?.value === name);
          }}
        />
        {canSubmit && (
          <Button type="submit" color="success" size="lg" isLoading={isLoading}>
            <FormattedMessage
              id={"admin.footer.updateSocial.submit"}
              defaultMessage={"Update social"}
            />
          </Button>
        )}
      </div>
    </form>
  );
};

export default SocialItemAdmin;
