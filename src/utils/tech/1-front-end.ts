import type { TechBox } from '../interfaces/tech-box.interface';

export const frontend: TechBox = {
  name: 'Front-end',
  headerImage: 'front-end.svg',
  techs: [
    {
      tech: 'Javascript',
      image: '/tech/1-front-end/javascript.webp',
      years: ['uni', 2018, 2019, 2020],
      tier: 't1',
      description: {
        en: 'EN',
        es: 'ES',
      },
      comment: {
        en: 'EN',
        es: 'ES',
      }
    },
    {
      tech: 'TypeScript',
      image: '/tech/1-front-end/typescript.webp',
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
      tech: 'Angular',
      image: '/tech/1-front-end/angular.webp',
      years: [2018, 2020, 2021],
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
      tech: 'React',
      image: '/tech/1-front-end/react.webp',
      years: [2019, 2020, 2021],
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
