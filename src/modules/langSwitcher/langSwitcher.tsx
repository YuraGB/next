"use client";
import React, { type ReactNode } from "react";
import { useLangSwitcher } from "@/modules/langSwitcher/useLangSwitcher";
import { Select, SelectItem } from "@nextui-org/select";

const LangSwitcher = (): ReactNode => {
  const { handleChange, currentLocale } = useLangSwitcher();

  return (
    <Select
      onChange={handleChange}
      defaultSelectedKeys={[currentLocale]}
      aria-labelledby={"language switcher"}
      data-cy={"language-switcher"}
      className={"w-[70px]"}
      size={"sm"}
    >
      <SelectItem
        key={"uk"}
        value={"uk"}
        className={"w-[55px]"}
        aria-labelledby={"Ukraine language switcher"}
      >
        ua
      </SelectItem>
      <SelectItem
        key={"en"}
        value={"en"}
        className={"w-[55px]"}
        aria-labelledby={"English language switcher"}
      >
        en
      </SelectItem>
    </Select>
  );
};

export default React.memo(LangSwitcher);
