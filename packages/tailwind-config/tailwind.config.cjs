/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: 'var(--color-primary-50)',
					100: 'var(--color-primary-100)',
					200: 'var(--color-primary-200)',
					300: 'var(--color-primary-300)',
					400: 'var(--color-primary-400)',
					500: 'var(--color-primary-500)',
					600: 'var(--color-primary-600)',
					700: 'var(--color-primary-700)',
					800: 'var(--color-primary-800)',
					900: 'var(--color-primary-900)',
					950: 'var(--color-primary-950)',
				},
				accent: {
					50: 'var(--color-accent-50)',
					100: 'var(--color-accent-100)',
					200: 'var(--color-accent-200)',
					300: 'var(--color-accent-300)',
					400: 'var(--color-accent-400)',
					500: 'var(--color-accent-500)',
					600: 'var(--color-accent-600)',
					700: 'var(--color-accent-700)',
					800: 'var(--color-accent-800)',
					900: 'var(--color-accent-900)',
					950: 'var(--color-accent-950)',
				},
				neutral: {
					50: 'var(--color-neutral-50)',
					100: 'var(--color-neutral-100)',
					200: 'var(--color-neutral-200)',
					300: 'var(--color-neutral-300)',
					400: 'var(--color-neutral-400)',
					500: 'var(--color-neutral-500)',
					600: 'var(--color-neutral-600)',
					700: 'var(--color-neutral-700)',
					800: 'var(--color-neutral-800)',
					900: 'var(--color-neutral-900)',
					950: 'var(--color-neutral-950)',
				},
			},
		},
		fontFamily: {
			heading: 'Bricolage Grotesque',
		},
	},
	plugins: [],
};

module.exports = config;
