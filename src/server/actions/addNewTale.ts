'use server'
import prisma from '$prismaClient/prisma'
import { Tale } from '.prisma/client'

const createTale = async (newTale: Tale) => {
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
    })
  } catch (e) {
    console.log(e)
  }
}

export default createTale
