module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:vue/essential",
		"plugin:vue/recommended",
		"eslint:recommended",
		"plugin:prettier/recommended",
		"@vue/eslint-config-prettier",
		"plugin:import/errors",
		"plugin:import/warnings",
	],
	parserOptions: {
		parser: ["@babel/eslint-parser"],
	},
	plugins: ["vue"],
	rules: {
		"no-unused-vars": 1,
		"import/no-unresolved": "off",
		"import/no-named-as-default": 0,

		/**********************/
		/*     Vue Rules      */
		/**********************/
		"vue/no-unused-components": 1,
		"vue/multi-word-component-names": 0,
		"vue/require-default-prop": 0,
		"vue/require-prop-types": 0,

		// Disable template errors regarding invalid end tags
		"vue/no-parsing-error": [
			"error",
			{
				"x-invalid-end-tag": false,
			},
		],

		/***************************/
		/* ESLint Vue Plugin Rules */
		/***************************/
		"vue/html-indent": [
			"error",
			"tab",
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: false,
				ignores: [],
			},
		],
	},
};
