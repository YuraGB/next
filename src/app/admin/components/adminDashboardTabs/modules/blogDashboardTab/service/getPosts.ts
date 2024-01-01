'use server'
import prisma from '$prisma'

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
