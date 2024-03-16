/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');
module.exports = {
	content: ['./src/**/*.{html,js,svelte}', './index.html'],
	safelist: [],
	plugins: [daisyui],
	daisyui: {
		themes: ['light'],
		prefix: 'daisy-'
	},
	theme: {
		extend: {}
	}
};
