import { defineCollection, z } from 'astro:content';

/* ******************************
         ASTRO CONFIGS
****************************** */

const mainSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.string().transform((str: string | number | Date) => new Date(str)),
  englishMetadata: z.object({
    title: z.string(),
    description: z.string()
  }).optional(),
});

const blockchainColl = defineCollection({ schema: mainSchema });

export const collections = {
  'blockchain': blockchainColl,
};


/* ******************************
         CUSTOM CONFIGS
****************************** */

export interface CollectionMetadata {
  name: string;
}

export const collectionMetadata: CollectionMetadata[] = [
  {
    name: 'blockchain',
  },
];
