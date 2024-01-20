'use server'
import prisma from '$prismaClient/prisma'
import { CategoryTale } from '@prisma/client'

type SearchTaleResponse = {
  title: string
  id: string
  categoryTale: CategoryTale
  forAge: string
  mainImage: string
  content: string
  shortDescription: string
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  value: string
): Promise<SearchTaleResponse[] | undefined> => {
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
