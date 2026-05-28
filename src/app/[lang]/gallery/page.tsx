import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { locales, type Locale, isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
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

// Placeholder frames — replace `gradient` with real photos under /public/images/
const frames = [
  { caption: { zh: '舞台 · 序曲', en: 'Stage · Overture', ja: 'ステージ · 序曲', ko: '무대 · 서곡' }, ratio: 'aspect-[3/4]', gradient: 'from-[#2A1840] via-[#3B2363] to-[#1A1226]' },
  { caption: { zh: '录音棚 · 凌晨', en: 'Studio · 4 AM', ja: 'スタジオ · 午前4時', ko: '스튜디오 · 새벽 4시' }, ratio: 'aspect-square', gradient: 'from-[#1A2342] via-[#2A3470] to-[#0E0814]' },
  { caption: { zh: '麦克风之间', en: 'Between mics', ja: 'マイクの間', ko: '마이크의 사이' }, ratio: 'aspect-[4/5]', gradient: 'from-[#3A2A4F] via-[#5A4577] to-[#1A1226]' },
  { caption: { zh: '夜的城市', en: 'Night city', ja: '夜の街', ko: '밤의 도시' }, ratio: 'aspect-[3/4]', gradient: 'from-[#1F1E36] via-[#2E3055] to-[#100A1A]' },
  { caption: { zh: '风的间隙', en: 'In the wind', ja: '風の合間', ko: '바람의 사이' }, ratio: 'aspect-square', gradient: 'from-[#2A2E5A] via-[#3F4488] to-[#100A1A]' },
  { caption: { zh: '彩排间隙', en: 'Rehearsal break', ja: 'リハーサルの合間', ko: '리허설 사이' }, ratio: 'aspect-[4/5]', gradient: 'from-[#321E3D] via-[#4D2F5E] to-[#1A1226]' },
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
    <main>
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 pt-20 pb-12 md:pt-32 md:pb-20">
        <p className="eyebrow mb-6">{dict.gallery.eyebrow}</p>
        <div className="grid gap-10 md:grid-cols-12">
          <h1 className="md:col-span-7 font-display text-6xl md:text-7xl lg:text-8xl text-[var(--color-text)] leading-[0.95]">
            {dict.gallery.title}
          </h1>
          <p className="md:col-span-4 md:col-start-9 text-base leading-relaxed text-[var(--color-text-soft)]">
            {dict.gallery.lede}
          </p>
        </div>
      </section>

      <div className="hairline-violet mx-auto max-w-[1280px]" />

      <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {frames.map((f, i) => (
            <figure key={i} className="space-y-3">
              <div
                className={`relative w-full ${f.ratio} overflow-hidden bg-gradient-to-br ${f.gradient} border border-[var(--color-line)]`}
              >
                {i % 3 === 1 && (
                  <div className="absolute -right-12 bottom-6 opacity-40">
                    <StarTrail width={320} height={80} />
                  </div>
                )}
                <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.25em] uppercase text-[var(--color-text-soft)]/60">
                  Tarokiki · 0{i + 1}
                </span>
              </div>
              <figcaption className="font-display text-sm text-[var(--color-text-soft)] tracking-wide">
                {f.caption[locale]}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-16 text-center font-display italic text-sm text-[var(--color-text-mute)]">
          {dict.gallery.placeholder}
        </p>
      </section>
    </main>
  );
}
