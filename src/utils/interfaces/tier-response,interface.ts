import type Tech from './tech.interface';

export default interface TierResponse {
  tiers: {
    tier:  't1' | 't2' | 't3' | 't4',
    techs: Tech[],
  }[];
}
