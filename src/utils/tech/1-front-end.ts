import type { TechBox } from '../interfaces/tech-box.interface';

export const frontend: TechBox = {
  name: 'Front-end',
  headerImage: 'front-end.svg',
  techs: [
    {
      tech: 'HTML',
      image: '/tech/1-front-end/html.png',
      years: ['uni'],
      tier: 't2',
      description: {
        en: 'Hypertext Markup Language is the standard markup language for defining the structure and content of a website.',
        es: 'Lenguaje de Marcado de Hipertexto es el lenguaje de etiquetas estándar para definir la estructura y el contenido de un sitio web.',
      },
      comment: {
        en: 'The basis of any web development, there would be no website without HTML.',
        es: 'La base de cualquier desarrollo web, no existiría sin HTML.',
      }
    },
    {
      tech: 'CSS',
      image: '/tech/1-front-end/css.png',
      years: ['uni'],
      tier: 't2',
      description: {
        en: 'Cascading Style Sheets is a style language used for specifying the presentation and styling of a document written with HTML.',
        es: 'Las hojas de estilo en cascada son un lenguaje de estilo que se utiliza para especificar la presentación y el estilo de un documento escrito con HTML.',
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
        en: 'HTML is the structure, CSS is the styles, Javascript is the behavior. It allows us to create dynamically updating content on websites.',
        es: 'HTML es la estructura, CSS los estilos y Javascript el comportamiento. Permite crear actualizaciones dinámicas de contenido en sitios web.',
      },
      comment: {
        en: 'After PHP, it was my second language which I worked professionaly. Nowadays my entire career is based on JS (but masked with TS).',
        es: 'Después de PHP, mi segundo lenguaje con el que trabajé profesionalmente. Hoy en día, toda mi carrera se basa en JS (pero enmascarado con TS).',
      }
    },
    {
      tech: 'TypeScript',
      image: '/tech/1-front-end/typescript.png',
      years: ['uni', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'TS is a programming language that adds static typing to JS to write code. Code that is transpiled to JS and can be processed by browsers.',
        es: 'TS es un lenguaje de programación que agrega tipado estático a JS para escribir código. Código que se transpila a JS y que los navegadores pueden procesar.',
      },
      comment: {
        en: 'Microsoft\'s best invention. I cann\'t start a new project without TypeScript in both backend and front-end.',
        es: 'El mejor invento de Microsoft. No puedo comenzar un nuevo projecto sin TypeScript tanto en el backend como en el front-end.',
      }
    },
    {
      tech: 'Angular',
      image: '/tech/1-front-end/angular.png',
      years: ['uni', '2020', '2023'],
      tier: 't1',
      description: {
        en: 'Angular is a TS-based framework created by Google with a large community behind. It has a complete front-end ecosystem for building single-page web apps.',
        es: 'Angular es un framework basado en TS y creado por Google con una gran comunidad por detrás. Tiene un ecosistema front-end completo para crear aplicaciones web de una sola página.',
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
        en: 'React is a JS library created by Meta with a large community behind to build front-end apps. It is the most popular front-end technology worldwide.',
        es: 'React es una librería JS creada por Meta con una gran comunidad detrás para crear aplicaciones front-end. Es la tecnología front-end más popular en todo el mundo.',
      },
      comment: {
        en: 'I\'m "Team Angular". However, I\'ve worked with React throughout last years, especially alongside NextJS. I don\'t like using just React.',
        es: 'Soy "Team Angular". Sin embargo, he trabajado con React en los últimos años, especialmente acompañado por NextJS. No me gusta utilizar solo React.',
      }
    },
    {
      tech: 'NextJS',
      image: '/tech/1-front-end/nextjs.png',
      years: ['2023'],
      tier: 't1',
      description: {
        en: 'NextJS is a React-based framework for creating web applications with server side rendering, and static rendering.',
        es: 'NextJS es una framework basado en React para crear aplicaciones web con renderizado desde el servidor y renderizado estático.',
      },
      comment: {
        en: 'Throughout my experience as CTO, we based our front-end architecture on Vercel technologies. I\'ve dicovered in NextJS an excellent ecosystem to build web apps.',
        es: 'A lo largo de mi experiencia como CTO, basamos nuestra arquitectura front-end en tecnologías de Vercel. Descubrí en NextJS un excelente ecosistema para construir aplicaciones web.',
      }
    },
    {
      tech: 'Astro',
      image: '/tech/1-front-end/astro.png',
      years: ['2023'],
      tier: 't2',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Vue.js',
      image: '/tech/1-front-end/vuejs.png',
      years: ['uni'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Svelte',
      image: '/tech/1-front-end/svelte.png',
      years: ['uni'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Storybook',
      image: '/tech/1-front-end/storybook.png',
      years: ['2024'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'SCSS',
      image: '/tech/1-front-end/scss.png',
      years: ['2020'],
      tier: 't1',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Tailwind',
      image: '/tech/1-front-end/taildwind.png',
      years: ['2021'],
      tier: 't2',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Bootstrap',
      image: '/tech/1-front-end/bootstrap.png',
      years: ['uni', '2017'],
      tier: 't3',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'jQuery',
      image: '/tech/1-front-end/jquery.png',
      years: ['uni', '2017'],
      tier: 't5',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
  ]
};
