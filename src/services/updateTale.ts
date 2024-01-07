'use server'
import prisma from '$prismaClient/prisma'
import { Tale } from '.prisma/client'

export const updateTale = (id: string, data: Partial<Tale>) => {
  try {
    return prisma.tale.update({
      where: { id },
      data: {
        ...data,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
