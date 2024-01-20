'use server'
import prisma from '$prismaClient/prisma'
import { Tale } from '.prisma/client'

export const updateTale = async (
  id: string,
  data: Partial<Tale>
): Promise<Tale | undefined> => {
  try {
    return await prisma.tale.update({
      where: { id },
      data: {
        ...data,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
