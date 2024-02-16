"use server";
import prisma from "$prismaClient/prisma";
import { type FooterSocialLinks } from "@/server/actions/FooterService/FooterSocials/types";

export const getSocialLinks = (): Promise<FooterSocialLinks[]> => {
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
