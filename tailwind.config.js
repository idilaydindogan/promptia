/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ["Satoshi", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				"primary-navy": "#213555",
				"primary-blue": "#4F709C",
				"secondary-beige": "#D8C4B6",
				"primary-beige": "#F5EFE7",
			},
		},
	},
	plugins: [],
};
