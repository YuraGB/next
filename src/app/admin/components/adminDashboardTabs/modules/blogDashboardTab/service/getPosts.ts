'use server'
import prisma from '$prismaClient/prisma'

export const getPosts = async () => {
  try {
    return await prisma?.post.findMany({
      include: {
        author: true,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
