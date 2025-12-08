import type { TechBox } from '../interfaces/tech-box.interface';

export const cloud: TechBox = {
  name: 'Cloud & Infra',
  headerImage: 'cloud.svg',
  techs: [
    {
      tech: 'Linux',
      image: '/tech/5-cloud/linux.png',
      years: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
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
      years: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
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
        en: `
          I've worked with AWS on several projects. I'm not a big fan of DevOps tools, but I learned a lot about this service from real-world needs. The main services I use are:
          <ul>
            <li>IAM</li>
            <li>EC2</li>
            <li>RDS</li>
            <li>S3</li>
            <li>CloudFront</li>
            <li>CloudWatch</li>
            <li>AWS Lambda</li>
            <li>AWS Step Functions</li>
            <li>Amazon Bedrock</li>
            <li>AWS Backup</li>
            <li>Certificate Manager</li>
            <li>AWS Health Dashboard</li>
            <li>Billing and Cost Management</li>
          </ul>
        `,
        es: `
          He trabajado con AWS en varios proyectos. No soy fanático de las herramientas DevOps, pero he aprendido mucho de este servicio a partir de necesidades reales. Los principales servicios que utilizo son:
          <ul>
            <li>IAM</li>
            <li>EC2</li>
            <li>RDS</li>
            <li>S3</li>
            <li>CloudFront</li>
            <li>CloudWatch</li>
            <li>AWS Lambda</li>
            <li>AWS Step Functions</li>
            <li>Amazon Bedrock</li>
            <li>AWS Backup</li>
            <li>Certificate Manager</li>
            <li>AWS Health Dashboard</li>
            <li>Billing and Cost Management</li>
          </ul>
        `,
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
      tech: 'AWS Lambda',
      image: '/tech/5-cloud/aws-lambda.png',
      years: ['2025', '2026'],
      tier: 't3',
      description: {
        en: 'A serverless compute service that runs code on demand, automatically scaling and managing infrastructure so developers can focus solely on application logic.',
        es: 'Un servicio serverless que ejecuta código a pedido, escalando y administrando automáticamente la infraestructura para que los desarrolladores puedan concentrarse únicamente en la lógica de la aplicación.',
      },
      comment: {
        en: 'I discovered the serverless paradigm at Accenture. I find it very interesting to move away from typical REST APIs and instead use serverless services to reduce costs, although other technical considerations must be taken into account.',
        es: 'Descubrí el paradigma serverless en Accenture. Encuentro muy interesante salir de las típicas API Rest y en su lugar utilizar servicios serverless para abaratar costos, aunque teniendo que tener otras consideraciones técnicas en cuenta.',
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
      years: ['2021', '2022', '2023', '2024'],
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
      tech: 'Red Hat Openshift',
      image: '/tech/5-cloud/openshift.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A Kubernetes-based container platform by Red Hat that provides automated deployment, scaling, and management of cloud-native applications with enterprise-grade security and developer tooling.',
        es: 'Una plataforma de contenedores basada en Kubernetes de Red Hat que proporciona implementación, escalamiento y gestión automatizados de aplicaciones nativas de la nube con seguridad de nivel empresarial y herramientas para desarrolladores.',
      },
      comment: {
        en: 'I never actually used OpenShift, but I’m quite familiar with Red Hat technologies thanks to things a good friend who works at this company tells me.',
        es: 'Nunca utilicé Openshift realmente, pero estoy bastante familiariazado con las tecnologías de Red Hat gracias a las cosas que me cuenta un gran amigo que trabaja en esta empresa.',
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
      years: ['2024'],
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
      tech: "Azure DevOps Pipelines",
      image: '/tech/5-cloud/azure-devops-pipelines.png',
      years: ['2025', '2026'],
      tier: 't3',
      description: {
        en: 'A cloud-based CI/CD service that automates building, testing, and deploying applications across diverse platforms with scalable, customizable workflows.',
        es: 'Un servicio de CI/CD basado en la nube que automatiza la creación, prueba e implementación de aplicaciones en diversas plataformas con flujos de trabajo escalables y personalizables.',
      },
      comment: {
        en: 'Similar to GitHub Actions, ADO has its own for creating CI/CD pipelines. Very similar, same features.',
        es: 'A lo igual que GitHub Actions, ADO tiene el suyo para la creación de pipelines CI/CD. Muy similar, mismas prestaciones.',
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
      years: ['2020', '2021'],
      tier: 't5',
      description: {
        en: 'A Latin American web hosting and domain provider offering email, cloud, and hosting services.',
        es: 'Un proveedor latinoamericano de dominios y alojamiento web que ofrece servicios de alojamiento, nube y correo electrónico.',
      },
      comment: {
        en: 'I use it to register domains for local projects. As a business, it leaves much to be desired.',
        es: 'Lo uso para registrar dominios para proyectos locales. Como empresa, deja mucho que desear.',
      }
    },
    {
      tech: 'GoDaddy',
      image: '/tech/5-cloud/godaddy.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A global web services company that provides domain registration, hosting, and website management tools for individuals and businesses building an online presence.',
        es: 'Una empresa global de servicios web que ofrece registro de dominios, alojamiento y herramientas de gestión de sitios web para personas y empresas que crean una presencia en línea.',
      },
      comment: {
        en: 'I’ve had to register and manage domains using GoDaddy. If it’s a domain for a global project, I prefer to use this service.',
        es: 'He tenido que registrar y administrar dominios utilizando GoDaddy. Si se trata de un dominio para un proyecto global, prefiero hacerlo con este servicio.',
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
        es: 'Solía usar Heroku para desplegar todo tipo de aplicaciones, hasta que cerraron su servicio gratuito.',
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
        es: 'Solía usarlo para trabajar en una distribución CentOS Linux, hasta que comencé a usar Ubuntu como mi sistema operativo principal y conocí Docker.',
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
        es: 'Solía usarlo en mi primer trabajo para desarrollar un proyecto web con PHP y MySQL.',
      }
    },
    {
      tech: "Apache Solr",
      image: '/tech/5-cloud/solr.png',
      years: ['2019'],
      tier: 't5',
      description: {
        en: 'An open-source search platform by Apache, optimized for full-text search, scalability, and real-time indexing.',
        es: 'Una plataforma de búsqueda de código abierto de Apache, optimizada para búsqueda de texto completo, escalabilidad e indexación en tiempo real.',
      },
      comment: {
        en: 'I inherited a project that used Solr as a search engine. I kept it, but I wouldn’t choose it today.',
        es: 'Heredé un proyecto que utilizaba Solr como motor de búsqueda. Lo mantuve, pero no lo elegiria hoy en día.',
      }
    },
    {
      tech: "Sphinx",
      image: '/tech/5-cloud/sphinx.png',
      years: [],
      tier: 't5',
      description: {
        en: 'An open-source search engine designed for high-performance full-text search, ideal for indexing large datasets.',
        es: 'Un motor de búsqueda de código abierto diseñado para búsquedas de texto completo de alto rendimiento, ideal para indexar grandes conjuntos de datos.',
      },
      comment: {
        en: 'I inherited a project that used Sphinx as a search engine. I kept it, but I wouldn’t choose it today. The project was deprecated.',
        es: 'Heredé un proyecto que utilizaba Solr como motor de búsqueda. Lo mantuve, pero no lo elegiria hoy en día. El proyecto fue deprecado.',
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
