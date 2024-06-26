import { Pages } from "@/utils/pages";
import { useIntl } from "react-intl";

export type NavigationItem = {
  url: string;
  name: string;
};

export const useNavigation = (): NavigationItem[] => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage } = useIntl();
  const FairyTalesCategory = formatMessage({ id: "fairy_tales" });
  const ContactPage = formatMessage({ id: "contactUs" });
  return [
    // { url: Pages.FEATURES, name: 'Features' },
    // { url: Pages.BLOG, name: 'Blog' },
    // { url: Pages.KNOWLEDGE, name: 'Knowledge' },
    { url: Pages.FAIRY_TALES, name: FairyTalesCategory },
    { url: Pages.CONTACT_US, name: ContactPage },
  ];
};
