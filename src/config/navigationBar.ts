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
		src: '/sonomyo/sonomyo_logo_en.svg',
		alt: 'Ultasound guided myfunctional therapy',
		text: ''
	},
	navItems: [
		{ name: 'Home', link: '/sonomyo' },
		{ name: 'Pricing', link: '/sonomyo/pricing' },
	    { name: 'Blog', link: '/sonomyo/blog' },
		{ name: 'FAQ', link: '/sonomyo/faq' },
		{ name: 'Contact', link: '/sonomyo/contact' }
	],
	navActions: [{ name: 'Book appointment', link: '/sonomyo/contact', style: 'primary', size: 'lg' }]
}
