// https://docs.astro.build/es/recipes/i18n/

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter',
  },
  es: {
    'nav.home': 'Acceuil',
    'nav.about': 'À propos',
  },
} as const;
