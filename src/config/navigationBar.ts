// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/sonomyo_logo_en.svg',
		alt: 'Ultasound guided myfunctional therapy',
		text: 'Sonomyo.'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Pricing', link: '/pricing' },
	    { name: 'Blog', link: '/blog' },
		{ name: 'FAQ', link: '/faq' },
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
