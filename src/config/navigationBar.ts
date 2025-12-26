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
		text: ''
	},
	navItems: [
		{ name: 'navHome', link: '/' },
		{
			name: 'Services',
			link: '/services',
			submenu: [
				{ name: 'navMyofunctionalTherapy', link: '/services/myofunctional-therapy' },
				{ name: 'navUltrasoundBiofeedback', link: '/services/ultrasound-biofeedback' },
			],
		},
		{ name: 'navPricing', link: '/pricing' },
	    { name: 'navBlog', link: '/blog' },
		{ name: 'navFaq', link: '/faq' },
		{ name: 'navAbout', link: '/about' },
		{ name: 'navContact', link: '/contact' },
	],
	navActions: [{ name: 'Book appointment', link: '/contact', style: 'primary', size: 'lg' }]
}
1920