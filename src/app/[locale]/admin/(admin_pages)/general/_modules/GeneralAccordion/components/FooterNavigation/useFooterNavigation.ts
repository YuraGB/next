import { type TFooterNavWithLinks } from "@/server/actions/FooterService/FooterNavigation/types";
import { useUpdateFooterNav } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/api/footerNav/useUpdateFooterNav";
import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useEffect } from "react";
import { useCreateFooterNavLinks } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/api/footerNav/useCreateFooterNavLinks";
import { useFooterNavHelper } from "@admin/(admin_pages)/general/_modules/GeneralAccordion/components/FooterNavigation/useFooterNavHelper";
import toast from "react-hot-toast";

export const useFooterNavigation = (
  footerNavigation: TFooterNavWithLinks | undefined | null
): {
  navLinks: Array<{ name: string; url: string }> | undefined;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  pages: Array<{ name: string; url: string }>;
  isLoading: boolean;
} => {
  const { id, navLinks } = footerNavigation ?? {};
  const pages: Array<{ name: string; url: string }> = useFooterNavHelper();

  const {
    mutate: updateFooterNavHandler,
    status: statusUpdate,
    error: errorUpdate,
  } = useUpdateFooterNav();
  const {
    mutate: createFooterNav,
    status: statusCreate,
    error: errorCreate,
  } = useCreateFooterNavLinks();

  useEffect(() => {
    if (errorCreate ?? errorUpdate) {
      const errorMessages = [errorCreate, errorUpdate].filter(Boolean).join(", ");
      toast.error(errorMessages);
    }
  }, [errorCreate, errorUpdate]);

  useEffect(() => {
    if (statusCreate === "success" || statusUpdate === "success") {
      toast.success("Navigation saved successfully");
    }
  }, [statusCreate, statusUpdate]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedlinks = formData.getAll("footer_links");

    const linksToSave = pages.filter((page) => selectedlinks.includes(page.url));

    if (linksToSave.length === 0) {
      toast.error("Please select at least one link");
      return;
    }

    if (id) {
      // update footer navigation
      updateFooterNavHandler({ id, data: { navLinks: linksToSave } });
    } else {
      // create new footer navigation
      createFooterNav({ navLinks: linksToSave });
    }
  };

  return {
    onSubmit,
    navLinks,
    pages,
    isLoading: statusCreate === "pending" || statusUpdate === "pending",
  };
};
