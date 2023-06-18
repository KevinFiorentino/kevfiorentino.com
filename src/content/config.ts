import { z, defineCollection } from 'astro:content';


/* ******************************
         ASTRO CONFIGS
****************************** */

const mainSchema = z.object({
  title: z.string(),
  desc: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string()
  }),
  date: z.string(),
  tags: z.array(z.string()),
});

const ipfsCollection = defineCollection({
  schema: mainSchema
});

const javascriptCollection = defineCollection({
  schema: mainSchema
});

const solanaCollection = defineCollection({
  schema: mainSchema
});

export const collections = {
  'ipfs': ipfsCollection,
  'javascript': javascriptCollection,
  'solana': solanaCollection,
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
    name: 'ipfs',
    logo: '',
    background: ''
  },
  {
    name: 'javascript',
    logo: '',
    background: ''
  },
  {
    name: 'solana',
    logo: '',
    background: ''
  },
];
