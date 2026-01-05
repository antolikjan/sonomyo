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
	'en' : {
		footerAbout: FooterAbout
		footerColumns: FooterColumn[]
		subFooter: SubFooter
	}, 
	'cs' : {
		footerAbout: FooterAbout
		footerColumns: FooterColumn[]
		subFooter: SubFooter
	}
}

export const footerNavigationData: FooterData = {

	'en' : {

		footerAbout: {
			title: 'SonoMyo.',
			aboutText:
				'SonoMyo is a myfunctional therapy practice specialising in ultrasound biofeedback to speed up and ehance the therapy progress.',
			logo: {
				src: '/favicon.svg',
				alt: 'Ultasound guided myfunctional therapy',
				text: 'SonoMyo.'
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
	},
	'cs' : {

		footerAbout: {
			title: 'SonoMyo.',
			aboutText:
				'SonoMyo je myofunkční terapeutická praxe, specializující sa na ultrazvukem navádený biofeedback pro zefektívnění průběhu terapie.',
			logo: {
				src: '/favicon.svg',
				alt: 'Ultrazvukem navádená myofunkční terapie',
				text: 'SonoMyo.'
			}
		},
		footerColumns: [
			{
				category: 'Praxe',
				subCategories: [
					{
						subCategory: 'Služby',
						subCategoryLink: '/services'
					},
					{
						subCategory: 'FAQ',
						subCategoryLink: '/faq'
					},
					{
						subCategory: 'Cenník',
						subCategoryLink: '/pricing'
					},
				]
			},
			{
				category: 'Info',
				subCategories: [
					{
						subCategory: 'O mně',
						subCategoryLink: '/About'
					},
					{
						subCategory: 'Novinky',
						subCategoryLink: '/blog'
					},
				]
			},
			{
				category: 'Kontaktujte nás',
				subCategories: [
					{
						subCategory: 'Kontakt',
						subCategoryLink: '/contact'
					},
				]
			}
		],
		subFooter: {
			copywriteText: '© Tanja Kocjančič Antolík 2025.'
		}
	}
}
