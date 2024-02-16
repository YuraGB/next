"use server";
import { type Copyright } from ".prisma/client";
import prisma from "$prismaClient/prisma";

export const removeCopyright = async (id: string): Promise<Copyright | undefined> => {
  try {
    return await prisma?.copyright.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error deleting category");
  }
};
