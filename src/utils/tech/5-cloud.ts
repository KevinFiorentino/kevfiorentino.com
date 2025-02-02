import type { TechBox } from '../interfaces/tech-box.interface';

export const cloud: TechBox = {
  name: 'Cloud & Infra',
  headerImage: 'cloud.svg',
  techs: [
    {
      tech: 'Linux',
      image: '/tech/5-cloud/linux.png',
      years: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'An open-source operating system known for stability, security, and use in servers and development environments.',
        es: 'Un sistema operativo de código abierto conocido por su estabilidad, seguridad, y utilización especialmente es servidores y entornos de desarrollo.',
      },
      comment: {
        en: 'I started to use Linux in 2018 with CentOS and then I moved to Ubuntu in 2020. I made the decision to stop using Windows, I only use Linux operative systems.',
        es: 'Comencé a utilizar Linux en 2018 con CentOS y luego me mudé a Ubuntu en 2020. Tomé la decisión de dejar de utilizar Windows, solo utiliza sistemas operativos Linux.',
      }
    },
    {
      tech: 'Ubuntu',
      image: '/tech/5-cloud/ubuntu.png',
      years: ['2020', '2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A popular Linux distribution with a user-friendly interface, widely used for development and server deployments.',
        es: 'Una distribución de linux muy popular con una interfaz amigable con el usuario, ampliamente utilizado para desarrollo e implementaciones de servidores.',
      },
      comment: {
        en: 'My favorite Linux distribution. Nowadays I work with Ubuntu on my personal computers since 2020.',
        es: 'Mi distribución de linux favorita. Hoy en día trabajo con Ubuntu en mi computadora personal desde 2020.',
      }
    },
    {
      tech: 'CentOS',
      image: '/tech/5-cloud/centos.png',
      years: ['2018', '2019', '2020'],
      tier: 't5',
      description: {
        en: 'A discontinued Linux distribution designed for servers and business-critical applications created by Ret Hat.',
        es: 'Una distribución de Linux descontinuada diseñada para servidores y aplicaciones críticas para el negocio creada por Ret Hat.',
      },
      comment: {
        en: 'I worked 2 years with CentOS and Virtual Box in my first job where I learned the basics of Linux from it.',
        es: 'Trabajé dos años con CentOS y Virtual Box en mi primer trabajo donde aprendí las bases de Linux con él.',
      }
    },
    {
      tech: 'AWS',
      image: '/tech/5-cloud/aws.png',
      years: ['2023', '2024', '2025'],
      tier: 't2',
      description: {
        en: 'Amazon Web Services provides scalable cloud computing solutions, including storage, databases, among other services.',
        es: 'Amazon Web Services proporciona soluciones escalables de computación en la nube, que incluyen almacenamiento, bases de datos, entre otros servicios.',
      },
      comment: {
        en: 'I’ve worked with AWS on some projects, especially with EC2, RDS and S3. I am not fanatic of DevOps, but it is enough for my needs.',
        es: 'He trabajado con AWS en algunos proyectos, especialmente con EC2, RDS y S3. No soy fanático de las cosas DevOps, pero es suficiente para mis necesidades.',
      }
    },
    {
      tech: 'Docker',
      image: '/tech/5-cloud/docker.png',
      years: ['2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A platform for containerizing applications, enabling them to run consistently across different environments.',
        es: 'Una plataforma para contener aplicaciones, lo que les permite ejecutarse de manera consistente en diferentes entornos.',
      },
      comment: {
        en: 'I am not fanatic of DevOps things, but I love Docker. Simply I love it.',
        es: 'No soy ganático de las cosas DevOps, pero amo Docker. Simplemente lo amo.',
      }
    },
    {
      tech: 'NGINX',
      image: '/tech/5-cloud/nginx.png',
      years: ['2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A high-performance web server and reverse proxy for serving web content and handling load balancing.',
        es: 'Un servidor web de alto rendimiento y proxy inverso para servir contenido web y manejar el equilibrio de carga.',
      },
      comment: {
        en: 'One of my favorites architectures that I like building is a reverse proxy with load balancer and clusterization with NGINX, NodeJS, PM2, and Docker.',
        es: 'Una de mis arquitecturas favoritas que me gusta construir es un proxy inverso con balanceador de carga y clusterización con NGINX, NodeJS, PM2 y Docker.',
      }
    },
    {
      tech: "Apache Server",
      image: '/tech/5-cloud/apache.png',
      years: ['2017', '2018', '2019', '2020'],
      tier: 't3',
      description: {
        en: 'A robust and widely-used web server for hosting websites and serving content securely and efficiently.',
        es: 'Un servidor web robusto y ampliamente utilizado para alojar sitios web y ofrecer contenido de forma segura y eficiente.',
      },
      comment: {
        en: 'It was my first contact with server technologies, configuring it alongside PHP and MySQL.',
        es: 'Fue mi primer contacto con tecnologías de servidores, configurándolo junto a PHP y MySQL.',
      }
    },
    {
      tech: 'S3',
      image: '/tech/5-cloud/s3.png',
      years: ['2021', '2022', '2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'Amazon’s scalable object storage service for storing and retrieving data from the cloud. Ideally to use like a CDN for creating a file system to save images.',
        es: 'Servicio de almacenamiento de objetos escalable de Amazon para guardar y recuperar datos de la nube. Ideal para usar como CDN para crear un sistema de archivos para guardar imágenes.',
      },
      comment: {
        en: 'My favorite file system technology for creating a website’s image bank. I implemented AWS and IBM Cloud S3 services.',
        es: 'Mi tecnología de sistema de archivos favorita para crear un banco de imágenes de un sitio web. Implementé servicios de AWS e IBM Cloud S3.',
      }
    },
    {
      tech: "Let's Encrypt",
      image: '/tech/5-cloud/letsencrypt.png',
      years: ['2021', '2022'],
      tier: 't3',
      description: {
        en: 'A free certificate authority that provides SSL/TLS certificates to secure websites with HTTPS.',
        es: 'Autoridad certificadora gratuita que proporciona certificados SSL/TLS para proteger sitios web con HTTPS.',
      },
      comment: {
        en: 'Nice to use when I need a fast and free SSL provider. I use it alongside Certibot.',
        es: 'Bueno para utilizar cuando necesito un rápido y gratuito proveedor de SSL. Lo utilizo junto con Certibot.',
      }
    },
    {
      tech: "PM2",
      image: '/tech/5-cloud/pm2.png',
      years: ['2021', '2022', '2023', '2024', '2025'],
      tier: 't2',
      description: {
        en: 'A process manager for NodeJS applications, ensuring uptime, load balancing, and monitoring.',
        es: 'Un administrador de procesos para aplicaciones NodeJS, que garantiza el tiempo de actividad, balanceo de carga y monitoreo.',
      },
      comment: {
        en: 'I like using it with a NodeJS project inside a Docker container to clusterize it and generate a load balancer with NGINX. My favorite architecture.',
        es: 'Me gusta usarlo con un proyecto NodeJS dentro de un contenedor Docker para clusterizarlo y generar un balanceador de carga con NGINX. Mi arquitectura favorita.',
      }
    },
    {
      tech: "Vercel",
      image: '/tech/5-cloud/vercel.png',
      years: ['2023', '2024', '2025'],
      tier: 't2',
      description: {
        en: 'A cloud platform for hosting static sites and serverless functions, optimized for NextJS and React applications.',
        es: 'Una plataforma en la nube para alojar sitios estáticos y funciones sin servidor, optimizada para aplicaciones NextJS y React.',
      },
      comment: {
        en: 'I use Vercel as my favorite front-end project server not only for NextJS apps but also Angular and Astro.',
        es: 'Utilizo Vercel como mi servidor de proyectos front-end favorito no solo con NextJS, también con Angular y Astro.',
      }
    },
    {
      tech: "Fly.io",
      image: '/tech/5-cloud/flyio.png',
      years: ['2022'],
      tier: 't3',
      description: {
        en: 'A platform for deploying full-stack applications globally with minimal configuration and low latency.',
        es: 'Una plataforma para implementar aplicaciones full-stack a nivel global con una configuración mínima y baja latencia.',
      },
      comment: {
        en: 'It is a good alternative to deploy an API for free. I started to use it when Heroku closed its free tier.',
        es: 'Es una buena alternativa para desplegar una API gratuitamente. Comencé a utilizarlo cuando Heroku cerró sus servicios gratuitos.',
      }
    },
    {
      tech: "Cloudflare",
      image: '/tech/5-cloud/cloudflare.png',
      years: ['2023', '2024', '2025'],
      tier: 't1',
      description: {
        en: 'A web performance and security platform offering CDN, DDoS protection, and DNS services.',
        es: 'Una plataforma de seguridad y rendimiento web que ofrece CDN, protección DDoS y servicios DNS.',
      },
      comment: {
        en: 'I like the security layer that Cloudflare offers. I usually use it as a proxy for my domains, creation of DNSs, etc.',
        es: 'Me gusta la capa de seguridad que ofrece Cloudflare. Normalmente lo utilizo como proxy para mis dominios, creación de DNSs, etc.',
      }
    },
    {
      tech: "GitHub Actions",
      image: '/tech/5-cloud/github-actions.png',
      years: ['2024', '2025'],
      tier: 't3',
      description: {
        en: 'A CI/CD tool for automating workflows, testing, and deployment directly within GitHub repositories.',
        es: 'Una herramienta CI/CD para automatizar flujos de trabajo, pruebas e implementación directamente dentro de los repositorios de GitHub.',
      },
      comment: {
        en: 'I automated some basic things like running tests, building apps, and deployments, especially on Vercel.',
        es: 'Automaticé algunas cosas básicas como ejecución de pruebas, buildeo de apps, y despliegues, especialmente en Vercel.',
      }
    },
    {
      tech: "IBM Cloud",
      image: '/tech/5-cloud/ibm-cloud.png',
      years: ['2021', '2022'],
      tier: 't3',
      description: {
        en: 'A cloud platform providing infrastructure, AI, and data solutions for building and scaling applications.',
        es: 'Una plataforma en la nube que proporciona infraestructura, IA y soluciones de datos para crear y escalar aplicaciones.',
      },
      comment: {
        en: 'I’ve worked with IBM Cloud in the past, especially with its S3 and IBM Watson services.',
        es: 'He trabajado con IBM Cloud en el pasado, especialmente con su S3 y los servicios de IBM Watson.',
      }
    },
    {
      tech: "Linode",
      image: '/tech/5-cloud/linode.png',
      years: ['2021', '2022'],
      tier: 't3',
      description: {
        en: 'A cloud hosting service offering virtual servers for deploying applications and scalable infrastructure.',
        es: 'Un servicio de alojamiento en la nube que ofrece servidores virtuales para implementar aplicaciones e infraestructura escalable.',
      },
      comment: {
        en: 'I maintain a project hosted on a Linode server. Good cloud provider, good alternative to AWS.',
        es: 'Mantengo un proyecto alojado en un servidor Linode. Buen proveedor de nube, buena alternativa a AWS.',
      }
    },
    {
      tech: "DonWeb",
      image: '/tech/5-cloud/donweb.png',
      years: ['2020'],
      tier: 't3',
      description: {
        en: 'A Latin American web hosting and domain provider offering email, cloud, and hosting services.',
        es: 'Un proveedor latinoamericano de dominios y alojamiento web que ofrece servicios de alojamiento, nube y correo electrónico.',
      },
      comment: {
        en: 'I use it to register domains and maintain a Drupal project on a server.',
        es: 'Lo uso para registrar dominios y mantengo un proyecto Drupal en un servidor.',
      }
    },
    {
      tech: "Heroku",
      image: '/tech/5-cloud/heroku.png',
      years: ['uni', '2020', '2021'],
      tier: 't5',
      description: {
        en: 'A platform-as-a-service (PaaS) for deploying, managing, and scaling applications effortlessly in the cloud.',
        es: 'Una plataforma como servicio (PaaS) para implementar, administrar y escalar aplicaciones sin esfuerzo en la nube.',
      },
      comment: {
        en: 'I used to use Heroku to deploy all kinds of apps, until they closed its free tier.',
        es: 'Solía ​​usar Heroku para desplegar todo tipo de aplicaciones, hasta que cerraron su servicio gratuito.',
      }
    },
    {
      tech: "VirtualBox",
      image: '/tech/5-cloud/virtual-box.png',
      years: ['2018', '2019', '2020'],
      tier: 't3',
      description: {
        en: 'A free, open-source virtualization tool for running multiple operating systems on a single machine.',
        es: 'Una herramienta de virtualización gratuita y de código abierto para ejecutar múltiples sistemas operativos en una sola máquina.',
      },
      comment: {
        en: 'I used to use it to work on a CentOS Linux distribution, until I started using Ubuntu as my main operating system and was introduced to Docker.',
        es: 'Solía ​​usarlo para trabajar en una distribución CentOS Linux, hasta que comencé a usar Ubuntu como mi sistema operativo principal y conocí Docker.',
      }
    },
    {
      tech: "XAMPP",
      image: '/tech/5-cloud/xampp.png',
      years: ['2017', '2018'],
      tier: 't5',
      description: {
        en: 'A free local development environment that includes Apache, MySQL, PHP, and Perl.',
        es: 'Un entorno de desarrollo local gratuito que incluye Apache, MySQL, PHP y Perl.',
      },
      comment: {
        en: 'I used to use it in my first job to develop a web project with PHP and MySQL.',
        es: 'Solía ​​usarlo en mi primer trabajo para desarrollar un proyecto web con PHP y MySQL.',
      }
    },
    {
      tech: "Apache Tomcat",
      image: '/tech/5-cloud/tomcat.png',
      years: ['uni'],
      tier: 't5',
      description: {
        en: 'An open-source Java web server and servlet container for running Java applications.',
        es: 'Un servidor web Java de código abierto y un contenedor de servlets para ejecutar aplicaciones Java.',
      },
      comment: {
        en: 'It was the first web server I ever used at university time alongside Java.',
        es: 'Fue el primer servidor web que utilicé en la universidad junto con Java.',
      }
    },
  ]
};
