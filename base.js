module.exports = {
  plugins: [
    'jest',
    'import'
  ],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended'
  ],
  env: {
    es6: true,
    jest: true,
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
    'semi': 'error',

    'import/no-extraneous-dependencies': 'error',
    'import/extensions': ['warn', 'always', {
      js: 'never'
    }],

    'jest/expect-expect': 'error',
  },
};
