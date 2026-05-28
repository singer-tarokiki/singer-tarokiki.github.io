import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RoseEmblem } from "@/components/RoseEmblem";
import { Camera } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery · 画廊",
  description: "现场、写真与日常时刻 —— 在镜头里慢慢生长的塔罗。",
};

type Frame = {
  title: string;
  cn: string;
  ratio: "portrait" | "square" | "wide";
  hue: string;
};

const frames: Frame[] = [
  { title: "Backstage · Velvet Midnight", cn: "后台 · 天鹅绒午夜", ratio: "portrait", hue: "from-amethyst via-velvet to-rose" },
  { title: "Soundcheck", cn: "彩排", ratio: "wide", hue: "from-rose via-velvet to-ink" },
  { title: "Studio Session", cn: "录音棚午后", ratio: "square", hue: "from-amethyst-light via-amethyst to-velvet" },
  { title: "Curtain Call", cn: "谢幕", ratio: "portrait", hue: "from-rose-light via-rose to-velvet" },
  { title: "Lantern Walk", cn: "提灯之夜", ratio: "wide", hue: "from-gold via-rose to-amethyst" },
  { title: "Quiet Morning", cn: "安静的清晨", ratio: "square", hue: "from-silver via-amethyst-light to-amethyst" },
  { title: "Encore", cn: "返场", ratio: "portrait", hue: "from-rose via-amethyst to-ink" },
  { title: "Tour Bus", cn: "巡演路上", ratio: "wide", hue: "from-amethyst-light via-velvet to-rose" },
];

function aspectStyle(ratio: Frame["ratio"]) {
  if (ratio === "portrait") return "pb-[140%]";
  if (ratio === "wide") return "pb-[66%]";
  return "pb-[100%]";
}

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose/60" />
            <span className="font-heading text-xs font-bold tracking-[0.5em] text-rose-light uppercase">
              Frames of Light
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose/60" />
          </div>
          <h1 className="mb-4 font-heading text-5xl font-bold tracking-tight text-cantarella md:text-6xl">
            Gallery · 画廊
          </h1>
          <p className="mx-auto max-w-2xl font-display text-xl text-silver/80">
            把每一帧光，都裱进玫瑰色的窗。
          </p>
        </div>

        {/* Masonry-ish grid using CSS columns */}
        <div className="columns-1 gap-5 sm:columns-2 md:columns-3">
          {frames.map((f) => (
            <figure
              key={f.title}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-silver/15 bg-ink-soft/40"
            >
              {/* Placeholder painted with gradient + emblem */}
              <div className={`relative w-full overflow-hidden ${aspectStyle(f.ratio)}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${f.hue}`} />
                <div className="absolute inset-0 opacity-20">
                  <div className="rose-spin">
                    <RoseEmblem size={400} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-ink/30" />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/60 px-2.5 py-1 text-[10px] font-bold tracking-widest text-silver/80 uppercase backdrop-blur-sm">
                  <Camera className="h-3 w-3" />
                  Tarokiki ·
                </div>
              </div>
              <figcaption className="px-4 py-3">
                <p className="font-heading text-sm font-bold tracking-wide text-moon">{f.title}</p>
                <p className="font-display text-xs text-silver/60">{f.cn}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-12 text-center font-display text-sm italic text-silver/50">
          （图片占位中 —— 等待真正属于 Kiki 的舞台与镜头慢慢填满这里。）
        </p>
      </div>
      <Footer />
    </main>
  );
}
