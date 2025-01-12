import type Tech from './tech.interface';

export default interface TechBox {
  name: string,
  headerImage: string;
  techs: Tech[],
}
