import type TechBox from '../interfaces/tech-box.interface';

export const blockchain: TechBox = {
  name: 'Blockchain',
  techs: [
    {
      tech: 'Solana',
      image: '/tech/7-solana/solana.webp',
      years: [2020, 2021],
      tier: 1
    },
    {
      tech: 'Ethereum',
      image: '/tech/7-solana/ethereum.webp',
      years: [2020, 2021],
      tier: 2
    }
  ]
};
