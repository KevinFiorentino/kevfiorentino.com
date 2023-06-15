/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'dark',
	theme: {
		extend: {},
	},
	plugins: [
    require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp')
	],
}
