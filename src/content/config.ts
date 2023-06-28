import { defineCollection, reference, z } from 'astro:content';


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
  pubDate: z.string(),
  tags: z.array(z.string()),
  relatedPosts: z.array(relatedSchema).optional(),
});

const blockchainColl = defineCollection({
  schema: mainSchema
});

const decentralizationColl = defineCollection({
  schema: mainSchema
});

const javascriptColl = defineCollection({
  schema: mainSchema
});

export const collections = {
  'blockchain': blockchainColl,
  'decentralization': decentralizationColl,
  'javascript': javascriptColl,
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
  {
    name: 'javascript',
    logo: '',
    background: ''
  },
];

/* export const tagsList: string[] = [
  'decentralization',
  'phamtom-wallet',
  ''
] */
