import type { TechBox } from '../interfaces/tech-box.interface';

export const packages: TechBox = {
  name: 'Packages',
  headerImage: 'packages.svg',
  techs: [
    {
      tech: 'NPM',
      image: '/tech/11-packages/npm.png',
      years: ['uni', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
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
      years: ['2023', '2024', '2025'],
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
      years: ['2021', '2022'],
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
      years: ['2021', '2022'],
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
      years: ['2023', '2024', '2025'],
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
      years: ['2024'],
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
      years: ['2021', '2022'],
      tier: 't3',
      description: {
        en: 'A NodeJS library for automating headless Chrome or Chromium, useful for web scraping and testing.',
        es: 'Una librería NodeJS para automatizar Chrome o Chromium sin UI, útil para pruebas y web scraping.',
      },
      comment: {
        en: 'I’ve used it several times for creating PDF files and web scraping. But it is too heavym, more than 2 GB inside a docker container.',
        es: 'Lo he utilizado varias veces para crear archivos PDF y hacer web scraping. Pero es demasiado pesado, más de 2 GB dentro de un contenedor docker.',
      }
    },
    {
      tech: 'Nx',
      image: '/tech/11-packages/nx.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A powerful monorepo toolset that optimizes development workflows with smart project graph analysis, fast builds, and scalable code organization for JavaScript and TypeScript ecosystems.',
        es: 'Un poderoso conjunto de herramientas monorepositorio que optimiza los flujos de trabajo de desarrollo con análisis de gráficos de proyectos inteligentes, compilaciones rápidas y organización de código escalable para ecosistemas JavaScript y TypeScript.',
      },
      comment: {
        en: 'I’ve never used Nx to build a monorepo architecture in a project from scratch, but I have worked on some very large Angular projects that used it. I think it’s a good option to consider for a solid architecture.',
        es: 'Nunca me tocó utilizar Nx para levantar una arquitectura monorepo en un proyecto desde cero, pero si he trabajado en proyectos Angular realmente muy grandes que lo utilizaban. Me parece una buena opción a considerar para tener una buena arquitectura.',
      }
    },
    {
      tech: 'Chart.js',
      image: '/tech/11-packages/chartjs.png',
      years: ['2021', '2022'],
      tier: 't3',
      description: {
        en: 'A simple and flexible Javascript charting library for creating interactive and responsive charts.',
        es: 'Una librería de gráficos Javascript simple y flexible para crear gráficos interactivos y responsivos.',
      },
      comment: {
        en: 'Easy to use to create a simple dashboard in a front-end. I would like to use a different alternative.',
        es: 'Fácil de usar para crear un simple dashboard en un front-end. Me gustaría usar alguna alternativa diferente.',
      }
    },
    {
      tech: 'Serverless Framework',
      image: '/tech/11-packages/serverless-framework.png',
      years: ['2025', '2026'],
      tier: 't3',
      description: {
        en: 'A deployment and management toolkit that simplifies building serverless applications by automating infrastructure, configuration, and deployments across cloud providers like AWS, Azure, and GCP.',
        es: 'Un kit de herramientas de implementación y administración que simplifica la creación de aplicaciones serverless al automatizar la infraestructura, la configuración y las implementaciones en proveedores de nube como AWS, Azure y GCP.',
      },
      comment: {
        en: 'If we’re talking about serverless, the Serverless Framework is a must-have. Especially when used with AWS Lambda and DynamoDB.',
        es: 'Si se trata de serverless, Serverless Framework no puede faltar. Especialmente junto a AWS Lambda y DynamoDB.',
      }
    },
    {
      tech: 'Passport.js',
      image: '/tech/11-packages/passport.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A middleware for NodeJS that simplifies user authentication with various strategies like OAuth and JWT.',
        es: 'Un middleware para NodeJS que simplifica la autenticación de usuarios con varias estrategias como OAuth y JWT.',
      },
      comment: {
        en: 'I’ve explored to authenticate through GitHub and Gmail accounts. Good alternative to implement it manually, but I prefer using Auth0.',
        es: 'Lo exploré para autenticarte mediante cuentas de GitHub o Gmail. Buena alternative para implementarlo manualmente, pero prefiero usar Auth0.',
      }
    },
    {
      tech: 'Editorconfig',
      image: '/tech/11-packages/editorconfig.png',
      years: [],
      tier: 't1',
      description: {
        en: 'A tool that defines and maintains consistent coding styles across different editors and IDEs.',
        es: 'Una herramienta que define y mantiene estilos de codificación consistentes en diferentes editores e IDE.',
      },
      comment: {
        en: 'My favorite, easy to configure. It can’t be missing from one of my projects.',
        es: 'Mi favorito, fácil de configurar. No puede faltar en uno de mis proyectos.',
      }
    },
    {
      tech: 'Prettier',
      image: '/tech/11-packages/prettier.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A code formatter that enforces consistent style by automatically formatting code according to predefined rules.',
        es: 'Un formateador de código que impone un estilo coherente formateando automáticamente el código según reglas predefinidas.',
      },
      comment: {
        en: 'I always like using this kind of libraries. My code will always be organized, but it is difficult to use the same plugins or settings with the rest of the team.',
        es: 'Siempre me gusta usar este tipo de librerías. Mi código siempre estará organizado, pero es difícil usar los mismos plugins o configuraciones con el resto del equipo.',
      }
    },
    {
      tech: 'ESLint',
      image: '/tech/11-packages/eslint.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A static code analysis tool for identifying and fixing problems in Javascript code, improving code quality.',
        es: 'Una herramienta de análisis de código estático para identificar y solucionar problemas en el código Javascript, mejorando la calidad del código.',
      },
      comment: {
        en: 'I always like using this kind of libraries. My code will always be organized, but it is difficult to use the same plugins or settings with the rest of the team.',
        es: 'Siempre me gusta usar este tipo de librerías. Mi código siempre estará organizado, pero es difícil usar los mismos plugins o configuraciones con el resto del equipo.',
      }
    },
    {
      tech: 'Swiper',
      image: '/tech/11-packages/swiperjs.png',
      years: ['2019'],
      tier: 't4',
      description: {
        en: 'A modern, touch-friendly slider and carousel library for creating responsive and customizable web experiences.',
        es: 'Una biblioteca de carrusel y control deslizante moderna y táctil para crear experiencias web responsivas y personalizables.',
      },
      comment: {
        en: 'I used it to create basic carousels on a website.',
        es: 'Lo usé para crear carruseles básicos en un sitio web.',
      }
    },
    {
      tech: 'DataTables',
      image: '/tech/11-packages/datatables.png',
      years: ['2017'],
      tier: 't4',
      description: {
        en: 'A jQuery plugin for creating interactive and feature-rich HTML tables with sorting, pagination, and search capabilities.',
        es: 'Un plugin de jQuery para crear tablas HTML interactivas y ricas en funciones con capacidades de clasificación, paginación y búsqueda.',
      },
      comment: {
        en: 'Probably, my first JS library that I used ever in 2017 at my first job.',
        es: 'Probablemente, la primera librería JS que utilicé alguna vez en el 2017 en mi primer trabajo.',
      }
    },
    {
      tech: 'Composer',
      image: '/tech/11-packages/composer.png',
      years: ['2017', '2018'],
      tier: 't5',
      description: {
        en: 'A dependency manager for PHP, helping to manage libraries and project dependencies.',
        es: 'Un administrador de dependencias para PHP, que ayuda a administrar librerías y dependencias de proyectos.',
      },
      comment: {
        en: 'Despite I worked with PHP several years, I almost didn’t used Composer. I never found the same versatility as with NPM. I mainly worked with Drupal which has its own dependency manager.',
        es: 'A pesar de que trabajé con PHP varios años, casi no usé Composer. Nunca encontré la misma versatilidad que con NPM. Trabajé principalmente con Drupal, que tiene su propio administrador de dependencias.',
      }
    },
    {
      tech: 'Drush',
      image: '/tech/11-packages/drush.png',
      years: ['2019', '2020'],
      tier: 't3',
      description: {
        en: 'A command-line tool for managing Drupal websites, simplifying tasks like updates and configuration.',
        es: 'Una herramienta de línea de comandos para administrar sitios web Drupal, simplificando tareas como actualizaciones y configuración.',
      },
      comment: {
        en: 'If you work with Drupal, you’ll use Drush. Excellent for automating tasks and processes.',
        es: 'Si trabajas con Drupal, usarás Drush. Excelente para automatizar tareas y procesos.',
      }
    },
    {
      tech: 'Twig',
      image: '/tech/11-packages/twig.png',
      years: ['2019', '2020'],
      tier: 't3',
      description: {
        en: 'A flexible, fast, and secure templating engine for PHP, used for generating HTML views in web applications.',
        es: 'Un motor de plantillas para PHP flexible, rápido y seguro, utilizado para generar vistas HTML en aplicaciones web.',
      },
      comment: {
        en: 'Probably, the ugliest logo in this dashboard. I used it to generate HTML with PHP in Drupal projects.',
        es: 'Probablemente, el logo más feo en este dashboard. Lo usé para generar HTML con PHP en proyectos Drupal.',
      }
    },
    {
      tech: 'Numpy',
      image: '/tech/11-packages/numpy.png',
      years: ['uni'],
      tier: 't4',
      description: {
        en: 'A Python library for numerical computing, providing support for large, multi-dimensional arrays and matrices.',
        es: 'Una biblioteca de Python para computación numérica, que brinda soporte para matrices y arreglos multidimensionales grandes.',
      },
      comment: {
        en: 'I used Numpy and Pandas to learn the basics of data science alongside Jupyter Notebook and Kaggle in college several years ago.',
        es: 'Utilicé Numpy y Pandas para aprender los conceptos básicos de la ciencia de datos junto con Jupyter Notebook y Kaggle en la universidad hace varios años.',
      }
    },
    {
      tech: 'Pandas',
      image: '/tech/11-packages/pandas.png',
      years: ['uni'],
      tier: 't4',
      description: {
        en: 'A Python library for data manipulation and analysis, offering powerful data structures like DataFrames.',
        es: 'Una biblioteca de Python para manipulación y análisis de datos que ofrece potentes estructuras de datos como DataFrames.',
      },
      comment: {
        en: 'I used Numpy and Pandas to learn the basics of data science alongside Jupyter Notebook and Kaggle in college several years ago.',
        es: 'Utilicé Numpy y Pandas para aprender los conceptos básicos de la ciencia de datos junto con Jupyter Notebook y Kaggle en la universidad hace varios años.',
      }
    },
  ]
};
