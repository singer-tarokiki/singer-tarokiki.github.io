import Link from 'next/link';
import { profile } from '@/lib/data/profile';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

const social: { label: string; href: string }[] = [
  { label: 'Bilibili', href: profile.links.bilibili },
  { label: 'Instagram', href: profile.links.instagram },
  { label: 'Spotify', href: profile.links.spotify },
  { label: 'Apple Music', href: profile.links.appleMusic },
  { label: 'YouTube', href: profile.links.youtube },
  { label: 'VGMdb', href: profile.links.vgmdb },
];

export function Footer({ locale, dict }: Props) {
  return (
    <footer className="mt-32 border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Masthead block */}
          <div>
            <p className="eyebrow mb-3">Tarokiki</p>
            <p className="font-display text-3xl md:text-4xl text-[var(--color-text)] leading-tight">
              {dict.footer.moonlight}
            </p>
            <p className="mt-4 max-w-md text-sm text-[var(--color-text-mute)] leading-relaxed">
              {dict.meta.description}
            </p>
          </div>

          {/* Streaming */}
          <div>
            <p className="eyebrow mb-4">Listen</p>
            <ul className="space-y-2">
              {social.slice(0, 4).map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="font-body text-sm text-[var(--color-text-soft)] hover:text-[var(--color-text)] link-underline transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Other */}
          <div>
            <p className="eyebrow mb-4">Follow</p>
            <ul className="space-y-2">
              {social.slice(4).map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="font-body text-sm text-[var(--color-text-soft)] hover:text-[var(--color-text)] link-underline transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`mailto:${profile.email}`}
                  className="font-body text-sm text-[var(--color-text-soft)] hover:text-[var(--color-text)] link-underline transition-colors"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-14 pt-6 border-t border-[var(--color-line)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-[var(--color-text-mute)]">
          <p>
            © {new Date().getFullYear()} Tarokiki. {dict.footer.rights}.
          </p>
          <p className="font-display italic tracking-wide">
            for Wuthering Waves · 鸣潮 · 鳴潮 · 명조
          </p>
        </div>
      </div>
    </footer>
  );
}
