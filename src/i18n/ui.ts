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

    'blog.latest': 'Latest posts',
    'blog.all-categories': 'All categories',

    'home.tech': 'My six-year career knowledge',
    'home.tech.btn': 'Know my work experience',
    'home.kev': 'Hi, I\'m Kev!',
    'home.presentation1': 'Years working on Web2 projects as a full-stack PHP and Javascript developer. Carrying that knowledge to team leadership and decentralizing apps in Web3 and crypto projects.',
    'home.presentation2': 'Writer, and content creator for Platzi\'s community. I have a degree in information systems BTW.',
    'home.presentation3': 'Taking my first steps as an entrepreneur.',

    'contact': 'Contact',
    'contact.description': 'Means of contact with Kevin Fiorentino',
    'contact.means1': 'Please, contact me through:',
    'contact.means2': '(I\'m always there)',

    'projects': 'Projects',
    'projects.description': 'Kevin Fiorentino\'s work experience',
    'projects.experience': 'Work experience',

    'footer.recommends': 'Might interest you',

    'policy': 'Privacy policy ',
    'all-tags': 'All tags',
  },
  es: {
    'go-blog': 'Ir al blog',
    'go-tags': 'It a tags',

    'blog.latest': 'Últimos posts',
    'blog.all-categories': 'Todas las categorías',

    'home.tech': 'Mi conocimiento en seis años de carrera',
    'home.tech.btn': 'Conoce mi experiencia laboral',
    'home.kev': '¡Hola, soy Kev!',
    'home.presentation1': 'Años trabajando en Web2 como full-stack PHP y Javascript developer. Llevando ese conocimiento al liderazgo de equipos y descentralizando aplicaciones en proyectos Web3 y crypto.',
    'home.presentation2': 'Escritor y creador de contenido para la comunidad de Platzi. Además, tengo un título de grado como Licenciado en Sistemas.',
    'home.presentation3': 'Dando mis primeros pasos como emprendedor.',

    'contact': 'Contacto',
    'contact.description': 'Medios de contacto con Kevin Fiorentino',
    'contact.means1': 'Por favor, contáctame por:',
    'contact.means2': '(Siempre estoy ahí)',

    'projects': 'Proyectos',
    'projects.description': 'Experiencia laboral de Kevin Fiorentino',
    'projects.experience': 'Experiencia laboral',

    'footer.recommends': 'Puede interesarte',

    'policy': 'Politicas de privacidad',
    'all-tags': 'Ver tags',
  },
} as const;
