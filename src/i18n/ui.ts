export const languages = {
  cs: 'Čeština',
  en: 'English',
} as const;

export const ui = {
  cs: {
    contact : {
        'firstN' : 'Jméno',
        'lastN' : 'Příjmení',
        'example_email' : 'jemno@vasemail.cz',
        'phone_number' : "telefonní číslo",
        'YourMessage' : 'Vaše zpráva',
        'Submit' : 'Odeslat',
        'blurb' : 'Kontaktujte Sonomyo pro sjednání termínu nebo jiné dotazy.',
        'oco' : 'Další možnosti kontaktu:',
        'Phone' : 'Telefon',
        'Address' : 'Adresa',
        'SM' : 'Sociální Média.',
        'SMblurb' : 'Neváhejte nás kontaktovat na kterékoli ze sociálních sítí uvedených ve spodní části stránky.'
    },
    nav: {
        '/': 'Úvod',
        '/pricing': 'Ceník',
        '/blog': 'Blog',
        '/faq': 'FAQ',
        '/contact': 'Kontakt',
        '/about': 'O mně',
        'Book appointment' : 'Objednat termín',
    } as Record<string, string>,
  },
  en: {
    contact : {
        'firstN' : 'First Name',
        'lastN' : 'Last Name',
        'example_email' : 'name@youremail.com',
        'phone_number' : "phone number",
        'YourMessage' : 'Your Message',
        'Submit' : 'Submit',
        'blurb' : 'Contact Sonomyo for appointments or other inquiries.',
        'oco' : 'Other contact options:',
        'Phone' : 'Phone',
        'Address' : 'Address',
        'SM' : 'Social Media.',
        'SMblurb' : 'Feel free to contact us on any of the social media at the bottom of the page.'
    },
 
    nav : {
        '/': 'Home',
        '/pricing': 'Pricing',
        '/blog': 'Blog',
        '/faq': 'FAQ',
        '/contact': 'Contact',
        '/about': 'About',
        'Book appointment': 'Book appointment',
    } as Record<string, string>,
  },
} as const;

export type Lang = keyof typeof ui;