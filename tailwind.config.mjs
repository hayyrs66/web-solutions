/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg-primary': "#161C28",
				'primary': "#7A15FF",
				'secondary': "#BC86FF",
				'no-select': "#A6A6A6",
				'paragraph': '#C9CCD2',
				'gray': "#28282E"
			},

			fontSize: {
				'font-paragraph': '0.963rem',
			}

		},
	},
	plugins: [],
}
