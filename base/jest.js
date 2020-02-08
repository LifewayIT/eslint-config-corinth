
module.exports = {
  plugins: [
    'jest'
  ],
  extends: [
    'plugin:jest/recommended'
  ],
  env: {
    jest: true,
  },
  rules: {
    'jest/expect-expect': 'error',
  },
};
