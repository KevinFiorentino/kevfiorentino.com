import type { Tech } from './tech.interface';

export interface TechBox {
  name: string,
  headerImage: string;
  techs: Tech[],
}
