import { type Prisma } from ".prisma/client";
import prisma from "$prismaClient/prisma";
import { type DefaultArgs } from "@prisma/client/runtime/library";
import { type GetResult } from "prisma/prisma-client/runtime/library";

export const getCopyright = ():
  | Prisma.Prisma__CopyrightClient<
      GetResult<
        Prisma.$CopyrightPayload<DefaultArgs>,
        Prisma.CopyrightFindFirstArgs<DefaultArgs>,
        "findFirst"
      > | null,
      null,
      DefaultArgs
    >
  | undefined => {
  try {
    return prisma?.copyright.findFirst();
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching social links");
  }
};
