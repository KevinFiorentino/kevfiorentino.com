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

    'blog.all-collections': 'All collections',
    'blog.others': 'More posts',
    'blog.toc': 'Table of Content',

    'home.kev': 'Hi, I\'m Kev!',
    'home.presentation1': 'Software engineer with more than 8 years of experience.',
    'home.presentation2': 'I consider myself agnostic to the technology, with a generalist perspective. I am full-stack developer, specialized in Javascript, with a slight inclination towards front-end. I love Docker (DevOps is not my passion). I am good at using Figma... but not a good designer. Where I perform best is having an holistic vision of the software we are building, coordinating people, technology, and business.',
    'home.presentation3': 'Throughout my career, I have worked with several own clients as a freelance. I worked for the public sector, on blockchain and IA projects, and in some startups. I founded and led my own startup, where I assumed the role of CTO and Team Manager, designing the architecture of a complex software and leading a full staff of developers for 2 years.',
    'home.presentation4': 'At this stage of my career, my priority is to meet people, belong and work on multidisciplinary teams, regardless of technology or project. I am looking to contribute my experience and continue developing professionally and personally.',

    'footer.recommends': 'Might interest you',
    'footer.resources': 'Resources',
    'footer.source': 'Source code',

    'collection': 'Colección',
    'read-post': 'Read post',
  },
  es: {
    'contact': 'Contacto',
    'go-blog': 'Ir al blog',
    'share-on': 'Compartir en',
    'share-by': 'Compartir por',
    'prev': 'Anterior',
    'next': 'Siguiente',

    'blog.all-collections': 'Todas las categorías',
    'blog.others': 'Más posts',
    'blog.toc': 'Tabla de Contenido',

    'home.kev': '¡Hola, soy Kev!',
    'home.presentation1': 'Ingeniero de software con más de 8 años de experiencia profesional.',
    'home.presentation2': 'Me considero agnóstico a la tecnología, con una perspectiva generalista. Soy desarrollador full-stack, especializado en Javascript, con una leve inclinación hacia el front-end. Amo Docker (DevOps no es mi pasión). Soy bueno usando Figma... pero no buen diseñador. Donde mejor me desempeño es teniendo una visión holistica del software que estamos desarrollando, coordinando personas, tecnología y negocio.',
    'home.presentation3': 'A lo largo de mi carrera, He trabajado con varios clientes propios como freelance. Trabajé para el sector público, en proyectos blockchain e IA, y en algunas startups. Fundé y lideré mi propia startup, donde asumí el rol de CTO y Team Manager, diseñando la arquitectura de un complejo software y dirigiendo a un completo staff de desarrolladores durante 2 años.',
    'home.presentation4': 'En esta etapa de mi carrera, mi prioridad es conocer nuevas personas, pertenecer y trabajar en equipos multidisciplinarios, independientemente de la tecnología o el proyecto. Busco aportar mi experiencia y seguir desarrollándome profesional y personalmente.',

    'footer.recommends': 'Puede interesarte',
    'footer.resources': 'Recursos',
    'footer.source': 'Código fuente',

    'collection': 'Collection',
    'read-post': 'Leer post'
  },
} as const;
