'use server'
import prisma from '$prismaClient/prisma'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (value: string) => {
  try {
    return await prisma.tale.findMany({
      where: {
        title: {
          contains: value,
        },
      },
      select: {
        title: true,
        id: true,
        categoryTale: true,
        forAge: true,
        mainImage: true,
        content: true,
        shortDescription: true,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
