module.exports = {
  extends: [
    require.resolve('../base/index.js'),
    'plugin:import/react',
    require.resolve('./react.js'),
    require.resolve('./react-hooks.js'),
    require.resolve('./jsx-a11y.js'),
    require.resolve('./testing-library.js'),
    require.resolve('./jest-dom.js'),
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true
  },
  rules: {
    'import/extensions': ['warn', 'always', {
      js: 'never',
      jsx: 'never'
    }]
  },
};
