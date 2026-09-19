'use client';

import Link from 'next/link';
import { useState, type MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { SparkleIcon } from '@/components/SparkleIcon';
import { PAGE_REVEAL_EVENT } from '@/components/PageReveal';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: Props) {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [isMenuFloating, setIsMenuFloating] = useState(false);
  const pathname = usePathname() ?? '';
  const normalizedPath = pathname.replace(/\/$/, '');
  const isMenuOpen = openPath === pathname;

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // 每次展开时确定定位，收起动画结束前不切换，避免正文跳动。
      setIsMenuFloating(window.scrollY > 0);
    }
    setOpenPath(isMenuOpen ? null : pathname);
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    setOpenPath(null);
    // 切页由新页面自然播放；只有重复点击当前页才主动重播。
    if (normalizedPath === href) {
      window.dispatchEvent(new Event(PAGE_REVEAL_EVENT));
    }
  };

  const items = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/music`, label: dict.nav.music },
    { href: `/${locale}/shows`, label: dict.nav.shows },
    { href: `/${locale}/gallery`, label: dict.nav.gallery },
    { href: `/${locale}/about`, label: dict.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 w-full" suppressHydrationWarning>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)] focus:shadow-lg"
      >
        {dict.nav.skipToContent}
      </a>
      <div className="relative mx-auto max-w-[1200px] px-4 pt-4 md:px-8">
        <div className="glass-card flex h-16 items-center justify-between gap-6 rounded-full px-4 md:h-[68px] md:px-7">
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-2.5"
            aria-label={`Tarokiki — ${dict.nav.home}`}
          >
            <SparkleIcon size={20} className="text-[var(--color-rose)] twinkle" />
            <span className="font-display text-xl font-semibold tracking-wide text-dream md:text-[22px]">
              Tarokiki
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex" aria-label={dict.nav.primaryNavigation}>
            {items.map((it) => {
              const isActive = normalizedPath === it.href ||
                (it.href !== `/${locale}` && normalizedPath.startsWith(`${it.href}/`));

              return (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={(event) => handleNavClick(event, it.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    'nav-link font-body text-[13px] font-medium transition-colors link-soft ' +
                    (isActive
                      ? 'nav-link-active text-[var(--color-ink)]'
                      : 'text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]')
                  }
                >
                  <span className="relative z-10">{it.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher current={locale} ariaLabel={dict.nav.language} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher current={locale} ariaLabel={dict.nav.language} />
            <button
              type="button"
              onClick={toggleMenu}
              className="rounded-full bg-white/60 p-2 text-[var(--color-ink-soft)] transition-colors hover:bg-white hover:text-[var(--color-ink)]"
              aria-label={isMenuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              suppressHydrationWarning
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div
          className="mobile-navigation"
          data-open={isMenuOpen}
          data-floating={isMenuFloating}
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <div className="mobile-navigation__clip">
          <nav id="mobile-navigation" className="glass-card mt-2 rounded-3xl p-3" aria-label={dict.nav.mobileNavigation}>
            <div className="flex flex-col gap-1">
              {items.map((it) => {
                const isActive = normalizedPath === it.href ||
                  (it.href !== `/${locale}` && normalizedPath.startsWith(`${it.href}/`));

                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={(event) => handleNavClick(event, it.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={
                      'nav-link nav-link-mobile font-body rounded-2xl px-4 py-3 text-sm font-medium transition-colors ' +
                      (isActive
                        ? 'nav-link-active text-[var(--color-ink)]'
                        : 'text-[var(--color-ink-soft)] hover:bg-[var(--color-blush)]/60 hover:text-[var(--color-ink)]')
                    }
                  >
                    <span className="relative z-10">{it.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
