'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);

  const items = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/music`, label: dict.nav.music },
    { href: `/${locale}/shows`, label: dict.nav.shows },
    { href: `/${locale}/gallery`, label: dict.nav.gallery },
    { href: `/${locale}/about`, label: dict.nav.about },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--color-line)] bg-[var(--color-ink)]/85 backdrop-blur-md"
      suppressHydrationWarning
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          {/* Masthead */}
          <Link
            href={`/${locale}`}
            className="group flex items-baseline gap-3"
            aria-label="Tarokiki — Home"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-violet)] breathe" />
            <span className="font-display text-xl md:text-2xl font-medium tracking-[0.32em] text-[var(--color-text)] uppercase">
              Tarokiki
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="font-body text-[12px] tracking-[0.28em] uppercase text-[var(--color-text-soft)] hover:text-[var(--color-text)] transition-colors"
              >
                {it.label}
              </Link>
            ))}
          </nav>

          {/* Right: language switcher (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <span className="h-3 w-px bg-[var(--color-line)]" />
            <LanguageSwitcher current={locale} />
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher current={locale} />
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full border border-[var(--color-line)] p-2 text-[var(--color-text-soft)] hover:text-[var(--color-text)] transition-colors"
              aria-label="Toggle menu"
              suppressHydrationWarning
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-[var(--color-line)] bg-[var(--color-ink)]/95 backdrop-blur-md">
          <div className="mx-auto max-w-[1280px] px-6 py-4 flex flex-col gap-1">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="font-body py-3 text-sm tracking-[0.28em] uppercase text-[var(--color-text-soft)] hover:text-[var(--color-text)] transition-colors border-b border-[var(--color-line)]/50 last:border-b-0"
              >
                {it.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
