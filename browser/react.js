module.exports = {
  plugins: [
    'react'
  ],
  extends: [
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],

    'class-methods-use-this': 'off',

    'react/display-name': 'off',
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/no-danger': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/self-closing-comp': 'error',
    'react/sort-comp': ['error', {
      order: [
        'static-variables',
        'instance-variables',
        'everything-else',
        '/^render.+$/',
        'rendering',
      ],
    }],
    'react/jsx-wrap-multilines': 'warn',
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-indent': ['warn', 2],
    'react/no-unused-prop-types': 'warn',
    'react/jsx-tag-spacing': 'error',
    'react/no-array-index-key': 'warn',
    'react/void-dom-elements-no-children': 'error',
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-unused-state': 'warn',
    'react/no-typos': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/no-access-state-in-setstate': 'error',
    'react/button-has-type': 'warn',
    'react/no-this-in-sfc': 'error',
    'react/no-unsafe': ['warn', { checkAliases: true }],
  },

  settings: {
    react: {
      version: 'detect',
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' }
      ]
    }
  }
};