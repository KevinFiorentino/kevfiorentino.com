import type { TechBox } from '../interfaces/tech-box.interface';

export const backend: TechBox = {
  name: 'Backend',
  headerImage: 'backend.svg',
  techs: [
    {
      tech: 'NodeJS',
      image: '/tech/2-backend/nodejs.webp',
      years: [2020, 2021],
      tier: 't1',
    },
    {
      tech: 'PHP',
      image: '/tech/2-backend/php.webp',
      years: [2018, 2019],
      tier: 't2',
    },
    {
      tech: 'Rust',
      image: '/tech/2-backend/rust.webp',
      years: [2020, 2021],
      tier: 't3',
    },
  ]
};
