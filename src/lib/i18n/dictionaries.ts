import type { Locale } from './config';
import { zh } from './locales/zh';
import { en } from './locales/en';
import { ja } from './locales/ja';
import { ko } from './locales/ko';

export interface Dictionary {
  meta: { title: string; tagline: string; description: string };
  nav: { home: string; music: string; shows: string; gallery: string; about: string };
  home: {
    eyebrow: string;
    name: string;
    subtitle: string;
    leadLine: string;
    leadSecondary: string;
    featuredEyebrow: string;
    featuredCta: string;
    sectionsEyebrow: string;
    quote: string;
  };
  music: {
    eyebrow: string;
    title: string;
    lede: string;
    listenOn: string;
    related: string;
    released: string;
    duration: string;
  };
  shows: {
    eyebrow: string;
    title: string;
    lede: string;
    upcoming: string;
    past: string;
    statusOpen: string;
    statusSoldOut: string;
    statusArchive: string;
    buyTicket: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    lede: string;
    placeholder: string;
  };
  about: {
    eyebrow: string;
    title: string;
    bioHeading: string;
    timelineHeading: string;
    contactHeading: string;
    contactLead: string;
    sendEmail: string;
    factsHeading: string;
  };
  footer: { rights: string; moonlight: string };
}

const dictionaries: Record<Locale, Dictionary> = { zh, en, ja, ko };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
