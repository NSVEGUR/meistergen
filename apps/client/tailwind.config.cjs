const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dominant: '#fefefe',
				complementary: '#424242',
				accent: '#5c17eb',
				'light-accent': '#432287B5',
				hover: '#6a2ee0',
				muted: '#ebebeb',
				'light-muted': 'rgba(0, 0, 0, 0.2)'
			},
			textColor: {
				skin: {
					base: '#212427',
					inverted: '#efefef',
					muted: 'rgba(0, 0, 0, 0.5)',
					error: '#d74c4c',
					okay: '#2DB00C'
				}
			},
			backgroundImage: {
				'gradient-accent-to-tr': `linear-gradient(
					to right top,
					#222222,
					#4b3c99,
					#5032c3,
					#5c17eb
				)`,
				'gradient-dominant': `linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)`
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
