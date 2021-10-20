import { ESLint } from 'eslint'
import { readFile, writeFile } from 'fs/promises'

const eslint = new ESLint({ fix: true })

export async function runEslint(path: string) {
  const code = await readFile(path, 'utf8')
  const results = await eslint.lintText(code, { filePath: path })
  results.flatMap(async (result) => {
    if (0 < result.messages.length) {
      result.messages.flatMap((message) => {
        console.log(
          '\x1b[36m',
          `${result.filePath}:${message.line}:${message.column} -`,
          '\x1b[37m',
          `${message.message} (${message.ruleId})`,
        )
      })
    }
    if (result.source && result.source.trim() !== '') {
      await writeFile(path, result.source)
    }
  })
}
