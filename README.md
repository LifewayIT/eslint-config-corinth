# eslint-config-corinth

The ESLint config for the LifewayIT Corinth team.

## Usage

For a complete overview of ESLint shareable configs, see the ESLint [docs](https://eslint.org/docs/developer-guide/shareable-configs).

This project is currently not released in any NPM repository, but NPM allows you to install dependencies straight from a GitHub repository ([docs](https://docs.npmjs.com/files/package.json#github-urls)).

To use, just extend from this config in your `.eslintrc`:

```json
{
  "extends": ["corinth"]
}
```

Optionally, you can extend any of the other provided configs ([see all below](#Configs)) and add/override additional rules:

```json
{
  "extends": [
    "corinth/browser"
  ],
  "rules": {
    // add/override rules here
  }
}
```

## Configs

This config exposes several configs:
 - `base`: The base config
 - `node`: Inherits from the base config, configured explicitly for NodeJS projects
 - `browser`: Inherits from the base config, configured explicitly for Browser projects
 - `typescript`: Does **not** inherit from the base config, use this in tandem with the base config for linting typescript files.
Can be used inside an `overrides` block in the eslint config to apply these rules only to `.ts` files ([see docs](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns))

Extending `corinth` is the same as directly extending the `base` config.

## Dependencies

This package exposes several peer and optional dependencies that will need to be installed in your project (as devDependencies). This is the method recommended by ESLint ([see docs](https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config)).
All of the version requirements of these dependencies are very loose, just to enfoce a minimum version that works.

**Required by all configs:**
 - `@babel/core : >=7.11.0`
 - `eslint : >=6`
 - `eslint-plugin-jest : >=23.6.0`
 - `eslint-plugin-import : >=2.20.0`

**Additional optional dependencies:**
 - `eslint-plugin-react : >=7.18.3` - when using the `browser` config
 - `eslint-plugin-react-hooks : >=2.0.0` - when using the `browser` config
 - `eslint-plugin-jsx-a11y : >=6.2.3` - when using the `browser` config
 - `eslint-plugin-testing-library : >=3.4.0` - when using the `browser` config
 - `eslint-plugin-jest-dom : >=3.1.4` - when using the `browser` config
 - `@typescript-eslint/parser : >=2.19.0` - when using the `typescript` config
 - `@typescript-eslint/eslint-plugin : >=2.19.0` - when using the `typescript` config
