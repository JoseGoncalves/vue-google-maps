/* eslint-env node */
module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended'
	],
	parserOptions: {
		ecmaVersion: '2022'
	},
	rules: {
		'indent': ['warn', 'tab'],
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
		'quotes': ['warn', 'single'],
		'semi': ['warn', 'always'],
	},
};
