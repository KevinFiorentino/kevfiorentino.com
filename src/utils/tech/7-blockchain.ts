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
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Helium',
      image: '/tech/7-blockchain/helium.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Infura',
      image: '/tech/7-blockchain/infura.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'IPFS',
      image: '/tech/7-blockchain/ipfs.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Lit Protocol',
      image: '/tech/7-blockchain/lit-protocol.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Phantom',
      image: '/tech/7-blockchain/phantom.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Metamask',
      image: '/tech/7-blockchain/metamask.png',
      years: ['2022', '2023'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Hardhat',
      image: '/tech/7-blockchain/hardhat.png',
      years: ['2023'],
      tier: 't4',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
  ]
};
