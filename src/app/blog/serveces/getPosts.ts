'use server'
import { cache } from 'react'
import 'server-only'

//https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#using-react-cache-server-only-and-the-preload-pattern
export const preload = () => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
  void getPublicPosts()
}

export const getPublicPosts = cache(async () => {
  try {
    return prisma?.post.findMany({
      where: { public: true },
      select: {
        title: true,
        id: true,
        image: true,
        publishedAt: true,
        content: true,
        // author: {
        //   select: {
        //     name: true,
        //   },
        // },
      },
    })
  } catch (e) {
    console.log(e)
  }
})

export const getAllPosts = cache(async () => {
  try {
    return prisma?.post.findMany()
  } catch (e) {
    console.log(e)
  }
})
