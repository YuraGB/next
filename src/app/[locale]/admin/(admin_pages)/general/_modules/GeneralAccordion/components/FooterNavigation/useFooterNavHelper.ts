import { Pages } from "@/utils/pages";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useFooterNavHelper = () => {
  return Object.entries(Pages).map(([name, url]) => {
    return {
      name,
      url,
    };
  });
};
