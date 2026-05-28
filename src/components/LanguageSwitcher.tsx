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
  const rest = segments.length > 0 && isLocale(segments[0])
    ? segments.slice(1).join('/')
    : segments.join('/');

  return (
    <div
      className="inline-flex items-center rounded-full bg-white/60 px-1 py-0.5 shadow-[0_2px_8px_-4px_rgba(184,154,196,0.25)]"
      role="navigation"
      aria-label="Language"
    >
      {locales.map((loc) => {
        const href = '/' + [loc, rest].filter(Boolean).join('/');
        const isActive = loc === current;
        return (
          <Link
            key={loc}
            href={href}
            hrefLang={loc}
            aria-current={isActive ? 'page' : undefined}
            className={
              'rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wider transition-all ' +
              (isActive
                ? 'bg-gradient-to-r from-[var(--color-rose)] to-[var(--color-violet)] text-white shadow-sm'
                : 'text-[var(--color-ink-mute)] hover:text-[var(--color-ink-soft)]')
            }
          >
            {localeLabels[loc].short}
          </Link>
        );
      })}
    </div>
  );
}
