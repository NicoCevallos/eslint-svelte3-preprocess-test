const eslintSveltePreprocess = require('eslint-svelte3-preprocess');
const svelteConfig = require('./svelte.config');

module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
		sourceType: 'module',
  },
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    browser: true
  },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    'svelte3',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    }
  ],
	settings: {
    'svelte3/preprocess': eslintSveltePreprocess(svelteConfig.preprocess)
	},
};
