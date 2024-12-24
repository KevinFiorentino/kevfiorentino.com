// https://docs.astro.build/es/recipes/i18n/

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'go-blog': 'Go to blog',
    'share-on': 'Share through',
    'share-by': 'Share through',

    'blog.latest': 'Latest posts',
    'blog.all-categories': 'All categories',

    'home.tech': 'My seven-year career knowledge went through',
    'home.kev': 'Hi, I\'m Kev!',
    'home.presentation1': 'Years working on Web2 projects as a full-stack PHP and Javascript developer. Carrying that knowledge to team leadership and decentralizing apps in Web3 and crypto projects.',
    'home.presentation2': 'Writer, and content creator for Platzi\'s community. I have a degree in information systems BTW.',
    'home.presentation3': 'Taking my first steps as an entrepreneur.',

    'footer.recommends': 'Might interest you',
    'footer.resources': 'Resources',
    'footer.source': 'Source code',

    'collection': 'Colección',
    'read-post': 'Read post',
  },
  es: {
    'go-blog': 'Ir al blog',
    'share-on': 'Compartir en',
    'share-by': 'Compartir por',

    'blog.latest': 'Últimos posts',
    'blog.all-categories': 'Todas las categorías',

    'home.tech': 'Mi conocimiento en seis años de carrera pasó por',
    'home.kev': '¡Hola, soy Kev!',
    'home.presentation1': 'Años trabajando en Web2 como full-stack PHP y Javascript developer. Llevando ese conocimiento al liderazgo de equipos y descentralizando aplicaciones en proyectos Web3 y crypto.',
    'home.presentation2': 'Escritor y creador de contenido para la comunidad de Platzi. Además, tengo un título de grado como Licenciado en Sistemas.',
    'home.presentation3': 'Dando mis primeros pasos como emprendedor.',

    'footer.recommends': 'Puede interesarte',
    'footer.resources': 'Recursos',
    'footer.source': 'Código fuente',

    'collection': 'Collection',
    'read-post': 'Leer post'
  },
} as const;
