'use server'
import prisma from '$prismaClient/prisma'

export const findUser = async (email: string) => {
  if (!email) {
    return null
  }

  if (prisma === null || prisma === undefined) {
    throw 'prisma absent'
  }

  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
}
