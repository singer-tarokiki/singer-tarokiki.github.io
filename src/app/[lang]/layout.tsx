import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
  return {
    title: {
      default: dict.meta.title,
      template: `%s · Tarokiki`,
    },
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://singer-tarokiki.github.io/${lang}`,
      siteName: 'Tarokiki',
      locale: lang === 'zh' ? 'zh_CN' : lang === 'ja' ? 'ja_JP' : lang === 'ko' ? 'ko_KR' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <Header locale={lang as Locale} dict={dict} />
      <div className="flex-1">{children}</div>
      <Footer locale={lang as Locale} dict={dict} />
    </>
  );
}
