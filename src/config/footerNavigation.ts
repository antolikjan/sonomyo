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
			src: '/favicon.svg',
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
					subCategoryLink: '/services'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
			]
		},
		{
			category: 'About',
			subCategories: [
				{
					subCategory: 'About',
					subCategoryLink: '/About'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/blog'
				},
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
			]
		}
	],
	subFooter: {
		copywriteText: '© Tanja Kocjančič Antolík 2025.'
	}
}
