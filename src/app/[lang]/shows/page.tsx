import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { SparkleIcon } from '@/components/SparkleIcon';
import { Starfield } from '@/components/Starfield';

import { PageReveal } from '@/components/PageReveal';
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
  return { title: dict.shows.title };
}

export default async function ShowsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
      <PageReveal>
    <main className="px-4 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* header */}
        <section className="relative mt-6 overflow-hidden rounded-[3rem] glass-card-warm fade-up" style={{ animationDelay: '0s' }}>
          <Starfield className="opacity-70" />
          <div className="relative px-6 md:px-16 py-20 md:py-28 text-center">
            <p className="eyebrow inline-flex items-center gap-2 fade-up" style={{ animationDelay: '0.05s' }}>
              <SparkleIcon size={12} className="text-[var(--color-rose)]" />
              {dict.shows.eyebrow.split('·')[0].trim()}
              <SparkleIcon size={12} className="text-[var(--color-rose)]" />
            </p>
            <h1 className="page-title mt-6 font-display text-6xl md:text-7xl lg:text-8xl text-dream font-medium fade-up" style={{ animationDelay: '0.12s' }}>
              {dict.shows.title}
            </h1>
            <p className="mx-auto mt-10 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--color-ink-soft)] fade-up" style={{ animationDelay: '0.2s' }}>
              {dict.shows.lede}
            </p>
          </div>
        </section>

        {/* empty state — soft cards */}
        <section className="mt-16 md:mt-24 grid gap-6 md:grid-cols-2 fade-up" style={{ animationDelay: '0.35s' }}>
          <div className="rounded-[2rem] p-10 md:p-14 text-center glass-card-warm fade-up" style={{ animationDelay: '0.45s' }}>
            <SparkleIcon size={32} className="mx-auto text-[var(--color-rose)] twinkle" />
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--color-ink)]">
              {dict.shows.upcoming}
            </h2>
            <p className="mt-6 font-display italic text-lg text-[var(--color-ink-soft)] leading-relaxed">
              {dict.shows.emptyUpcoming}
            </p>
          </div>
          <div className="rounded-[2rem] p-10 md:p-14 text-center bg-gradient-to-br from-[var(--color-veil)] to-[var(--color-blush)] fade-up" style={{ animationDelay: '0.55s' }}>
            <SparkleIcon size={32} className="mx-auto text-[var(--color-violet)] twinkle" style={{ animationDelay: '0.8s' } as React.CSSProperties} />
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--color-ink)]">
              {dict.shows.past}
            </h2>
            <p className="mt-6 font-display italic text-lg text-[var(--color-ink-soft)] leading-relaxed">
              {dict.shows.emptyPast}
            </p>
          </div>
        </section>
      </div>
    </main>
      </PageReveal>
  );
}
