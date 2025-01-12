import type TechBox from '../interfaces/tech-box.interface';

export const backend: TechBox = {
  name: 'Backend',
  headerImage: 'backend.svg',
  techs: [
    {
      tech: 'NodeJS',
      image: '/tech/2-backend/nodejs.webp',
      years: [2020, 2021],
      tier: 1
    },
    {
      tech: 'Rust',
      image: '/tech/2-backend/rust.webp',
      years: [2020, 2021],
      tier: 2
    }
  ]
};
