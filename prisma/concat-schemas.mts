import { appendFile, readFile, writeFile } from 'fs/promises'
import { glob } from 'glob'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
