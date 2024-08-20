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
				'body-s': '18px',
				'body-m': '22px',
				'heading-s': '36px',
				'heading-m': '60px',
				'heading-l': '70px',
				'heading-xl': '96px',
			},
			lineHeight: {
				'body-s': '28px',
				'body-m': '32px',
				'heading-s': '36px',
				'heading-m': '50px',
				'heading-l': '70px',
				'heading-xl': '88px',
			},
		},
	},
	plugins: [],
};
