import bcrypt from 'bcrypt'
import { TCreateUser } from '@/server/actions/createUser'

export const passwordToHash = (password: string) => {
  if (!password) {
    throw Error('there is no password provided')
  }

  return bcrypt.hashSync(password, process?.env?.SALT ? +process.env.SALT : 12)
}

export const toComparePasswords = (
  inputPassword: string,
  dbPassword: string
) => {
  if (!inputPassword) {
    throw Error('there is no password provided')
  }

  return bcrypt.compareSync(inputPassword, dbPassword)
}

type NewUser = Pick<TCreateUser, 'data'>

export const replacePasswordToHash = (newUser: NewUser) => {
  if (!newUser?.data) {
    throw 'there is now data about new user'
  }

  const { data } = newUser

  if (data.hashPassword) {
    return Object.assign({}, data, {
      hashPassword: passwordToHash(data.hashPassword),
    })
  }

  return null
}
