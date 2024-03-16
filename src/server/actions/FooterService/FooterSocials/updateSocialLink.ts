"use server";
import prisma from "$prismaClient/prisma";
import { type TSocialLink } from "@/server/actions/FooterService/FooterSocials/types";
import { type SocialItem } from ".prisma/client";

export type TUpdateSocialLink = {
  id: string;
  data: TSocialLink;
};

export const useUpdateSocialLink = ({ id, data }: TUpdateSocialLink): Promise<SocialItem> => {
  try {
    return prisma?.socialItem.update({
      where: {
        id,
      },
      data: {
        url: data.url,
        name: data.name,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error updating social link");
  }
};
