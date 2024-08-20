/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Big Shoulders Display', 'sans-serif'],
				body: ['Outfit', 'sans-serif'],
			},
			fontSize: {
				'size-body-s': '18px',
				'size-body-m': '22px',
				'size-heading-s': '36px',
				'size-heading-m': '60px',
				'size-heading-l': '70px',
				'size-heading-xl': '96px',
			},
			lineHeight: {
				'line-body-s': '28px',
				'line-body-m': '32px',
				'line-heading-s': '36px',
				'line-heading-m': '50px',
				'line-heading-l': '70px',
				'line-heading-xl': '88px',
			},
			colors: {
				blue: '#345FF6',
				gunmetal: '#253347',
				deb: '#5E6E85',
				white: '#FFFFFF',
				'blue-opaque': 'rgba(52, 94, 246, 0.15)',
			},
		},
	},
	plugins: [],
};
