import type { TechBox } from '../interfaces/tech-box.interface';

export const ai: TechBox = {
  name: 'AI',
  headerImage: 'ai.svg',
  techs: [
    {
      tech: 'ChatGPT',
      image: '/tech/6-ia/chatgpt.png',
      years: ['2024', '2025'],
      tier: 't2',
      description: {
        en: 'The most popular artificial intelligence language model created by OpenAI to generate human-like text responses and assist in various tasks.',
        es: 'El modelo de lenguaje más popular de inteligencia artificial creado por OpenAI para generar respuestas de texto similares a las humanas y ayudar en diversas tareas.',
      },
      comment: {
        en: 'Everybody knows and uses ChatGPT. I’ve also implemented through API with LangChain to build agents AI.',
        es: 'Todo el mundo conoce y utiliza ChatGPT. También lo he implementedo por API junto con LangChain para construir agentes IA.',
      }
    },
    {
      tech: 'Claude',
      image: '/tech/6-ia/claude.png',
      years: [],
      tier: 't3',
      description: {
        en: 'An advanced AI model developed by Anthropic, built for safe reasoning, high-quality language understanding, and enterprise-ready intelligence.',
        es: 'Un modelo de IA avanzado desarrollado por Anthropic, diseñado para razonamiento seguro, comprensión del lenguaje de alta calidad e inteligencia empresarial.',
      },
      comment: {
        en: 'Claude Sonet 4.5 is one of my favorite models. Especially for use with GitHub Copilot.',
        es: 'Claude Sonet 4.5 es uno de mis modelos favoritos. Especialmente para utilizar con GitHub Copilot.',
      }
    },
    {
      tech: 'Gemini',
      image: '/tech/6-ia/gemini.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A multimodal AI system built by Google, capable of understanding text, images, audio, and video to deliver powerful reasoning and seamless product integration.',
        es: 'Un sistema de inteligencia artificial multimodal creado por Google, capaz de comprender texto, imágenes, audio y video para ofrecer un razonamiento poderoso y una integración perfecta de productos.',
      },
      comment: {
        en: 'Along with OpenAI’s models, Google’s are the best on the market. I like to experiment with each one and compare results depending on the task at hand.',
        es: 'Junto con los modelos de OpenAI, los de Google son los mejores del mercado. Me gusta experimentar con cada uno y comparar resultados dependiendo la tarea que tengo.',
      }
    },
    {
      tech: 'Glok',
      image: '/tech/6-ia/glok.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A real-time conversational AI created by xAI, designed for fast reasoning, live information access, and a bold, humorous interaction style.',
        es: 'Una IA conversacional en tiempo real creada por xAI, diseñada para un razonamiento rápido, acceso a información en vivo y un estilo de interacción audaz y divertido.',
      },
      comment: {
        en: 'Glok has given me very good results for writing code and solving somewhat complex logic problems.',
        es: 'Glok me ha dado muy buenos resultados para escribir código y resolver problemas de lógica algo complejos.',
      }
    },
    {
      tech: 'Mistral',
      image: '/tech/6-ia/mistral.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A family of high-performance open-source AI models developed by Mistral AI, focused on efficient reasoning, fast inference, and flexible deployment for enterprise and developer use cases.',
        es: 'Una familia de modelos de IA de código abierto de alto rendimiento desarrollados por Mistral AI, centrados en el razonamiento eficiente, la inferencia rápida y la implementación flexible para casos de uso empresariales y de desarrolladores.',
      },
      comment: {
        en: 'I primarily used Mistral’s models through AWS Bedrock. It’s also a very good model for local testing with Ollama.',
        es: 'Utilicé los modelos de Mistral principalmente a través de AWS Bedrock. También es muy buen modelo para hacer pruebas en local con Ollama.',
      }
    },
    {
      tech: 'GitHub Copilot',
      image: '/tech/6-ia/copilot.png',
      years: ['2025', '2026'],
      tier: 't3',
      description: {
        en: 'An AI-powered code assistant that suggests code snippets and accelerates development in tools like VS Code.',
        es: 'Un asistente de código impulsado por IA que sugiere fragmentos de código y acelera el desarrollo en herramientas como VS Code .',
      },
      comment: {
        en: 'I use GitHub Copilot in VS Code personally, and I also have an enterprise license working for Accenture.',
        es: 'Utilizo GitHub Copilot en VS Code de forma personal, y también tengo licencia empresarial trabajando para Accenture.',
      }
    },
    {
      tech: 'Ollama',
      image: '/tech/6-ia/ollama.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A lightweight runtime that lets developers run and manage large language models locally with simple commands, customizable model files, and efficient on-device inference.',
        es: 'Un entorno de ejecución liviano que permite a los desarrolladores ejecutar y administrar modelos de lenguaje grandes localmente con comandos simples, archivos de modelo personalizables e inferencia eficiente en el dispositivo.',
      },
      comment: {
        en: "I've downloaded models to my computer using Ollama and used them in applications via LangChain. It's very easy to use; the tricky part is having a good computer.",
        es: 'Con Ollama he descargado modelos en mi computadora y utilizado en aplicaciones a través de LangChain. Muy fácil de usar; la parte complicada es tener un buen computador.',
      }
    },
    {
      tech: 'LM Studio',
      image: '/tech/6-ia/lmstudio.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A desktop application that lets users run, test, and manage local large language models with an easy UI, offering fast inference, model downloading, and developer-friendly tooling for offline AI workflows.',
        es: 'Una aplicación de escritorio que permite a los usuarios ejecutar, probar y administrar modelos de lenguaje locales de gran tamaño con una interfaz de usuario sencilla, que ofrece inferencia rápida, descarga de modelos y herramientas fáciles de usar para desarrolladores para flujos de trabajo de IA sin conexión.',
      },
      comment: {
        en: "I haven't used LM Studio much for local LLM testing; I prefer Ollama. It has a very good, very practical UI.",
        es: 'He utilizado poco LM Studio para pruebas de LLM en local, prefiero Ollama. Tiene una muy buena UI, muy práctica.',
      }
    },
    {
      tech: 'MCP (Model Context Protocol)',
      image: '/tech/6-ia/mcp.png',
      years: ['2025', '2026'],
      tier: 't2',
      description: {
        en: 'A protocol that standardizes how applications communicate context and tools to AI models, enabling more capable and integrated AI workflows.',
        es: 'Un protocolo que estandariza cómo las aplicaciones comunican el contexto y las herramientas a los modelos de IA, lo que permite flujos de trabajo de IA más capaces e integrados.',
      },
      comment: {
        en: 'I believe MCP is changing us as developers bt allowing us to expose services to LLMs, instead of developing Rest API to expose endpoits to clients. I implemented and gave a workshop about it at Accenture to promote this technology.',
        es: 'Creo que MCP nos está transformando como desarrolladores al permitirnos exponer servicios a LLM, en lugar de desarrollar API Rest para exponer endpoints a los clientes. Implementé esta tecnología e impartí un taller al respecto en Accenture para promocionarla.',
      }
    },
    {
      tech: 'LangChain',
      image: '/tech/6-ia/langchain.png',
      years: ['2024', '2025'],
      tier: 't1',
      description: {
        en: 'A framework for building AI-driven applications by chaining together LLMs and integrating external tools.',
        es: 'Un marco para crear aplicaciones impulsadas por IA encadenando LLM e integrando herramientas externas.',
      },
      comment: {
        en: 'Throughout my experiecen like a CTO, we created AI services with both, Javascript and Python LangChain SDK and a sockets-based architecture.',
        es: 'A lo largo de mi experiencia como CTO, creamos servicios IA tanto con el SDK de LangChain de Javascript como en Python y una arquitectura basada en sockets.',
      }
    },
    {
      tech: 'LangGraph',
      image: '/tech/6-ia/langgraph.png',
      years: ['2024', '2025'],
      tier: 't1',
      description: {
        en: 'A multi-agent architecture framework for creating complex AI workflows and dynamic interactions.',
        es: 'Un framework de arquitectura multiagente para crear flujos de trabajo de IA complejos e interacciones dinámicas.',
      },
      comment: {
        en: 'When we explored multi-agents architecture, we discovered LangGraph to implemented it alongside LangChain. Especially with the Javascript SDK.',
        es: 'Cuando exploramos la arquitectura multiagente, descubrimos LangGraph para implementarlo junto a LangChain. Especialmente con el SDK de Javascript.',
      }
    },
    {
      tech: 'RAG Architecture',
      image: '/tech/6-ia/rag.png',
      years: ['2024', '2025'],
      tier: 't2',
      description: {
        en: 'Retrieval-Augmented Generation combines LLM with retrieval of external data such as a regular database or a vector database, to get accurate AI responses.',
        es: 'Retrieval-Augmented Generation combina LLM con la recuperación de datos externos, como una base de datos normal o una base de datos vectorial, para obtener respuestas precisas de IA.',
      },
      comment: {
        en: 'We implemented a RAG architecture with a multi-agents system developed with LangGraph and information coming from MongoDB and a vector database, Pinecone and Qdrant.',
        es: 'Implementamos una arquitectura RAG con un sistema multiagentes desarrollado con LangGraph e información proveniente de MongoDB y una base de datos vectorial, Pinecone and Qdrant.',
      }
    },
    {
      tech: 'Qdrant',
      image: '/tech/6-ia/qdrant.png',
      years: ['2024', '2025'],
      tier: 't2',
      description: {
        en: 'A high-performance vector database for storing, searching, and managing embeddings in AI and machine learning applications.',
        es: 'Una base de datos vectorial de alto rendimiento para almacenar, buscar y administrar incrustaciones en aplicaciones de inteligencia artificial y aprendizaje automático.',
      },
      comment: {
        en: 'Much better than Pinecone because it has no limits on applying filters to your embeddings.',
        es: 'Mucho mejor que Pinecone debido a que no tiene límites para aplicar filtros a tus embeddings.',
      }
    },
    {
      tech: 'Pinecone',
      image: '/tech/6-ia/pinecone.png',
      years: ['2024', '2025'],
      tier: 't4',
      description: {
        en: 'A vector database for storing and querying embeddings, optimized for AI search and recommendation systems.',
        es: 'Una base de datos vectorial para almacenar y consultar embeddings, optimizada para sistemas de búsqueda y recomendación de IA.',
      },
      comment: {
        en: 'We chose it as our vector database for our projects in my CTO time. Easy to implement with Python or Javascript.',
        es: 'Elegimos Pinecone como la base de datos vectorial para nuestros proyectos en mi tiempo como CTO. Fácil de implementar tanto en Python como con Javascript.',
      }
    },
    {
      tech: 'AI Refinery',
      image: '/tech/6-ia/ai-refinery-accenture.png',
      years: ['2025', '2026'],
      tier: 't2',
      description: {
        en: 'A platform from Accenture —built using NVIDIA’s AI stack— that enables enterprises to deploy, customize and orchestrate multi-agent AI solutions at scale, integrating LLMs, vision, and other AI capabilities to automate complex workflows across business domains.',
        es: 'Una plataforma de Accenture, desarrollada con tecnología IA de NVIDIA, que permite a las empresas implementar, personalizar y orquestar soluciones de IA de múltiples agentes a escala, integrando LLM, visión y otras capacidades de IA para automatizar flujos de trabajo complejos en todos los dominios comerciales.',
      },
      comment: {
        en: 'While working for Accenture, I used AI Refinery to develop AI applications for my team. It has an SDK written in Python for prompting and orchestrating agents.',
        es: 'Trabajando para Accenture, utilicé AI Refinery para desarrollar aplicaciones IA para mi equipo. Posee un SDK escrito en Python para prompting y orquestar agentes.',
      }
    },
    {
      tech: 'AWS Bedrock',
      image: '/tech/6-ia/aws-bedrock.png',
      years: ['2024'],
      tier: 't4',
      description: {
        en: 'A fully managed AI service by AWS that provides access to leading foundation models and tools for building, scaling, and integrating generative AI into applications.',
        es: 'Un servicio de IA completamente administrado por AWS que brinda acceso a modelos y herramientas fundamentales líderes para construir, escalar e integrar IA generativa en aplicaciones.',
      },
      comment: {
        en: 'I experimented with Bedrock as an alternative to OpenAI so I could easily use other models via API.',
        es: 'Experimenté con Bedrock como alternativa a OpenAI para poder utilizar otros modelos por API fácilmente.',
      }
    },
    {
      tech: 'Runware',
      image: '/tech/6-ia/runware.png',
      years: ['2024', '2025'],
      tier: 't2',
      description: {
        en: 'A platform for generating high-quality AI images very quickly and cheaply, powered by the company’s custom hardware. Enables effortless content creation without machine learning experience.',
        es: 'Una plataforma para la generación de imágenes con IA de alta calidad de manera muy rápida y barata, impulsada por hardware personalizado de la empresa. Permite la creación de contenido sin esfuerzo y sin experiencia en aprendizaje automático.',
      },
      comment: {
        en: 'I found in Runware the best, cheapest and easiest to use AI to generate images.',
        es: 'Encontré en Runware el mejor, más barata y fácil de usar IA para generar imágenes.',
      }
    },
    {
      tech: 'ElevenLabs',
      image: '/tech/6-ia/elevenlabs.png',
      years: ['2024'],
      tier: 't4',
      description: {
        en: 'An AI-powered text-to-speech platform known for generating realistic, human-like voiceovers.',
        es: 'Una plataforma de texto a voz impulsada por inteligencia artificial conocida por generar voces en off realistas y similares a las humanas.',
      },
      comment: {
        en: 'A very useful platform for generating sounds and voices. I experimented with it a bit.',
        es: 'Una plataforma muy útil para generar sonidos y voces. Experimenté un poco con ella.',
      }
    },
    {
      tech: 'Lovable',
      image: '/tech/6-ia/lovable.png',
      years: ['2025'],
      tier: 't3',
      description: {
        en: 'A no-code/low-code AI-assisted builder that lets users create full web apps, components, and designs through natural-language instructions.',
        es: 'Una herramienta no-code/low-code asistida por IA que permite a los usuarios crear aplicaciones web, componentes y diseños completos a través de instrucciones en lenguaje natural.',
      },
      comment: {
        en: "My first vibe coding experience was with Lovable. I made a landing page for a customer, I enjoyed it a lot. A very powerful service, it's amazing!",
        es: 'Mi primera experiencia vibe coding fue con Lovable. Creé una landing page para un cliente y me encantó. ¡Un servicio muy potente, increíble!',
      }
    },
    {
      tech: 'V0',
      image: '/tech/6-ia/v0.png',
      years: [],
      tier: 't4',
      description: {
        en: 'A generative UI tool by Vercel that creates React components from text prompts using shadcn/ui and Tailwind CSS.',
        es: 'Una herramienta de interfaz de usuario generativa de Vercel que crea componentes de React a partir de mensajes de texto usando shadcn/ui y Tailwind CSS.',
      },
      comment: {
        en: 'I explored it among other AI services. Probably the best for front-end development. I like the Vercel technology ecosystem in general.',
        es: 'Lo exploré entre otros servicios de IA. Probablemente, el mejor para el desarrollo front-end. Me gusta el ecosistema de tecnologías de Vercel en general.',
      }
    },
    {
      tech: 'Mermaid.js',
      image: '/tech/6-ia/mermaid-js.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A JavaScript-based diagramming tool that converts simple text syntax into flowcharts, sequence diagrams, and other visual representations for documentation and technical content.',
        es: 'Una herramienta de diagramación basada en JavaScript que convierte la sintaxis de texto simple en diagramas de flujo, diagramas de secuencia y otras representaciones visuales para documentación y contenido técnico.',
      },
      comment: {
        en: "It's not an AI library, I know. But I wanted to include it in this category because I think it's a fantastic complement for generating different types of diagrams with AI. Mermaid's language is complex, but with AI you can document anything you want. Mermaid is text-based, cheaper and faster than generating images.",
        es: 'No es una librería IA, lo sé. Pero quería incluirla en esta categoría porque creo que es un complemento fantástico para generar diferentes tipos de diagramas con IA. El lenguaje de Mermaid es complejo, pero con IA puedes documentar lo que quieras. Mermaid está basado en texto, más barato y rápido que generar imágenes.',
      }
    },
    {
      tech: 'Clipchamp',
      image: '/tech/6-ia/clipchamp.png',
      years: [],
      tier: 't3',
      description: {
        en: 'A user-friendly online video editor for creating, editing, and sharing videos directly from the browser.',
        es: 'Un editor de vídeo en línea fácil de usar para crear, editar y compartir vídeos directamente desde el navegador.',
      },
      comment: {
        en: 'It is not an AI tool per se, but I like using its free text-to-speech or speech-to-text services.',
        es: 'No es una herramienta de IA en sí, pero me gusta usar sus servicios gratuitos de texto a voz o voz a texto.',
      }
    },
    {
      tech: 'IBM Watson',
      image: '/tech/6-ia/ibm-watson.png',
      years: ['2020', '2021'],
      tier: 't5',
      description: {
        en: 'An AI platform by IBM providing machine learning, natural language processing, and automation solutions.',
        es: 'Una plataforma de inteligencia artificial de IBM que ofrece soluciones de automatización, procesamiento de lenguaje natural y aprendizaje automático.',
      },
      comment: {
        en: 'Old school AI services. I’ve worked especially with IBM Watson Discovery to create a big searcher. But it was very expensive to implement.',
        es: 'Servicio de IA de la vieja escuela. He trabajado especialmente con IBM Watson Discovery para crear un gran buscador. Pero fue muy caro de implementar.',
      }
    },
  ]
};
