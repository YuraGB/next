import { Select, SelectItem } from "@nextui-org/select";
import React, { type ReactNode } from "react";

type TSelectItemName = {
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    defaultValue: string,
    secondFieldValidation: boolean
  ) => void;
  urlRef: React.RefObject<HTMLInputElement>;
  url: string;
  selectRef: React.RefObject<HTMLSelectElement>;
};

const SelectItemName = ({ name, urlRef, url, onChange, selectRef }: TSelectItemName): ReactNode => {
  return (
    <Select
      label={"Social network"}
      isRequired={true}
      ref={selectRef}
      name={"name"}
      onChange={(e) => {
        onChange(e, name, urlRef.current?.value === url);
      }}
      defaultSelectedKeys={[name]}
    >
      <SelectItem key={"Facebook"} value="Facebook">
        Facebook
      </SelectItem>
      <SelectItem key={"Twitter"} value="Twitter">
        Twitter
      </SelectItem>
      <SelectItem key={"Instagram"} value="Instagram">
        Instagram
      </SelectItem>
      <SelectItem key={"Google"} value="Google">
        Google
      </SelectItem>
    </Select>
  );
};

export default SelectItemName;
