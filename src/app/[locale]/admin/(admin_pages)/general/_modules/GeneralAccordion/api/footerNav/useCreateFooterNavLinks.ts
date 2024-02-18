import { type TFooterNavigationSchema } from "@/server/actions/FooterService/FooterNavigation/types";
import { useMutation } from "@tanstack/react-query";
import { addFooterNavigation } from "@/server/actions/FooterService/FooterNavigation/addFooterNavigation";

// eslint-disable-next-line
export const useCreateFooterNavLinks = () => {
  return useMutation({
    mutationFn: async (data: TFooterNavigationSchema) => {
      await addFooterNavigation(data.navLinks);
    },
  });
};
