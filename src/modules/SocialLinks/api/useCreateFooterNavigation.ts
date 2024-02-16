import { useMutation } from "@tanstack/react-query";
import { createFooterSocial } from "@/server/actions/FooterService/FooterSocials/addSocialLinks";
import { type TSocialLink } from "@/server/actions/FooterService/FooterSocials/types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCreateFooterNavigation = () => {
  const { mutate } = useMutation({
    mutationKey: ["createFooterNavigation"],
    mutationFn: (data: TSocialLink[]) => {
      return createFooterSocial(data);
    },
  });

  return {
    createFooterSocialMutation: mutate,
  };
};
