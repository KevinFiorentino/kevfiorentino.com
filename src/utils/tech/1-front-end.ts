import type { TechBox } from '../interfaces/tech-box.interface';

export const frontend: TechBox = {
  name: 'Front-end',
  headerImage: 'front-end.svg',
  techs: [
    {
      tech: 'Javascript',
      image: '/tech/1-front-end/javascript.png',
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
      image: '/tech/1-front-end/typescript.png',
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
      image: '/tech/1-front-end/angular.png',
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
      image: '/tech/1-front-end/react.png',
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
