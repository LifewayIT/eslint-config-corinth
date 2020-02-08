
module.exports = {
  plugins: [
    'import'
  ],
  extends: [
    'plugin:import/recommended'
  ],
  rules: {
    'import/no-extraneous-dependencies': 'error',
    'import/extensions': ['warn', 'always', {
      js: 'never'
    }],
  },
};
