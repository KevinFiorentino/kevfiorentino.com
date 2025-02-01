import type { TechBox } from '../interfaces/tech-box.interface';

export const packages: TechBox = {
  name: 'Packages',
  headerImage: 'packages.svg',
  techs: [
    {
      tech: 'NPM',
      image: '/tech/11-packages/npm.png',
      years: [],
      tier: 't1',
      description: {
        en: 'The default package manager for Node.js, used to manage project dependencies and run scripts.',
        es: 'El administrador de paquetes predeterminado para NodeJS, utilizado para administrar las dependencias del proyecto y ejecutar scripts.',
      },
      comment: {
        en: 'Our first friend in Javascript ecosystem. Even though there are better alternatives, I like to continue using it.',
        es: 'Nuestro primer amigo en el ecosistema Javascript. Aunque existen mejores alternativas, me gusta seguir usándolo.',
      }
    },
    {
      tech: 'PNPM',
      image: '/tech/11-packages/pnpm.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A fast and efficient package manager that saves disk space by sharing dependencies across projects.',
        es: 'Un administrador de paquetes rápido y eficiente que ahorra espacio en disco al compartir dependencias entre proyectos.',
      },
      comment: {
        en: 'It is the alternative to NPM I would choose nowadays.',
        es: 'Es la alternativa a NPM que yo elegiría hoy en día.',
      }
    },
    {
      tech: 'Yarn',
      image: '/tech/11-packages/yarn.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A reliable and secure Javascript package manager designed for speed and consistency in dependency management.',
        es: 'Un administrador de paquetes Javascript confiable y seguro diseñado para brindar velocidad y coherencia en la gestión de dependencias.',
      },
      comment: {
        en: 'I used to use it, but I prefer PNPM as an alternative to NPM.',
        es: 'Solía ​​usarlo, pero prefiero PNPM como alternativa a NPM.',
      }
    },
    {
      tech: 'RxJS',
      image: '/tech/11-packages/rxjs.png',
      years: [],
      tier: 't1',
      description: {
        en: 'A reactive programming library for handling asynchronous events and data streams in Javascript applications, especially with observers.',
        es: 'Una librería de programación reactiva para manejar eventos asincrónicos y flujos de datos en aplicaciones Javascript, especialmente con observables.',
      },
      comment: {
        en: 'Angular without RxJS wouldn’t be the same. I like it a lot.',
        es: 'Angular sin RxJS no sería lo mismo',
      }
    },
    {
      tech: 'NgRx',
      image: '/tech/11-packages/ngrx.png',
      years: [],
      tier: 't1',
      description: {
        en: 'A reactive state management library for Angular applications, built on Redux and RxJS principles for scalable state handling.',
        es: 'Una librería de administración de estado reactiva para aplicaciones Angular, construida sobre los principios de Redux y RxJS para un manejo de estado escalable.',
      },
      comment: {
        en: 'Redux + RxJS = Redux for Angular. One of my favorites libraries.',
        es: 'Redux + RxJS = Redux para Angular. Una de mis librerías favoritas.',
      }
    },
    {
      tech: 'Redux',
      image: '/tech/11-packages/redux.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A predictable state management library for Javascript apps, often used with React to maintain application state.',
        es: 'Una librería de administración de estado predecible para aplicaciones Javascript, que a menudo se usa con React para mantener el estado de la aplicación.',
      },
      comment: {
        en: 'I prefer to use Redux to manage the state of a React app, rather than React Context or another alternative.',
        es: 'Prefiero usar Redux para administrar el estado de una aplicación React, en lugar de React Context u otra alternativa.',
      }
    },
    {
      tech: 'Webpack',
      image: '/tech/11-packages/webpack.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A powerful module bundler for Javascript applications, optimizing assets and dependencies for efficient delivery.',
        es: 'Un potente empaquetador de módulos para aplicaciones Javascript que optimiza activos y dependencias para una entrega eficiente.',
      },
      comment: {
        en: 'I used it, but I don’t like setting up these types of libraries. I prefer using frameworks like Angular or NextJS with this kinds of things figured out.',
        es: 'Lo utilicé, pero no me gusta configurar este tipo de librerías. Prefiero usar frameworks como Angular o NextJS con este tipo de cosas resueltas.',
      }
    },
    {
      tech: 'Babel',
      image: '/tech/11-packages/babel.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A JavaScript compiler that converts modern Javascript code into backward-compatible versions for wider browser support.',
        es: 'Un compilador de Javascript que convierte código Javascript moderno en versiones anteriores compatibles con todos los navegadores.',
      },
      comment: {
        en: 'I used it, but I don’t like setting up these types of libraries. I prefer using frameworks like Angular or NextJS with this kinds of things figured out.',
        es: 'Lo utilicé, pero no me gusta configurar este tipo de librerías. Prefiero usar frameworks como Angular o NextJS con este tipo de cosas resueltas.',
      }
    },
    {
      tech: 'Socket.io',
      image: '/tech/11-packages/socketio.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A library for real-time, bidirectional communication between web clients and servers using WebSockets.',
        es: 'Una librería para la comunicación bidireccional en tiempo real entre clientes y servidores web mediante WebSockets.',
      },
      comment: {
        en: 'Perfect for working with a protocol other than the Rest API and create apps that update in real time.',
        es: 'Perfecto para trabajar con un protocolo distinto al Rest API y crear apps que se actualicen en tiempo real.',
      }
    },
    {
      tech: 'Date-fns',
      image: '/tech/11-packages/datefns.png',
      years: [],
      tier: 't1',
      description: {
        en: 'A modern Javascript library for working with dates, providing simple and efficient functions for date manipulation.',
        es: 'Una librería Javascript moderna para trabajar con fechas, que proporciona funciones simples y eficientes para la manipulación de fechas.',
      },
      comment: {
        en: 'The best library to work with dates. I don’t need it another one.',
        es: 'La mejor librería para trabajar con fechas. No necesito otra más.',
      }
    },
    {
      tech: 'Moment.js',
      image: '/tech/11-packages/momentjs.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A popular Javascript library for parsing, manipulating, and formatting dates, though now in maintenance mode.',
        es: 'Una popular librería de Javascript para analizar, manipular y formatear fechas, aunque ahora en modo de mantenimiento.',
      },
      comment: {
        en: 'PLEASE stop using moment.js. It is a heavy and deprecated library for your project. Use date-fns instead. Thank you!',
        es: 'POR FAVOR, deja de usar moment.js. Es una librería pesada y deprecada para su proyecto. En su lugar, utilice date-fns. ¡Gracias!',
      }
    },
    {
      tech: 'Puppeteer',
      image: '/tech/11-packages/puppeteer.png',
      years: [],
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
      tech: 'Chart.js',
      image: '/tech/11-packages/chartjs.png',
      years: [],
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
      tech: 'Passport.js',
      image: '/tech/11-packages/passport.png',
      years: [],
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
      tech: 'Editorconfig',
      image: '/tech/11-packages/editorconfig.png',
      years: [],
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
      tech: 'Prettier',
      image: '/tech/11-packages/prettier.png',
      years: [],
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
      tech: 'ESLint',
      image: '/tech/11-packages/eslint.png',
      years: [],
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
      tech: 'DataTables',
      image: '/tech/11-packages/datatables.png',
      years: ['2017'],
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
      tech: 'Composer',
      image: '/tech/11-packages/composer.png',
      years: [],
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
    {
      tech: 'Numpy',
      image: '/tech/11-packages/numpy.png',
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
      tech: 'Pandas',
      image: '/tech/11-packages/pandas.png',
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
  ]
};
