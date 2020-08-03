module.exports = {
  plugins: [
    'testing-library'
  ],
  extends: ['plugin:testing-library/react'],
  rules: {
    'testing-library/no-debug': 'warn',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'warn',
    'testing-library/prefer-wait-for': 'error',
  }
};
