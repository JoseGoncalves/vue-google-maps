/* eslint-env node */
module.exports = {
	root: true,
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-recommended'
	],
	parserOptions: {
		ecmaVersion: '2022'
	},
	rules: {
		'indent': ['warn', 'tab'],
		'vue/html-indent': ['warn', 'tab'],
		'quotes': ['warn', 'single'],
		'semi': ['warn', 'always']
	},
};
