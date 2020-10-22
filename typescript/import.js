module.exports = {
  plugins: [
    'import'
  ],
  extends: [
    'plugin:import/typescript'
  ],
  rules: {
    'import/extensions': ['warn', 'always', {
      js: 'never',
      ts: 'never'
    }]
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts'],
    // },
  }
}
