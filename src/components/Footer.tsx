import Link from 'next/link';
import { profile } from '@/lib/data/profile';
import { SparkleIcon } from '@/components/SparkleIcon';
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
    <footer className="mt-24 px-4 md:px-8 pb-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="glass-card-warm rounded-[2.5rem] p-8 md:p-14">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            {/* Brand block */}
            <div>
              <div className="flex items-center gap-2">
                <SparkleIcon size={18} className="text-[var(--color-rose)]" />
                <p className="font-display text-2xl text-dream font-semibold">Tarokiki</p>
              </div>
              <p className="mt-4 font-display italic text-2xl md:text-3xl text-[var(--color-ink)] leading-tight max-w-md">
                {dict.footer.moonlight}
              </p>
              <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-md">
                {dict.meta.description}
              </p>
            </div>

            {/* Listen */}
            <div>
              <p className="script text-[var(--color-rose)] mb-4">Listen</p>
              <ul className="space-y-2.5">
                {social.slice(0, 3).map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-body text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-rose)] transition-colors link-soft"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow */}
            <div>
              <p className="script text-[var(--color-rose)] mb-4">Follow</p>
              <ul className="space-y-2.5">
                {social.slice(3).map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-body text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-rose)] transition-colors link-soft"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`mailto:${profile.email}`}
                    className="font-body text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-rose)] transition-colors link-soft"
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-[var(--color-line)] flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-[var(--color-ink-mute)]">
            <p>© {new Date().getFullYear()} Tarokiki · {dict.footer.rights}</p>
            <p className="script text-base text-[var(--color-rose)]">
              for Wuthering Waves ✦ 鸣潮 ✦ 鳴潮 ✦ 명조
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
