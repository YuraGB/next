"use server";
import prisma from "$prismaClient/prisma";
import { type FooterSocials } from ".prisma/client";
import { type TSocialLink } from "@/server/actions/FooterService/FooterSocials/types";

export const createFooterSocial = (data: TSocialLink[]): Promise<FooterSocials> => {
  try {
    return prisma?.footerSocials.create({
      data: {
        socials: {
          create: data,
        },
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error adding social links");
  }
};
