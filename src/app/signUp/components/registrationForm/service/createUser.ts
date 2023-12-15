'use server'
import prisma from '../../../../../../lib/prisma'

type createUser = {
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

  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
}

export const createUser = async (newUser: createUser) => {
  const findMatch = await findUser(newUser.data.email)

  if (findMatch) {
    throw 'This email is already registered'
  } else {
    return await prisma.user.create(newUser)
  }
}