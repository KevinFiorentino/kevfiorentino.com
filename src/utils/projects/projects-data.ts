import type { Project } from "@utils/interfaces/project.interface";

export const projectsDataES: Project[] = [
  {
    title: "ASTREA.COM.AR",
    position: "Full Stack Javascript Developer",
    date: "Released 2022",
    descriptEN: `
      <p>I knew Editorial Astrea in 2019 thanks to my master and professor, Dr. Antonio Martino, who recommended me to start working as a researcher to investigate about AI applies to the justice with technologies like Python and IBM Watson.</p>
      <p>In 2021, I started to develop all the software for this company: Astrea Virtual, Astrea Web, and a Backoffice to manage all the information.</p>
      <p>This project is an institutional site and e-commerce to sell books. The front is created with Angular and Firebase, and the back with NestJS and MongoDB. All the Astrea’s technology is integrated and under the same stack.</p>
      <p>I am proud of this complete architecture that I made, and I will continue maintaining for this company as a freelancer.</p>
    `,
    descriptES: `
      <p>Conocí la Editorial Astrea en 2019 gracias a mi maestro y profesor, el Dr. Antonio Martino, quien me recomendó para trabajar como investigador IA aplicada a la justicia con tecnologías como Python e IBM Watson.</p>
      <p>En 2021, comencé a desarrollar todo el software de esta empresa: Astrea Virtual, Astrea Web y un backoffice para gestionar toda la información.</p>
      <p>Este proyecto consiste en un sitio web institucional y una tienda online para la venta de libros. El front se creó con Angular y Firebase, y el back con NestJS y MongoDB. Toda la tecnología de Astrea está integrada y bajo el mismo stack.</p>
      <p>Estoy orgulloso de esta arquitectura completa que he creado y sigo manteniendo como freelance.</p>
    `,
    url: "https://astrea.com.ar",
    images: [
      "/projects/astrea/web1.png",
      "/projects/astrea/web2.png",
      "/projects/astrea/web3.png"
    ],
    techs: [
      "/tech/1-front-end/typescript.png",
      "/tech/1-front-end/angular.png",
      "/tech/1-front-end/scss.png",
      "/tech/2-backend/nodejs.png",
      "/tech/2-backend/nestjs.png",
      "/tech/4-ddbb/mongodb.png",
      "/tech/5-cloud/aws.png",
      "/tech/5-cloud/docker.png",
      "/tech/8-services/firebase.png",
    ],
  },
  {
    title: "ASTREAVIRTUAL.COM",
    position: "Full Stack Javascript Developer",
    date: "Released 2022",
    descriptEN: `
      <p>Astrea Virtual is the most complex software that I have developed. It is a platform to read online books. The main challenge was the security of digital books and avoiding piracy, due to Astrea was hacked in the past. Moreover, a sophisticated searcher where I indexed over 800,000 pages from +3,700 books with Elasticsearch.</p>
      <p>The project was hired for more than 50 universities and educational institutes across Latam, and individual users, generating an important annual revenue for the company.</p>
      <p>I migrated the complete Astrea’s software from a legacy version built in PHP. All the migration process lasted 8 months and finished in 2022, a lot of effort, and challenges to rebuild the project with a modern stack.</p>
      <p>With the infrastructure I designed, the company save ∼4,000 USD annually in costs compared to the previous infrastructure they had.</p>
    `,
    descriptES: `
      <p>Astrea Virtual es el software más complejo que he desarrollado. Se trata de una plataforma para leer libros en línea. El principal desafío fue la seguridad de los libros digitales y evitar la piratería, ya que Astrea fue hackeada en el pasado. Además, un buscador sofisticado donde indexé más de 800,000 páginas de +3,700 libros con Elasticsearch.</p>
      <p>El proyecto fue contratado por más de 50 universidades e institutos educativos en Latinoamérica, así como por usuarios individuales, lo que genera importantes ingresos anuales para la empresa.</p>
      <p>Migré todo el software de Astrea desde una versión legacy desarrollada en PHP. El proceso de migración duró 8 meses y finalizó en 2022, lo que implicó mucho esfuerzo y desafíos para reconstruir el proyecto con tecnologías modernas.</p>
      <p>Con la infraestructura que diseñé, la empresa ahorra USD ∼4,000 anuales en costos en comparación con la anterior.</p>
    `,
    url: "https://astreavirtual.com",
    images: [
      "/projects/astrea/av1.png",
      "/projects/astrea/av2.png",
      "/projects/astrea/av3.png"
    ],
    techs: [
      "/tech/1-front-end/typescript.png",
      "/tech/1-front-end/angular.png",
      "/tech/1-front-end/scss.png",
      "/tech/2-backend/nodejs.png",
      "/tech/2-backend/nestjs.png",
      "/tech/4-ddbb/mongodb.png",
      "/tech/4-ddbb/elasticsearch.png",
      "/tech/5-cloud/aws.png",
      "/tech/5-cloud/docker.png",
      "/tech/8-services/firebase.png",
    ],
  },
  {
    title: "ASTREA BACKOFFICE",
    position: "Full Stack Javascript Developer",
    date: "Released 2022",
    descriptEN: `
      <p>Astrea needed a backoffice to manage a lot of information. Books, authors, users, purchases, contacts, clients, and more. This BO was created as an internal system for the company.</p>
      <p>The main challenge in this software was creating different permission levels for users: admins with full access, sellers just to process purchases, and librarians to manage information.</p>
      <p>Same stack as the other two projects for this company.</p>
    `,
    descriptES: `
      <p>Astrea necesitaba un backoffice para gestionar una gran cantidad de información: libros, autores, usuarios, compras, contactos, clientes y más. Este BO se creó como un sistema interno para la empresa.</p>
      <p>El principal reto de este software fue crear diferentes niveles de permisos para los usuarios: administradores con acceso total, vendedores solo para procesar compras y bibliotecarios para gestionar la información.</p>
      <p>Mismo stack que los otros dos proyectos para la empresa.</p>
    `,
    url: null,
    images: [
      "/projects/astrea/bo1.png",
      "/projects/astrea/bo2.png"
    ],
    techs: [
      "/tech/1-front-end/typescript.png",
      "/tech/1-front-end/angular.png",
      "/tech/1-front-end/scss.png",
      "/tech/2-backend/nodejs.png",
      "/tech/2-backend/nestjs.png",
      "/tech/4-ddbb/mongodb.png",
      "/tech/5-cloud/vercel.png",
      "/tech/8-services/firebase.png",
    ],
  },
  {
    title: "FADEPSA.COM.AR",
    position: "Full Stack PHP Developer",
    date: "Released Sep. 2020",
    descriptEN: `
      <p>In September 2020, I released the institutional website of this company. I made it with PHP, Drupal and MySQL which was my main stack back then. It was especially an SEO challenge with high demands from the customer. The site was originally on cheap hosting for a few years, but I migrated it to AWS for better performance.</p>
      <p>The main feature of this software is lead generation and creating product quotes. Moreover, a complete internal backoffice to manage products, clients, news, and the blog section. Drupal provided a useful UI to create it.</p>
      <p>I have been maintaining it since then in several small developments.</p>
    `,
    descriptES: `
      <p>En septiembre de 2020, lancé el sitio web institucional de esta empresa. Lo creé con PHP, Drupal y MySQL, que era mi stack principal en aquel entonces. El sitio estuvo originalmente en un hosting barato durante algunos años, pero lo migré a AWS para tener un mejor rendimiento.</p>
      <p>Fue un reto de SEO especialmente exigente por el cliente. La principal característica de este software es la generación de leads y la creación de presupuestos de productos. Además, cuenta con un completo backoffice interno para gestionar productos, clientes, noticias y la sección del blog. Drupal proporcionó una interfaz de usuario muy útil para su creación.</p>
      <p>Desde entonces, lo he mantenido con varios desarrollos menores.</p>
    `,
    url: "https://fadepsa.com.ar",
    images: [
      "/projects/fadepsa/web1.png",
      "/projects/fadepsa/web2.png",
      "/projects/fadepsa/web3.png"
    ],
    techs: [
      "/tech/1-front-end/html.png",
      "/tech/1-front-end/css.png",
      "/tech/1-front-end/javascript.png",
      "/tech/1-front-end/jquery.png",
      "/tech/1-front-end/bootstrap.png",
      "/tech/2-backend/php.png",
      "/tech/2-backend/drupal.png",
      "/tech/4-ddbb/mysql.png",
      "/tech/5-cloud/aws.png",
      "/tech/5-cloud/docker.png",
    ],
  },
  {
    title: "TIENDA.FADEPSA.COM.AR",
    position: "Full Stack Javascript Developer",
    date: "Released Mar. 2025",
    descriptEN: `
      <p>At the end of 2024, Fadep wanted to create an e-commerce to sell products and speed up sales. I created this store following the current company’s brand, but with a complete change of tech stack.</p>
      <p>The front was developed with React, NextJS and Firebase. For the backend, I took advantage of NextJS with a monolithic solution, and I reused Drupal’s database from the institutional site to manage products and purchases.</p>
      <p>I enjoyed creating this project because I also could be the designer. I used Figma to create it and validate it with the client before starting programming it. It was a complete experience from end to end.</p>
    `,
    descriptES: `
      <p>A finales de 2024, Fadep quería crear una tienda online para vender productos y acelerar las ventas. Creé esta tienda siguiendo la marca actual de la empresa, pero con un cambio total de tecnología.</p>
      <p>El front-end lo desarrollé con React, NextJS y Firebase. Para el back-end, aproveché NextJS con una solución monolítica, y reutilicé la base de datos de Drupal del sitio institucional para gestionar productos y compras.</p>
      <p>Disfruté creando este proyecto porque también fui el diseñador. Usé Figma para crearlo y validarlo con el cliente antes de empezar a programar. Fue una experiencia completa de principio a fin.</p>
    `,
    url: "https://tienda.fadepsa.com.ar",
    images: [
      "/projects/fadepsa/tienda1.png",
      "/projects/fadepsa/tienda2.png",
      "/projects/fadepsa/tienda3.png",
      "/projects/fadepsa/tienda4.png",
    ],
    techs: [
      "/tech/1-front-end/typescript.png",
      "/tech/1-front-end/react.png",
      "/tech/1-front-end/nextjs.png",
      "/tech/1-front-end/scss.png",
      "/tech/2-backend/nodejs.png",
      "/tech/4-ddbb/mysql.png",
      "/tech/5-cloud/vercel.png",
      "/tech/8-services/firebase.png",
      "/tech/12-others/figma.png",
    ],
  },
  {
    title: "TURISMO.BUENOSAIRES.GOB.AR",
    position: "Full Stack PHP developer",
    date: "Sep. 2018 - Dic 2020",
    descriptEN: `
      <p>I worked for the Government City of Buenos Aires developing the website of the Tourism area. It was the first professional job in my career where I grew a lot as a professional and person, thanks to the people I met in this lovely stage in my life.</p>
      <p>The website of one of the most popular cities in Latam which has more than 900,000 monthly visits. I learned all the basics related to software development, backend with PHP, Drupal and MySQL, and how to maintain servers with Linux and Apache Server. Moreover, I improved my front-end skills with HTML, CSS, and Javascript.</p>
      <p>The site is still online, but it is very old and soon will be rebuilt, surely.</p>
    `,
    descriptES: `
      <p>Trabajé para el Gobierno de la Ciudad de Buenos Aires desarrollando el sitio web del Ente de Turismo. Fue mi primer trabajo profesional, donde crecí mucho como profesional y persona, gracias a las personas que conocí en esta hermosa etapa de mi vida.</p>
      <p>El sitio web de una de las ciudades más populares de Latinoamérica, con más de 900.000 visitas mensuales. Aprendí todos los fundamentos del desarrollo de software, backend con PHP, Drupal y MySQL, y cómo mantener servidores con Linux y Apache Server. Además, mejoré mis habilidades de frontend con HTML, CSS y Javascript.</p>
      <p>El sitio sigue en línea, pero es muy antiguo y pronto será reconstruido, seguramente.</p>
    `,
    url: "https://turismo.buenosaires.gob.ar",
    images: [
      "/projects/others/turismo1.png",
      "/projects/others/turismo2.png"
    ],
    techs: [
      "/tech/1-front-end/html.png",
      "/tech/1-front-end/css.png",
      "/tech/1-front-end/javascript.png",
      "/tech/1-front-end/jquery.png",
      "/tech/1-front-end/bootstrap.png",
      "/tech/2-backend/php.png",
      "/tech/2-backend/drupal.png",
      "/tech/4-ddbb/mysql.png",
    ],
  },
  {
    title: "PORTFOLIO PROFESIONAL",
    position: "Javascript Developer",
    date: "Released Jun. 2025",
    descriptEN: `
      <p>I developed this website in collaboration with my English teacher, Dani, with the goal of presenting her professional profile in a clear, modern, and accessible way. We worked together from the design stage through to the final implementation, aiming for a style that reflects her personality and experience—not only as a teacher, but also as a translator and audio describer. The result is a clean, functional, and responsive portfolio.</p>
      <p>I really enjoyed working on this project, as it was a way to contribute to someone else's professional growth. Now she has a concrete tool to showcase her work and continue growing in her career.</p>
      <p>I also want to thank her for all her language teaching, which has undoubtedly helped me improve my English significantly.</p>
    `,
    descriptES: `
      <p>Desarrollé este sitio web en colaboración con mi profesora de inglés, Dani, con el objetivo de presentar su perfil profesional de forma clara, moderna y accesible. Trabajamos juntos desde el diseño hasta la implementación final, buscando un estilo que reflejara su personalidad y experiencia, no solo como docente, sino también como traductora y audiodescriptora. El resultado es un portfolio elegante, funcional y adaptable a distintos dispositivos.</p>
      <p>Disfruté mucho trabajando en este proyecto, porque fue una forma de contribuir al crecimiento profesional de otra persona. Ahora ella cuenta con una herramienta concreta para mostrarse y seguir desarrollando su carrera.</p>
      <p>También quiero agradecerle por todas sus enseñanzas del idioma, que sin duda me han ayudado a mejorar significativamente mi inglés.</p>
    `,
    url: "https://danieladumon.vercel.app/en",
    images: [
      "/projects/dani/dani1.png",
    ],
    techs: [
      "/tech/1-front-end/typescript.png",
      "/tech/1-front-end/react.png",
      "/tech/1-front-end/nextjs.png",
      "/tech/1-front-end/scss.png",
      "/tech/5-cloud/vercel.png",
      "/tech/12-others/figma.png",
    ],
  },
];
