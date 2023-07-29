// https://docs.astro.build/es/recipes/i18n/

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'go-blog': 'Go to blog',
    'go-tags': 'Go to tags',

    'home.tech': 'My six-year career knowledge',
    'home.tech.btn': 'Know my work experience',

    'contact': 'Contact',
    'contact.description': 'Means of contact with Kevin Fiorentino',
    'contact.means1': 'Please, contact me through:',
    'contact.means2': '(I\'m always there)',

    'experience': 'Work experience',
    'experience.description': 'Kevin Fiorentino\'s work experience',

    'footer.recommends': 'Might interest you',

    'policy': 'Privacy policy ',
    'all-tags': 'All tags',
  },
  es: {
    'go-blog': 'Ir al blog',
    'go-tags': 'It a tags',

    'home.tech': 'Mi conocimiento en seis años de carrera',
    'home.tech.btn': 'Conoce mi experiencia laboral',

    'contact': 'Contacto',
    'contact.description': 'Medios de contacto con Kevin Fiorentino',
    'contact.means1': 'Por favor, contáctame por:',
    'contact.means2': '(Siempre estoy ahí)',

    'experience': 'Experiencia laboral',
    'experience.description': 'Experiencia laboral de Kevin Fiorentino',

    'footer.recommends': 'Puede interesarte',

    'policy': 'Politicas de privacidad',
    'all-tags': 'Ver tags',
  },
} as const;
