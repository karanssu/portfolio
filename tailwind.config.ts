import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#1f2937",
				foreground: "#9ca3af",
				titleForeground: "#f3f4f6",
				hoverBackground: "#00FFFF",
			},
		},
	},
	plugins: [
		function ({
			addUtilities,
		}: {
			addUtilities: (utilities: Record<string, any>) => void;
		}) {
			addUtilities({
				"::selection": {
					backgroundColor: "#00FFFF",
					color: "#1f2937",
				},
			});
		},
	],
} satisfies Config;
