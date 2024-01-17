'use server'
import prisma from '$prismaClient/prisma'
export const getAllFairyTales = async () => {
  try {
    return prisma?.tale.findMany({
      include: {
        categoryTale: {
          select: {
            name: true,
          },
        },
      },
    })
  } catch (e) {
    console.log(e)
  }
}
