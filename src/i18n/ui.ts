// https://docs.astro.build/es/recipes/i18n/

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'contact': 'Contact',
    'go-blog': 'Go to blog',
    'share-on': 'Share through',
    'share-by': 'Share through',
    'prev': 'Previous',
    'next': 'Next',

    'projects': 'Projects',

    'blog.all-collections': 'All collections',
    'blog.others': 'More posts',
    'blog.toc': 'Table of Content',

    'home.kev': 'Hi, I\'m Kev!',
    'home.presentation1': `Software engineer with more than 8 years of experience.`,
    'home.presentation2': `I consider myself agnostic to technology with a generalist perspective. I am a full-stack developer specializing in Javascript, with a slight preference for front-end development working with Angular and React. I enjoy working with Docker and infrastructure services like AWS, although DevOps isn't my main passion. I have a solid grasp of Figma, but I wouldn't consider myself a top designer. My strength lies in having a holistic vision of the software we are building, ensuring alignment between people, technology, and business objectives.`,
    'home.presentation3': `Throughout my career, I have worked with two clients as a freelancer. I have experience working in the public sector, also with blockchain and AI projects, as well as with some startups. I took the role of CTO and Team Manager in a startup, where I designed the architecture of a complex software system and led a full team of developers for two years. Sadly, the project did no prosper.`,
    'home.presentation4': `Currently, I am looking to start a new stage. My priority is connecting with people, being part of and collaborating with multidisciplinary teams, regardless of the technology or project. I am looking to contribute my experience while continuing to grow both professionally and personally.`,

    'footer.recommends': 'Might interest you',
    'footer.resources': 'Resources',
    'footer.source': 'Source code',

    'collection': 'Colección',
    'read-post': 'Read post',

    'description': 'Description',
    'comment': 'Comment or opinion',

    't1': 'Favorites',
    't2': 'Nice to use',
    't3': 'From time to time',
    't4': 'Might use again',
    't5': 'Deprecated',

    'tech_text': `
      <p>I love technology logos — that’s my excuse for creating this dashboard, where you can find all the technologies I’ve used. Have you ever wondered how many technologies we, as developers, come across throughout our careers? It's surprising!</p>
      <p>Creating this dashboard was a retrospective of my professional journey; it made me reflect on it and helped organize my profile to better understand what kind of IT professional I am — and what I want to do.</p>
    `,

    'uni': ``,
    '2017': ``,
    '2018': ``,
    '2019': ``,
    '2020': ``,
    '2021': ``,
    '2022': ``,
    '2023': ``,
    '2024': ``,
    '2025': ``,
    'all': ``,
    'tier': ``,
  },
  es: {
    'contact': 'Contacto',
    'go-blog': 'Ir al blog',
    'share-on': 'Compartir en',
    'share-by': 'Compartir por',
    'prev': 'Anterior',
    'next': 'Siguiente',

    'projects': 'Proyectos',

    'blog.all-collections': 'Todas las categorías',
    'blog.others': 'Más posts',
    'blog.toc': 'Tabla de Contenido',

    'home.kev': '¡Hola, soy Kev!',
    'home.presentation1': `Ingeniero de software con más de 8 años de experiencia profesional.`,
    'home.presentation2': `Me considero agnóstico a la tecnología, con una perspectiva generalista. Soy desarrollador full-stack, especializado en Javascript, con una leve inclinación hacia el front-end trabajando con Angular y React. Distruto trabajar con Docker y servicios de infraestructura como AWS, aunque DevOps no es mi pasión. Soy bueno usando Figma... pero no me consideraría un diseñador top. Donde mejor me desempeño es teniendo una visión holistica del software que estamos desarrollando, coordinando personas, tecnología y negocio.`,
    'home.presentation3': `A lo largo de mi carrera, he trabajado con dos clientes propios como freelancer. Trabajé para el sector público, también en proyectos blockchain e IA, y en algunas startups. Asumí el rol de CTO y Team Manager en una startup, diseñando la arquitectura de un complejo software y liderando a un completo staff de desarrolladores durante 2 años. Lamentablemente, el proyecto no prosperó.`,
    'home.presentation4': `Actualmente, estoy buscando comenzar una nueva etapa. Mi prioridad es conectar con nuevas personas, pertenecer y trabajar en equipos multidisciplinarios, independientemente de la tecnología o el proyecto. Busco aportar mi experiencia y seguir desarrollándome profesional y personalmente.`,

    'footer.recommends': 'Puede interesarte',
    'footer.resources': 'Recursos',
    'footer.source': 'Código fuente',

    'collection': 'Collection',
    'read-post': 'Leer post',

    'description': 'Descripción',
    'comment': 'Comentario u opinión',

    't1': 'Favorites',
    't2': 'Nice to use',
    't3': 'From time to time',
    't4': 'Might use again',
    't5': 'Deprecated',

    'tech_text': `
      <p>Me encantan los logo de las tecnologías; esa es mi escusa para crear este panel donde puedes encontrar todas las tecnologías que he usado. ¿Te has preguntado alguna vez cuántas tecnologías nos encontramos como desarrolladores a lo largo de nuestra carrera? ¡Es sorprendente!</p>
      <p>Crear este panel fue una retrospectiva de mi trayectoria profesional; me hizo reflexionar sobre ella y me ayudó a organizar mi perfil para comprender mejor qué tipo de profesional de TI soy y qué quiero hacer.</p>
    `,

    'uni': ``,
    '2017': ``,
    '2018': ``,
    '2019': ``,
    '2020': ``,
    '2021': ``,
    '2022': ``,
    '2023': ``,
    '2024': ``,
    '2025': ``,
    'all': ``,
    'tier': ``,
  },
} as const;
