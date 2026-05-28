import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { songs, featuredSong } from '@/lib/data/songs';
import { profile } from '@/lib/data/profile';
import { StarTrail } from '@/components/StarTrail';
import { PaperPlane } from '@/components/PaperPlane';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);

  const sections = [
    { href: `/${locale}/music`, label: dict.nav.music, num: '01' },
    { href: `/${locale}/shows`, label: dict.nav.shows, num: '02' },
    { href: `/${locale}/gallery`, label: dict.nav.gallery, num: '03' },
    { href: `/${locale}/about`, label: dict.nav.about, num: '04' },
  ];

  return (
    <main>
      {/* —— Editorial cover —— */}
      <section className="relative overflow-hidden">
        {/* Soft star trail in upper area */}
        <div className="pointer-events-none absolute right-[-4rem] top-16 opacity-60 md:right-0 md:top-24">
          <StarTrail width={520} height={140} />
        </div>

        <div className="mx-auto max-w-[1280px] px-6 md:px-10 pt-20 pb-28 md:pt-32 md:pb-40">
          {/* Eyebrow + paper plane */}
          <div className="flex items-center gap-3 fade-up">
            <PaperPlane size={14} className="text-[var(--color-violet)]" />
            <span className="eyebrow">{dict.home.eyebrow}</span>
          </div>

          {/* Masthead name */}
          <h1
            className="mt-8 font-display font-light tracking-[-0.02em] text-[var(--color-text)] leading-[0.95] fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="block text-[clamp(4rem,12vw,11rem)]">{dict.home.name}</span>
            <span className="mt-3 block text-[clamp(1.1rem,2vw,1.6rem)] tracking-[0.18em] text-[var(--color-text-soft)] italic">
              {dict.home.subtitle}
            </span>
          </h1>

          {/* Lead paragraph — two-column editorial */}
          <div
            className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            <p className="md:col-span-5 font-display text-3xl md:text-4xl leading-[1.25] text-[var(--color-text)]">
              {dict.home.leadLine}
            </p>
            <p className="md:col-span-6 md:col-start-7 text-base md:text-[17px] leading-relaxed text-[var(--color-text-soft)] max-w-prose">
              {dict.home.leadSecondary}
            </p>
          </div>
        </div>

        <div className="hairline-violet mx-auto max-w-[1280px]" />
      </section>

      {/* —— Featured Track —— */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">{dict.home.featuredEyebrow}</p>
            <h2 className="font-display text-5xl md:text-6xl text-[var(--color-text)] leading-[1.05]">
              {featuredSong.title[locale]}
            </h2>
            <p className="mt-3 font-display italic text-[var(--color-text-soft)] text-lg">
              {featuredSong.title.en !== featuredSong.title[locale] && featuredSong.title.en}
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-6">
            <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-soft)]">
              {featuredSong.release[locale]}
              {featuredSong.collaborators && featuredSong.collaborators.length > 0 && (
                <>
                  {' · '}
                  <span className="text-[var(--color-text-mute)]">
                    with {featuredSong.collaborators.join(', ')}
                  </span>
                </>
              )}
            </p>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-text-mute)]">
              {dict.music.related} —{' '}
              <span className="text-[var(--color-text-soft)] normal-case tracking-normal">
                {featuredSong.related[locale]}
              </span>
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
              {featuredSong.links?.spotify && (
                <Link
                  href={featuredSong.links.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-text)] link-underline"
                >
                  Spotify
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              )}
              {featuredSong.links?.youtube && (
                <Link
                  href={featuredSong.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-text)] link-underline"
                >
                  YouTube
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              )}
              {featuredSong.links?.appleMusic && (
                <Link
                  href={featuredSong.links.appleMusic}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-text)] link-underline"
                >
                  Apple Music
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              )}
            </div>

            <Link
              href={`/${locale}/music`}
              className="mt-6 inline-flex items-center gap-3 self-start text-xs tracking-[0.3em] uppercase text-[var(--color-violet)] hover:text-[var(--color-text)] transition-colors"
            >
              <span className="h-px w-8 bg-current" />
              {dict.home.featuredCta}
              <span className="h-px w-8 bg-current" />
            </Link>
          </div>
        </div>
      </section>

      <div className="hairline mx-auto max-w-[1280px]" />

      {/* —— In This Issue —— */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
        <p className="eyebrow mb-12">{dict.home.sectionsEyebrow}</p>
        <div className="grid gap-y-3 md:grid-cols-2 md:gap-x-16">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-baseline justify-between gap-4 py-6 border-b border-[var(--color-line)] hover:border-[var(--color-violet)] transition-colors"
            >
              <span className="flex items-baseline gap-6">
                <span className="font-display text-sm text-[var(--color-text-mute)] tabular-nums">
                  {s.num}
                </span>
                <span className="font-display text-2xl md:text-3xl text-[var(--color-text)] tracking-tight">
                  {s.label}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-[var(--color-text-mute)] group-hover:text-[var(--color-violet)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* —— Closing quote —— */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-display italic text-3xl md:text-5xl text-[var(--color-text)] leading-[1.25]">
            {dict.home.quote}
          </p>
          <footer className="mt-8 text-xs tracking-[0.4em] uppercase text-[var(--color-text-mute)]">
            — Tarokiki
          </footer>
        </blockquote>
      </section>
    </main>
  );
}
