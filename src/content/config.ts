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

export interface CollectionMetadata {
  name: string;
}

export const collectionMetadata: CollectionMetadata[] = [
  {
    name: 'bitcoin',
  },
  {
    name: 'blockchain',
  },
  {
    name: 'ethereum',
  },
  {
    name: 'openzeppelin',
  },
  {
    name: 'solana',
  },
  {
    name: 'solidity',
  },
];
