"use server";
import prisma from "$prismaClient/prisma";
import { type SocialLinks } from "@/server/actions/FooterService/FooterSocials/types";

export const getSocialLinks = (): Promise<SocialLinks[]> => {
  try {
    return prisma?.footerSocials.findMany({
      include: {
        socials: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching social links");
  }
};
