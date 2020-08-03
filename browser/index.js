const { pluginConfigs, ifInstalled } = require('../utils/plugins');

module.exports = {
  extends: [
    require.resolve('../base/index.js'),
    ...ifInstalled('browser', 'eslint-plugin-import', 'plugin:import/react'),
    ...pluginConfigs('browser', __dirname, [
      'react',
      'react-hooks',
      'jsx-a11y',
      'testing-library',
      'jest-dom'
    ])
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
