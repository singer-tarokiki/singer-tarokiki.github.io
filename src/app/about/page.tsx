import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RoseEmblem } from "@/components/RoseEmblem";
import { Mail, Music2, MapPin, Sparkles, Heart } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · 关于",
  description: "Kiki Zhang —— 关于这位歌手、她的声音与她想说的话。",
};

const milestones = [
  {
    year: "2019",
    title: "第一支麦克风",
    cn: "在大学社团的角落，第一次在台上唱完一整首歌。",
  },
  {
    year: "2021",
    title: "驻唱时光",
    cn: "在城市最深的 Livehouse 里，每周三晚九点的固定演出。",
  },
  {
    year: "2023",
    title: "出道单曲 《Bloom》",
    cn: "把一段心事从笔记本搬进录音棚 —— 这是真正意义上的开始。",
  },
  {
    year: "2024",
    title: "首张专辑 《Tarot Letters》",
    cn: "二十二张大牌，写给自己的二十二封信。",
  },
  {
    year: "2025",
    title: "新 EP 《Velvet Midnight》",
    cn: "夜色越深，玫瑰越红。",
  },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        {/* Hero */}
        <section className="velvet-card relative mb-16 overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 opacity-25 rose-spin">
            <RoseEmblem size={420} />
          </div>

          <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div className="floaty">
              <div className="relative h-44 w-44 md:h-52 md:w-52">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amethyst via-rose to-velvet opacity-70 blur-2xl" />
                <div className="glow-pulse relative flex h-full w-full items-center justify-center rounded-full border-2 border-amethyst-light/40 bg-gradient-to-br from-velvet to-ink">
                  <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 text-rose-light/80">
                    <circle cx="50" cy="38" r="18" fill="currentColor" opacity="0.85" />
                    <path d="M20 92 Q 20 60 50 60 Q 80 60 80 92 Z" fill="currentColor" opacity="0.85" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-bold tracking-[0.4em] text-rose-light uppercase">
                About · 关于
              </p>
              <h1 className="mb-3 font-heading text-4xl font-bold text-cantarella md:text-5xl">
                Kiki Zhang
              </h1>
              <p className="mb-1 font-display text-2xl text-moon">张塔罗</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-silver/75">
                <li className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-rose-light" /> 上海 · Shanghai</li>
                <li className="flex items-center gap-1.5"><Music2 className="h-4 w-4 text-rose-light" /> Vocalist / Songwriter</li>
                <li className="flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-rose-light" /> Pop · R&B · Jazz Ballad</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="velvet-card mb-16 rounded-3xl p-8 md:p-12">
          <h2 className="mb-6 flex items-center gap-3 font-heading text-2xl font-bold tracking-wider text-moon">
            <Heart className="h-5 w-5 text-rose-light" />
            Story · 故事
          </h2>
          <div className="space-y-5 font-display text-lg leading-relaxed text-silver/85">
            <p>
              Kiki Zhang，独立歌手，以塔罗（Taro）为艺名。
              偏爱夜的颜色 —— 那种被路灯染上一点紫的、有重量的黑。
            </p>
            <p>
              她唱歌的方式像在写日记 —— 安静、私人，却又每一笔都带钩。
              曲风从早期清亮的 Pop Ballad，逐渐生长为如今糅合了 R&B 律动与
              Jazz 即兴的<span className="mx-1 italic text-rose-light">天鹅绒午夜（velvet midnight）</span>风格。
            </p>
            <p>
              比起被听见，她更想"被陪伴"。 所以每一场现场，她都坚持不开太满的灯，
              不放太满的合声 —— 留一些缝隙，让坐在台下的人也能把自己的故事，
              悄悄唱进去。
            </p>
            <blockquote className="border-l-2 border-rose/60 pl-5 italic text-silver/75">
              &ldquo;我想做的，从来不是闪光弹，是一盏提灯。&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 font-heading text-2xl font-bold tracking-wider text-moon">
            <Sparkles className="h-5 w-5 text-rose-light" />
            Timeline · 时光
          </h2>
          <ol className="relative space-y-6 border-l-2 border-amethyst/40 pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[2.4rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-amethyst-light bg-ink shadow-[0_0_15px_rgba(157,116,217,0.6)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-light" />
                </span>
                <div className="velvet-card rounded-2xl p-5">
                  <p className="mb-1 font-heading text-sm font-bold tracking-[0.3em] text-rose-light uppercase">
                    {m.year}
                  </p>
                  <p className="mb-1 font-heading text-xl font-bold text-moon">{m.title}</p>
                  <p className="font-display text-base text-silver/75">{m.cn}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section className="velvet-card rounded-3xl p-8 text-center md:p-12">
          <h2 className="mb-3 font-heading text-2xl font-bold tracking-wider text-moon">
            Contact · 联系
          </h2>
          <p className="mb-6 font-display text-lg text-silver/80">
            演出邀约 · 合作 · 任何想说的话，都可以来信。
          </p>
          <Link
            href="mailto:hello@tarokiki.com"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amethyst via-rose to-amethyst bg-[length:200%_100%] px-8 py-3.5 font-heading text-sm font-bold tracking-[0.3em] text-moon uppercase shadow-[0_0_25px_rgba(157,116,217,0.4)] transition-all hover:bg-[position:100%_0] hover:shadow-[0_0_45px_rgba(227,106,138,0.6)]"
          >
            <Mail className="h-4 w-4" />
            hello@tarokiki.com
          </Link>
        </section>
      </div>
      <Footer />
    </main>
  );
}
