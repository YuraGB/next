// eslint-disable-next-line @typescript-eslint/no-var-requires
const fsPromises = require('fs/promises')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const g = require('glob')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const { glob } = g
const { appendFile, readFile, writeFile } = fsPromises

const start = async () => {
  const schemaFile = path.resolve(__dirname, 'schema.prisma')
  const connectFile = path.resolve(__dirname, 'connect-db.prisma')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const models = await glob('./**/*.prisma', { ignore: '**/connect-db.prisma' })
  const files = [connectFile, ...models]

  await writeFile(schemaFile, '')

  await Promise.all(
    files.map(async (path) => {
      const content = await readFile(path)

      return appendFile(schemaFile, content.toString())
    })
  )
}
start()
