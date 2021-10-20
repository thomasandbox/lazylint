import { readFile, writeFile } from 'fs/promises'
import { format } from 'prettier'

import { prettierConfigs } from './prettier.config'

export async function runPrettier(path: string) {
  const code = await readFile(path, 'utf8')
  const formattedCode = format(code, {
    parser: 'typescript',
    ...prettierConfigs,
  })
  if (formattedCode.trim() !== '') {
    await writeFile(path, formattedCode)
  }
}
