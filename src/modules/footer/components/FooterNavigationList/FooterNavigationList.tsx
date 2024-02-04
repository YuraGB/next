import { type NavigationItem } from "@/modules/navigation/useNavigation";
import FooterNavigationItem from "@/modules/footer/components/FooterNavigationItem/FooterNavigationItem";
import { type ReactNode } from "react";

type FooterNavigationListProps = {
  navigationList: NavigationItem[] | undefined;
};

const FooterNavigationList = ({ navigationList }: FooterNavigationListProps): ReactNode | null => {
  if (!navigationList?.length) {
    return null;
  }

  return (
    <ul>
      {navigationList.map((navigationItem) => (
        <li key={navigationItem.url} className="mb-2">
          <FooterNavigationItem navigationItem={navigationItem} />
        </li>
      ))}
    </ul>
  );
};

export default FooterNavigationList;
