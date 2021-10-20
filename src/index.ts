import { exec } from 'child_process'
import fg from 'fast-glob'

import { runEslint } from './eslint'
import { runPrettier } from './prettier'
;(async () => {
  exec(
    `mv ${process.cwd()}/node_modules/@thomasbox/lazylint/.eslintrc.js ${process.cwd()}/.eslintrc.js`,
  )
  const files = await fg(`${process.cwd()}/src/**/*.{ts,tsx}`)
  files.flatMap(async (file) => {
    await runEslint(file)
    await runPrettier(file)
  })
})()
