import { type TFooterNavWithLinks } from "@/server/actions/FooterService/FooterNavigation/types";
import { type FC } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { useFooterNavigation } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/FooterNavigation/useFooterNavigation";
import { Button } from "@nextui-org/react";

const FooterNavigation: FC<{ footerNavigation: TFooterNavWithLinks | undefined | null }> = ({
  footerNavigation,
}) => {
  const { pages, onSubmit, navLinks, isLoading } = useFooterNavigation(footerNavigation);

  return (
    <form onSubmit={onSubmit} className={"flex flex-col gap-2"}>
      <Select
        name={"footer_links"}
        selectionMode="multiple"
        defaultSelectedKeys={navLinks?.map((link) => link.url) ?? []}
      >
        {pages.map((page) => (
          <SelectItem key={page.url} value={page.url}>
            {page.name}
          </SelectItem>
        ))}
      </Select>
      <Button isLoading={isLoading} type="submit" color={"success"}>
        Save navigation
      </Button>
    </form>
  );
};

export default FooterNavigation;
