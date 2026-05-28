import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RoseEmblem } from "@/components/RoseEmblem";
import { Play, Disc3, Clock3 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music · 音乐",
  description: "Tarokiki 的专辑、单曲与现场录音合集。",
};

type Track = {
  no: string;
  title: string;
  cn: string;
  duration: string;
};

type Album = {
  title: string;
  cn: string;
  year: string;
  type: "Album" | "EP" | "Single";
  tagline: string;
  tracks: Track[];
};

const albums: Album[] = [
  {
    title: "Velvet Midnight",
    cn: "天鹅绒午夜",
    year: "2025",
    type: "EP",
    tagline: "写给所有彻夜未眠之人的五首歌。",
    tracks: [
      { no: "I", title: "Velvet Midnight", cn: "天鹅绒午夜", duration: "4:12" },
      { no: "II", title: "Rose Window", cn: "玫瑰窗", duration: "3:48" },
      { no: "III", title: "Silver Pulse", cn: "银脉", duration: "4:35" },
      { no: "IV", title: "Lantern", cn: "提灯", duration: "3:21" },
      { no: "V", title: "Until Dawn", cn: "直到天明", duration: "5:02" },
    ],
  },
  {
    title: "Tarot Letters",
    cn: "塔罗信",
    year: "2024",
    type: "Album",
    tagline: "二十二张大牌，二十二封写给自己的信。",
    tracks: [
      { no: "0", title: "The Fool", cn: "愚者", duration: "3:30" },
      { no: "I", title: "The Magician", cn: "魔术师", duration: "3:58" },
      { no: "II", title: "The High Priestess", cn: "女祭司", duration: "4:21" },
      { no: "VI", title: "The Lovers", cn: "恋人", duration: "4:05" },
      { no: "XVIII", title: "The Moon", cn: "月亮", duration: "5:14" },
    ],
  },
  {
    title: "Bloom · Single",
    cn: "盛开",
    year: "2023",
    type: "Single",
    tagline: "出道单曲。三分二十二秒的一次心跳。",
    tracks: [{ no: "—", title: "Bloom", cn: "盛开", duration: "3:22" }],
  },
];

export default function MusicPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        {/* Page header */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose/60" />
            <span className="font-heading text-xs font-bold tracking-[0.5em] text-rose-light uppercase">
              Discography
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose/60" />
          </div>
          <h1 className="mb-4 font-heading text-5xl font-bold tracking-tight text-cantarella md:text-6xl">
            Music · 音乐
          </h1>
          <p className="mx-auto max-w-2xl font-display text-xl text-silver/80">
            每一张专辑，都是一座小小的玫瑰窗。 走近，便能听见里头的光。
          </p>
        </div>

        {/* Albums */}
        <div className="space-y-16">
          {albums.map((album, idx) => (
            <section key={album.title} className="velvet-card relative overflow-hidden rounded-3xl p-8 md:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 opacity-15">
                <RoseEmblem size={300} />
              </div>

              <div className="relative grid gap-8 md:grid-cols-[auto_1fr]">
                {/* Cover placeholder */}
                <div className="floaty">
                  <div className="relative h-48 w-48 md:h-56 md:w-56">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amethyst via-velvet to-rose opacity-60 blur-2xl" />
                    <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-silver/30 bg-gradient-to-br from-ink to-velvet">
                      <Disc3
                        className="h-24 w-24 text-rose-light/70"
                        style={{ animation: idx === 0 ? "rose-spin 20s linear infinite" : undefined }}
                      />
                      <span className="absolute bottom-3 right-3 rounded-full bg-rose/80 px-2 py-0.5 text-[10px] font-bold tracking-widest text-moon uppercase">
                        {album.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <p className="mb-2 text-xs font-bold tracking-[0.4em] text-silver/60 uppercase">
                    {album.year} · {album.type}
                  </p>
                  <h2 className="mb-2 font-heading text-4xl font-bold leading-tight text-moon">
                    {album.title}
                  </h2>
                  <p className="mb-4 text-2xl font-display text-rose-light">{album.cn}</p>
                  <p className="mb-6 max-w-xl font-display text-lg leading-relaxed text-silver/80">
                    {album.tagline}
                  </p>

                  {/* Tracklist */}
                  <ul className="divide-y divide-silver/10 border-y border-silver/10">
                    {album.tracks.map((t) => (
                      <li
                        key={t.title}
                        className="group flex items-center gap-4 py-3 transition-colors hover:bg-amethyst/10"
                      >
                        <span className="w-8 font-heading text-sm font-bold tracking-wider text-silver/50">
                          {t.no}
                        </span>
                        <button
                          aria-label={`Play ${t.title}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-silver/20 text-silver/70 transition-all group-hover:border-rose-light group-hover:text-rose-light group-hover:shadow-[0_0_15px_rgba(227,106,138,0.5)]"
                        >
                          <Play className="h-3 w-3 fill-current" />
                        </button>
                        <div className="flex-1">
                          <p className="font-heading text-base font-bold text-moon">{t.title}</p>
                          <p className="font-display text-sm text-silver/60">{t.cn}</p>
                        </div>
                        <span className="flex items-center gap-1.5 text-xs text-silver/50">
                          <Clock3 className="h-3 w-3" />
                          {t.duration}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amethyst to-rose px-5 py-2 text-xs font-bold tracking-widest text-moon uppercase transition-all hover:shadow-[0_0_25px_rgba(227,106,138,0.5)]"
                    >
                      Listen on Spotify
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full border border-silver/30 px-5 py-2 text-xs font-bold tracking-widest text-silver uppercase transition-all hover:border-rose-light hover:text-rose-light"
                    >
                      Apple Music
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full border border-silver/30 px-5 py-2 text-xs font-bold tracking-widest text-silver uppercase transition-all hover:border-rose-light hover:text-rose-light"
                    >
                      网易云
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
