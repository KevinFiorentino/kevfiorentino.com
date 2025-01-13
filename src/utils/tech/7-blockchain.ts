import type { TechBox } from '../interfaces/tech-box.interface';

export const blockchain: TechBox = {
  name: 'Blockchain',
  headerImage: 'blockchain.svg',
  techs: [
    {
      tech: 'Solana',
      image: '/tech/7-blockchain/solana.webp',
      years: [2022, 2023],
      tier: 't1',
    },
    {
      tech: 'Ethereum',
      image: '/tech/7-blockchain/ethereum.webp',
      years: [2022, 2023],
      tier: 't2',
    },
    {
      tech: 'Solana',
      image: '/tech/7-blockchain/ipfs.webp',
      years: [2022, 2023],
      tier: 't2',
    },
  ]
};
