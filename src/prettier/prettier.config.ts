import { Options } from 'prettier'

export const prettierConfigs: Options = {
  printWidth: 80, // Specify the line length that the printer will wrap on.
  tabWidth: 2, // Specify the number of spaces per indentation-level.
  useTabs: false, // Indent lines with tabs instead of spaces.
  semi: false, // Print semicolons at the ends of statements.
  singleQuote: true, // Use single quotes instead of double quotes.
  quoteProps: 'as-needed', // Change when properties in objects are quoted.
  jsxSingleQuote: true, // Use single quotes instead of double quotes in JSX.
  trailingComma: 'all', // Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)
  bracketSpacing: true, // Print spaces between brackets in object literals.
  bracketSameLine: false, // Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
  arrowParens: 'always', // Include parentheses around a sole arrow function parameter.
  rangeStart: 0, // Format only a segment of a file.
  rangeEnd: Infinity,
  requirePragma: false, // Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file. This is very useful when gradually transitioning large, unformatted codebases to Prettier.
  insertPragma: false, // Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with Prettier.
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto', // Control whether Prettier formats quoted code embedded in the file.
}
