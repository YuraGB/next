import { type NavigationItem } from "@/modules/navigation/useNavigation";
import Link from "next/link";
import { type ReactNode } from "react";

type FooterNavigationItemProps = {
  navigationItem: NavigationItem;
};

const FooterNavigationItem = ({ navigationItem }: FooterNavigationItemProps): ReactNode => {
  return <Link href={navigationItem.url}>{navigationItem.name}</Link>;
};

export default FooterNavigationItem;
