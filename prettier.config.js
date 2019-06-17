module.exports = {
  semi: false,
  printWidth: 100,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
  jsxBracketSameLine: true,
  useTabs: false,
  overrides: [
    {
      files: ['packages/admin/**/*.js', 'packages/web/**/*.js', 'packages/api/**/*.js'],
      options: { parser: 'flow' },
    },
    {
      files: ['**/*.json', '**/.prettierrc', '**/.babelrc'],
      options: { parser: 'json' },
    },
    {
      files: 'packages/*/features/step_definitions/**/*.js',
      options: { printWidth: 110 },
    },
  ],
}
