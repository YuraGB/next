'use server'
import prisma from '$prismaClient/prisma'
import { Tale } from '.prisma/client'

export default async (newTale: Tale) => {
  try {
    return await prisma.tale.create({
      data: newTale,
    })
  } catch (e) {
    console.log(e)
  }
}
