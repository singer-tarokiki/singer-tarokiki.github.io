'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { SparkleIcon } from '@/components/SparkleIcon';
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
      className="sticky top-0 z-50 w-full"
      suppressHydrationWarning
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 pt-4">
        <div className="glass-card flex h-16 items-center justify-between gap-6 rounded-full px-4 md:h-[68px] md:px-7">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-2.5"
            aria-label="Tarokiki — Home"
          >
            <SparkleIcon size={20} className="text-[var(--color-rose)] twinkle" />
            <span className="font-display text-xl md:text-[22px] font-semibold tracking-wide text-dream">
              Tarokiki
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="font-body text-[13px] font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors link-soft"
              >
                {it.label}
              </Link>
            ))}
          </nav>

          {/* Right: language switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher current={locale} />
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher current={locale} />
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full bg-white/60 p-2 text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] hover:bg-white transition-colors"
              aria-label="Toggle menu"
              suppressHydrationWarning
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <nav className="md:hidden mt-2 glass-card rounded-3xl p-3">
            <div className="flex flex-col gap-1">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="font-body rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] hover:bg-[var(--color-blush)]/60 transition-colors"
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
