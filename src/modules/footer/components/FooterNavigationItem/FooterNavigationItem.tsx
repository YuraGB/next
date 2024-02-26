import { type NavigationItem } from "@/modules/navigation/useNavigation";
import Link from "next/link";
import { type ReactNode } from "react";

type FooterNavigationItemProps = {
  navigationItem: NavigationItem;
};

const FooterNavigationItem = ({ navigationItem }: FooterNavigationItemProps): ReactNode => {
  const { url, name } = navigationItem;
  const title = name.toLowerCase().replace("_", " ");
  const firstLetter = title.charAt(0).toUpperCase();
  const restOfTitle = title.slice(1);

  return <Link href={url}>{firstLetter + restOfTitle}</Link>;
};

export default FooterNavigationItem;
