import prisma from "$prismaClient/prisma";

export const getCountOfAllTales = async (): Promise<number> => {
  try {
    return await prisma?.tale.count();
  } catch (e) {
    console.log(e);
    throw new Error("Error getting count of all tales");
  }
};
