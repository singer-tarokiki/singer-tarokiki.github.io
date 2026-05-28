import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Mail } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { profile, bio, timeline } from '@/lib/data/profile';

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
  return { title: dict.about.title };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);

  const altName =
    locale === 'en' ? '' : profile.altNames[locale as keyof typeof profile.altNames];

  return (
    <main>
      {/* Editorial title block */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 pt-20 pb-12 md:pt-32 md:pb-20">
        <p className="eyebrow mb-6">{dict.about.eyebrow}</p>
        <div className="grid gap-10 md:grid-cols-12">
          <h1 className="md:col-span-8 font-display text-6xl md:text-7xl lg:text-8xl text-[var(--color-text)] leading-[0.95] tracking-tight">
            Tarokiki
          </h1>
          {altName && (
            <p className="md:col-span-4 md:col-start-9 self-end font-display italic text-3xl text-[var(--color-text-soft)]">
              {altName}
            </p>
          )}
        </div>
        <p className="mt-12 font-display italic text-2xl md:text-3xl text-[var(--color-text-soft)] max-w-3xl">
          “{profile.selfDescription}”
        </p>
      </section>

      <div className="hairline-violet mx-auto max-w-[1280px]" />

      {/* Story */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="eyebrow">{dict.about.bioHeading}</p>
          </div>
          <div className="md:col-span-8 md:col-start-5 space-y-6 text-base md:text-lg leading-[1.7] text-[var(--color-text-soft)] max-w-prose">
            {bio[locale].map((para, i) => (
              <p key={i} className={i === 0 ? 'first-letter:font-display first-letter:text-6xl first-letter:font-light first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[var(--color-violet)]' : ''}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline mx-auto max-w-[1280px]" />

      {/* Facts (sidebar-style) */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="eyebrow">{dict.about.factsHeading}</p>
          </div>
          <dl className="md:col-span-8 md:col-start-5 grid gap-y-6 sm:grid-cols-2 sm:gap-x-12">
            <div>
              <dt className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-text-mute)]">Based in</dt>
              <dd className="mt-2 font-display text-xl text-[var(--color-text)]">{profile.basedIn[locale === 'en' ? 'en' : locale]}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-text-mute)]">Education</dt>
              <dd className="mt-2 font-display text-xl text-[var(--color-text)]">{profile.education[locale === 'en' ? 'en' : locale]}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-text-mute)]">Affiliation</dt>
              <dd className="mt-2 font-display text-xl text-[var(--color-text)]">{profile.affiliation[locale === 'en' ? 'en' : locale]}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-text-mute)]">Genre</dt>
              <dd className="mt-2 font-display text-xl text-[var(--color-text)]">Pop · Jazz · Game OST</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="hairline mx-auto max-w-[1280px]" />

      {/* Timeline */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="eyebrow">{dict.about.timelineHeading}</p>
          </div>
          <ol className="md:col-span-8 md:col-start-5 divide-y divide-[var(--color-line)]">
            {timeline.map((m) => (
              <li key={m.year + m.title.en} className="py-6 grid gap-2 md:grid-cols-[140px_1fr] md:gap-8">
                <p className="font-display text-base tabular-nums tracking-[0.18em] uppercase text-[var(--color-text-mute)]">
                  {m.year}
                </p>
                <p className="font-display text-xl md:text-2xl text-[var(--color-text)] leading-snug">
                  {m.title[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="hairline mx-auto max-w-[1280px]" />

      {/* Contact */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="eyebrow">{dict.about.contactHeading}</p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="font-display text-3xl md:text-4xl text-[var(--color-text)] leading-tight">
              {dict.about.contactLead}
            </p>
            <Link
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-3 font-display text-2xl italic text-[var(--color-violet)] hover:text-[var(--color-text)] transition-colors link-underline"
            >
              <Mail className="h-5 w-5" />
              {profile.email}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
