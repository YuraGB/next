"use server";
import prisma from "$prismaClient/prisma";
import {
  copyrightUpdateSchema,
  type TCopyrightUpdate,
} from "@/server/actions/FooterService/FooterCopyright/types";
import { type Copyright } from ".prisma/client";

export const updateCopyright = ({ id, data }: TCopyrightUpdate): Promise<Copyright> => {
  if (!copyrightUpdateSchema.safeParse({ id, data }).success) {
    throw new Error("Invalid copyright data");
  }

  try {
    return prisma?.copyright.update({
      where: {
        id,
      },
      data: {
        content: data.content,
        owner: data.owner,
        year: data.year,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error updating social link");
  }
};
