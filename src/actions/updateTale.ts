'use server'
import prisma from '$prismaClient/prisma'
import { Tale } from '.prisma/client'

export const updateTale = async (id: string, data: Partial<Tale>) => {
  try {
    const newData = await prisma.tale.update({
      where: { id },
      data: {
        ...data,
      },
    })

    return newData
  } catch (e) {
    console.log(e)
  }
}
