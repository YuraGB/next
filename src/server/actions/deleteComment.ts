"use server";
import prisma from "$prismaClient/prisma";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const deleteComment = (id: string) => {
  try {
    return prisma?.comment.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error deleting comment");
  }
};
