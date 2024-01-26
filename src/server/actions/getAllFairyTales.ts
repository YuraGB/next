'use server'
import prisma from '$prismaClient/prisma'
import { TFindAllTales } from '@/server/actions/types'

export const getAllFairyTales = async (): Promise<
  TFindAllTales[] | undefined
> => {
  try {
    return prisma?.tale.findMany({
      include: {
        categoryTale: {
          select: {
            id: true,
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
