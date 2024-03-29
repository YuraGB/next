import { type FC } from "react";
import SocialItemAdmin from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/SocialItemsAdmin/SocialItemAdmin";
import { type FooterSocialLinks } from "@/server/actions/FooterService/FooterSocials/types";
import { FormattedMessage } from "react-intl";
import { useUpdateSocialLinks } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/SocialsBlockAdmin/useUpdateSocialLinks";

type SocialBlockAdminProps = {
  footerSocials: FooterSocialLinks;
};
const SocialBlockAdmin: FC<SocialBlockAdminProps> = ({ footerSocials }) => {
  const { mutate: onUpdate, status } = useUpdateSocialLinks();
  return (
    <article>
      <h3 className={"mb-3 text-center text-xl font-bold"}>
        <FormattedMessage id={"admin.footer.updateSocial"} defaultMessage={"Social links"} />
      </h3>
      {footerSocials.socials.map(({ id, url, name }) => (
        <SocialItemAdmin
          key={id}
          url={url}
          name={name}
          onSubmit={onUpdate}
          isLoading={status === "pending"}
          id={id}
        />
      ))}
    </article>
  );
};

export default SocialBlockAdmin;
