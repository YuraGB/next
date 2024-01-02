'use server'
import prisma from '$prismaClient/prisma'
export const getAllFairyTales = async () => {
  try {
    return prisma?.tale.findMany()
  } catch (e) {
    console.log(e)
  }
}
