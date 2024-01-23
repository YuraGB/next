'use server'
import prisma from '$prismaClient/prisma'
import { Rating, Tale } from '.prisma/client'

type TaleWithRating = Tale & { rating: Rating | null }
export const getTale = async (
  id: string
): Promise<TaleWithRating | undefined | null> => {
  try {
    return await prisma?.tale.findUnique({
      where: {
        id,
      },
      include: {
        rating: true,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
