import type { TechBox } from '../interfaces/tech-box.interface';

export const devtools: TechBox = {
  name: 'Dev Tools',
  headerImage: 'dev-tools.svg',
  techs: [
    {
      tech: 'VS Code',
      image: '/tech/9-dev-tools/vscode.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A lightweight, versatile code editor by Microsoft with extensive extensions and debugging support.',
        es: 'Un editor de código ligero y versátil de Microsoft con amplias extensiones y soporte de depuración.',
      },
      comment: {
        en: 'Every developer uses or used VS Code. I wouldn’t use an alternative.',
        es: 'Todo desarrollador usa o usó VS Code. No utilizaría una alternativa.',
      }
    },
    {
      tech: 'Vim',
      image: '/tech/9-dev-tools/vim.png',
      years: [],
      tier: 't1',
      description: {
        en: 'A highly customizable and efficient terminal-based text editor favored by developers for its speed and shortcuts.',
        es: 'Un editor de texto basado en terminal altamente personalizable y eficiente, preferido por los desarrolladores por su velocidad y atajos.',
      },
      comment: {
        en: 'One of my favorite text editor tools. Especially for editing files on a server.',
        es: 'Una de mis herramientas de edición de texto favoritas. Especialmente para editar archivos en un servidor.',
      }
    },
    {
      tech: 'Nano',
      image: '/tech/9-dev-tools/nano.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A simple, user-friendly command-line text editor for Unix systems, ideal for quick file edits.',
        es: 'Un editor de texto de línea de comandos sencillo y fácil de usar para sistemas Unix, ideal para ediciones rápidas de archivos.',
      },
      comment: {
        en: 'Nano or Vim? I would rather use Vim. I still have some problems using Nano, I’m not used to it.',
        es: '¿Nano o Vim? Prefiero utilizar Vim. Todavía tengo algunos problemas usando Nano, no estoy acostumbrado.',
      }
    },
    {
      tech: 'Eclipse',
      image: '/tech/9-dev-tools/eclipse.png',
      years: ['uni'],
      tier: 't5',
      description: {
        en: 'A robust IDE for Java and other languages, offering powerful tools for large-scale software development.',
        es: 'Un IDE robusto para Java y otros lenguajes que ofrece potentes herramientas para el desarrollo de software a gran escala.',
      },
      comment: {
        en: 'I used to use it to learn Java at university.',
        es: 'Solía utilizarlo para aprender Java en la universidad.',
      }
    },
    {
      tech: 'Netbeans',
      image: '/tech/9-dev-tools/netbeans.png',
      years: ['uni'],
      tier: 't5',
      description: {
        en: 'An open-source IDE for Java, PHP, and HTML5 development with comprehensive debugging and editing features.',
        es: 'Un IDE de código abierto para desarrollo Java, PHP y HTML5 con funciones integrales de depuración y edición.',
      },
      comment: {
        en: 'An alternative to Eclipse. I also used to use it to learn Java. I remember I developed a naval battle with it in 2016.',
        es: 'Una alternativa a Eclipse. También solía utilizarlo para aprender Java. Recuerdo haber desarrollado una batalla naval con él en 2016.',
      }
    },
    {
      tech: 'Git',
      image: '/tech/9-dev-tools/git.png',
      years: ['uni', '2017'],
      tier: 't1',
      description: {
        en: 'A distributed version control system for tracking changes in code and enabling collaborative software development.',
        es: 'Un sistema de control de versiones distribuido para rastrear cambios en el código y permitir el desarrollo colaborativo de software.',
      },
      comment: {
        en: 'I started using Git in 2017 at my first professional job. Without a doubt, this tool is number one for every developer.',
        es: 'Comencé a usar Git en 2017 en mi primer trabajo profesional. Sin duda, esta herramienta es la número uno para todo desarrollador.',
      }
    },
    {
      tech: 'GitHub',
      image: '/tech/9-dev-tools/github.png',
      years: ['uni', '2017'],
      tier: 't1',
      description: {
        en: 'A cloud-based platform for hosting and managing Git repositories with collaboration and CI/CD tools.',
        es: 'Una plataforma basada en la nube para alojar y administrar repositorios Git con herramientas de colaboración y CI/CD.',
      },
      comment: {
        en: 'If I have to understand who is a developer, I would look for his GitHub profile, every developer has to have it. I wouldn’t hire a developer with just one or two repositories.',
        es: 'Si tengo que entender quién es un desarrollador, buscaría su perfil de GitHub, todo desarrollador debe tenerlo. No contrataría a un desarrollador con sólo uno o dos repositorios.',
      }
    },
    {
      tech: 'GitLab',
      image: '/tech/9-dev-tools/gitlab.png',
      years: ['2018'],
      tier: 't4',
      description: {
        en: 'A DevOps platform offering Git repository hosting, CI/CD pipelines, and project management features.',
        es: 'Una plataforma DevOps que ofrece alojamiento de repositorios Git, canalizaciones de CI/CD y funciones de gestión de proyectos.',
      },
      comment: {
        en: 'I used it some years ago. GitLab is more corporate, it makes sense if you have your own GitLab on your servers. If not, I would rather use GitHub.',
        es: 'Lo usé hace algunos años. GitLab es más corporativo, tiene sentido si tienes tu propio GitLab en tus servidores. Si no, prefiero usar GitHub.',
      }
    },
    {
      tech: 'Bitbucket',
      image: '/tech/9-dev-tools/bitbucket.png',
      years: ['2021'],
      tier: 't4',
      description: {
        en: 'A Git-based repository management tool by Atlassian, ideal for integrating with Jira and CI/CD pipelines.',
        es: 'Una herramienta de gestión de repositorios basada en Git de Atlassian, ideal para integrarse con Jira y pipelines de CI/CD.',
      },
      comment: {
        en: 'I used it some years ago. Bitbucket makes sense if you use Atlassian tools ecosystem like Jira. If not, I would rather use GitHub.',
        es: 'Lo usé hace algunos años. Bitbucket tiene sentido si se utiliza junto al ecosistema de herramientas de Atlassian como Jira. Si no, prefiero usar GitHub.',
      }
    },
    {
      tech: 'Bash',
      image: '/tech/9-dev-tools/bash.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A command-line shell and scripting language for Unix-based systems, widely used for automation and system management.',
        es: 'Un shell de línea de comandos y un lenguaje de secuencias de comandos para sistemas basados ​​en Unix, ampliamente utilizado para la automatización y la gestión de sistemas.',
      },
      comment: {
        en: 'I’ve created some bash scripts for automate deployments or SSL renewal. DevOps things are not my specialty, but I like it.',
        es: 'Creé algunos scripts bash para automatizar despliegues o renovación de SSL. Las cosas DevOps no son mi especialidad, pero me gusta.',
      }
    },
    {
      tech: 'Jupyter Notebook',
      image: '/tech/9-dev-tools/jupyter-notebook.png',
      years: ['uni'],
      tier: 't4',
      description: {
        en: 'An open-source web application for creating and sharing documents that combine live code, equations, and visualizations.',
        es: 'Una aplicación web de código abierto para crear y compartir documentos que combinan código en vivo, ecuaciones y visualizaciones.',
      },
      comment: {
        en: 'I used to use it alongside Google Colab and Kaggle services to learn the basics of data science at university. Also to test Python code.',
        es: 'Solía ​​​​usarlo junto con los servicios Google Colab y Kaggle para aprender los conceptos básicos de la ciencia de datos en la universidad. También para probar código Python.',
      }
    },
    {
      tech: 'Chrome Devtools',
      image: '/tech/9-dev-tools/chrome-devs.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A set of web development tools built into Google Chrome for debugging, performance profiling, and inspecting web pages.',
        es: 'Un conjunto de herramientas de desarrollo web integradas en Google Chrome para depurar, crear perfiles de rendimiento e inspeccionar páginas web.',
      },
      comment: {
        en: 'When I am working as a front-end developer, I like using both Chrome (or Brave) and Firefox Devtools. I would rather use the Firefox one, I feel better with its interface.',
        es: 'Cuando estos trabajando como front-end developer, me gusta utilizar tanto Chrome (o Brave) como Firefox Devtools. Prefiero Firefox, me siento mejor con su interfaz.',
      }
    },
    {
      tech: 'Firefox Devtools',
      image: '/tech/9-dev-tools/firefox-devs.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A suite of web developer tools in Firefox for inspecting, debugging, and optimizing websites and applications.',
        es: 'Un conjunto de herramientas de desarrollo web en Firefox para inspeccionar, depurar y optimizar sitios web y aplicaciones.',
      },
      comment: {
        en: 'When I am working as a front-end developer, I like using both Chrome (or Brave) and Firefox Devtools. I would rather use the Firefox one, I feel better with its interface.',
        es: 'Cuando estos trabajando como front-end developer, me gusta utilizar tanto Chrome (o Brave) como Firefox Devtools. Prefiero Firefox, me siento mejor con su interfaz.',
      }
    },
  ]
};
