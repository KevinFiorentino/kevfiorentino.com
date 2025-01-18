import { defineCollection, z } from 'astro:content';

/* ******************************
         ASTRO CONFIGS
****************************** */

const mainSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  pubDate: z.string().transform((str: string | number | Date) => new Date(str)),
  englishMetadata: z.object({
    title: z.string(),
    description: z.string()
  }).optional(),
  prev: z.string().optional(),
  next: z.string().optional(),
});


export const collections = {
  'bitcoin': defineCollection({ schema: mainSchema }),
  'blockchain': defineCollection({ schema: mainSchema }),
  'ethereum': defineCollection({ schema: mainSchema }),
  'openzeppelin': defineCollection({ schema: mainSchema }),
  'solana': defineCollection({ schema: mainSchema }),
  'solidity': defineCollection({ schema: mainSchema }),
};


/* ******************************
         CUSTOM CONFIGS
****************************** */

export type CollectionNames = 'bitcoin' | 'blockchain' | 'ethereum' | 'openzeppelin' | 'solana' | 'solidity';

export interface CollectionMetadata {
  name: CollectionNames;
  image: string;
}

export const collectionMetadata: CollectionMetadata[] = [
  {
    name: 'bitcoin',
    image: '/tech/bitcoin.png'
  },
  {
    name: 'blockchain',
    image: '/tech/blockchain.png'
  },
  {
    name: 'ethereum',
    image: '/tech/ethereum.png'
  },
  {
    name: 'openzeppelin',
    image: '/tech/openzeppelin.png'
  },
  {
    name: 'solana',
    image: '/tech/7-blockchain/solana.png'
  },
  {
    name: 'solidity',
    image: '/tech/solidity.png'
  },
];

export function collectionNameMapping(name: string): string {
  switch (name) {
    case 'bitcoin' : { return 'Bitcoin'; }
    case 'blockchain' : { return 'Blockchain'; }
    case 'ethereum' : { return 'Ethereum'; }
    case 'openzeppelin' : { return 'OpenZeppelin'; }
    case 'solana' : { return 'Solana'; }
    case 'solidity' : { return 'Solidity'; }
    default : { return ''; }
  }
}
