import { type TSocialLink } from "@/server/actions/FooterService/FooterSocials/types";
import prisma from "$prismaClient/prisma";

export type TUpdateSocialLinks = {
  id: string;
  data: TSocialLink[];
};

// eslint-disable-next-line
export const updateSocialLinks = ({ id, data }: TUpdateSocialLinks) => {
  try {
    return prisma?.footerSocials.update({
      where: {
        id,
      },
      data: {
        socials: {
          set: [],
          connectOrCreate: data.map(({ url, name }) => ({
            where: {
              url,
            },
            create: {
              url,
              name,
            },
          })),
        },
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error updating social links");
  }
};
