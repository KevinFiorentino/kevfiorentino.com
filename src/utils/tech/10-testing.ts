import type { TechBox } from '../interfaces/tech-box.interface';

export const testing: TechBox = {
  name: 'Testing',
  headerImage: 'testing.svg',
  techs: [
    {
      tech: 'Postman',
      image: '/tech/10-testing/postman.png',
      years: [],
      tier: 't3',
      description: {
        en: 'An API development platform for building, testing, and documenting APIs with a user-friendly interface.',
        es: 'Una plataforma de desarrollo de API para crear, probar y documentar API con una interfaz fácil de usar.',
      },
      comment: {
        en: 'Good complementary tool for testing and documenting API. I always use it.',
        es: 'Buena herramienta complementaria para testear y documentar API. Siempre la uso.',
      }
    },
    {
      tech: 'Insomnia',
      image: '/tech/10-testing/insomnia.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A streamlined API client for debugging, testing, and organizing REST and GraphQL requests.',
        es: 'Un cliente API optimizado para depurar, probar y organizar solicitudes REST y GraphQL.',
      },
      comment: {
        en: 'I used it, but I prefer Postman.',
        es: 'La utilicé, pero prefiero Postman.',
      }
    },
    {
      tech: 'Swagger',
      image: '/tech/10-testing/swagger.png',
      years: [],
      tier: 't1',
      description: {
        en: 'A toolset for designing, documenting, and testing APIs with interactive documentation features.',
        es: 'Un conjunto de herramientas para diseñar, documentar y probar API con funciones de documentación interactiva.',
      },
      comment: {
        en: 'I cann’t develop an API without Swagger documentation. I always make sure I have it organized and clear.',
        es: 'No puedo desarrollar una API sin documentarla con Swagger. Siempre me aseguro de tenerlo organizado y claro.',
      }
    },
    {
      tech: 'Jest',
      image: '/tech/10-testing/jest.png',
      years: [],
      tier: 't2',
      description: {
        en: 'JavaScript testing framework designed for simplicity and support for unit and integration tests.',
        es: 'Marco de pruebas de JavaScript diseñado para brindar simplicidad y compatibilidad con pruebas unitarias y de integración.',
      },
      comment: {
        en: 'It is the best to test both backend or front-end nowadays. But I’ve used Jasmine and Mocha too, all of them are very similar.',
        es: 'Es el mejor para testear tanto backend como front-end hoy en día. Pero he utilizado Jasmine y Mocha también, todos son muy similares.',
      }
    },
    {
      tech: 'Testing Library',
      image: '/tech/10-testing/testing-library.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A set of tools for testing UI components by focusing on user interactions and accessibility.',
        es: 'Un conjunto de herramientas para probar componentes de la interfaz de usuario centrándose en las interacciones y la accesibilidad del usuario.',
      },
      comment: {
        en: 'An excellent tool alongside Jest to test front-end apps.',
        es: 'Una herramienta excelente junto a Jest para testear aplicaciones front-end.',
      }
    },
    {
      tech: 'Artillery',
      image: '/tech/10-testing/artillery.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A modern performance testing tool for load testing APIs and simulating high-traffic scenarios.',
        es: 'Una herramienta de prueba de rendimiento moderna para probar la carga de API y simular escenarios de alto tráfico.',
      },
      comment: {
        en: 'I like using it to test performance and high traffic in an API. An excellent library.',
        es: 'Me gusta utilizarlo para testear performance y alto tráfico en una API. Es una librería excelente.',
      }
    },
    {
      tech: 'Cypress',
      image: '/tech/10-testing/cypress.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A powerful end-to-end testing framework for web applications, offering fast and reliable test execution.',
        es: 'Un potente marco de pruebas de un extremo a otro para aplicaciones web, que ofrece una ejecución de pruebas rápida y confiable.',
      },
      comment: {
        en: 'Nice and easy to use if I have to create e2e tests. I’ve implemented it some times.',
        es: 'Agradable y fácil de usar si tengo que crear pruebas e2e. Lo he implementado algunas veces.',
      }
    },
    {
      tech: 'Mocha',
      image: '/tech/10-testing/mocha.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A flexible JavaScript test framework for NodeJS and browsers, supporting asynchronous testing.',
        es: 'Un marco de prueba de JavaScript flexible para NodeJS y navegadores, que admite pruebas asincrónicas.',
      },
      comment: {
        en: 'I used to use it to test especially API. But nowadays it is better to use Jest.',
        es: 'Solía utilizarlo para testear API. Pero hoy en día es mejor utilizar Jest.',
      }
    },
    {
      tech: 'Jasmine',
      image: '/tech/10-testing/jasmine.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A behavior-driven testing framework for JavaScript with a focus on simplicity and readability.',
        es: 'Un framework de pruebas basado en el comportamiento para JavaScript centrado en la simplicidad y la legibilidad.',
      },
      comment: {
        en: 'I used to use it in the Angular ecosystem. I liked it, but nowadays it is better to use Jest.',
        es: 'Solía utilizarlo en el ecosistema Angular. Me gustaba, pero hoy en día es mejor utilizar Jest.',
      }
    },
    {
      tech: 'Karma',
      image: '/tech/10-testing/karma.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A deprecated test runner for Angular apps designed to run tests across multiple browsers in real-time.',
        es: 'Un ejecutor de pruebas deprecado para aplicaciones Angular diseñado para ejecutar pruebas en varios navegadores en tiempo real.',
      },
      comment: {
        en: 'I used to use it in the Angular ecosystem. It was deprecated.',
        es: 'Solía utilizarlo en el ecosistema Angular. Fue deprecado.',
      }
    },
    {
      tech: 'Protractor',
      image: '/tech/10-testing/protractor.png',
      years: [],
      tier: 't5',
      description: {
        en: 'A deprecated end-to-end testing framework for Angular apps, built on top of WebDriverJS for seamless testing.',
        es: 'Un framework de pruebas de extremo a extremo deprecado para aplicaciones Angular, creado sobre WebDriverJS para realizar pruebas sin problemas.',
      },
      comment: {
        en: 'I used to use it in the Angular ecosystem. It was deprecated. Nowadays is better to use Cypress.',
        es: 'Solía utilizarlo en el ecosistema Angular. Fue deprecado. Hoy en día es mejor utilizar Cypress.',
      }
    },
  ]
};
