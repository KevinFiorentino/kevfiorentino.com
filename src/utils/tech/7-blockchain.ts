import type { TechBox } from '../interfaces/tech-box.interface';

export const blockchain: TechBox = {
  name: 'Blockchain',
  headerImage: 'blockchain.svg',
  techs: [
    {
      tech: 'Solana',
      image: '/tech/7-blockchain/solana.png',
      years: ['2022', '2023'],
      tier: 't1',
      description: {
        en: 'A high-performance blockchain for decentralized applications, offering fast transactions and low fees.',
        es: 'Una blockchain de alto rendimiento para aplicaciones descentralizadas, que ofrece transacciones rápidas y tarifas bajas.',
      },
      comment: {
        en: 'My favorite blockchain. You’ll find several articles in this website about how Solana works. It is a magnificent piece of software engineering.',
        es: 'Mi blockchain favorita. Encontrarás varios artículos en este sitio web sobre cómo funciona. Es una obra de ingeniería de software magnífica.',
      }
    },
    {
      tech: 'Anchor',
      image: '/tech/7-blockchain/anchor.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: 'A Rust framework for building secure, efficient smart contracts on the Solana blockchain.',
        es: 'Un framework de Rust para crear contratos inteligentes seguros y eficientes en la blockchain de Solana.',
      },
      comment: {
        en: 'If you want to develop and deploy smart contracts on Solana, you’ll need Anchor.',
        es: 'Si quieres desarrollar y desplegar contratos inteligentes en Solana, necesitarás Anchor.',
      }
    },
    {
      tech: 'Ethereum',
      image: '/tech/7-blockchain/ethereum.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: 'A decentralized blockchain platform enabling smart contracts and decentralized applications (dApps).',
        es: 'Una plataforma blockchain descentralizada que permite contratos inteligentes y aplicaciones descentralizadas (dApps).',
      },
      comment: {
        en: 'In my time learning blockchain, I explored Ethereum ecosystem, the EVM, Solidity, NFT, second layers, and so on.',
        es: 'En mi tiempo aprendiendo blockchain, exploré el ecosistema de Ethereum, la EVM, Solidity, NFT, segundas capas, y demás.',
      }
    },
    {
      tech: 'Solidity',
      image: '/tech/7-blockchain/solidity.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: 'A programming language for creating smart contracts on Ethereum and other EVM-compatible blockchains.',
        es: 'Un lenguaje de programación para crear contratos inteligentes en Ethereum y otras cadenas de bloques compatibles con EVM.',
      },
      comment: {
        en: 'What I liked the most about learning Solidity and creating smart contracts was the security part. You will find some articles about it here on my blog.',
        es: 'Lo que más me gustó de aprender Solidity y crear contratos inteligentes fue la parte de seguridad. Encontrarás algunos artículos al respecto aquí en mi blog.',
      }
    },
    {
      tech: 'Remix',
      image: '/tech/7-blockchain/remix.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: 'A web-based IDE for writing, testing, and deploying Solidity smart contracts on Ethereum.',
        es: 'Un IDE basado en web para escribir, probar e implementar contratos inteligentes de Solidity en Ethereum.',
      },
      comment: {
        en: 'If you want to learn Solidity, you’ll use Remix. It is perfect to test and play with smart contracts.',
        es: 'Si quieres aprender Solidity, utilizarás Remix. Es perfecto para testear y jugar con contratos inteligentes.',
      }
    },
    {
      tech: 'Hardhat',
      image: '/tech/7-blockchain/hardhat.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A development environment for Ethereum, simplifying smart contract testing, deployment, and debugging.',
        es: 'Un entorno de desarrollo para Ethereum que simplifica las pruebas, la implementación y la depuración de contratos inteligentes.',
      },
      comment: {
        en: 'I mainly used Hardhat in my research on Ethereum and Solidity.',
        es: 'Usé principalmente Hardhat en mis investigaciones sobre Ethereum y Solidity.',
      }
    },
    {
      tech: 'Truffe Suite',
      image: '/tech/7-blockchain/truffe.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A development framework for Ethereum, offering tools for compiling, testing, and deploying smart contracts.',
        es: 'Un marco de desarrollo para Ethereum que ofrece herramientas para compilar, probar e implementar contratos inteligentes.',
      },
      comment: {
        en: 'I explored it to develop smart contracts with Solidity, but I would rather use Hardhat.',
        es: 'Lo exploré en el desarrollo de contratos inteligentes con Solidity, pero prefiero usar Hardhat.',
      }
    },
    {
      tech: 'OpenZeppelin',
      image: '/tech/7-blockchain/openzeppelin.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A secure smart contract library for Ethereum, providing reusable code for building decentralized applications.',
        es: 'Una biblioteca segura de contratos inteligentes para Ethereum, que proporciona código reutilizable para crear aplicaciones descentralizadas.',
      },
      comment: {
        en: 'If you work with Solidity, you’ll use OpenZeppelin. Probably one of my favorite companies in the world. Does it have anything to do with the fact that I like Led Zeppelin?',
        es: 'Si trabajas con Solidity, utilizarás OpenZeppelin. Probablemente, una de mi empresas favoritas en el mundo. ¿Tendrá algo que ver con que me gusta Led Zeppelin?',
      }
    },
    {
      tech: 'Arbitrum',
      image: '/tech/7-blockchain/arbitrum.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A layer-2 for Ethereum that makes transactions faster and cheaper, perfect for scalable decentralized applications.',
        es: 'Una capa 2 para Ethereum que hace que las transacciones sean más rápidas y económicas, perfecta para aplicaciones descentralizadas escalables.',
      },
      comment: {
        en: 'Arbitrum, Optimism, and Polygon. All of them are good options as second layers of Ethereum. I explored them a few years ago, but didn’t delve too deeply.',
        es: 'Arbitrum, Optimism y Polygon. Todas ellas son buenas opciones como segundas capas de Ethereum. Los exploré hace unos años, pero no profundicé demasiado.',
      }
    },
    {
      tech: 'Optimism',
      image: '/tech/7-blockchain/optimism.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A layer-2 solution for Ethereum focused on boosting transaction speed and lowering costs for everyday blockchain use.',
        es: 'Una solución de capa 2 para Ethereum centrada en aumentar la velocidad de las transacciones y reducir los costos del uso diario de blockchain.',
      },
      comment: {
        en: 'Arbitrum, Optimism, and Polygon. All of them are good options as second layers of Ethereum. I explored them a few years ago, but didn’t delve too deeply.',
        es: 'Arbitrum, Optimism y Polygon. Todas ellas son buenas opciones como segundas capas de Ethereum. Los exploré hace unos años, pero no profundicé demasiado.',
      }
    },
    {
      tech: 'Polygon',
      image: '/tech/7-blockchain/polygon.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A layer-2 network for Ethereum that connects users to a broader ecosystem with smooth and affordable transactions.',
        es: 'Una red de capa 2 para Ethereum que conecta a los usuarios con un ecosistema más amplio con transacciones fluidas y asequibles.',
      },
      comment: {
        en: 'Arbitrum, Optimism, and Polygon. All of them are good options as second layers of Ethereum. I explored them a few years ago, but didn’t delve too deeply.',
        es: 'Arbitrum, Optimism y Polygon. Todas ellas son buenas opciones como segundas capas de Ethereum. Los exploré hace unos años, pero no profundicé demasiado.',
      }
    },
    {
      tech: 'Bitcoin',
      image: '/tech/7-blockchain/bitcoin.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'The first and most well-known decentralized blockchain and cryptocurrency, enabling peer-to-peer transactions without intermediaries.',
        es: 'La primera y más conocida blockchain y criptomoneda descentralizada, que permite transacciones entre pares sin intermediarios.',
      },
      comment: {
        en: 'I mainly conceptually studied the Bitcoin blockchain and how it works. You’ll find several articles about it here in my blog.',
        es: 'Principalmente estudié conceptualmente la blockchian de Bitcoin y su funcionamiento. Encontrarás varios artículos relacionados en mi blog.',
      }
    },
    {
      tech: 'Helium',
      image: '/tech/7-blockchain/helium.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A decentralized network for IoT devices, powered by blockchain and incentivized by the Helium token (HNT).',
        es: 'Una red descentralizada para dispositivos IoT, impulsada por blockchain e incentivada por el token Helium (HNT).',
      },
      comment: {
        en: 'I’ve worked with the Helium blockchain alongside with Solana in an international project that did not prosper.',
        es: 'He trabajado con la blockchain de Helium junto con Solana en un proyecto internacional que no prosperó.',
      }
    },
    {
      tech: 'Infura',
      image: '/tech/7-blockchain/infura.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A service providing scalable APIs for connecting decentralized applications to Ethereum and IPFS networks.',
        es: 'Un servicio que proporciona API escalables para conectar aplicaciones descentralizadas a redes Ethereum e IPFS.',
      },
      comment: {
        en: 'I mainly explored Infura’s IPFS service. I think it is a good web3 service to consider for a project..',
        es: 'Principalmente exploré los servicios de IPFS de Infura. Pienso que es un buen servicio web3 a considerar para un proyecto.',
      }
    },
    {
      tech: 'IPFS',
      image: '/tech/7-blockchain/ipfs.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: 'A peer-to-peer file storage protocol for decentralized, distributed, and permanent data sharing.',
        es: 'Un protocolo de almacenamiento de archivos de igual a igual para el intercambio de datos permanente, distribuido y descentralizado.',
      },
      comment: {
        en: 'I find IPFS to be a great tool to use in conjunction with any blockchain project, especially for storing NFT images.',
        es: 'IPFS me parece una gran herramienta para usar junto con cualquier proyecto blockchain, especialmente para guardar imágenes de NFT.',
      }
    },
    {
      tech: 'Arweave',
      image: '/tech/7-blockchain/arweave.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A decentralized storage network for permanent data storage, powered by blockchain technology.',
        es: 'Una red de almacenamiento descentralizada para el almacenamiento permanente de datos, impulsada por tecnología blockchain.',
      },
      comment: {
        en: 'It is a great option to descentralize files, even better than IPFS.',
        es: 'Es una gran opción para descentralizar archivos, incluso mejor que IPFS.',
      }
    },
    {
      tech: 'Lit Protocol',
      image: '/tech/7-blockchain/lit-protocol.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: 'A decentralized access control network enabling permissioned interactions on web3 and blockchain applications.',
        es: 'Una red de control de acceso descentralizada que permite interacciones autorizadas en aplicaciones web3 y blockchain.',
      },
      comment: {
        en: 'I’ve implemented their services alongside Solana blockchain and Javascript o build a 2FA descentralized app. Sadly, I didn’t continue with the project due to lack of time.',
        es: 'Implementé sus servicios junto con Solana blockchain y Javascript para crear una aplicación descentralizada 2FA. Lamentablemente no continué con el proyecto por falta de tiempo.',
      }
    },
    {
      tech: 'Phantom',
      image: '/tech/7-blockchain/phantom.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: 'A Solana-focused crypto wallet for storing, staking, and managing digital assets securely.',
        es: 'Una wallet crypto centrada en Solana para almacenar, hacer staking y administrar activos digitales de forma segura.',
      },
      comment: {
        en: 'Alongside with Metamask, two excellent options to use as a personal wallet or just for development purposes.',
        es: 'Junto a Metamask, dos excelentes opciones para usar como wallet personal o solo con propósitos de desarrollo.',
      }
    },
    {
      tech: 'Metamask',
      image: '/tech/7-blockchain/metamask.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: 'A popular crypto wallet for Ethereum and other blockchains, enabling seamless dApp interactions.',
        es: 'Una billetera criptográfica popular para Ethereum y otras cadenas de bloques, que permite interacciones fluidas entre dApps.',
      },
      comment: {
        en: 'Alongside with Phantom, two excellent options to use as a personal wallet or just for development purposes.',
        es: 'Junto a Phantom, dos excelentes opciones para usar como wallet personal o solo con propósitos de desarrollo.',
      }
    },
  ]
};
