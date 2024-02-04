"use server";
import prisma from "$prismaClient/prisma";
import { type Tale } from ".prisma/client";
import { z } from "zod";

const TaleSchema = z.object({
  content: z.string(),
  shortDescription: z.string(),
  mainImage: z.string(),
  forAge: z.string(),
  title: z.string(),
  images: z.array(z.string()),
  categoryTaleId: z.string(),
});

export type TCreateTale = z.infer<typeof TaleSchema>;

export type TCreateTaleResponse = Pick<Tale, "id" | "title"> | undefined;

const createTale = async (newTale: TCreateTale): Promise<TCreateTaleResponse> => {
  if (!TaleSchema.safeParse(newTale).success) {
    throw "Not all tale data provided";
  }

  try {
    return await prisma.tale.create({
      data: {
        content: newTale.content,
        shortDescription: newTale.shortDescription,
        mainImage: newTale.mainImage,
        forAge: newTale.forAge,
        title: newTale.title,
        images: newTale.images,
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
