import rss from '@astrojs/rss';
import { collectionMetadata } from '@content/config';
import { getCollection } from 'astro:content';

export async function get(context) {

  const posts = [];

  for await (let c of collectionMetadata) {
    const coll = await getCollection(c.name);
    coll.map((post) => {
      posts.push({
        ...post.data,
        link: `/${post.slug.split('/')[0]}/blog/${c.name}/${post.slug}`,
      });
    });
  }

  return rss({
    title: 'Website | Kevin Fiorentino',
    description: 'Kevin Fiorentino\'s personal and professional website',
    site: context.site,
    items: posts
  });
}
