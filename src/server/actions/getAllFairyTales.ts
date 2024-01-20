'use server'
import prisma from '$prismaClient/prisma'
import { Tale } from '.prisma/client'

export const getAllFairyTales = async (): Promise<Tale[] | undefined> => {
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
