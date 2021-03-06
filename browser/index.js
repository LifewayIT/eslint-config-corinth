const { pluginConfigs } = require('../utils/plugins');

module.exports = {
  extends: [
    require.resolve('../base/index.js'),
    ...pluginConfigs('browser', __dirname, [
      'import',
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
  }
};
