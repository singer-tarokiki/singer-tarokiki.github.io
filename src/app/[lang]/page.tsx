import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { songs, featuredSong } from '@/lib/data/songs';
import { Starfield } from '@/components/Starfield';
import { SparkleIcon } from '@/components/SparkleIcon';
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
    { href: `/${locale}/music`, label: dict.nav.music, hue: 'from-[var(--color-rose)] to-[var(--color-rose-soft)]', emoji: '♪' },
    { href: `/${locale}/shows`, label: dict.nav.shows, hue: 'from-[var(--color-violet)] to-[var(--color-violet-soft)]', emoji: '✦' },
    { href: `/${locale}/gallery`, label: dict.nav.gallery, hue: 'from-[var(--color-sky)] to-[var(--color-blush)]', emoji: '✿' },
    { href: `/${locale}/about`, label: dict.nav.about, hue: 'from-[var(--color-gold)] to-[var(--color-rose-soft)]', emoji: '✦' },
  ];

  return (
    <main className="px-4 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* —— Hero —— */}
        <section className="relative mt-6 overflow-hidden rounded-[3rem] glass-card-warm">
          <Starfield className="opacity-90" shootingStar />

          <div className="relative px-6 md:px-16 pt-20 pb-28 md:pt-32 md:pb-40 text-center">
            {/* eyebrow */}
            <p
              className="eyebrow inline-flex items-center gap-2 fade-up"
              style={{ animationDelay: '0.05s' }}
            >
              <SparkleIcon size={12} className="text-[var(--color-rose)]" />
              {dict.home.eyebrow}
              <SparkleIcon size={12} className="text-[var(--color-rose)]" />
            </p>

            {/* big name */}
            <h1
              className="mt-6 font-display font-medium tracking-tight leading-[0.95] fade-up"
              style={{ animationDelay: '0.12s' }}
            >
              <span className="block text-dream text-[clamp(4.5rem,14vw,12rem)]">
                Tarokiki
              </span>
            </h1>

            {/* lead */}
            <p
              className="mx-auto mt-10 max-w-2xl font-display italic text-2xl md:text-3xl text-[var(--color-ink)] leading-snug fade-up"
              style={{ animationDelay: '0.22s' }}
            >
              {dict.home.leadLine}
            </p>
            <p
              className="mx-auto mt-6 max-w-xl text-base md:text-[17px] leading-relaxed text-[var(--color-ink-soft)] fade-up"
              style={{ animationDelay: '0.32s' }}
            >
              {dict.home.leadSecondary}
            </p>

            {/* CTAs */}
            <div
              className="mt-12 flex flex-wrap items-center justify-center gap-4 fade-up"
              style={{ animationDelay: '0.42s' }}
            >
              <Link
                href={`/${locale}/music`}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-rose)] via-[var(--color-violet)] to-[var(--color-sky)] bg-[length:200%_100%] bg-left px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(232,164,189,0.65)] transition-all hover:bg-right hover:shadow-[0_12px_36px_-10px_rgba(184,154,196,0.55)]"
              >
                {dict.home.featuredCta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={`/${locale}/about`}
                className="group inline-flex items-center gap-2 rounded-full bg-white/70 px-7 py-3.5 text-sm font-semibold text-[var(--color-ink)] hover:bg-white hover:shadow-[0_8px_20px_-10px_rgba(184,154,196,0.45)] transition-all"
              >
                {dict.nav.about}
              </Link>
            </div>
          </div>
        </section>

        {/* —— Featured track —— */}
        <section className="mt-24 md:mt-32 grid gap-10 md:grid-cols-12 md:gap-12 items-center">
          <div className="md:col-span-5">
            <p className="script text-2xl text-[var(--color-rose)] mb-3">
              {dict.home.featuredEyebrow.split('·')[0].trim()}
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-[var(--color-ink)] leading-tight">
              {featuredSong.title[locale]}
            </h2>
            {featuredSong.title.en !== featuredSong.title[locale] && (
              <p className="mt-2 font-display italic text-xl text-[var(--color-ink-soft)]">
                {featuredSong.title.en}
              </p>
            )}
          </div>

          <div className="md:col-span-7 glass-card rounded-[2.5rem] p-7 md:p-10 relative overflow-hidden">
            {/* corner sparkle */}
            <SparkleIcon size={36} className="absolute top-6 right-6 text-[var(--color-rose-soft)] drift" />

            <p className="text-base md:text-lg leading-relaxed text-[var(--color-ink-soft)]">
              {featuredSong.release[locale]}
              {featuredSong.collaborators && featuredSong.collaborators.length > 0 && (
                <span className="text-[var(--color-ink-mute)]">
                  {' '}· with {featuredSong.collaborators.join(', ')}
                </span>
              )}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-blush)] px-4 py-1.5 text-xs font-semibold text-[var(--color-ink)]">
              <SparkleIcon size={11} className="text-[var(--color-rose)]" />
              {featuredSong.related[locale]}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {featuredSong.links?.spotify && (
                <Link
                  href={featuredSong.links.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/80 px-5 py-2 text-xs font-semibold text-[var(--color-ink)] hover:bg-white hover:shadow-md transition-all"
                >
                  Spotify ↗
                </Link>
              )}
              {featuredSong.links?.youtube && (
                <Link
                  href={featuredSong.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/80 px-5 py-2 text-xs font-semibold text-[var(--color-ink)] hover:bg-white hover:shadow-md transition-all"
                >
                  YouTube ↗
                </Link>
              )}
              {featuredSong.links?.appleMusic && (
                <Link
                  href={featuredSong.links.appleMusic}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/80 px-5 py-2 text-xs font-semibold text-[var(--color-ink)] hover:bg-white hover:shadow-md transition-all"
                >
                  Apple Music ↗
                </Link>
              )}
            </div>

            <Link
              href={`/${locale}/music`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-rose)] hover:text-[var(--color-ink)] transition-colors link-soft"
            >
              See all songs <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* —— In this issue (rounded soft tiles) —— */}
        <section className="mt-24 md:mt-32">
          <p className="text-center script text-2xl text-[var(--color-rose)] mb-10">
            {dict.home.sectionsEyebrow.split('·')[0].trim()}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={
                  'group relative overflow-hidden rounded-[2rem] p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(184,154,196,0.4)] ' +
                  'bg-gradient-to-br ' + s.hue
                }
                style={{ minHeight: '170px' }}
              >
                <span className="absolute top-4 right-4 text-3xl text-white/70 group-hover:text-white transition-colors drift">
                  {s.emoji}
                </span>
                <span className="absolute bottom-4 left-6 font-display text-3xl text-white drop-shadow-sm">
                  {s.label}
                </span>
                <ArrowUpRight className="absolute bottom-4 right-4 h-5 w-5 text-white/80 group-hover:text-white transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </section>

        {/* —— Quote —— */}
        <section className="mt-24 md:mt-32 mb-16">
          <div className="relative glass-card-warm rounded-[2.5rem] px-8 md:px-16 py-16 md:py-24 text-center overflow-hidden">
            <PaperPlane size={36} className="absolute top-8 left-8 text-[var(--color-violet-soft)] drift-slow" />
            <PaperPlane size={28} className="absolute bottom-8 right-10 text-[var(--color-rose-soft)] drift" />
            <SparkleIcon size={20} className="absolute top-12 right-12 text-[var(--color-gold)] twinkle" />

            <blockquote>
              <p className="font-display italic text-3xl md:text-5xl text-[var(--color-ink)] leading-[1.3] max-w-3xl mx-auto">
                {dict.home.quote}
              </p>
              <footer className="mt-8 script text-2xl text-[var(--color-rose)]">
                — Tarokiki
              </footer>
            </blockquote>
          </div>
        </section>
      </div>
    </main>
  );
}
