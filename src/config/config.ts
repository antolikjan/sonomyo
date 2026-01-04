// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Sonoymyo. Ultasound guided myfunctional therapy.',
	siteDescription:
		'Sonomyo is a myfunctional therapy practice using ultrasound as biofeedback for speeding up and ehancing the therapy progress.',
	ogImage: '/favicon.svg',
	logo: {
		src: '/sonomyo_logo_en.svg',
		alt: 'Sonomyo'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
}
