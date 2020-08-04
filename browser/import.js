
module.exports = {
  extends: [
    'plugin:import/react'
  ],
  rules: {
    'import/extensions': ['warn', 'always', {
      js: 'never',
      jsx: 'never'
    }]
  },
};
