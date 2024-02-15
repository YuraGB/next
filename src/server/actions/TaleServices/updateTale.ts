"use server";
import prisma from "$prismaClient/prisma";
import { type Tale } from ".prisma/client";
import { type TCreateTale } from "@/server/actions/TaleServices/types";

export const updateTale = async (id: string, data: TCreateTale): Promise<Tale | undefined> => {
  const { title, images, forAge, categoryTaleId, shortDescription, mainImage, content } = data;

  const mainImageObj = {
    mainImage: {
      connectOrCreate: {
        where: {
          url: mainImage.url ?? "",
        },
        create: {
          url: mainImage.url ?? "",
          thumbnailUrl: mainImage.thumbnailUrl ?? "",
        },
      },
    },
  };

  const catalogObj = {
    categoryTale: {
      connect: {
        id: categoryTaleId,
      },
    },
  };

  const imagesObj = {
    images: {
      // clear all images
      set: [],
      // connect or create new images
      connectOrCreate: images.map((image) => ({
        where: {
          url: image.url,
        },
        create: {
          url: image.url,
          thumbnailUrl: image.thumbnailUrl,
        },
      })),
    },
  };

  const updateObj = {
    where: { id },
    data: {
      title,
      forAge,
      content,
      shortDescription,
      ...mainImageObj,
      ...imagesObj,
      ...catalogObj,
    },
  };

  try {
    return await prisma.tale.update(updateObj);
  } catch (e) {
    console.log(e);
    throw new Error("Error updating tale");
  }
};
