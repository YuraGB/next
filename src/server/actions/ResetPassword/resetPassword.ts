"use server";
import prisma from "$prismaClient/prisma";
import { createToken } from "@/utils/createToken";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const resetPassword = (userId: string) => {
  const token = createToken();
  try {
    return prisma?.resetPasswordRequest.create({
      data: {
        token,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        user: {
          connect: {
            id: userId,
          },
        },
      },
      select: {
        token: true,
      },
    }) as Promise<{ token: string }> | undefined;
  } catch (e) {
    return {
      isError: true,
      message: (e as Error).message,
    };
  }
};
