module.exports = {
  plugins: [
    "@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/no-use-before-define": ["error", { "classes": false }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": ["error", { "args": "none", "ignoreRestSiblings": true }],
    "@typescript-eslint/explicit-function-return-type": "off",
  
    'import/extensions': ['warn', 'always', {
      js: 'never',
      ts: 'never'
    }]
  },
  "settings": {
    "import/extensions": [".js", ".ts"]
  }
}
