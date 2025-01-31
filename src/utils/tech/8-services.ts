import type { TechBox } from '../interfaces/tech-box.interface';

export const services: TechBox = {
  name: 'Services',
  headerImage: 'services.svg',
  techs: [
    {
      tech: 'Firebase',
      image: '/tech/8-services/firebase.png',
      years: ['2021'],
      tier: 't2',
      description: {
        en: 'A cloud platform by Google offering backend services like authentication, databases, and hosting for web and mobile apps.',
        es: 'Una plataforma en la nube de Google que ofrece servicios backend como autenticación, bases de datos y alojamiento para aplicaciones web y móviles.',
      },
      comment: {
        en: 'I think Firebase is perfect for freelance projects and to learn the basics of programming. I’ve implemented several times. However, for startups or more robust projects, I would prefer other solutions.',
        es: 'Pienso que Firebase es perfecto para proyectos freelance y para aprender las bases de la programación. Lo he implementado varias veces. Sin embargo, para startups o proyectos más robustos, eligiría otras soluciones.',
      }
    },
    {
      tech: 'Auth0',
      image: '/tech/8-services/auth0.png',
      years: ['2023'],
      tier: 't2',
      description: {
        en: 'A secure identity platform providing authentication and authorization solutions for applications.',
        es: 'Una plataforma de identidad segura que proporciona soluciones de autenticación y autorización para aplicaciones.',
      },
      comment: {
        en: 'At my startup, we implemented and base our entire authentication system through Auth0.',
        es: 'En mi startup, implementamos y basamos todo nuestro sistema de autenticación a través de Auth0.',
      }
    },
    {
      tech: 'OAuth 2.0',
      image: '/tech/8-services/oauth2.png',
      years: [],
      tier: 't3',
      description: {
        en: 'An open standard for secure user authorization, allowing third-party apps to access resources without sharing passwords.',
        es: 'Un estándar abierto para la autorización segura de usuarios, que permite que aplicaciones de terceros accedan a recursos sin compartir contraseñas.',
      },
      comment: {
        en: 'I mainly implemented OAuth 2.0 through Auth0, but I also studied these types of protocols with libraries like Passport JS.',
        es: 'Implementé principalmente OAuth 2.0 a través de Auth0, pero también estudié este tipo de protocolos con librerías como Passport JS.',
      }
    },
    {
      tech: 'Lighthouse',
      image: '/tech/8-services/lighthouse.png',
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
      tech: 'Mercado Pago API',
      image: '/tech/8-services/mercadopago.png',
      years: ['2021'],
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
      tech: 'PayPal API',
      image: '/tech/8-services/paypal.png',
      years: ['2021'],
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
      tech: 'SendGrid',
      image: '/tech/8-services/sendgrid.png',
      years: ['2021'],
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
      tech: 'Postmark',
      image: '/tech/8-services/postmark.png',
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
      tech: 'Meta Developers',
      image: '/tech/8-services/meta.png',
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
      tech: 'Sentry',
      image: '/tech/8-services/sentry.png',
      years: ['2022'],
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
      tech: 'OneSignal',
      image: '/tech/8-services/onesignal.png',
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
      tech: 'OpenWeatherMap',
      image: '/tech/8-services/openweathermap.png',
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
      tech: 'LivePerson',
      image: '/tech/8-services/liveperson.png',
      years: ['2024'],
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
