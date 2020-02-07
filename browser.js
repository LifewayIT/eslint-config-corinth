module.exports = {
  extends: [
    require.resolve('./base.js'),
    require.resolve('./react.js')
  ],
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
