'use server'
import prisma from '$prismaClient/prisma'
import { replacePasswordToHash } from '@/app/signUp/components/registrationForm/service/util/validateUser'

export type CreateUser = {
  data: {
    name: string
    email: string
    hashPassword: string
  }
  select: {
    email: boolean
    hashPassword: boolean
  }
}

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

export const createUser = async (newUser: CreateUser) => {
  if (prisma === null || prisma === undefined) {
    throw 'prisma absent'
  }

  if (
    !newUser?.data?.email ||
    !newUser?.data?.hashPassword ||
    !newUser?.data?.name
  ) {
    throw 'Not all user data provided'
  }

  const findMatch = await findUser(newUser.data.email)

  if (findMatch) {
    throw 'This email is already registered'
  }

  const userDataWithHashedPassword = replacePasswordToHash(newUser)

  if (userDataWithHashedPassword?.hashPassword) {
    const newUserData = {
      data: userDataWithHashedPassword,
      select: newUser.select,
    }
    try {
      return await prisma.user.create(newUserData)
    } catch (e) {
      console.log(e)
    }
  }

  throw 'Something went wrong'
}
