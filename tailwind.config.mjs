const { nextui } = require("@nextui-org/theme");
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/components/(button|input).js'
	],
	theme: {
		extend: {
			keyframes: {
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden"
					},
					"100%": {
						width: "100%"
					}
				},
				blink: {
					"50%": {
						borderColor: "transparent"
					},
					"100%": {
						borderColor: "white"
					}
				},
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			colors: {
				primary: {
					'50': '#f0f3ff',
					'100': '#dfe5ff',
					'200': '#b8c9ff',
					'300': '#7a9eff',
					'400': '#346dfc',
					'500': '#0949ee',
					'600': '#0031cc',
					'700': '#0026a5',
					'800': '#042488',
					'900': '#0a2170',
					'950': '#020617',
				},
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [
		nextui({
			defaultTheme: "dark"
		})
	],
}
