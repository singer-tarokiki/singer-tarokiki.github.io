export const locales = ['zh', 'en', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export const localeLabels: Record<Locale, { native: string; short: string }> = {
  zh: { native: '中文', short: '中' },
  en: { native: 'English', short: 'EN' },
  ja: { native: '日本語', short: 'JA' },
  ko: { native: '한국어', short: 'KO' },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
