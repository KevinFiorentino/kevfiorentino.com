import type { TechBox } from '../interfaces/tech-box.interface';

export const backend: TechBox = {
  name: 'Backend',
  headerImage: 'backend.svg',
  techs: [
    {
      tech: 'NodeJS',
      image: '/tech/2-backend/nodejs.png',
      years: ['uni', '2020', '2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A runtime for executing Javascript on the server, enabling scalable, high-performance backend applications.',
        es: 'Un entorno para ejecutar código Javascript en el servidor, lo que permite crear aplicaciones backend escalables y de alto rendimiento.',
      },
      comment: {
        en: 'Nowadays my entire career is based on Javascript technologies, including NodeJS in the backend.',
        es: 'Hoy en día toda mi carrera se basa en tecnologías Javascript, incluyendo NodeJS en el backend.',
      }
    },
    {
      tech: 'Express',
      image: '/tech/2-backend/express.png',
      years: ['uni', '2020', '2021'],
      tier: 't3',
      description: {
        en: 'A minimalist web framework for NodeJS, used to build API and web applications with ease and flexibility.',
        es: 'Un framework web minimalista para NodeJS, utilizado para crear API y aplicaciones web con facilidad y flexibilidad.',
      },
      comment: {
        en: 'I don’t like working with Express. I prefer the organization and ecosystem of an entire framework like NestJS.',
        es: 'No me gusta trabajar con Express directamente. Prefiero la organización y el ecosistema de un framework completo como NestJS.',
      }
    },
    {
      tech: 'NestJS',
      image: '/tech/2-backend/nestjs.png',
      years: ['2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A progressive NodeJS framework for building scalable server-side applications using TypeScript and modular architecture.',
        es: 'Un framework NodeJS progresivo para crear aplicaciones escalables del lado del servidor utilizando TypeScript y arquitectura modular.',
      },
      comment: {
        en: 'I’ve been working with Angular when I discovered NestJS. It was surprising how similar they are. I love both.',
        es: 'Estaba trabajando con Angular cuando descubrí NestJS. Fue sorprendente lo similares que son. Amo ambas tecnologías.',
      }
    },
    {
      tech: 'Strapi',
      image: '/tech/2-backend/strapi.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A headless CMS that provides an API-first approach to manage and deliver content across platforms.',
        es: 'Un CMS headless (sin front-end) que proporciona un enfoque basado en API para gestionar y entregar contenido entre plataformas.',
      },
      comment: {
        en: 'I’ve worked with several CMS and Strapi could have been an excellent alternative based on JS, but they decided stop being compatible with MongoDB.',
        es: 'He trabajado con varios CMS y Strapi podría haber sido una excelente alternativa basada en JS, pero decidieron dejar de ser compatible con MongoDB.',
      }
    },
    {
      tech: 'Payload CMS',
      image: '/tech/2-backend/payload-cms.png',
      years: ['2025'],
      tier: 't2',
      description: {
        en: 'A powerful, developer-first headless CMS built with NextJS for custom content management solutions.',
        es: 'Un potente CMS headless (sin front-end), developer-first, creado con NextJS para soluciones de gestión de contenido personalizadas.',
      },
      comment: {
        en: 'I discovered Payload CMS as an alternative to Strapi. I implemented in a real project and I can say it is an excellent CMS.',
        es: 'Descubrí Payload CMS como alternativa a Strapi. Lo implementé en un proyecto real y puedo decir que es un excelente CMS.',
      }
    },
    {
      tech: 'Python',
      image: '/tech/2-backend/python.png',
      years: ['uni', '2020', '2023', '2024'],
      tier: 't3',
      description: {
        en: 'A versatile, beginner-friendly programming language known for simplicity and wide-ranging applications.',
        es: 'Un lenguaje de programación versátil y amigable para principiantes conocido por su simplicidad y amplia gama de aplicaciones.',
      },
      comment: {
        en: 'I’ve used Python in several moments of my life. For data science, videogames, API or AI purposes. But it’s not one of my favorites languages.',
        es: 'He usado Python en varios momentos de mi vida. Para ciencia de datos, videojuegos, API o IA. Pero no es uno de mis lenguajes favoritos.',
      }
    },
    {
      tech: 'FastAPI',
      image: '/tech/2-backend/fastapi.png',
      years: ['2024'],
      tier: 't3',
      description: {
        en: 'A modern Python framework for building API, focusing on speed, type hints, and developer productivity.',
        es: 'Un framework Python moderno para crear API, centrándose en la velocidad, tipado y la productividad del desarrollador.',
      },
      comment: {
        en: 'If I had to develop an API with Python, I would choose to do it with FastAPI.',
        es: 'Si tuviese que desarrollar una API con Python, elegiría hacerlo con FastAPI.',
      }
    },
    {
      tech: 'Rust',
      image: '/tech/2-backend/rust.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: 'A systems programming language known for high performance, safety, and memory management without a garbage collector.',
        es: 'Un lenguaje de programación de sistemas conocido por su alto rendimiento, seguridad y gestión de memoria.',
      },
      comment: {
        en: 'I learned how to create an API with Rust, some web assembly, but I’ve mostly used this technology with Solana in my blockchain time.',
        es: 'Aprendí a crear una API con Rust, algo de web assembly, pero he usado principalmente esta tecnología con Solana en mi época con blockchain.',
      }
    },
    {
      tech: 'PHP',
      image: '/tech/2-backend/php.png',
      years: ['2017', '2018', '2019', '2020'],
      tier: 't3',
      description: {
        en: 'A server-side scripting language widely used for building dynamic websites and web applications.',
        es: 'Un lenguaje interpretado del lado del servidor ampliamente utilizado para crear sitios web y aplicaciones web dinámicos.',
      },
      comment: {
        en: 'My first professional language. I mainly worked with this technology with CMSs like Drupal.',
        es: 'Mi primer lenguaje de programación profesional. Principalmente trabajé con esta tecnología con CMSs como Drupal.',
      }
    },
    {
      tech: 'Laravel',
      image: '/tech/2-backend/laravel.png',
      years: ['2023', '2024'],
      tier: 't5',
      description: {
        en: 'A PHP framework for building API or modern web applications with features like routing, ORM, and templating.',
        es: 'Un framework PHP para crear API o aplicaciones web modernas con funciones como enrutamiento, ORM y plantillas.',
      },
      comment: {
        en: 'I haven’t worked with this technology directly, but I led a Laravel team and they taught me the basics.',
        es: 'Nunca he trabajado con esta tecnología directamente, pero lideré un equipo Laravel y me enseñaron los conceptos básicos.',
      }
    },
    {
      tech: 'Codeigniter',
      image: '/tech/2-backend/codeigniter.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A lightweight PHP framework for developing small-to-medium web applications with simple tools and fast performance.',
        es: 'Un framework PHP liviano para desarrollar aplicaciones web pequeñas y medianas con herramientas simples y rendimiento rápido.',
      },
      comment: {
        en: 'I had a short time with Codeigniter, but fortunately (due to it is a deprecated technology) I didn’t continue using it.',
        es: 'Tuve un corto tiempo con Codeigniter, pero afortunadamente (debido a que es una tecnología deprecada) no lo seguí usando.',
      }
    },
    {
      tech: 'Drupal',
      image: '/tech/2-backend/drupal.png',
      years: ['2018', '2019', '2020'],
      tier: 't3',
      description: {
        en: 'A robust open-source CMS based on PHP for building complex websites with flexible content management and extensive plugins.',
        es: 'Un CMS robusto de código abierto basado en PHP para crear sitios web complejos con gestión de contenido flexible y extensible mediante plugins.',
      },
      comment: {
        en: 'Years working with Drupal 7 and 8. I like it, but I’d rather not start new projects with it. Nowadays, I prefer CMSs like Payload CMS under JS ecosystem.',
        es: 'Años trabajando con Drupal 7 y 8. Me gusta, pero preferiría no empezar nuevos proyectos con él. Hoy en día, prefiero CMSs como Payload CMS bajo el ecosistema JS.',
      }
    },
    {
      tech: 'Wordpress',
      image: '/tech/2-backend/wordpress.png',
      years: [],
      tier: 't5',
      description: {
        en: 'The world’s most popular CMS based on PHP, ideal for creating blogs, websites, or online stores with customizable themes and plugins.',
        es: 'El CMS más popular del mundo basado en PHP, ideal para crear blogs, sitios web o tiendas online con temas y complementos personalizables.',
      },
      comment: {
        en: 'I’ve had to mantain some Wordpress projects, but I wouldn’t choose it today.',
        es: 'He tenido que mantener algunos proyectos Wordpress, pero no lo elegiría hoy en día.',
      }
    },
    {
      tech: 'C++',
      image: '/tech/2-backend/c++.png',
      years: ['uni'],
      tier: 't5',
      description: {
        en: 'A high-performance programming language used for system software, game development, and applications requiring efficiency.',
        es: 'Un lenguaje de programación de alto rendimiento utilizado para software de sistemas, desarrollo de juegos y aplicaciones que requieren eficiencia.',
      },
      comment: {
        en: 'The first programming language in my life. I used it for the first time in 2013 at university. I learned to program with it, basically.',
        es: 'El primer lenguaje de programación de mi vida. Lo usé por primera vez en 2013 en la universidad. Aprendí a programar con él, básicamente.',
      }
    },
    {
      tech: 'Java',
      image: '/tech/2-backend/java.png',
      years: ['uni'],
      tier: 't5',
      description: {
        en: 'A versatile, object-oriented programming language designed for portability, used in web, mobile, and enterprise applications.',
        es: 'Un lenguaje de programación versátil, orientado a objetos, diseñado para la portabilidad y utilizado en aplicaciones web, móviles y empresariales.',
      },
      comment: {
        en: 'The second programming language of my life that I learned at university. It was important mainly because I learned OOP and created my first web project.',
        es: 'El segundo lenguaje de programación de mi vida que aprendí en la universidad. Fue importante principalmente porque aprendí POO y creé mi primer proyecto web.',
      }
    },
  ]
};
