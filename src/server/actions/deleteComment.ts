'use server'
import prisma from '$prismaClient/prisma'

export const deleteComment = (id: string) => {
  try {
    return prisma?.comment.delete({
      where: {
        id: id,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
