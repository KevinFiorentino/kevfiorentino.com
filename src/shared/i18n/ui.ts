// https://docs.astro.build/es/recipes/i18n/

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'contact': 'Contact',
    'go-blog': 'Go to blog',
    'share-on': 'Share through',
    'share-by': 'Share through',
    'prev': 'Previous',
    'next': 'Next',

    'projects': 'Projects',

    'blog.text': 'I wrote all the blockchain articles a few years ago, during my time as a content creator for the educational platform, Platzi. That professional experience significantly enhanced my writing, SEO, and written communication skills, as well as my technical understanding of these technologies.',
    'blog.all-collections': 'All categories',
    'blog.others': 'More posts',
    'blog.toc': 'Table of Content',

    'home.kev': 'Hi, I\'m Kev!',
    'home.presentation1': `Currently working as a software architect and artificial intelligence specialist at Accenture. A completely different professional experience at a large multinational company.`,
    'home.presentation2': `Working professionally since 2017, I graduated from university with a degree in systems in 2021 and during my more than 8 years of professional experience I've gone through different stages; I started programming in PHP and later specialized as a full-stack JavaScript developer. I had the chance to work on several projects: as a freelancer, in the public and private sectors, on blockchain and AI projects, and also in some startups — in one of them, I took the role of CTO, where I led a staff of about 20 developers and built the software architecture of this business. That experience marked a turning point in my professional journey.`,
    'home.presentation3': `I consider myself technology-agnostic, with a generalist perspective and a slight preference for front-end development that allows me to adapt to different tools and workflows. My main strength lies in having a holistic vision of the software we build, ensuring alignment between people, technology, and business objectives.`,
    'home.presentation4': `Beyond the technical side, I've learned that communication is my biggest contribution in a team, and what I enjoy most is listening, connecting, and building good relationships with people.`,

    'footer.recommends': 'Might interest you',
    'footer.resources': 'Resources',
    'footer.source': 'Source code',

    'collection': 'Colección',
    'read-post': 'Read post',

    'description': 'Description',
    'comment': 'Comment or opinion',

    't1': 'Favorites',
    't2': 'Nice to use',
    't3': 'From time to time',
    't4': 'Might use again',
    't5': 'Deprecated',

    'uni': `
      <p>Between 2013 and 2019, my time at university helped me discover a passion for programming, gain a solid understanding of technology, and set the foundation for my professional ambitions.</p>
      <p>I first learned technologies like C++ and Java which were my first programming languages. I also explored other disciplines like data science and IoT using Python and Arduino. Additionally, through my studies, I learned a wide range of topics, including testing, networking, business and critical thinking.</p>
      <p>I believe that university first helps us grow as individuals and then as professionals, especially when experienced between the ages of 18 and 25. It definitely played a significant role in shaping my professional path.</p>
      <p>My thesis, titled “Front-End Technologies for Software Developers,” focused on analyzing and comparing the performance and characteristics of technologies like Angular, React and Vue. It also marked my first experience with the JavaScript ecosystem. I defended my thesis on May 14th 2021, after a long pandemic period, and obtained my Bachelor's degree in Information Systems from the Universidad Nacional de Lanús.</p>
    `,
    '2017': `
      <p>In 2017, I started to work professionally for the Buenos Aires City Government (GCBA),  where I took part in a project to develop a system for managing towing yards called SUGPA (Sistema Único de Gestión de Playas de Acarreo).</p>
      <p>It was my first interaction with several technologies like PHP and PostgreSQL. Although I worked primarily as a backend developer, I also contributed to the front-end development using DataTables, which was probably the first JS library I ever used. </p>
    `,
    '2018': `
      <p>I continued to work in another department within the Buenos Aires City Government (GCBA), this time working for the tourism area. I developed the website www.turismo.buenosaires.gob.ar, the official tourism site for one of the most popular cities in Latin America, which receives over 900.000 visits per month.</p>
      <p>This experience lasted two years and was one of the most valuable in my professional career, thanks to all the new skills I acquired and the people I met along the way. It was a great and valuable experience that came to an end in 2020.</p>
    `,
    '2019': `
      <p>This year was largely a continuation of 2018. I expanded my tech knowledge, particularly in using Drupal as a CMS to manage web content. I was able to work on a complete redesign of the tourism website, which allowed me to improve my skills, especially in HTML, CSS and Bootstrap, specializing as a front-end developer.</p>
      <p>Additionally, I began exploring JavaScript technologies for my thesis and started working as an artificial intelligence researcher for a legal publishing company. I’ll share more about that in the years to come.</p>
    `,
    '2020': `
      <p>Everyone knows what this year was like. But besides the pandemic, I graduated from university, and since we were all working remotely, those circumstances gave us something truly valuable: time.</p>
      <p>I took advantage of my time at home by working as a researcher for a legal publishing company called Astrea based in Buenos Aires. I was invited to join the project thanks to a professor and mentor from my university, Dr. Antonio Martino. We researched technologies such as Python and, in particular, IBM Watson to build an AI-powered reasoner capable of searching through thousands of legal books, laws and court rulings.</p>
      <p>Also, I started to work on my first freelance project: Fadep. I built www.fapdesa.com.ar for a SME that sells plastic bottles. It was primarily a SEO challenge. The site is fully optimized and ranked well on Google. I used PHP, Drupal and several other technologies I learned during my time at GCBA.</p>
      <p>At the end of this year, I wrapped up my work at GCBA and started a new role at a startup called Alquilando as a Javascript full-stack developer. This marked my transition from working with PHP to focusing fully on JavaScript. I also began studying on the Platzi platform, which has become a key part of my ongoing education and very important for my career.</p>
    `,
    '2021': `
      <p>In 2021, I continued working as a full-stack JavaScript developer at Alquilando using Angular, NodeJS and NestJS, which are my favorite stack. Alquilando offered a service that connected property owners and tenants to manage rentals, but the company eventually struggled to sustain its business.</p>
      <p>After just research activities, I was hired by Astrea to develop and rebuild the company’s software products: an e-commerce platform for selling legal books and a digital reading platform offering subscription-based access to those books. Both legacy projects were monolithic applications built with PHP. I migrated them using my favorite stack, plus MongoDB, Elasticsearch, Firebase, AWS and Docker. This was my first end-to-end solution as a software architect. Thanks to the infrastructure I designed, the company reduced its annual costs by approximately $4,000 compared to the previous system.</p>
      <p>I’m proud of this development which was a complete success. Together, both projects generate significant annual revenue for the company and are used by hundreds of users every day.</p>
    `,
    '2022': `
      <p>I continued working for Editorial Astrea this year. Their projects took over eight months to complete.</p>
      <p>I made a crucial decision in my career: I left my job at Alquilando. It was a valuable experience where I learned a lot about software development. Working at a small startup taught me important lessons about what to do and what to avoid, especially in terms of communication and people management. I later applied this knowledge during my experience as a CTO.</p>
      <p>That decision allowed me to pursue a dream: working in blockchain. I fell in love with this technology and was determined to contribute to some Web3 project.</p>
      <p>I have been a student at Platzi since October 2020, and I have taken more than 150 courses that have provided me with much of the knowledge I have today. This year, I also became a content creator for the platform, contributing to around 50 courses and writing over 600 articles based on their classes. I was recognized as one of the top contributors among more than 300 people, getting the title of “Leader Contributor.” In this role, I had the opportunity to help others improve their writing skills. My contributions have focused on topics such as Angular, NestJS and especially blockchain.</p>
      <p>This period of studying blockchain and writing content about it was crucial in helping me achieve my dream. You can find about 50 articles that I wrote down on this website. That experience allowed me to begin my blockchain journey in 2023.</p>
    `,
    '2023': `
      <p>This year was all about blockchain for me. Not only I spent time developing, but also learning about economics and personal finance, which are essential aspects in anyone’s life.</p>
      <p>In 2022, I met someone who would later become my partner during my entrepreneurial journey running a startup. At first, we collaborated on some blockchain projects, particularly involving the Solana and Helium networks, alongside partners from Europe. Also, we built an NFT platform and a blockchain-based two-factor authentication system to secure wallets in dApps.</p>
      <p>These projects eventually came to an end, as they were side projects, but the experience was incredibly valuable. I had the opportunity to take part in an international project where I could actively use my English skills and take ownership by leading a team to bring these ideas to life.</p>
      <p>It was during this time that I became the CTO for my partner’s company, thanks to the strong working relationship we had built.</p>
    `,
    '2024': `
      <p>2024 was a year of entrepreneurship. My partner already had his own company called Notimation which provided a SMS delivery solution. As the business began to grow, he started to build a full development team to help take it to the next level. In a couple of months, I gradually took on leadership of all these teams. At our peak, I led more than 20 developers.</p>
      <p>We had an Angular team which worked with some side projects. Two React teams: one focused on our main project and the other on websites and smaller less complex projects. A Node.js team managed the core of our system architecture, while a Laravel team maintained a legacy API that we eventually deprecated. We also had a team that developed mobile apps. Finally, we created an AI team at the early stages of ChatGPT and LangChain technologies.</p>
      <p>We were an unusual startup, with many teams and employees, as we worked to expand Notimation’s business model. Our goal was to build a comprehensive marketing solution for SME through a no-code platform called UiTool, an e-commerce platform named UiTrade, and a management system called Small, which would later become the name of our startup. We also integrated AI-powered bots and other innovative features to enhance our platform.</p>
      <p>Our business didn't prosper, but I am proud of several tech milestones, everything we learned, and the difficult decisions I made, especially related to infrastructure and which technologies to use. We gave over 20 junior developers their first IT job, fostering a positive and supportive work environment. I acquired valuable expertise related to products, validation and software releases.</p>
    `,
    '2025': `
      <p>At the beginning of this year, my time as CTO came to an end. After several unsuccessful attempts to launch our software, the team was significantly reduced and was not the same as it was before. Our business model pivoted, we continued developing it and trying to release our product, but the process became increasingly challenging.</p>
      <p>One of the most difficult parts of being an entrepreneur is finding the right business model, validating the product and creating a solid user experience. I eventually decided to leave the company due to personal reasons.</p>
      <p>Failure? It was the most important professional experience of my life to date. It changed me completely, and now I am a different person and a more well-rounded professional because of it.</p>
      <p>During the first half of this year, I worked mainly as a freelancer. I had two clients: Astrea and Fadep, who both needed development, and it was a good time to help them. For Astrea, we improved their software by adding new features and carrying out important updates and maintenance. For Fadep, I built an e-commerce platform at www.tienda.fadepsa.com.ar to enable them to sell their products directly to customers. I implemented it primarily using NextJS, while still relying on Drupal architecture to manage information.</p>
      <p>In the second half of this year, I realized I needed a change, both personally and professionally and that is when I started working for Accenture. After years of working as a freelancer, a contractor and an entrepreneur, I was ready for a meaningful shift and the opportunity to be part of an international corporation. This is merely the start of a new chapter in my professional development, where I aim to apply my skills, expand my knowledge and contribute meaningfully to future projects.</p>
    `,
    'all': `
      <p>I have always loved technology logos. That is why I created this dashboard where you will find all the technologies I have worked with, along with a detailed description of my professional path. Year by year, you can read about the projects I have been part of, what I accomplished and some key highlights from my tech career. I recommend going through it chronologically to get a clear picture of how my roles and experience have evolved over time.</p>
      <p>Overall, my career has gone through five stages: PHP developer, JavaScript developer, blockchain researcher, CTO of a startup, and now, since June 2025, I have entered a completely new stage, working at Accenture.</p>
      <p>Have you ever stopped to think about how many technologies we encounter as developers? It is surprising! Creating this dashboard was a personal retrospective. It gave me a chance to reflect on my journey, organize my profile, and gain a clearer understanding of the kind of IT professional I am and what I want to become.</p>
    `,
    'tier': `
      <p>My Tech Tier is divided into five levels: the first includes my favorite technologies; the second consists of preferred techs that I enjoy using or am currently working with; the third level contains technologies I use occasionally; the fourth one features tech I know or have used in the past and would like to use again; and the last level is a lists technologies I’d rather not encounter again in my career because they are outdated, deprecated or simply ones I dislike.</p>
    `,
  },
  es: {
    'contact': 'Contacto',
    'go-blog': 'Ir al blog',
    'share-on': 'Compartir en',
    'share-by': 'Compartir por',
    'prev': 'Anterior',
    'next': 'Siguiente',

    'projects': 'Proyectos',

    'blog.text': 'Todos los artículos sobre blockchain los redacté hace algunos años, durante mi colaboración como creador de contenido para la plataforma educativa, Platzi. Esa etapa profesional enriqueció significativamente mis habilidades de redacción, SEO y comunicación escrita, además de conocimiento técnico en estas tecnologías.',
    'blog.all-collections': 'Todas las categorías',
    'blog.others': 'Más posts',
    'blog.toc': 'Tabla de Contenido',

    'home.kev': '¡Hola, soy Kev!',
    'home.presentation1': `Actualmente trabajando como arquitecto de software y especialista en inteligencia artificial en Accenture. Una experiencia profesional completamente diferente en una gran empresa multinacional.`,
    'home.presentation2': `Trabajo profesionalmente desde el 2017, me gradué como Licenciado en Sistemas en el 2021 y durante mis más de 8 años de experiencia profesional he pasado por diferentes etapas; comencé como programador PHP y posteriormente me especialicé como desarrollador full-stack JavaScript. Tuve la oportunidad de trabajar en varios proyectos: como freelancer, en el sector público y privado, en proyectos blockchain e IA, y también en algunas startups. En una de ellas, asumí el rol de CTO, donde dirigí un equipo de unos 20 desarrolladores y construí la arquitectura de software de la empresa. Esa experiencia marcó un punto de inflexión en mi trayectoria profesional.`,
    'home.presentation3': `Me considero agnóstico a la tecnología, con una perspectiva generalista y una ligera preferencia por el desarrollo front-end que me permite adaptarme a diferentes herramientas y flujos de trabajo. Mi principal fortaleza es tener una visión holística del software que desarrollamos, asegurando la alineación entre las personas, tecnología y objetivos del negocio.`,
    'home.presentation4': `Más allá de los aspectos técnicos, he aprendido que la comunicación es mi mayor aporte en un equipo; y lo que más disfruto es escuchar, conectar y construir buenas relaciones con la gente.`,

    'footer.recommends': 'Puede interesarte',
    'footer.resources': 'Recursos',
    'footer.source': 'Código fuente',

    'collection': 'Collection',
    'read-post': 'Leer post',

    'description': 'Descripción',
    'comment': 'Comentario u opinión',

    't1': 'Favorites',
    't2': 'Nice to use',
    't3': 'From time to time',
    't4': 'Might use again',
    't5': 'Deprecated',

    'uni': `
      <p>Entre 2013 y 2019 transité mi etapa en la universidad donde descubrí mi pasión por la programación, a adquirir una sólida comprensión de la tecnología y a sentar las bases de mis ambiciones profesionales.</p>
      <p>Aprendí tecnologías como C++ y Java, que fueron mis primeros lenguajes de programación. Exploré otras disciplinas como ciencia de datos e IoT con Python y Arduino. Además, a lo largo de la carrera conocí amplia gama de temas, como testing, redes, negocios y pensamiento crítico.</p>
      <p>Creo que la universidad nos ayuda primero a crecer como personas y luego como profesionales, especialmente entre los 18 y los 25 años. Sin duda, jugó un papel importante en la formación de mi trayectoria profesional.</p>
      <p>Mi tesis, titulada "Tecnologías Front-End para Desarrolladores de Software", se centró en analizar y comparar el rendimiento y las características de tecnologías como Angular, React y Vue. También marcó mi primera experiencia con el ecosistema JavaScript. Defendí mi tesis el 14 de mayo de 2021, después de un largo período de pandemia, y obtuve mi título de Licenciada en Sistemas en la Universidad Nacional de Lanús.</p>
    `,
    '2017': `
      <p>En 2017, comencé a trabajar profesionalmente para el Gobierno de la Ciudad de Buenos Aires (GCBA), donde participé en un proyecto para desarrollar un sistema de gestión de playas de remolque de vehículos llamado SUGPA (Sistema Único de Gestión de Playas de Acarreo).</p>
      <p>Fue mi primera interacción con diversas tecnologías como PHP y PostgreSQL. Si bien trabajé principalmente como desarrollador backend, también contribuí al desarrollo frontend con DataTables, que probablemente fue la primera librería JavaScript que usé.</p>
    `,
    '2018': `
      <p>Continué trabajando en otro departamento del Gobierno de la Ciudad de Buenos Aires (GCBA), esta vez en el área de turismo. Desarrollé el sitio web www.turismo.buenosaires.gob.ar, el sitio web oficial de turismo de una de las ciudades más populares de Latinoamérica, que recibe más de 900.000 visitas al mes.</p>
      <p>Esta experiencia duró dos años y fue una de las más valiosas de mi carrera profesional, gracias a todas las nuevas habilidades que adquirí y a la gente que conocí en el camino. Fue una gran y muy valiosa experiencia que finalizó en 2020.</p>
    `,
    '2019': `
      <p>Este año fue en gran medida una continuación del 2018. Amplié mis conocimientos tecnológicos, especialmente en el uso de Drupal como CMS para la gestión de contenido web. Pude trabajar en un rediseño completo del sitio web de turismo, lo que me permitió mejorar mis habilidades, especialmente en HTML, CSS y Bootstrap, especializándome como desarrollador front-end.</p>
      <p>Además, comencé a explorar tecnologías JavaScript para mi tesis y a trabajar como investigador de inteligencia artificial para una editorial jurídica. Compartiré más sobre esto en los próximos años.</p>
    `,
    '2020': `
      <p>Todos saben cómo fue este año. Pero además de la pandemia, me gradué de la universidad, y como todos trabajábamos a distancia, esas circunstancias nos brindaron algo realmente valioso: tiempo.</p>
      <p>Aproveché mi tiempo en casa trabajando como investigador para Astrea, una editorial jurídica de Buenos Aires. Me invitaron a unirme al proyecto gracias a un profesor y mentor de la universidad, el Dr. Antonio Martino. Investigamos tecnologías como Python y, en particular, IBM Watson para desarrollar un razonador basado en IA capaz de buscar en miles de libros, leyes y doctrinas judiciales.</p>
      <p>Además, comencé a trabajar en mi primer proyecto freelance: Fadep. Creé www.fapdesa.com.ar para una PYME que vende botellas de plástico. Fue principalmente un desafío de SEO. El sitio está totalmente optimizado y tiene un buen posicionamiento en Google. Utilicé PHP, Drupal y varias otras tecnologías que aprendí durante mi tiempo en el GCBA.</p>
      <p>A finales de este año, terminé mi trabajo en GCBA y comencé un nuevo puesto en una startup llamada Alquilando como desarrollador full-stack de Javascript. Esto marcó mi transición de trabajar con PHP a centrarme por completo en JavaScript. También comencé a estudiar en la plataforma Platzi, que se ha convertido en una parte clave de mi formación continua y muy importante para mi carrera.</p>
    `,
    '2021': `
      <p>En 2021, continué trabajando como desarrollador full-stack JavaScript en Alquilando, utilizando Angular, NodeJS y NestJS, mi stack favorito. Alquilando ofrecía un servicio que conectaba a propietarios e inquilinos para gestionar alquileres, pero la empresa finalmente tuvo dificultades para mantener su negocio.</p>
      <p>Tras solo unas actividades de investigación, Astrea me contrató para desarrollar y reconstruir los productos de software de la empresa: una plataforma de comercio electrónico para la venta de libros legales y una plataforma de lectura digital que ofrecía acceso por suscripción a dichos libros. Ambos proyectos legacy eran aplicaciones monolíticas creadas con PHP. Los migré utilizando mi stack favorito, además de MongoDB, Elasticsearch, Firebase, AWS y Docker. Esta fue mi primera solución integral como arquitecto de software. Gracias a la infraestructura que diseñé, la empresa redujo sus costes anuales en aproximadamente 4000 USD en comparación con el sistema anterior.</p>
      <p>Estoy orgulloso de este desarrollo que fue todo un éxito. Juntos, ambos proyectos generan importantes ingresos anuales para la empresa y son utilizados por cientos de usuarios a diario.</p>
    `,
    '2022': `
      <p>Continué trabajando para Editorial Astrea este año. Sus proyectos tardaron más de ocho meses en completarse.</p>
      <p>Tomé una decisión crucial en mi carrera: dejé mi trabajo en Alquilando. Fue una experiencia valiosa donde aprendí mucho sobre desarrollo de software. Trabajar en una pequeña startup me enseñó lecciones importantes sobre qué hacer y qué evitar, especialmente en comunicación y gestión de personal. Posteriormente, apliqué estos conocimientos durante mi experiencia como CTO.</p>
      <p>Esa decisión me permitió perseguir un sueño: trabajar en blockchain. Me enamoré de esta tecnología y estaba decidido a contribuir en algún proyecto Web3.</p>
      <p>He sido estudiante de Platzi desde octubre de 2020 y he realizado más de 150 cursos que me han aportado gran parte del conocimiento que tengo hoy. Este año, también me convertí en creador de contenido para la plataforma, colaborando en unos 50 cursos y escribiendo más de 600 artículos basados ​​en sus clases. Fui reconocido como uno de los mejores colaboradores entre más de 300 personas, obteniendo el título de "Leader Contributor". En este puesto, tuve la oportunidad de ayudar a otros a mejorar sus habilidades de escritura. Mis contribuciones se han centrado en temas como Angular, NestJS y, especialmente, blockchain.</p>
      <p>Este período de estudio y escritura de contenido sobre blockchain fue crucial para ayudarme a alcanzar mi sueño. Puedes encontrar unos 50 artículos que escribí en este sitio web. Esta experiencia me permitió comenzar mi trayectoria en blockchain en 2023.</p>
    `,
    '2023': `
      <p>Este año fue todo sobre blockchain para mí. No solo dediqué tiempo a desarrollar, sino también a aprender sobre economía y finanzas personales, aspectos esenciales en la vida de cualquier persona.</p>
      <p>En 2022, conocí a quien más tarde se convertiría en mi socio durante mi trayectoria empresarial al frente de una startup. Al principio, colaboramos en algunos proyectos de blockchain, en particular en las redes Solana y Helium, junto con socios europeos. Además, construimos una plataforma NFT y un sistema de autenticación de dos factores basado en blockchain para proteger las billeteras en dApps.</p>
      <p>Estos proyectos eventualmente no continuaron, ya que eran side-project, pero la experiencia fue increíblemente valiosa. Tuve la oportunidad de participar en un proyecto internacional donde pude usar activamente mis conocimientos de inglés y asumir el liderazgo de un equipo para hacer realidad estas ideas.</p>
      <p>Fue durante este tiempo que me convertí en CTO de la empresa de mi socio, gracias a la sólida relación de trabajo que habíamos forjado.</p>
    `,
    '2024': `
      <p>2024 fue un año de emprendimiento. Mi socio ya tenía su propia empresa llamada Notimation que ofrecía una solución de envío de SMS. A medida que el negocio crecía, empezó a formar un equipo de desarrollo completo para impulsarla al siguiente nivel. En un par de meses, fui asumiendo el liderazgo de todos estos equipos. En nuestro mejor momento, dirigí a más de 20 desarrolladores.</p>
      <p>Teníamos un equipo Angular que trabajaba en algunos side-projects. Dos equipos de React: uno centrado en nuestro proyecto principal y el otro en sitios web y proyectos más pequeños y menos complejos. Un equipo Node.js desarrollaba el core de la arquitectura de nuestro sistema, mientras que un equipo Laravel mantenía una API legacy que finalmente descontinuamos. También teníamos un equipo que desarrollaba aplicaciones mobile. Finalmente, creamos un equipo IA en las primeras etapas de ChatGPT y LangChain.</p>
      <p>Éramos una startup inusual, con muchos equipos y empleados, trabajábamos para expandir el modelo de negocio de Notimation. Nuestro objetivo era crear una solución integral de marketing para PYMES mediante una plataforma no-code llamada UiTool, una plataforma de comercio electrónico llamada UiTrade y un sistema de gestión llamado Small, que posteriormente se convertiría en el nombre de nuestra startup. También integramos bots con inteligencia artificial y otras funciones innovadoras para mejorar nuestra plataforma.</p>
      <p>Nuestro negocio no prosperó, pero estoy orgulloso de varios hitos tecnológicos, de todo lo que aprendimos y de las difíciles decisiones que tomé, especialmente en relación con la infraestructura y las tecnologías a utilizar. Ofrecimos a más de 20 desarrolladores júnior su primer trabajo en TI, fomentando un ambiente de trabajo positivo y de apoyo. Adquirí una valiosa experiencia en productos, validación y lanzamientos de software.</p>
    `,
    '2025': `
      <p>A principios de este año, mi etapa como CTO llegó a su fin. Tras varios intentos fallidos de lanzar nuestro software, el equipo se redujo significativamente y ya no era el mismo. Nuestro modelo de negocio cambió radicalmente: continuamos desarrollándolo e intentando lanzar el producto, pero el proceso se volvió cada vez más difícil.</p>
      <p>Una de las partes más difíciles de ser emprendedor es encontrar el modelo de negocio adecuado, validar el producto y crear una experiencia de usuario sólida. Finalmente, decidí dejar la empresa por motivos personales.</p>
      <p>¿Fracaso? Fue la experiencia profesional más importante de mi vida hasta la fecha. Me cambió por completo y ahora soy una persona diferente y un profesional más completo gracias a ello.</p>
      <p>Durante el primer semestre de este año, trabajé principalmente como freelance. Tenía dos clientes: Astrea y Fadep, quienes necesitaban desarrollo, y era un buen momento para ayudarlos. Para Astrea, mejoramos su software añadiendo nuevas funcionalidades y realizando importantes actualizaciones y mantenimiento. Para Fadep, construí una plataforma de comercio electrónico en www.tienda.fadepsa.com.ar para que pudieran vender sus productos directamente a los clientes. La implementé principalmente con NextJS, y seguía utilizando la arquitectura Drupal para la gestión de la información.</p>
      <p>En el segundo semestre de este año, me di cuenta de que necesitaba un cambio, tanto personal como profesional, y fue entonces cuando empecé a trabajar para Accenture. Tras años trabajando como freelance, contractor y emprendedor, estaba listo para un cambio significativo y la oportunidad de formar parte de una corporación internacional. Este es solo el comienzo de una nueva etapa en mi desarrollo profesional, donde aspiro a aplicar mis habilidades, ampliar mis conocimientos y contribuir significativamente a proyectos futuros.</p>
    `,
    'all': `
      <p>Siempre me han fascinado los logotipos de las tecnologías. Por eso creé este panel donde encontrarás todas las tecnologías con las que he trabajado, junto con una descripción detallada de mi trayectoria profesional. Año tras año, podrás leer sobre los proyectos en los que he participado, mis logros y algunos momentos clave de mi carrera tecnológica. Recomiendo revisarlo cronológicamente para tener una idea clara de cómo han evolucionado mis funciones y mi experiencia con el tiempo.</p>
      <p>En general, mi carrera ha pasado por cinco etapas: desarrollador PHP, desarrollador JavaScript, investigador de blockchain, CTO de una startup y, ahora, desde junio de 2025, he entrado en una etapa completamente nueva trabajando en Accenture.</p>
      <p>¿Has pensando alguna vez en cuántas tecnologías nos encontramos como desarrolladores? ¡Es sorprendente! Crear este panel fue una retrospectiva personal. Me dio la oportunidad de reflexionar sobre mi trayectoria, organizar mi perfil y comprender mejor el tipo de profesional de TI que soy y en qué quiero convertirme.</p>
    `,
    'tier': `
      <p>Mi Tech Tier se divide en cinco niveles: el primero incluye mis tecnologías favoritas; el segundo consta de tecnologías preferidas que disfruto usar o con las que estoy trabajando actualmente; el tercer nivel contiene tecnologías que uso ocasionalmente; el cuarto presenta tecnologías que conozco o he usado en el pasado y me gustaría volver a usar; y el último nivel es una lista de tecnologías que preferiría no volver a encontrar en mi carrera porque están desactualizadas, en desuso o simplemente no me gustan.</p>
    `,
  },
} as const;
