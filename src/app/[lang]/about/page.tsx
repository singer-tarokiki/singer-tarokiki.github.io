import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin, GraduationCap, Music2, Sparkles } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { profile, bio, timeline } from '@/lib/data/profile';
import { SparkleIcon } from '@/components/SparkleIcon';
import { Starfield } from '@/components/Starfield';
import { PaperPlane } from '@/components/PaperPlane';

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

  const facts = [
    { icon: MapPin, label: 'Based in', value: profile.basedIn[locale === 'en' ? 'en' : locale] },
    { icon: GraduationCap, label: 'Education', value: profile.education[locale === 'en' ? 'en' : locale] },
    { icon: Sparkles, label: 'Affiliation', value: profile.affiliation[locale === 'en' ? 'en' : locale] },
    { icon: Music2, label: 'Genre', value: 'Pop · Jazz · Game OST' },
  ];

  return (
    <main className="px-4 md:px-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Hero card */}
        <section className="relative mt-6 overflow-hidden rounded-[3rem] glass-card-warm">
          <Starfield className="opacity-80" shootingStar />

          <div className="relative grid items-center gap-12 px-6 md:px-16 py-16 md:py-24 md:grid-cols-[auto_1fr]">
            {/* Soft portrait placeholder */}
            <div className="mx-auto md:mx-0">
              <div className="relative h-48 w-48 md:h-56 md:w-56 drift">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-rose)] via-[var(--color-violet)] to-[var(--color-sky)] opacity-80 blur-2xl glow" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-white bg-gradient-to-br from-[var(--color-blush)] via-[var(--color-veil)] to-[var(--color-cream)] shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <SparkleIcon size={72} className="text-[var(--color-rose)] twinkle" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="eyebrow inline-flex items-center gap-2">
                <SparkleIcon size={12} className="text-[var(--color-rose)]" />
                {dict.about.eyebrow.split('·')[0].trim()}
                <SparkleIcon size={12} className="text-[var(--color-rose)]" />
              </p>
              <h1 className="mt-4 font-display text-6xl md:text-7xl text-dream font-medium leading-[0.95]">
                Tarokiki
              </h1>
              <p className="mt-6 font-display italic text-2xl md:text-3xl text-[var(--color-ink)] leading-snug">
                “{profile.selfDescription}”
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mt-16 md:mt-24 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="script text-2xl text-[var(--color-rose)] mb-3">
              {dict.about.bioHeading}
            </p>
            <h2 className="font-display text-4xl text-[var(--color-ink)] leading-tight">
              {dict.about.bioHeading} ✦
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-[1.8] text-[var(--color-ink-soft)]">
            {bio[locale].map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'first-letter:font-display first-letter:text-6xl first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[var(--color-rose)]'
                    : ''
                }
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Facts grid */}
        <section className="mt-16 md:mt-24">
          <p className="script text-2xl text-[var(--color-rose)] mb-6 text-center">
            {dict.about.factsHeading}
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={
                  'rounded-[2rem] p-7 bg-gradient-to-br ' +
                  (i % 2 === 0
                    ? 'from-[var(--color-blush)] to-[var(--color-veil)]'
                    : 'from-[var(--color-veil)] to-[var(--color-cream)]')
                }
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-rose)]">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-ink-mute)] font-semibold">
                    {f.label}
                  </p>
                </div>
                <p className="font-display text-xl md:text-2xl text-[var(--color-ink)] leading-snug">
                  {f.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-16 md:mt-24">
          <p className="script text-2xl text-[var(--color-rose)] mb-6 text-center">
            {dict.about.timelineHeading}
          </p>

          <ol className="relative mx-auto max-w-3xl">
            <span className="absolute left-[10px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-rose)] via-[var(--color-violet)] to-[var(--color-sky)] md:-translate-x-1/2" />
            {timeline.map((m, i) => (
              <li key={m.year + m.title.en} className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-10 py-5">
                <span className="absolute left-0 top-7 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow ring-2 ring-[var(--color-rose)] md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-rose)] twinkle" style={{ animationDelay: `${i * 0.2}s` } as React.CSSProperties} />
                </span>

                <div className={i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:order-2 md:pl-10'}>
                  <p className="script text-xl text-[var(--color-violet)]">{m.year}</p>
                  <p className="mt-1 font-display text-lg md:text-xl text-[var(--color-ink)] leading-snug">
                    {m.title[locale]}
                  </p>
                </div>
                <div className="hidden md:block" />
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section className="mt-20 md:mt-28">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[var(--color-rose)] via-[var(--color-violet)] to-[var(--color-sky)] p-10 md:p-16 text-center">
            <PaperPlane size={40} className="absolute top-8 left-8 text-white/50 drift-slow" />
            <SparkleIcon size={24} className="absolute top-10 right-12 text-white/70 twinkle" />
            <SparkleIcon size={18} className="absolute bottom-10 left-14 text-white/60 twinkle" style={{ animationDelay: '1s' } as React.CSSProperties} />

            <p className="script text-2xl text-white/85">
              {dict.about.contactHeading}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-white leading-tight">
              {dict.about.contactLead}
            </h2>
            <Link
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/95 px-8 py-4 text-base font-semibold text-[var(--color-ink)] shadow-lg hover:bg-white transition-all"
            >
              <Mail className="h-4 w-4 text-[var(--color-rose)]" />
              {profile.email}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
