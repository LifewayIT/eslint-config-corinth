module.exports = {
  plugins: [
    'jsx-a11y'
  ],
  extends: [
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/tabindex-no-positive': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to']
    }],
  },
};