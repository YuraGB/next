'use server'
import prisma from '$prismaClient/prisma'

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  try {
    return await prisma.categoryTale.findMany()
  } catch (e) {
    console.log(e)
  }
}
