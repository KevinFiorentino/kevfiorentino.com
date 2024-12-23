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
  image: z.object({
    url: z.string(),
    alt: z.string()
  }),
  pubDate: z.string().transform((str) => new Date(str)),
  relatedPosts: z.array(relatedSchema).optional().nullable(),
});

const blockchainColl = defineCollection({ schema: mainSchema });
const decentralizationColl = defineCollection({ schema: mainSchema });

export const collections = {
  'blockchain': blockchainColl,
  'decentralization': decentralizationColl,
};


/* ******************************
         CUSTOM CONFIGS
****************************** */

export interface CollectionMetadata {
  name: string;
  logo: string;
  background: string;
}

export const collectionMetadata: CollectionMetadata[] = [
  {
    name: 'blockchain',
    logo: '',
    background: ''
  },
  {
    name: 'decentralization',
    logo: '',
    background: ''
  },
];
