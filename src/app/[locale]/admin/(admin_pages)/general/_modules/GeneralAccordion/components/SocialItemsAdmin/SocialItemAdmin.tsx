import { Input } from "@nextui-org/input";
import React, { type FC } from "react";
import { Button } from "@nextui-org/react";
import { FormattedMessage } from "react-intl";
import { updateSocialLink } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/SocialItemsAdmin/useSocialItemAdmin";

type SocialItemAdminProps = {
  url: string;
  name: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SocialItemAdmin: FC<SocialItemAdminProps> = ({ url, name, onSubmit }) => {
  const { nameRef, urlRef, onChange, canSubmit } = updateSocialLink();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (onSubmit && canSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={"mb-3"}>
      <div className="grid grid-cols-[1fr_1fr_200px] items-center justify-between gap-2">
        <Input
          type="text"
          ref={nameRef}
          name={name}
          isRequired={true}
          className="w-full"
          placeholder="Name"
          defaultValue={name}
          onChange={(e) => {
            onChange(e, name, urlRef.current?.value === url);
          }}
        />
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
          <Button type="submit" color="success" size="lg">
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
