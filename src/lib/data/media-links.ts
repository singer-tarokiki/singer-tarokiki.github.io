import type { Locale } from '@/lib/i18n/config';

const platformLabels = {
  bilibili: 'Bilibili',
  qqMusic: 'QQ 音乐',
  neteaseMusic: '网易云音乐',
  spotify: 'Spotify',
  appleMusic: 'Apple Music',
  youtube: 'YouTube',
} as const;

export type MediaLinks = Partial<Record<keyof typeof platformLabels, string>>;

const chinesePlatforms = ['bilibili', 'qqMusic', 'neteaseMusic'] as const;
const internationalPlatforms = ['spotify', 'appleMusic', 'youtube'] as const;

export function getMediaLinks(links: MediaLinks | undefined, locale: Locale) {
  const platforms = locale === 'zh' ? chinesePlatforms : internationalPlatforms;

  return platforms.flatMap((platform) => {
    const href = links?.[platform];
    return href ? [{ platform, label: platformLabels[platform], href }] : [];
  });
}
