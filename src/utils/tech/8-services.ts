import type { TechBox } from '../interfaces/tech-box.interface';

export const services: TechBox = {
  name: 'Services',
  headerImage: 'services.svg',
  techs: [
    {
      tech: 'Firebase',
      image: '/tech/8-services/firebase.png',
      years: ['2021', '2022'],
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
      years: ['2024', '2025'],
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
      years: ['2019', '2020'],
      tier: 't2',
      description: {
        en: 'An open-source tool by Google for auditing web performance, SEO, accessibility, and best practices.',
        es: 'Una herramienta de código abierto de Google para auditar el rendimiento web, SEO, accesibilidad y mejores prácticas.',
      },
      comment: {
        en: 'It is an excellent tool for testing and improving many aspects of a website’s performance. I’ve used it several times.',
        es: 'Es una excelente herramienta para probar y mejorar muchos aspectos del rendimiento de un sitio web. Lo he usado varias veces.',
      }
    },
    {
      tech: 'Mercado Pago API',
      image: '/tech/8-services/mercadopago.png',
      years: ['2021', '2022', '2024'],
      tier: 't3',
      description: {
        en: 'A payment solution API for integrating secure online payments in Latin American markets.',
        es: 'Una API de solución de pago para integrar pagos seguros en línea en los mercados latinoamericanos.',
      },
      comment: {
        en: 'I’ve integrated MP API with NodeJS several times to create an e-commerce.',
        es: 'He integrado MP API con NodeJS varias veces para crear un e-commerce.',
      }
    },
    {
      tech: 'PayPal API',
      image: '/tech/8-services/paypal.png',
      years: ['2021', '2022'],
      tier: 't3',
      description: {
        en: 'A versatile API for integrating PayPal payments, subscriptions, and transactions into web and mobile applications.',
        es: 'Una API versátil para integrar pagos, suscripciones y transacciones de PayPal en aplicaciones web y móviles.',
      },
      comment: {
        en: 'I’ve integrated PP API once with NodeJS and Angular to receive international payments.',
        es: 'He integrado PP API con NodeJS y Angular para recibir pagos internacionales.',
      }
    },
    {
      tech: 'Mailersend',
      image: '/tech/8-services/mailersend.png',
      years: ['2024', '2025'],
      tier: 't3',
      description: {
        en: 'A transactional email API designed for developers to send and manage emails with advanced tracking and templates.',
        es: 'Una API de correo electrónico transaccional diseñada para que los desarrolladores envíen y administren correos electrónicos con seguimiento y plantillas avanzados.',
      },
      comment: {
        en: 'Nowadays, the easiest email service to implement and use.',
        es: 'Hoy en día, el servicio de envío de emails más fácil de implementar y usar.',
      }
    },
    {
      tech: 'SendGrid',
      image: '/tech/8-services/sendgrid.png',
      years: ['2021', '2022', '2024'],
      tier: 't4',
      description: {
        en: 'An email delivery platform for transactional and marketing emails, offering scalable API integration.',
        es: 'Una plataforma de entrega de correo electrónico transaccionales y de marketing, que ofrece integración API escalable.',
      },
      comment: {
        en: 'I’ve integrated SendGrid API to send emails. I used to use it, but now it doesn’t have free plan.',
        es: 'He integrado SendGrid API para envío de correos electrónicos. Solía utilizarlo, pero ahora no tiene plan grauito.',
      }
    },
    {
      tech: 'Postmark',
      image: '/tech/8-services/postmark.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A reliable email service for fast delivery of transactional emails with detailed tracking.',
        es: 'Un servicio de correo electrónico confiable para la entrega rápida de correos electrónicos transaccionales con seguimiento detallado.',
      },
      comment: {
        en: 'I used it, but its free plan is less generous than SendGrid one. I would rather use SendGrid.',
        es: 'Lo utilicé, pero su plan gratuito es menos generoso que el de SendGrid. Prefiero utilizar este último.',
      }
    },
    {
      tech: 'Schema.org',
      image: '/tech/8-services/schema.org.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A collaborative initiative that provides structured data schemas to improve how search engines understand web content.',
        es: 'Una iniciativa colaborativa que proporciona esquemas de datos estructurados para mejorar la forma en que los motores de búsqueda entienden el contenido web.',
      },
      comment: {
        en: 'I implemented in several front-ends to improve SEO. I think it is a crucial tool for web positioning.',
        es: 'Lo implementé en varios front-end para mejorar SEO. Pienso que es una herramienta crucial para posicionamiento web.',
      }
    },
    {
      tech: 'Meta Developers',
      image: '/tech/8-services/meta.png',
      years: ['2024'],
      tier: 't4',
      description: {
        en: 'Tools and API for building apps and integrations across Meta platforms like Facebook or Instagram.',
        es: 'Herramientas y API para crear aplicaciones e integraciones en metaplataformas como Facebook o Instagram.',
      },
      comment: {
        en: 'I have good and bad experiences with Meta API integration, mainly bad. The hardest part is authentication.',
        es: 'Tengo experiencias buenas y malas en la integración de Meta API, principalmente malas. La parte más difícil es la autenticación.',
      }
    },
    {
      tech: 'Sentry',
      image: '/tech/8-services/sentry.png',
      years: ['2021', '2022'],
      tier: 't4',
      description: {
        en: 'An error monitoring platform that helps developers identify and fix bugs in web and mobile applications.',
        es: 'Una plataforma de monitoreo de errores que ayuda a los desarrolladores a identificar y corregir errores en aplicaciones web y móviles.',
      },
      comment: {
        en: 'I integrated it with Angular some years ago. Good tool, a little difficult to understand all the information it generates.',
        es: 'Lo integré con Angular hace algunos años. Buena herramienta, un poco difícil de entender toda la información que genera.',
      }
    },
    {
      tech: 'FortiClient',
      image: '/tech/8-services/forticlient.png',
      years: ['2018', '2019', '2020'],
      tier: 't4',
      description: {
        en: 'A security solution offering VPN, endpoint protection, and threat detection for secure remote access and device management.',
        es: 'Una solución de seguridad que ofrece VPN, protección de terminales y detección de amenazas para acceso remoto seguro y administración de dispositivos.',
      },
      comment: {
        en: 'I used to use it to connect via VPN to access development environments at work.',
        es: 'Solía utilizarlo para conectarme por VPN para tener acceso a entornos de desarrollo en el trabajo.',
      }
    },
    {
      tech: 'OpenVPN',
      image: '/tech/8-services/openvpn.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A secure, open-source VPN solution for creating encrypted connections to protect online communication and data.',
        es: 'Una solución VPN segura y de código abierto para crear conexiones cifradas para proteger las comunicaciones y los datos en línea.',
      },
      comment: {
        en: 'I used to use it to connect via VPN to access development environments at work.',
        es: 'Solía utilizarlo para conectarme por VPN para tener acceso a entornos de desarrollo en el trabajo.',
      }
    },
    {
      tech: 'OneSignal',
      image: '/tech/8-services/onesignal.png',
      years: ['2024'],
      tier: 't4',
      description: {
        en: 'A messaging platform for sending push notifications, in-app messages, and emails to engage users.',
        es: 'Una plataforma de mensajería para enviar notificaciones automáticas, mensajes dentro de la aplicación y correos electrónicos para atraer a los usuarios.',
      },
      comment: {
        en: 'Good and sophisticated service for sending notifications and other types of messaging.',
        es: 'Buen y sofisticado servicio para envío de notificaciones y otro tipo de mensajería.',
      }
    },
    {
      tech: 'OpenWeatherMap',
      image: '/tech/8-services/openweathermap.png',
      years: ['uni', '2019'],
      tier: 't4',
      description: {
        en: 'A weather API providing real-time and forecast data for web and mobile applications.',
        es: 'Una API meteorológica que proporciona datos de pronóstico y en tiempo real para aplicaciones web y móviles.',
      },
      comment: {
        en: 'Nice API to learn and play. I used it for my thesis project.',
        es: 'Linda API para aprender y jugar. La utilicé para mi proyecto de tesis.',
      }
    },
    {
      tech: 'Kaggle',
      image: '/tech/8-services/kaggle.png',
      years: ['uni'],
      tier: 't5',
      description: {
        en: 'A data science platform offering datasets, competitions, and a cloud-based environment for machine learning projects.',
        es: 'Una plataforma de ciencia de datos que ofrece conjuntos de datos, competiciones y un entorno basado en la nube para proyectos de aprendizaje automático.',
      },
      comment: {
        en: 'I used to use it to practice and learn the basics of data science alongside Python and Jupyther Notebook at university.',
        es: 'Solía utilizarlo para aprender las bases sobre ciencia de datos junto con Python y Jupyther Notebook en la universidad.',
      }
    },
    {
      tech: 'LivePerson',
      image: '/tech/8-services/liveperson.png',
      years: ['2024'],
      tier: 't5',
      description: {
        en: 'A conversational AI platform for customer engagement across messaging channels like web and mobile.',
        es: 'Una plataforma de IA conversacional para la participación del cliente a través de canales de mensajería como la web y el móvil.',
      },
      comment: {
        en: 'LP is a great company with strong communication API. We tried to create a project alongside Google Marketplace services that, luckily, did not prosper. Too difficult to use their services.',
        es: 'LP es una gran empresa con una sólida API de comunicación. Intentamos crear un proyecto junto a servicios de Google Marketplace que, por suerte, no prosperó. Muy difícil utilizar sus servicios.',
      }
    },
    {
      tech: 'Google Marketplace',
      image: '/tech/8-services/google-marketplace.png',
      years: ['2024'],
      tier: 't5',
      description: {
        en: 'A platform for discovering and deploying third-party business apps that integrate seamlessly with Google Workspace.',
        es: 'Una plataforma para descubrir e implementar aplicaciones empresariales de terceros que se integran perfectamente con Google Workspace.',
      },
      comment: {
        en: 'We tried to combine it with LivePerson services to create a chatbot that works in gmail. Bad idea, too difficult to develop and sell.',
        es: 'Intentamos combinarlo con los servicios de LivePerson para crear un chatbot que funcionen en Gmail. Mala idea, demasiado difícil de desarrollar y vender.',
      }
    },
  ]
};
