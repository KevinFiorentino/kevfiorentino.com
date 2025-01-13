import type { TierLevels } from './tier.interface';

export interface Tech {
  tech: string,
  image: string,
  years: (number | string)[],
  tier: TierLevels,
}
