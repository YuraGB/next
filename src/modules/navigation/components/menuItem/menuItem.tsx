import Link from "next/link";
import { NavbarItem } from "@nextui-org/navbar";
import React, { memo } from "react";
import { type NavBarItemType } from "@/modules/navigation/components/types";
import { usePathname } from "next/navigation";
import { useIntl } from "react-intl";

type NavItemProps = {
  item: NavBarItemType;
};

const MenuItem = ({ item }: NavItemProps): React.ReactNode | null => {
  const pathname = usePathname();
  const { locale } = useIntl();

  if (!item) {
    return null;
  }

  const { url, name } = item;

  const isActive: boolean = locale !== "uk" ? pathname === url : pathname === `/${locale}${url}`;

  return (
    <NavbarItem isActive={isActive}>
      <Link color="foreground" href={url}>
        {name}
      </Link>
    </NavbarItem>
  );
};

export default memo(MenuItem);
