module.exports = {
  extends: [
    'eslint:recommended',
  ],
  env: {
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['warn', 'only-multiline'],
    'eol-last': ['error', 'always'],
    'indent': ['warn', 2],
    'no-console': 'error',
    'no-trailing-spaces': 'warn',
    'no-unused-vars': ['error', { 'args': 'none', 'ignoreRestSiblings': true }],
    'prefer-const': 'warn',
    'quotes': ['warn', 'single'],
    'semi': 'error'
  }
};
