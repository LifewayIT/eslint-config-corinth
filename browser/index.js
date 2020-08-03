const { pluginConfigs } = require('../utils/plugins');

module.exports = {
  extends: [
    require.resolve('../base/index.js'),
    'plugin:import/react',
    ...pluginConfigs([
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
