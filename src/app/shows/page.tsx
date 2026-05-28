import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, CalendarDays, Ticket, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shows · 演出",
  description: "Kiki Zhang 的演出预告、巡演排期与往期现场。",
};

type Show = {
  date: string;
  weekday: string;
  city: string;
  venue: string;
  status: "open" | "soldout" | "past";
  note?: string;
};

const upcoming: Show[] = [
  {
    date: "06.21",
    weekday: "FRI",
    city: "上海 Shanghai",
    venue: "MAO Livehouse · 西藏南路",
    status: "open",
    note: "Velvet Midnight EP 巡演首场",
  },
  {
    date: "07.05",
    weekday: "FRI",
    city: "北京 Beijing",
    venue: "DDC · 黄昏黎明俱乐部",
    status: "open",
  },
  {
    date: "07.19",
    weekday: "FRI",
    city: "成都 Chengdu",
    venue: "正火艺术中心",
    status: "soldout",
  },
  {
    date: "08.02",
    weekday: "FRI",
    city: "广州 Guangzhou",
    venue: "MAO Livehouse",
    status: "open",
  },
];

const past: Show[] = [
  {
    date: "2024.12.21",
    weekday: "",
    city: "上海",
    venue: "Modernsky Lab · 冬至特别场",
    status: "past",
  },
  {
    date: "2024.10.05",
    weekday: "",
    city: "杭州",
    venue: "西湖音乐节",
    status: "past",
  },
  {
    date: "2024.07.13",
    weekday: "",
    city: "南京",
    venue: "欧拉艺术空间",
    status: "past",
  },
];

function statusChip(status: Show["status"]) {
  if (status === "open")
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-rose-light/60 bg-rose/15 px-3 py-1 text-[10px] font-bold tracking-widest text-rose-light uppercase">
        On Sale · 售票中
      </span>
    );
  if (status === "soldout")
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-silver/40 bg-silver/10 px-3 py-1 text-[10px] font-bold tracking-widest text-silver uppercase">
        Sold Out · 售罄
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-silver/20 bg-ink-soft/40 px-3 py-1 text-[10px] font-bold tracking-widest text-silver/60 uppercase">
      Archive · 往期
    </span>
  );
}

export default function ShowsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose/60" />
            <span className="font-heading text-xs font-bold tracking-[0.5em] text-rose-light uppercase">
              Live Calendar
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose/60" />
          </div>
          <h1 className="mb-4 font-heading text-5xl font-bold tracking-tight text-cantarella md:text-6xl">
            Shows · 演出
          </h1>
          <p className="mx-auto max-w-2xl font-display text-xl text-silver/80">
            城市与城市之间的玫瑰仪式，敬请前来。
          </p>
        </div>

        {/* Upcoming */}
        <section className="mb-20">
          <h2 className="mb-8 flex items-center gap-3 font-heading text-2xl font-bold tracking-wider text-moon">
            <CalendarDays className="h-5 w-5 text-rose-light" />
            Upcoming Tour · 2025 巡演
          </h2>
          <div className="space-y-4">
            {upcoming.map((s) => (
              <div
                key={`${s.date}-${s.city}`}
                className="velvet-card group flex flex-col gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-amethyst-light/40 hover:shadow-[0_15px_30px_-10px_rgba(157,116,217,0.4)] md:flex-row md:items-center md:gap-8"
              >
                {/* Date block */}
                <div className="flex w-full items-center gap-4 border-b border-silver/15 pb-4 md:w-32 md:flex-col md:items-start md:border-b-0 md:border-r md:pb-0 md:pr-6">
                  <div className="font-heading text-3xl font-bold text-cantarella md:text-4xl">{s.date}</div>
                  <div className="text-xs font-bold tracking-[0.3em] text-silver/60 uppercase">{s.weekday}</div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="mb-1 flex items-center gap-2 font-heading text-xl font-bold text-moon">
                    <MapPin className="h-4 w-4 text-rose-light" />
                    {s.city}
                  </p>
                  <p className="font-display text-base text-silver/80">{s.venue}</p>
                  {s.note && (
                    <p className="mt-2 inline-block rounded-full bg-amethyst/15 px-3 py-1 text-xs tracking-wider text-amethyst-light">
                      ✦ {s.note}
                    </p>
                  )}
                </div>

                {/* Status + CTA */}
                <div className="flex items-center justify-between gap-4 md:flex-col md:items-end md:gap-3">
                  {statusChip(s.status)}
                  {s.status === "open" && (
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amethyst to-rose px-5 py-2 text-xs font-bold tracking-widest text-moon uppercase transition-all hover:shadow-[0_0_20px_rgba(227,106,138,0.6)]"
                    >
                      <Ticket className="h-3.5 w-3.5" />
                      购票
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past */}
        <section>
          <h2 className="mb-8 flex items-center gap-3 font-heading text-2xl font-bold tracking-wider text-moon">
            <CalendarDays className="h-5 w-5 text-silver/60" />
            Past Performances · 往期现场
          </h2>
          <div className="space-y-3">
            {past.map((s) => (
              <div
                key={`${s.date}-${s.city}`}
                className="flex items-center justify-between gap-4 rounded-xl border border-silver/10 bg-ink-soft/40 px-5 py-4 transition-colors hover:border-silver/20"
              >
                <div className="flex items-center gap-4">
                  <span className="font-heading text-sm font-bold tracking-wider text-silver/60">
                    {s.date}
                  </span>
                  <span className="h-4 w-px bg-silver/20" />
                  <div>
                    <p className="font-heading text-base font-bold text-moon/90">{s.city}</p>
                    <p className="font-display text-sm text-silver/60">{s.venue}</p>
                  </div>
                </div>
                {statusChip(s.status)}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
