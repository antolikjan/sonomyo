// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Sonomyo.',
		aboutText:
			'Sonomyo is a myfunctional therapy practice specialising in ultrasound biofeedback for speeding up and ehancing the therapy progress.',
		logo: {
			src: '/sonomyo/favicon.svg',
			alt: 'Ultasound guided myfunctional therapy',
			text: 'Sonomyo.'
		}
	},
	footerColumns: [
		{
			category: 'The practice',
			subCategories: [
				{
					subCategory: 'Services',
					subCategoryLink: '/sonomyo/services'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/sonomyo/faq'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/sonomyo/pricing'
				},
			]
		},
		{
			category: 'About',
			subCategories: [
				{
					subCategory: 'About',
					subCategoryLink: '/sonomyo/About'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/sonomyo/blog'
				},
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/sonomyo/contact'
				},
			]
		}
	],
	subFooter: {
		copywriteText: '© Tanja Kocjančič Antolík 2025.'
	}
}
