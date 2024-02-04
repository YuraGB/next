"use server";
import prisma from "$prismaClient/prisma";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getPosts = async () => {
  try {
    return await prisma?.post.findMany({
      include: {
        author: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Error getting posts");
  }
};
