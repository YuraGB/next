"use server";
import { z } from "zod";
import prisma from "$prismaClient/prisma";
import { type Prisma } from ".prisma/client";
import { type DefaultArgs } from "@prisma/client/runtime/library";
import { type GetResult } from "prisma/prisma-client/runtime/library";

const navLinkSchema = z.object({
  name: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be a string",
  }),
  url: z.string({
    required_error: "URL is required",
    invalid_type_error: "URL must be a string",
  }),
});

export type TNavLinkSchema = z.infer<typeof navLinkSchema>;

export const addFooterNavigation = (
  navLinkData: TNavLinkSchema[]
):
  | Prisma.Prisma__FooterNavigationClient<
      GetResult<
        Prisma.$FooterNavigationPayload<DefaultArgs>,
        {
          data: { navLinks: { create: TNavLinkSchema[] } };
        },
        "create"
      >,
      never,
      DefaultArgs
    >
  | undefined => {
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < navLinkData.length; i++) {
    if (!navLinkSchema.safeParse(navLinkData[i]).success) {
      throw new Error("Invalid data");
    }
  }

  return prisma?.footerNavigation.create({
    data: {
      navLinks: {
        create: navLinkData,
      },
    },
  });
};
