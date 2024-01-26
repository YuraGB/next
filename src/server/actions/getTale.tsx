'use server'
import prisma from '$prismaClient/prisma'
import { TaleWithRelations } from '@/server/actions/types'

export type TGetTale = Promise<Partial<TaleWithRelations> | undefined | null>

export const getTale = async (id: string): TGetTale => {
  try {
    return await prisma?.tale.findUnique({
      where: {
        id,
      },
      include: {
        rating: true,
        comments: {
          include: {
            user: true,
          },
        },
      },
    })
  } catch (e) {
    console.log(e)
  }
}
