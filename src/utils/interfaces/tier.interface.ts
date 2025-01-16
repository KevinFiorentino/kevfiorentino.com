import type { Tech } from './tech.interface';

export type TierLevels = 't1' | 't2' | 't3' | 't4' | 't5';

export interface TierResponse {
  tiers: {
    tier: TierLevels,
    techs: Tech[],
  }[];
}
