import type { TechBox } from '../interfaces/tech-box.interface';

export const ddbb: TechBox = {
  name: 'DDBB',
  headerImage: 'ddbb.svg',
  techs: [
    {
      tech: 'MongoDB',
      image: '/tech/4-ddbb/mongodb.webp',
      years: [2020, 2021, 2022],
      tier: 't1',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'MySQL',
      image: '/tech/4-ddbb/mysql.webp',
      years: [2020, 2022],
      tier: 't2',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
    {
      tech: 'Elasticsearch',
      image: '/tech/4-ddbb/elasticsearch.webp',
      years: [2020, 2022],
      tier: 't2',
      description: {
        en: '',
        es: '',
      },
      comment: {
        en: '',
        es: '',
      }
    },
  ]
};
