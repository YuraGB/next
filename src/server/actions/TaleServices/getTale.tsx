"use server";
import prisma from "$prismaClient/prisma";
import { type TaleWithRelations } from "@/server/actions/types";

export type TGetTale = Promise<Partial<TaleWithRelations> | undefined | null>;

export const getTale = async (id: string): TGetTale => {
  if (!id) {
    throw new Error("id is required");
  }

  try {
    return await prisma?.tale.findUnique({
      where: {
        id,
      },
      include: {
        rating: true,
        mainImage: true,
        images: true,
        comments: {
          include: {
            user: true,
          },
        },
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error getting tale");
  }
};
