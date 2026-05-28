import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { songs } from '@/lib/data/songs';
import { SparkleIcon } from '@/components/SparkleIcon';
import { Starfield } from '@/components/Starfield';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: dict.music.title };
}

// Rotate a soft pastel border per card.
const cardHues = [
  'from-[var(--color-blush)] to-[var(--color-veil)]',
  'from-[var(--color-veil)] to-[var(--color-cream)]',
  'from-[var(--color-cream)] to-[var(--color-blush)]',
];

export default async function MusicPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
    <main className="px-4 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Page header */}
        <section className="relative mt-6 overflow-hidden rounded-[3rem] glass-card-warm">
          <Starfield className="opacity-70" />
          <div className="relative px-6 md:px-16 py-20 md:py-28 text-center">
            <p className="eyebrow inline-flex items-center gap-2">
              <SparkleIcon size={12} className="text-[var(--color-rose)]" />
              {dict.music.eyebrow.split('·')[0].trim()}
              <SparkleIcon size={12} className="text-[var(--color-rose)]" />
            </p>
            <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-8xl text-dream font-medium leading-[0.95] tracking-tight">
              {dict.music.title}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--color-ink-soft)]">
              {dict.music.lede}
            </p>
          </div>
        </section>

        {/* Tracks */}
        <section className="mt-16 md:mt-24 grid gap-6 md:grid-cols-2">
          {songs.map((song, idx) => (
            <article
              key={song.slug}
              className={
                'group relative overflow-hidden rounded-[2rem] p-7 md:p-9 transition-all hover:-translate-y-1 hover:shadow-[0_24px_56px_-20px_rgba(184,154,196,0.35)] bg-gradient-to-br ' +
                cardHues[idx % cardHues.length]
              }
            >
              <SparkleIcon size={24} className="absolute top-6 right-6 text-[var(--color-rose-soft)] twinkle" style={{ animationDelay: `${idx * 0.3}s` } as React.CSSProperties} />

              {/* index + date */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-display text-3xl text-[var(--color-rose)]/60 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="script text-base text-[var(--color-violet)]">
                  {song.released}
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-[2rem] text-[var(--color-ink)] leading-tight">
                {song.title[locale]}
              </h2>
              {song.title.en !== song.title[locale] && (
                <p className="mt-1.5 font-display italic text-base text-[var(--color-ink-soft)]">
                  {song.title.en}
                </p>
              )}

              <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {song.release[locale]}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/65 px-3.5 py-1.5 text-xs font-semibold text-[var(--color-ink)]">
                <SparkleIcon size={10} className="text-[var(--color-rose)]" />
                {song.related[locale]}
              </div>

              {song.collaborators && song.collaborators.length > 0 && (
                <p className="mt-3 text-xs text-[var(--color-ink-mute)]">
                  with {song.collaborators.join(', ')}
                </p>
              )}

              {/* Links */}
              <div className="mt-6 flex flex-wrap gap-2">
                {song.links?.spotify && (
                  <Link
                    href={song.links.spotify}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[var(--color-ink)] hover:bg-white transition-colors"
                  >
                    Spotify <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
                {song.links?.appleMusic && (
                  <Link
                    href={song.links.appleMusic}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[var(--color-ink)] hover:bg-white transition-colors"
                  >
                    Apple <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
                {song.links?.youtube && (
                  <Link
                    href={song.links.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[var(--color-ink)] hover:bg-white transition-colors"
                  >
                    YouTube <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
                {song.links?.bilibili && (
                  <Link
                    href={song.links.bilibili}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[var(--color-ink)] hover:bg-white transition-colors"
                  >
                    Bilibili <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
