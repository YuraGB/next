"use client";
import { FormattedMessage } from "react-intl";
import { memo, type ReactNode } from "react";
import { type NavigationItem } from "@/modules/navigation/useNavigation";
import FooterNavigationList from "@/modules/footer/components/FooterNavigationList/FooterNavigationList";

const FooterNavigation = ({
  navigationLinks,
}: {
  navigationLinks: NavigationItem[] | [];
}): ReactNode => {
  return (
    <nav>
      <h2 className={"mb-2 text-xl underline"}>
        <FormattedMessage id={"footer.navigation.title"} defaultMessage={"Footer navigation"} />{" "}
      </h2>
      <FooterNavigationList navigationList={navigationLinks} />
    </nav>
  );
};

export default memo(FooterNavigation);
