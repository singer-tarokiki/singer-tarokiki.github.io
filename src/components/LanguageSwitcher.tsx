'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeLabels, type Locale, isLocale } from '@/lib/i18n/config';

interface Props {
  current: Locale;
}

export function LanguageSwitcher({ current }: Props) {
  const pathname = usePathname() ?? `/${current}`;
  const segments = pathname.split('/').filter(Boolean);
  // Strip the existing locale segment (if any) to get the inner path
  const rest = segments.length > 0 && isLocale(segments[0])
    ? segments.slice(1).join('/')
    : segments.join('/');

  return (
    <div className="flex items-baseline gap-px" role="navigation" aria-label="Language">
      {locales.map((loc, i) => {
        const href = '/' + [loc, rest].filter(Boolean).join('/');
        const isActive = loc === current;
        return (
          <span key={loc} className="flex items-baseline gap-px">
            <Link
              href={href}
              hrefLang={loc}
              className={
                'px-2 py-0.5 text-[11px] tracking-[0.22em] uppercase transition-colors ' +
                (isActive
                  ? 'text-[var(--color-text)]'
                  : 'text-[var(--color-text-mute)] hover:text-[var(--color-text-soft)]')
              }
              aria-current={isActive ? 'page' : undefined}
            >
              {localeLabels[loc].short}
            </Link>
            {i < locales.length - 1 && (
              <span className="text-[var(--color-text-mute)]/40 text-[10px]">·</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
