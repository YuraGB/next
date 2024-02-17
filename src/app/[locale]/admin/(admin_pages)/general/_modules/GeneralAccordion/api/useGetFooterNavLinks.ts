import { useMutation } from "@tanstack/react-query";
import { getFooterNavigation } from "@/server/actions/FooterService/FooterNavigation/getFooterNavigation";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetFooterNavLinks = () => {
  return useMutation({
    mutationFn: () => {
      return getFooterNavigation();
    },
  });
};
