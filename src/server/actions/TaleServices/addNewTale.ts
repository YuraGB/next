"use server";
import prisma from "$prismaClient/prisma";
import { type Tale } from ".prisma/client";
import { TaleSchema, type TCreateTale } from "@/server/actions/TaleServices/types";

export type TCreateTaleResponse = Pick<Tale, "id" | "title"> | undefined;

const createTale = async (newTale: TCreateTale): Promise<TCreateTaleResponse> => {
  if (!TaleSchema.safeParse(newTale).success) {
    throw new Error("Not all tale data provided");
  }

  try {
    return await prisma.tale.create({
      data: {
        content: newTale.content,
        shortDescription: newTale.shortDescription,
        mainImage: {
          create: {
            url: newTale.mainImage.url,
            thumbnailUrl: newTale.mainImage.thumbnailUrl ?? "",
          },
        },
        forAge: newTale.forAge,
        title: newTale.title,
        images: {
          create: newTale.images,
        },
        categoryTale: {
          connect: {
            id: newTale.categoryTaleId,
          },
        },
      },
      select: {
        id: true,
        title: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error creating tale");
  }
};

export default createTale;
