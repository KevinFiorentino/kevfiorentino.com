import type { TechBox } from '../interfaces/tech-box.interface';

export const ddbb: TechBox = {
  name: 'DDBB',
  headerImage: 'ddbb.svg',
  techs: [
    {
      tech: 'MongoDB',
      image: '/tech/4-ddbb/mongodb.png',
      years: ['2021'],
      tier: 't1',
      description: {
        en: 'A NoSQL database that stores data flexibly, JSON-like documents, ideal for scalable applications.',
        es: 'Una base de datos NoSQL que almacena datos de forma flexible, documentos tipo JSON, ideal para aplicaciones escalables.',
      },
      comment: {
        en: 'My favorite database engine, specially thanks to Mongo Atlas cloud services. I’ve used MongoDB in several projects since I 2021.',
        es: 'Mi motor de base de datos favorito, especialmente gracias a los servicios en la nube de Mongo Atlas. He utilizado MongoDB en varios proyectos desde 2021.',
      }
    },
    {
      tech: 'MySQL',
      image: '/tech/4-ddbb/mysql.png',
      years: ['uni', '2018'],
      tier: 't2',
      description: {
        en: 'A widely-used relational database known for reliability, performance, and compatibility with web applications.',
        es: 'Una base de datos relacional ampliamente utilizada conocida por su confiabilidad, rendimiento y compatibilidad con aplicaciones web.',
      },
      comment: {
        en: 'My first database engine. I started using it at university in 2015. Since then, I’ve used it many times throughout my career.',
        es: 'Mi primer motor de base de datos. Comencé a utilizarlo en la universidad en 2015. Desde entonces, lo he utilizado en muchos proyectos a lo largo de mi carrera.',
      }
    },
    {
      tech: 'MariaDB',
      image: '/tech/4-ddbb/mariadb.png',
      years: ['uni', '2018'],
      tier: 't4',
      description: {
        en: 'A fork of MySQL with enhanced features, improved performance, and open-source community support.',
        es: 'Una bifurcación de MySQL con funciones mejoradas, rendimiento mejorado y soporte de la comunidad de código abierto.',
      },
      comment: {
        en: 'On occasion, I’ve used it as an alternative to MySQL. Although I had never quite understood the difference.',
        es: 'En alguna ocación, lo he utilizado como alternativa a MySQL. Aunque nunca había comprendido bien la diferencia.',
      }
    },
    {
      tech: 'Elasticsearch',
      image: '/tech/4-ddbb/elasticsearch.png',
      years: ['2021'],
      tier: 't2',
      description: {
        en: 'A NoSQL database, with a distributed search and analytics engine for fast and scalable data querying and full-text search.',
        es: 'Una base de datos NoSQL, con un motor de búsqueda y análisis distribuido para consultas de datos y búsquedas de texto completo rápidas y escalables.',
      },
      comment: {
        en: 'An excellent option to build a sophisticated searcher. I’ve implemented once, and I would choose it again.',
        es: 'Una excelente opción para construir un buscador sofisticado. Lo implementé una vez y lo elegiría nuevamente.',
      }
    },
    {
      tech: 'Redis',
      image: '/tech/4-ddbb/redis.png',
      years: ['2020'],
      tier: 't4',
      description: {
        en: 'An in-memory data store used for caching, real-time analytics, and session management with high performance.',
        es: 'Un almacén de datos en memoria utilizado para almacenamiento en caché, analítica en tiempo real y gestión de sesiones con alto rendimiento.',
      },
      comment: {
        en: 'I know it is a great option if I need a very fast database engine for specific needs. I’ve explored it, but I have never implemented it professionaly.',
        es: 'Sé que es una excelente opción si necesito un motor de base de datos muy rápido para necesidades específicas. Lo he explorado, pero nunca lo he implementado profesionalmente.',
      }
    },
    {
      tech: 'PostgreSQL',
      image: '/tech/4-ddbb/postgresql.png',
      years: ['2017'],
      tier: 't4',
      description: {
        en: 'An advanced, open-source relational database known for stability, extensibility, and robust features.',
        es: 'Una base de datos relacional avanzada de código abierto conocida por su estabilidad, extensibilidad y características sólidas.',
      },
      comment: {
        en: 'I implemented it in a project several years ago. Good database engine, I would use it again someday if necessary.',
        es: 'Lo implementé en un proyecto varios años atrás. Es un buen motor de base de datos, lo volvería a utilizar algún día si tengo necesidad.',
      }
    },
    {
      tech: 'TypeORM',
      image: '/tech/4-ddbb/typeorm.png',
      years: [],
      tier: 't2',
      description: {
        en: 'An ORM for TypeScript and JavaScript that simplifies database interactions with support for SQL and NoSQL databases.',
        es: 'Un ORM para TypeScript y JavaScript que simplifica las interacciones de bases de datos con soporte para bases de datos SQL y NoSQL.',
      },
      comment: {
        en: 'It is very good for mapping SQL databases and manage migrations. I use it alongside NestJS and MySQL.',
        es: 'Es muy bueno para mapear bases de datos SQL y administrar migraciones. Lo utilizo junto con NestJS y MySQL.',
      }
    },
    {
      tech: 'Mongoose JS',
      image: '/tech/4-ddbb/mongoose.png',
      years: [],
      tier: 't2',
      description: {
        en: 'An ODM for MongoDB and NodeJS, offering schema-based solutions to model data and interact with MongoDB.',
        es: 'Un ODM para MongoDB y NodeJS, que ofrece soluciones basadas en esquemas para modelar datos e interactuar con MongoDB.',
      },
      comment: {
        en: 'If I love MongoDB, I love Mongoose. The perfect tool for mapping MongoDB databases. I mainly use it alongside NestJS.',
        es: 'Si me encanta MongoDB, me encanta Mongoose. La herramienta perfecta para mapear bases de datos MongoDB. Principalmente lo utiliza con NestJS.',
      }
    },
    {
      tech: 'DBearer',
      image: '/tech/4-ddbb/dbearer.png',
      years: ['2024'],
      tier: 't2',
      description: {
        en: 'A security-focused platform for managing and auditing database access in modern applications.',
        es: 'Una plataforma centrada en la seguridad para gestionar y auditar el acceso a bases de datos en aplicaciones modernas.',
      },
      comment: {
        en: 'An excellent database administrator. I discovered it in 2024. I don’t understand why I didn’t find out before.',
        es: 'Un excelente administrador de bases de datos. Lo descubrí en 2024, no entiendo cómo no lo conocí antes.',
      }
    },
    {
      tech: 'PHPMyAdmin',
      image: '/tech/4-ddbb/phpmyadmin.png',
      years: ['uni', '2017'],
      tier: 't5',
      description: {
        en: 'A web-based tool for managing MySQL and MariaDB databases through a user-friendly interface.',
        es: 'Una herramienta basada en web para administrar bases de datos MySQL y MariaDB a través de una interfaz fácil de usar.',
      },
      comment: {
        en: 'I liked using it until I discovered DBearer.',
        es: 'Me gustaba utilizarlo hasta que descubrí DBearer.',
      }
    },
    {
      tech: 'MySQL Workbench',
      image: '/tech/4-ddbb/workbench.png',
      years: ['uni'],
      tier: 't5',
      description: {
        en: 'A visual tool for database design, management, and administration, providing a user-friendly interface for MySQL databases.',
        es: 'Una herramienta visual para el diseño, gestión y administración de bases de datos, que proporciona una interfaz fácil de usar para bases de datos MySQL.',
      },
      comment: {
        en: 'I loved creating and visualizing entity relationship diagram with Workbench at university. I learned it in 2015 alongside MySQL.',
        es: 'Me encantaba crear y visualizar diagramas de entidad relación con Workbench en la universidad. Lo aprendí en 2015 junto con MySQL.',
      }
    },
  ]
};
