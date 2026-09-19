import Link from 'next/link';
import { profile } from '@/lib/data/profile';
import { getMediaLinks } from '@/lib/data/media-links';
import { SparkleIcon } from '@/components/SparkleIcon';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

const internationalSocial = [
  { label: 'Bilibili', href: profile.links.bilibili },
  { label: 'Instagram', href: profile.links.instagram },
  { label: 'VGMdb', href: profile.links.vgmdb },
];

export function Footer({ locale, dict }: Props) {
  const listening = getMediaLinks(profile.links, locale);
  const social = locale === 'zh'
    ? [{ label: 'Bilibili', href: profile.links.bilibili }]
    : internationalSocial;

  return (
    <footer className="mt-24 px-4 pb-8 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="glass-card-warm rounded-[2.5rem] p-8 md:p-14">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2">
                <SparkleIcon size={18} className="text-[var(--color-rose)]" />
                <p className="font-display text-2xl font-semibold text-dream">Tarokiki</p>
              </div>
              <p className="mt-4 max-w-md font-display text-2xl italic leading-tight text-[var(--color-ink)] md:text-3xl">
                {dict.footer.moonlight}
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {dict.meta.description}
              </p>
            </div>

            <div>
              <p className="script mb-4 text-[var(--color-rose)]">{dict.footer.listen}</p>
              <ul className="space-y-2.5">
                {listening.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body link-soft text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-rose)]"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="script mb-4 text-[var(--color-rose)]">{dict.footer.follow}</p>
              <ul className="space-y-2.5">
                {social.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body link-soft text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-rose)]"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`mailto:${profile.email}`}
                    className="font-body link-soft text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-rose)]"
                  >
                    {dict.footer.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-ink-mute)] md:flex-row md:items-center md:justify-between">
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
