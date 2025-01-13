import type { Tech } from './tech.interface';

export type TierLevels = 't1' | 't2' | 't3' | 't4';

export interface TierResponse {
  tiers: {
    tier: TierLevels,
    techs: Tech[],
  }[];
}
