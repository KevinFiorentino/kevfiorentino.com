import type { TechBox } from '../interfaces/tech-box.interface';

export const frontend: TechBox = {
  name: 'Front-end',
  headerImage: 'front-end.svg',
  techs: [
    {
      tech: 'HTML',
      image: '/tech/1-front-end/html.png',
      years: ['uni', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      tier: 't2',
      description: {
        en: 'The standard markup language used to structure content on the web, forming the backbone of all websites.',
        es: 'Lenguaje de marcado estándar utilizado para estructurar el contenido en la web y forma la columna vertebral de todos los sitios web.',
      },
      comment: {
        en: 'The basis of any web development, our work would not exist without HTML.',
        es: 'La base de cualquier desarrollo web, no existiría nuestro trabajo sin HTML.',
      }
    },
    {
      tech: 'CSS',
      image: '/tech/1-front-end/css.png',
      years: ['uni', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      tier: 't2',
      description: {
        en: 'A style sheet language used to design and control the layout, colors, and fonts of web pages written with HTML.',
        es: 'Lenguaje de hojas de estilo utilizado para diseñar y controlar el diseño, los colores y las fuentes de páginas web escritas con HTML.',
      },
      comment: {
        en: 'Alongside HTML, they will always be there, in any web project.',
        es: 'Junto con HTML, ambos lenguajes siempre estarán ahí, en cualquier proyecto web.',
      }
    },
    {
      tech: 'Javascript',
      image: '/tech/1-front-end/javascript.png',
      years: ['uni', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A versatile programming language for adding interactivity, animations, and dynamic features to websites.',
        es: 'Un lenguaje de programación versátil para agregar interactividad, animaciones y funciones dinámicas a sitios web.',
      },
      comment: {
        en: 'After PHP, it was my second language which I worked professionaly. Nowadays my entire career is based on JS (but masked with TS).',
        es: 'Después de PHP, mi segundo lenguaje con el que trabajé profesionalmente. Hoy en día, toda mi carrera se basa en JS (pero enmascarado con TS).',
      }
    },
    {
      tech: 'TypeScript',
      image: '/tech/1-front-end/typescript.png',
      years: ['uni', '2020', '2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A superset of Javascript that adds static typing, improving code reliability and scalability.',
        es: 'Un superconjunto de Javascript que agrega tipado estático, mejorando la confiabilidad y escalabilidad del código.',
      },
      comment: {
        en: 'I can’t start a new project without TypeScript in both backend and front-end.',
        es: 'No puedo comenzar un nuevo projecto sin TypeScript tanto en el backend como en el front-end.',
      }
    },
    {
      tech: 'Angular',
      image: '/tech/1-front-end/angular.png',
      years: ['uni', '2020'],
      tier: 't1',
      description: {
        en: 'A robust TypeScript framework by Google for building dynamic, enterprise-grade web applications with a focus on scalability.',
        es: 'Un framework de TypeScript sólido desarrollado por Google para crear aplicaciones web dinámicas de nivel empresarial con un enfoque en la escalabilidad.',
      },
      comment: {
        en: 'My first love in programming. I discovered Angular en 2019 doing my bachelor thesis where I compare it with others front-end technologies.',
        es: 'Mi primer amor en la programación. Descubrí Angular in 2019 haciendo mi tesis de licenciatura donde lo comparé con otras tecnologias front-end.',
      }
    },
    {
      tech: 'React',
      image: '/tech/1-front-end/react.png',
      years: ['uni', '2023'],
      tier: 't2',
      description: {
        en: 'A Javascript library by Meta for building interactive user interfaces using a component-based architecture.',
        es: 'Una librería Javascript desarrollada por Meta para crear interfaces de usuario interactivas utilizando una arquitectura basada en componentes.',
      },
      comment: {
        en: 'I’m "Team Angular". However, I’ve worked with React throughout last years, especially alongside NextJS. I don’t like using just React.',
        es: 'Soy "Team Angular". Sin embargo, he trabajado con React en los últimos años, especialmente acompañado por NextJS. No me gusta utilizar solo React.',
      }
    },
    {
      tech: 'NextJS',
      image: '/tech/1-front-end/nextjs.png',
      years: ['2023'],
      tier: 't1',
      description: {
        en: 'A React framework for building server-rendered and static web apps with features like routing, SEO, and API handling.',
        es: 'Un framework basado en React para crear aplicaciones web estáticas y renderizadas en servidor con características como enrutamiento, SEO y manejo de API.',
      },
      comment: {
        en: 'Throughout my experience as CTO, we based our front-end architecture on Vercel technologies. Also, I’ve worked with NextJS in freelance projects.',
        es: 'A lo largo de mi experiencia como CTO, basamos nuestra arquitectura front-end en tecnologías de Vercel. También he trabajado con NextJS en proyectos freelance.',
      }
    },
    {
      tech: 'Astro',
      image: '/tech/1-front-end/astro.png',
      years: ['2023'],
      tier: 't2',
      description: {
        en: 'A front-end framework for building fast, lightweight websites. Ships zero Javascript by default for better performance.',
        es: 'Un framework front-end para crear sitios web rápidos y livianos. No incluye Javascript de forma predeterminada para un mejor rendimiento.',
      },
      comment: {
        en: 'This website where you are right now was created with Astro. That explains everything I think about it.',
        es: 'Este sitio web en el que te encuentras ahora mismo fue creado con Astro. Eso explica todo lo que pienso al respecto.',
      }
    },
    {
      tech: 'Vue.js',
      image: '/tech/1-front-end/vuejs.png',
      years: ['uni'],
      tier: 't4',
      description: {
        en: 'A progressive Javascript framework for building user interfaces. Easy to learn, flexible, and great for single-page apps.',
        es: 'Un framework de Javascript progresivo para crear interfaces de usuario. Fácil de aprender, flexible y excelente para aplicaciones de una sola página.',
      },
      comment: {
        en: 'I explored it a little for my Thesis project where I compared it with Angular and React.',
        es: 'Exploré Vue.js un poco para mi proyecto de tesis donde lo comparé con Angular y React.',
      }
    },
    {
      tech: 'Svelte',
      image: '/tech/1-front-end/svelte.png',
      years: ['uni'],
      tier: 't4',
      description: {
        en: 'A modern front-end framework that compiles components into vanilla Javascript at build time, offering fast performance and small bundles.',
        es: 'Un framework front-end moderno que compila componentes en Javascript básico en el momento de la compilación, ofreciendo un rendimiento rápido y paquetes pequeños.',
      },
      comment: {
        en: 'I explored it a few years ago just for curiosity. It didn’t convince me to use it in a professional project.',
        es: 'Exploré Svelte hace unos años sólo por curiosidad. No me convenció para usarlo en un proyecto profesional.',
      }
    },
    {
      tech: 'Storybook',
      image: '/tech/1-front-end/storybook.png',
      years: ['2024'],
      tier: 't4',
      description: {
        en: 'A UI development tool for building, testing, and documenting isolated components in a sandboxed environment.',
        es: 'Una herramienta de desarrollo de UI para crear, probar y documentar componentes aislados en un entorno de espacio aislado.',
      },
      comment: {
        en: 'I had a bad experience trying to implement it with my front-end team in my startup. I would like to try it again.',
        es: 'Tuve una mala experiencia al intentar implementarlo con mi equipo front-end en mi startup. Me gustaría intentarlo de nuevo.',
      }
    },
    {
      tech: 'SCSS',
      image: '/tech/1-front-end/scss.png',
      years: ['2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A CSS preprocessor that adds features like variables, nesting, and functions for cleaner and reusable styles.',
        es: 'Un preprocesador CSS que agrega características como variables, anidamiento y funciones para estilos más limpios y reutilizables.',
      },
      comment: {
        en: 'I love SCSS. I prefer working with this kind of technologies instead of Tailwind or Bootstrap.',
        es: 'Me encanta SCSS. Prefiero trabajar con este tipo de tecnologías en lugar de Tailwind o Bootstrap.',
      }
    },
    {
      tech: 'Tailwind CSS',
      image: '/tech/1-front-end/taildwind.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A utility-first CSS framework for rapidly building custom, responsive designs directly in your HTML.',
        es: 'Un marco CSS de utilidad para crear rápidamente diseños personalizados y responsivos directamente en su HTML.',
      },
      comment: {
        en: 'Nice to use if I have to do it, but I did not deepen my knowledge in this technology. I prefer working with SCSS.',
        es: 'Está bueno utilizarlo si tengo que hacerlo, pero no profundicé mi conocimiento en esta tecnología. Prefiero trabajar con SCSS.',
      }
    },
    {
      tech: 'Bootstrap',
      image: '/tech/1-front-end/bootstrap.png',
      years: ['uni', '2017', '2018', '2019', '2020'],
      tier: 't3',
      description: {
        en: 'A popular CSS framework with pre-designed components and grid systems for building responsive websites quickly.',
        es: 'Un framework CSS popular con componentes prediseñados y sistemas de cuadrícula para crear sitios web responsivos rápidamente.',
      },
      comment: {
        en: 'I loved Bootstrap in my first years working professionaly. But I think it went out of fashion nowadays.',
        es: 'Me encantó Bootstrap en mis primeros años trabajando profesionalmente. Pero creo que hoy en día ha pasado de moda.',
      }
    },
    {
      tech: 'jQuery',
      image: '/tech/1-front-end/jquery.png',
      years: ['uni', '2017', '2018', '2019', '2020'],
      tier: 't5',
      description: {
        en: 'A lightweight Javascript library for simplifying DOM manipulation, event handling, and animations.',
        es: 'Una librería Javascript liviana para simplificar la manipulación DOM, el manejo de eventos y las animaciones.',
      },
      comment: {
        en: 'Old school technology. I used to use jQuery alongside Bootstrap in my first years working professionaly.',
        es: 'Tecnología de la vieja escuela. Solía ​​​​usar jQuery junto con Bootstrap en mis primeros años trabajando profesionalmente.',
      }
    },
  ]
};
