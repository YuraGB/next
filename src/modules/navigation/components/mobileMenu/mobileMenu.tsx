import React, { memo } from "react";
import { type NavBarItemType } from "@/modules/navigation/components/types";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";
import ProfileMenuItems from "@/modules/navigation/components/profileMenuItems/profileMenuItems";

type NavItemsProps = {
  items: NavBarItemType[];
  onClose: (isOpen: boolean) => void;
};

const MobileMenu = ({ items, onClose }: NavItemsProps): React.ReactNode | null => {
  if (!items?.length) {
    return null;
  }
  const onCloseHandler = (): void => {
    onClose(false);
  };

  return (
    <NavbarMenu className={"bg-blend-hue"}>
      <div
        className={
          "flex justify-center py-6 [&>ul]:m-auto [&>ul]:max-w-none  [&>ul]:justify-center"
        }
      >
        <ProfileMenuItems />
      </div>
      {items.map((item) => (
        <NavbarMenuItem
          key={item.url}
          title={item.name}
          role={"listitem"}
          aria-label={item.name}
          className={"border-1 border-b-background-100"}
        >
          <Link
            className="flex w-full justify-center text-foreground-200 "
            href={item.url}
            onClick={() => {
              onCloseHandler();
            }}
          >
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default memo(MobileMenu);
