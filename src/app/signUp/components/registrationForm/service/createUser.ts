'use server'
import prisma from '../../../../../../lib/prisma'
import log from '../../../../../../netlify/functions/log'

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
  await log(newUser, 3)
  console.log(newUser, 3)
  try {
    const findMatch = await findUser(newUser.data.email)
    await log(findMatch, 4)
    console.log(findMatch, 4)
    if (findMatch) {
      throw 'This email is already registered'
    } else {
      return await prisma.user.create(newUser)
    }
  } catch (e) {
    log(e, 'createUserLogError')
    console.log(e)
  } finally {
    return null
  }
}
