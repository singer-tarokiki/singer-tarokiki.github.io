import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { songs } from '@/lib/data/songs';

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
    <main>
      {/* Page head */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 pt-20 pb-12 md:pt-32 md:pb-20">
        <p className="eyebrow mb-6">{dict.music.eyebrow}</p>
        <div className="grid gap-10 md:grid-cols-12">
          <h1 className="md:col-span-7 font-display text-6xl md:text-7xl lg:text-8xl text-[var(--color-text)] leading-[0.95] tracking-tight">
            {dict.music.title}
          </h1>
          <p className="md:col-span-4 md:col-start-9 text-base leading-relaxed text-[var(--color-text-soft)]">
            {dict.music.lede}
          </p>
        </div>
      </section>

      <div className="hairline-violet mx-auto max-w-[1280px]" />

      {/* Tracks */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-24">
        <ol className="divide-y divide-[var(--color-line)]">
          {songs.map((song, idx) => (
            <li key={song.slug} className="py-8 md:py-12">
              <div className="grid gap-6 md:grid-cols-12 md:gap-10">
                {/* Index + date */}
                <div className="md:col-span-2">
                  <p className="font-display text-2xl tabular-nums text-[var(--color-text-mute)]">
                    {String(idx + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-2 text-[11px] tracking-[0.25em] uppercase text-[var(--color-text-mute)]">
                    {song.released}
                  </p>
                </div>

                {/* Title + context */}
                <div className="md:col-span-7">
                  <h2 className="font-display text-3xl md:text-4xl text-[var(--color-text)] leading-tight">
                    {song.title[locale]}
                  </h2>
                  {song.title.en !== song.title[locale] && (
                    <p className="mt-1 font-display italic text-base text-[var(--color-text-soft)]">
                      {song.title.en}
                    </p>
                  )}
                  <p className="mt-4 text-sm text-[var(--color-text-soft)]">
                    {song.release[locale]}
                  </p>
                  <p className="mt-1.5 text-xs tracking-[0.2em] uppercase text-[var(--color-text-mute)]">
                    {dict.music.related} — <span className="normal-case tracking-normal text-[var(--color-text-soft)]">{song.related[locale]}</span>
                  </p>
                  {song.collaborators && song.collaborators.length > 0 && (
                    <p className="mt-1 text-xs tracking-[0.2em] uppercase text-[var(--color-text-mute)]">
                      with <span className="normal-case tracking-normal text-[var(--color-text-soft)]">{song.collaborators.join(', ')}</span>
                    </p>
                  )}
                </div>

                {/* Links */}
                <div className="md:col-span-3 flex flex-wrap items-start gap-x-5 gap-y-2 md:justify-end">
                  {song.links?.spotify && (
                    <Link
                      href={song.links.spotify}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-xs tracking-[0.18em] uppercase text-[var(--color-text-soft)] hover:text-[var(--color-text)] link-underline"
                    >
                      Spotify
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                  {song.links?.appleMusic && (
                    <Link
                      href={song.links.appleMusic}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-xs tracking-[0.18em] uppercase text-[var(--color-text-soft)] hover:text-[var(--color-text)] link-underline"
                    >
                      Apple
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                  {song.links?.youtube && (
                    <Link
                      href={song.links.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-xs tracking-[0.18em] uppercase text-[var(--color-text-soft)] hover:text-[var(--color-text)] link-underline"
                    >
                      YouTube
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                  {song.links?.bilibili && (
                    <Link
                      href={song.links.bilibili}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-xs tracking-[0.18em] uppercase text-[var(--color-text-soft)] hover:text-[var(--color-text)] link-underline"
                    >
                      Bilibili
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
