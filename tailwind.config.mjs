/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg-primary': "#161C28",
				'primary': "#00FF7F",
				'secondary': "#8aff86",
				'no-select': "#A6A6A6",
				'paragraph': '#C9CCD2',
				'gray': "#28282E"
			},

			fontSize: {
				'font-paragraph': '0.963rem',
			},

			animation: {
				pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				pulse: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.2 },
				},
			},

		},
	},
	plugins: [],
}
