import { useMutation } from "@tanstack/react-query";
import { type TFooterNavigationSchema } from "@/server/actions/FooterService/FooterNavigation/types";
import { updateFooterNavigation } from "@/server/actions/FooterService/FooterNavigation/updateFooterNavigation";

// eslint-disable-next-line
export const useUpdateFooterNav = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TFooterNavigationSchema }) =>
      updateFooterNavigation(id, data),
  });
};
