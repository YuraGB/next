'use server'
import prisma from '$prismaClient/prisma'
import { Rating, Tale } from '.prisma/client'

type TaleWithRating = Tale & { rating: Rating | null }
export const getAllFairyTales = async (): Promise<
  TaleWithRating[] | undefined
> => {
  try {
    return prisma?.tale.findMany({
      include: {
        categoryTale: {
          select: {
            name: true,
          },
        },
        rating: true,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
