'use server'
import prisma from '$prismaClient/prisma'
import { Tale } from '.prisma/client'

export default (newTale: Tale) => {
  try {
    return prisma.tale.create({
      data: newTale,
    })
  } catch (e) {
    console.log(e)
  }
}
