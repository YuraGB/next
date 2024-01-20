'use server'
import prisma from '$prismaClient/prisma'
import { CategoryTale } from '@prisma/client'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (): Promise<CategoryTale[] | undefined> => {
  try {
    return await prisma.categoryTale.findMany()
  } catch (e) {
    console.log(e)
  }
}
