"use server";
import prisma from "$prismaClient/prisma";
import { type Tale } from ".prisma/client";
import { type TCreateTale } from "@/server/actions/addNewTale";

export const updateTale = async (id: string, data: TCreateTale): Promise<Tale | undefined> => {
  const { title, images, forAge, categoryTaleId, shortDescription, mainImage, content } = data;

  try {
    return await prisma.tale.update({
      where: { id },
      data: {
        title,
        images,
        forAge,
        shortDescription,
        mainImage: {
          create: {
            url: mainImage.url,
            thumbnailUrl: mainImage.thumbnailUrl ?? "",
          },
        },
        content,
        categoryTale: {
          connect: {
            id: categoryTaleId,
          },
        },
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error updating tale");
  }
};
