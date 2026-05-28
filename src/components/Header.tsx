'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { name: '主页', en: 'Home', href: '/' },
  { name: '音乐', en: 'Music', href: '/music' },
  { name: '演出', en: 'Shows', href: '/shows' },
  { name: '画廊', en: 'Gallery', href: '/gallery' },
  { name: '关于', en: 'About', href: '/about' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      suppressHydrationWarning
      className="sticky top-0 z-50 w-full border-b border-silver/10 bg-ink/70 backdrop-blur-md transition-colors duration-300"
    >
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-heading text-xl md:text-2xl font-bold tracking-[0.2em] hover:scale-[1.02] transition-transform"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-amethyst-light/40 text-rose-light shadow-[inset_0_0_15px_rgba(157,116,217,0.35)] group-hover:shadow-[inset_0_0_25px_rgba(227,106,138,0.5)] transition-all">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" />
            </svg>
          </span>
          <span className="text-cantarella">KIKI</span>
          <span className="hidden sm:inline text-xs font-light tracking-[0.3em] text-silver/70">·TARO·</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm lg:text-base font-medium tracking-wider text-silver/80 hover:text-moon transition-colors font-heading uppercase"
            >
              {item.en}
              <span className="absolute -bottom-1 left-0 right-0 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-rose-light to-transparent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="pl-4 border-l border-silver/15">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full border border-silver/20 p-2 text-silver hover:border-amethyst-light/50 hover:text-moon transition-colors"
            aria-label="Toggle menu"
            suppressHydrationWarning
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-silver/10 bg-ink/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between px-4 py-3 text-base font-medium text-silver/90 hover:text-rose-light hover:bg-amethyst/10 rounded-lg transition-colors font-heading tracking-widest uppercase"
              >
                <span>{item.en}</span>
                <span className="text-xs text-silver/50">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
