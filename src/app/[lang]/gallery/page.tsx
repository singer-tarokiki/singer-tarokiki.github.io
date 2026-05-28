import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { SparkleIcon } from '@/components/SparkleIcon';
import { Starfield } from '@/components/Starfield';
import { StarTrail } from '@/components/StarTrail';

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
  return { title: dict.gallery.title };
}

const frames = [
  { caption: { zh: '舞台 · 序曲', en: 'Stage · Overture', ja: 'ステージ · 序曲', ko: '무대 · 서곡' }, ratio: 'aspect-[3/4]', hue: 'from-[var(--color-rose)] via-[var(--color-rose-soft)] to-[var(--color-veil)]' },
  { caption: { zh: '录音棚 · 凌晨', en: 'Studio · 4 AM', ja: 'スタジオ · 午前4時', ko: '스튜디오 · 새벽 4시' }, ratio: 'aspect-square', hue: 'from-[var(--color-violet)] via-[var(--color-violet-soft)] to-[var(--color-blush)]' },
  { caption: { zh: '麦克风之间', en: 'Between mics', ja: 'マイクの間', ko: '마이크의 사이' }, ratio: 'aspect-[4/5]', hue: 'from-[var(--color-sky)] via-[var(--color-violet-soft)] to-[var(--color-cream)]' },
  { caption: { zh: '夜的城市', en: 'Night city', ja: '夜の街', ko: '밤의 도시' }, ratio: 'aspect-[3/4]', hue: 'from-[var(--color-violet)] via-[var(--color-rose)] to-[var(--color-gold)]' },
  { caption: { zh: '风的间隙', en: 'In the wind', ja: '風の合間', ko: '바람의 사이' }, ratio: 'aspect-square', hue: 'from-[var(--color-sky)] via-[var(--color-rose-soft)] to-[var(--color-blush)]' },
  { caption: { zh: '彩排间隙', en: 'Rehearsal break', ja: 'リハーサルの合間', ko: '리허설 사이' }, ratio: 'aspect-[4/5]', hue: 'from-[var(--color-gold)] via-[var(--color-rose-soft)] to-[var(--color-violet-soft)]' },
];

export default async function GalleryPage({
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
        {/* header */}
        <section className="relative mt-6 overflow-hidden rounded-[3rem] glass-card-warm">
          <Starfield className="opacity-70" />
          <div className="relative px-6 md:px-16 py-20 md:py-28 text-center">
            <p className="eyebrow inline-flex items-center gap-2">
              <SparkleIcon size={12} className="text-[var(--color-rose)]" />
              {dict.gallery.eyebrow.split('·')[0].trim()}
              <SparkleIcon size={12} className="text-[var(--color-rose)]" />
            </p>
            <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-8xl text-dream font-medium leading-[0.95]">
              {dict.gallery.title}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--color-ink-soft)]">
              {dict.gallery.lede}
            </p>
          </div>
        </section>

        {/* Masonry-ish via columns */}
        <section className="mt-12 md:mt-20 columns-1 gap-5 sm:columns-2 md:columns-3">
          {frames.map((f, i) => (
            <figure key={i} className="mb-5 break-inside-avoid">
              <div className={`relative w-full ${f.ratio} overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${f.hue}`}>
                {i % 3 === 1 && (
                  <div className="absolute -right-12 bottom-6">
                    <StarTrail width={260} height={70} className="opacity-80" />
                  </div>
                )}
                <SparkleIcon
                  size={26}
                  className="absolute top-4 right-4 text-white/85 twinkle"
                  style={{ animationDelay: `${i * 0.4}s` } as React.CSSProperties}
                />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/30 backdrop-blur px-2.5 py-1 text-[10px] tracking-wider uppercase text-white font-semibold">
                  Tarokiki · 0{i + 1}
                </span>
              </div>
              <figcaption className="mt-2.5 px-2 script text-base text-[var(--color-violet)]">
                {f.caption[locale]}
              </figcaption>
            </figure>
          ))}
        </section>

        <p className="mt-12 text-center script text-lg text-[var(--color-rose)]">
          {dict.gallery.placeholder}
        </p>
      </div>
    </main>
  );
}
