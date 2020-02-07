# eslint-config-corinth

The ESLint config for the LifewayIT Corinth team.

## Usage

For a complete overview of ESLint shareable configs, see the ESLint [docs](https://eslint.org/docs/developer-guide/shareable-configs).

This project is currently not released in any NPM repository, but NPM allows you to install dependencies straight from a GitHub repository ([docs](https://docs.npmjs.com/files/package.json#github-urls)).

To use, just extend from this config in your `.eslintrc`:

```json
{
  "extends": "corinth"
}
```

Optionally, you can extend any of the other provided configs ([see all below](#Configs)) and add/override additionaly rules:

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

Extending `corinth` is the same as directly extending the `base`
