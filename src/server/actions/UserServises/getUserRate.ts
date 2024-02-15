"use server";
import prisma from "$prismaClient/prisma";

export const getUsers = async ({
  userId,
  taleId,
}: {
  userId: string | null | undefined;
  taleId: string | undefined;
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
}) => {
  if (!userId || !taleId) {
    return null;
  }
  try {
    return await prisma?.user.findUnique({
      where: {
        id: userId,
        rating: {
          some: {
            Tale: {
              some: {
                id: taleId,
              },
            },
          },
        },
      },
      select: {
        rating: {
          select: {
            id: true,
          },
        },
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error getting user rate");
  }
};
