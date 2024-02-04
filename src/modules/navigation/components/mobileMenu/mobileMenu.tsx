import React, { memo } from "react";
import { type NavBarItemType } from "@/modules/navigation/components/types";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";

type NavItemsProps = {
  items: NavBarItemType[];
};

const MobileMenu = ({ items }: NavItemsProps): React.ReactNode | null => {
  if (!items?.length) {
    return null;
  }

  return (
    <NavbarMenu>
      {items.map((item) => (
        <NavbarMenuItem key={item.url} title={item.name} role={"listitem"} aria-label={item.name}>
          <Link className="w-full" href={item.url}>
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default memo(MobileMenu);
