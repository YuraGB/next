import { NavbarContent } from "@nextui-org/navbar";
import React, { memo } from "react";
import { type NavBarItemType } from "@/modules/navigation/components/types";
import MenuItem from "@/modules/navigation/components/menuItem/menuItem";

type NavItemsProps = {
  items: NavBarItemType[];
};

const MenuList = ({ items }: NavItemsProps): React.ReactNode | null => {
  if (!items?.length) {
    return null;
  }

  return (
    <NavbarContent className="mr-auto hidden gap-4 sm:flex" justify="center">
      {items.map((item) => (
        <MenuItem key={item.url} item={item} />
      ))}
    </NavbarContent>
  );
};

export default memo(MenuList);
