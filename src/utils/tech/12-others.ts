import type { TechBox } from '../interfaces/tech-box.interface';

export const others: TechBox = {
  name: 'Others',
  headerImage: 'others.svg',
  techs: [
    {
      tech: 'Figma',
      image: '/tech/12-others/figma.png',
      years: ['2024', '2025'],
      tier: 't1',
      description: {
        en: 'A collaborative design tool for creating user interfaces, wireframes, and prototypes in real time.',
        es: 'Una herramienta de diseño colaborativo para crear interfaces de usuario, esquemas y prototipos en tiempo real.',
      },
      comment: {
        en: 'I didn’t think I was capable, but I’ve designed complete web apps that I later developed. I use Figma for anything, I love it!',
        es: 'No me creía capaz, pero he diseñado aplicaciones web completas que luego desarrollé. Uso Figma para cualquier cosa, ¡me encanta!',
      }
    },
    {
      tech: 'Notion',
      image: '/tech/12-others/notion.png',
      years: ['2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'An all-in-one workspace for note-taking, task management, and collaboration, ideal for teams and individuals.',
        es: 'Un espacio de trabajo todo en uno para tomar notas, gestionar tareas y colaborar, ideal para equipos e individuos.',
      },
      comment: {
        en: 'I use Notion for both personal and professional purposes. It is perfect for managing what you need.',
        es: 'Uso Notion tanto para propósitos personales como profesionales. Es perfecto para administrar lo que necesites.',
      }
    },
    {
      tech: 'Sublime Text',
      image: '/tech/12-others/sublime-text.png',
      years: ['2023', '2024', '2025'],
      tier: 't2',
      description: {
        en: 'A lightweight and versatile text editor known for its speed, customizability, and powerful features.',
        es: 'Un editor de texto ligero y versátil conocido por su velocidad, personalización y potentes funciones.',
      },
      comment: {
        en: 'The best way for me to have a TODO list in the short-term is with a simple text editor. I’ve tried more sophisticated tools, but they didn’t work for me.',
        es: 'La mejor manera para mi de llevar una lista de cosas que hacer en el corto plazo es con un simple editor de texto. He intentado herramientas más sofisticadas, pero no funcionan para mi.',
      }
    },
    {
      tech: 'Excalidraw',
      image: '/tech/12-others/excalidraw.png',
      years: ['2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A collaborative whiteboard tool for creating hand-drawn-style diagrams and visual ideas.',
        es: 'Una herramienta de pizarra colaborativa para crear diagramas e ideas visuales estilo dibujado a mano.',
      },
      comment: {
        en: 'It is an excellent tool for creating diagrams, especially architecture or DDBB.',
        es: 'Es una herramienta excelente para crear diagramas, especialmente de arquitectura o base de datos.',
      }
    },
    {
      tech: 'Trello',
      image: '/tech/12-others/trello.png',
      years: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A project management tool that uses boards, lists, and cards to organize tasks and workflows.',
        es: 'Una herramienta de gestión de proyectos que utiliza tableros, listas y tarjetas para organizar tareas y flujos de trabajo.',
      },
      comment: {
        en: 'I use Trello for long-term projects, especially to manage my freelance projects.',
        es: 'Uso Trello para proyetos a largo plazo, especialmente para administrar mis proyectos freelance.',
      }
    },
    {
      tech: 'Jira',
      image: '/tech/12-others/jira.png',
      years: ['2021', '2022'],
      tier: 't4',
      description: {
        en: 'A powerful project management and issue-tracking platform for software development teams.',
        es: 'Una potente plataforma de gestión de proyectos y seguimiento de problemas para equipos de desarrollo de software.',
      },
      comment: {
        en: 'I used it a few years ago at a job I had. It is very corporate and sophisticated, good to use especially with all the Atlassian ecosystem tools like Bitbucket.',
        es: 'Lo usé hace unos años en un trabajo que tenía. Es muy corporativo y sofisticado, bueno para usar especialmente con todas las herramientas del ecosistema Atlassian como Bitbucket.',
      }
    },
    {
      tech: 'Asana',
      image: '/tech/12-others/asana.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A project management tool that helps teams organize tasks, track progress, and collaborate efficiently.',
        es: 'Una herramienta de gestión de proyectos que ayuda a los equipos a organizar tareas, realizar un seguimiento del progreso y colaborar de manera eficiente.',
      },
      comment: {
        en: 'I used it for a short time at the same job I used Jira. It was a period of experimentation with various task managers.',
        es: 'Lo usé por un corto tiempo en el mismo trabajo que usé Jira. Fue un período de experimentación con varios administradores de tareas.',
      }
    },
    {
      tech: 'ClickUp',
      image: '/tech/12-others/clickup.png',
      years: ['2024'],
      tier: 't5',
      description: {
        en: 'An all-in-one productivity platform for task management, project planning, and team collaboration.',
        es: 'Una plataforma de productividad todo en uno para gestión de tareas, planificación de proyectos y colaboración en equipo.',
      },
      comment: {
        en: 'Another task manager. I used it in my company for a while. We didn’t like it and prefer manage tasks with GitHub and Notion.',
        es: 'Otro administrador de tareas. Lo usé en mi empresa por un tiempo. No nos gustó y preferimos gestionar tareas con GitHub y Notion.',
      }
    },
    {
      tech: 'Mobile Development Knowledge',
      image: '/tech/12-others/android.png',
      years: ['2023', '2024'],
      tier: 't4',
      description: {
        en: 'Expertise in building apps for iOS and Android platforms using mobile technologies.',
        es: 'Experiencia en la creación de aplicaciones para plataformas iOS y Android utilizando tecnologías mobile.',
      },
      comment: {
        en: 'I have never developed a mobile app. However, I led a mobile team throughout my experience as a CTO, and I learned a lot from my team.',
        es: 'Nunca he desarrollado una aplicación móvil. Sin embargo, lideré un equipo mobile durante mi experiencia como CTO y aprendí mucho de mi equipo.',
      }
    },
    {
      tech: 'Arduino',
      image: '/tech/12-others/arduino.png',
      years: ['uni'],
      tier: 't5',
      description: {
        en: 'An open-source electronics platform for building interactive hardware projects using programmable microcontrollers.',
        es: 'Una plataforma electrónica de código abierto para crear proyectos de hardware interactivos utilizando microcontroladores programables.',
      },
      comment: {
        en: 'I don’t like hardware, but I had an IoT experience and learned with Arduino how to build a device to play a math game in college.',
        es: 'No me gusta el hardware, pero tuve una experiencia IoT y aprendí con Arduino a construir un dispositivo para jugar un juego matemático en la universidad.',
      }
    },
    {
      tech: 'Discord',
      image: '/tech/12-others/discord.png',
      years: ['2023', '2024', '2025'],
      tier: 't3',
      description: {
        en: 'A communication platform for voice, video, and text chats, popular among gaming and community groups.',
        es: 'Una plataforma de comunicación para chats de voz, video y texto, popular entre grupos comunitarios y de juegos.',
      },
      comment: {
        en: 'Throughout my experience as a CTO, I managed a Discord server that was our main communication app. It was a fun experience, I customized it and filled it with lots of emojis like this tech journey.',
        es: 'A lo largo de mi experiencia como CTO, administré un servidor de Discord que era nuestra principal medio de comunicación. Fue una experiencia divertida, la personalicé y la llené con emojis como este tech journey.',
      }
    },
    {
      tech: 'Slack',
      image: '/tech/12-others/slack.png',
      years: ['2021', '2022'],
      tier: 't4',
      description: {
        en: 'A messaging app designed for team collaboration, featuring channels, direct messaging, and integration with other tools.',
        es: 'Una aplicación de mensajería diseñada para la colaboración en equipo, que incluye canales, mensajería directa e integración con otras herramientas.',
      },
      comment: {
        en: 'I used it a few years ago at a job I had. Excellent and necessary communication tool.',
        es: 'Lo usé hace unos años en un trabajo que tenía. Excelente y necesaria herramienta de comunicación.',
      }
    },
    {
      tech: 'Kdenlive',
      image: '/tech/12-others/kdenlive.png',
      years: ['2024'],
      tier: 't5',
      description: {
        en: 'An open-source video editing software with advanced features for creating professional multimedia content.',
        es: 'Un software de edición de vídeo de código abierto con funciones avanzadas para crear contenido multimedia profesional.',
      },
      comment: {
        en: 'I used to use it to create videos. When you are a CTO and an entrepreneur, sometimes you have to do everything.',
        es: 'Solía ​​usarlo para crear videos. Cuando eres CTO y emprendedor, a veces tienes que hacer todo.',
      }
    },
    {
      tech: 'Document360',
      image: '/tech/12-others/document360.png',
      years: ['2022', '2023'],
      tier: 't5',
      description: {
        en: 'A knowledge base platform for creating, managing, and sharing documentation for software and customer support.',
        es: 'Una plataforma de base de conocimientos para crear, gestionar y compartir documentación para software y soporte al cliente.',
      },
      comment: {
        en: 'I used it in my experience as a content creator for Platzi. You will find on my personal blog many articles I wrote at that time.',
        es: 'Lo usé en mi experiencia como creador de contenido para Platzi. Encontrarás en mi blog personal muchos artículos que escribí en ese momento.',
      }
    },
  ]
};
