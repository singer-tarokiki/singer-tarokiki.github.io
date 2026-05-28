import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';

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

const emptyState = {
  zh: '当前没有公开排期 —— 新的演出将在此公布。',
  en: 'No public dates at the moment — new shows will be announced here.',
  ja: '現在公開中の公演はありません。新しいライブが決まり次第こちらに掲載します。',
  ko: '현재 공개된 일정이 없습니다 —— 새로운 공연이 결정되면 이곳에 게시됩니다.',
} as const;

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
    <main>
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 pt-20 pb-12 md:pt-32 md:pb-20">
        <p className="eyebrow mb-6">{dict.shows.eyebrow}</p>
        <div className="grid gap-10 md:grid-cols-12">
          <h1 className="md:col-span-7 font-display text-6xl md:text-7xl lg:text-8xl text-[var(--color-text)] leading-[0.95]">
            {dict.shows.title}
          </h1>
          <p className="md:col-span-4 md:col-start-9 text-base leading-relaxed text-[var(--color-text-soft)]">
            {dict.shows.lede}
          </p>
        </div>
      </section>

      <div className="hairline-violet mx-auto max-w-[1280px]" />

      {/* Upcoming */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--color-text)] mb-10">
          {dict.shows.upcoming}
        </h2>
        <div className="border-y border-[var(--color-line)] py-16 text-center">
          <p className="font-display italic text-xl text-[var(--color-text-soft)] max-w-xl mx-auto">
            {emptyState[locale]}
          </p>
        </div>
      </section>

      {/* Past */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 pb-20 md:pb-32">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--color-text)] mb-10">
          {dict.shows.past}
        </h2>
        <div className="border-y border-[var(--color-line)] py-16 text-center">
          <p className="font-display italic text-xl text-[var(--color-text-soft)] max-w-xl mx-auto">
            {emptyState[locale]}
          </p>
        </div>
      </section>
    </main>
  );
}
