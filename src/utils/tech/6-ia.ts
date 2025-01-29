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
      tech: 'GitHub Copilot',
      image: '/tech/6-ia/copilot.png',
      years: [],
      tier: 't3',
      description: {
        en: 'An AI-powered code assistant that suggests code snippets and accelerates development in tools like VS Code.',
        es: 'Un asistente de código impulsado por IA que sugiere fragmentos de código y acelera el desarrollo en herramientas como VS Code .',
      },
      comment: {
        en: 'I spent a time coding on VS Code with Copilot or even Amazon Codewhisperer. I like it, but sometimes it is unnecessary and annoying.',
        es: 'Pasé un tiempo programando en VS Code con Copilot or incluso Amazon Codewhisperer. Me gusta, pero a veces es innecesario y molesto.',
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
        en: 'We implemented a RAG architecture with a multi-agents system developed with LangGraph and information coming from MongoDB and a vector database, Pinecone.',
        es: 'Implementamos una arquitectura RAG con un sistema multiagentes desarrollado con LangGraph e información proveniente de MongoDB y una base de datos vectorial, Pinecone.',
      }
    },
    {
      tech: 'Pinecone',
      image: '/tech/6-ia/pinecone.png',
      years: ['2024', '2025'],
      tier: 't2',
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
      tech: 'Runware',
      image: '/tech/6-ia/runware.png',
      years: [],
      tier: 't2',
      description: {
        en: 'A platform for generating high-quality AI images very quickly and cheaply, powered by the company’s custom hardware. Enables effortless content creation without machine learning experience.',
        es: 'Una plataforma para la generación de imágenes con IA de alta calidad de manera muy rápida y barata, impulsada por hardware personalizado de la empresa. Permite la creación de contenido sin esfuerzo y sin experiencia en aprendizaje automático.',
      },
      comment: {
        en: 'I found in Runware the best, cheapest and easiest to use AI to generate images.',
        es: 'Encontré en RUnware el mejor, más barata y fácil de usar IA para generar imágenes.',
      }
    },
    {
      tech: 'V0',
      image: '/tech/6-ia/v0.png',
      years: [],
      tier: 't3',
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
      tech: 'IBM Watson',
      image: '/tech/6-ia/ibm-watson.png',
      years: ['2019'],
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
