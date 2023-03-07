const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dominant: 'var(--color-bg-dominant)',
				complementary: 'var(--color-bg-complementary)',
				accent: 'var(--color-bg-accent)',
				hover: 'var(--color-bg-hover)',
				muted: 'var(--color-bg-muted)',
				error: 'var(--color-text-error)'
			},
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					inverted: 'var(--color-text-inverted)',
					muted: 'var(--color-text-muted)'
				}
			},
			backgroundImage: {
				'gradient-accent-to-tr': 'var(--color-gradient-accent-to-tr)',
				'gradient-dominant': 'var(--color-gradient-dominant)'
			},
			fontFamily: {
				heading: 'var(--font-heading)',
				primary: 'var(--font-primary)',
				secondary: 'var(--font-secondary)'
			},
			screens: {
				'-2xl': { max: '1535px' },
				'-xl': { max: '1279px' },
				'-lg': { max: '1023px' },
				'-md': { max: '767px' },
				'-sm': { max: '639px' },
				'@md': { min: '640px', max: '767px' },
				'@lg': { min: '768px', max: '1023px' },
				'@xl': { min: '1024px', max: '1279px' },
				'@2xl': { min: '1280px', max: '1535px' }
			}
		}
	},

	plugins: []
};

module.exports = config;
