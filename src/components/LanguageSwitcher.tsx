'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { CSSProperties } from 'react';
import { locales, localeLabels, type Locale, isLocale } from '@/lib/i18n/config';

interface Props {
  current: Locale;
  ariaLabel?: string;
}

export function LanguageSwitcher({ current, ariaLabel = 'Language' }: Props) {
  const pathname = usePathname() ?? `/${current}`;
  const segments = pathname.split('/').filter(Boolean);
  const rest = segments.length > 0 && isLocale(segments[0])
    ? segments.slice(1).join('/')
    : segments.join('/');
  const activeIndex = locales.indexOf(current);

  return (
    <div
      className="language-switcher"
      style={{ '--language-index': activeIndex } as CSSProperties}
      role="navigation"
      aria-label={ariaLabel}
    >
      <span className="language-switcher__slider" aria-hidden="true" />
      {locales.map((loc) => {
        const href = '/' + [loc, rest].filter(Boolean).join('/');
        const isActive = loc === current;
        return (
          <Link
            key={loc}
            href={href}
            hrefLang={loc}
            aria-current={isActive ? 'page' : undefined}
            className={'language-switcher__option ' + (isActive ? 'language-switcher__option--active' : '')}
          >
            <span>{localeLabels[loc].short}</span>
          </Link>
        );
      })}
    </div>
  );
}
