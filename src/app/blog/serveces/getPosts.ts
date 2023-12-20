'use server'
import { cache } from 'react'
import 'server-only'
import prisma from '../../../../lib/prisma'

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
