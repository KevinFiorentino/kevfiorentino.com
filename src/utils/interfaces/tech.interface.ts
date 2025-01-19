import type { TierLevels } from './tier.interface';

export interface Tech {
  tech: string,
  image: string,
  years: string[],
  tier: TierLevels,
  description: {
    en: string,
    es: string,
  },
  comment: {
    en: string,
    es: string,
  },
}
