const { pluginConfigs } = require('../utils/plugins');

module.exports = {
  extends: [
    require.resolve('./eslint.js'),
    ...pluginConfigs([
      'jest',
      'import',
    ])
  ],
};
