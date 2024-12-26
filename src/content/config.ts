import { defineCollection, z } from 'astro:content';

/* ******************************
         ASTRO CONFIGS
****************************** */

const relatedSchema = z.object({
  collection: z.string(),
  slug: z.string(),
});

const mainSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.string().transform((str) => new Date(str)),
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
