"use server";
import prisma from "$prismaClient/prisma";
import { type Tale } from ".prisma/client";
import { z } from "zod";

const TaleSchema = z.object({
  content: z.string(),
  shortDescription: z.string(),
  mainImage: z.object({
    url: z.string(),
    thumbnailUrl: z.string().optional(),
    id: z.string().optional(),
  }),
  forAge: z.string(),
  title: z.string(),
  images: z.array(
    z.object({ url: z.string(), thumbnailUrl: z.string(), id: z.string().optional() })
  ),
  categoryTaleId: z.string(),
});

export type TCreateTale = z.infer<typeof TaleSchema>;

export type TCreateTaleResponse = Pick<Tale, "id" | "title"> | undefined;

const createTale = async (newTale: TCreateTale): Promise<TCreateTaleResponse> => {
  if (!TaleSchema.safeParse(newTale).success) {
    console.log(newTale, TaleSchema.parse(newTale));
    throw "Not all tale data provided";
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
