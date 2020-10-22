module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended', // now bundled in with ts-eslint/recommended
    'plugin:@typescript-eslint/recommended'
    // also ts-eslint/recommended-requiring-type-checking ?
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { 'classes': false }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { 'args': 'none', 'ignoreRestSiblings': true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
