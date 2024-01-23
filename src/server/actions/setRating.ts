'use server'
import prisma from '$prismaClient/prisma'
import { z } from 'zod'

const RatingSchema = z.object({
  rating: z.number(),
  count: z.number(),
})

export type TRating = z.infer<typeof RatingSchema>

export const setRating = async ({
  id,
  data,
}: {
  id: string
  data: TRating
}) => {
  if (!RatingSchema.safeParse(data).success) {
    throw 'Not all rating data provided'
  }

  try {
    return await prisma.tale.update({
      where: { id },
      data: {
        rating: {
          upsert: {
            where: { id },
            create: {
              rating: data.rating,
              count: data.count,
            },
            update: {
              rating: data.rating,
              count: data.count,
            },
          },
        },
      },
    })
  } catch (e) {
    console.log(e)
  }
}
