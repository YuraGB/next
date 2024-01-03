import prisma from '$prismaClient/prisma'
import { Tale } from '.prisma/client'

export const getTale = async (id: string): Promise<Tale | undefined | null> => {
  try {
    return await prisma?.tale.findUnique({
      where: {
        id,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
