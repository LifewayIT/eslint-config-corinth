const { ifInstalled } = require('../utils/package');

module.exports = {
  extends: [
    require.resolve('../base/index.js'),
    'plugin:import/react',
    require.resolve('./react.js'),
    require.resolve('./react-hooks.js'),
    require.resolve('./jsx-a11y.js'),
    ifInstalled('eslint-plugin-testing-library', require.resolve('./testing-library.js')),
    ifInstalled('eslint-plugin-jest-dom', require.resolve('./jest-dom.js')),
  ].filter(x => x != null),
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
