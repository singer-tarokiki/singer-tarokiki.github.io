import Link from 'next/link';
import { Disc3, Mic2, Sparkles } from 'lucide-react';
import * as motion from 'framer-motion/client';
import { RoseEmblem } from '@/components/RoseEmblem';

export function Hero() {
  return (
    <div className="flex flex-col gap-24 py-14 md:py-24" suppressHydrationWarning>
      {/* —— 主舞台 —— */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center justify-between gap-16 lg:flex-row">
          {/* 左侧：文案 */}
          <div className="flex flex-1 flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose/40 bg-rose/10 px-4 py-1.5 text-xs font-medium tracking-[0.3em] text-rose-light uppercase backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 shimmer" />
              Independent Vocalist · 独立歌手
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4 font-heading text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
            >
              <span className="block text-cantarella">Kiki Zhang</span>
              <span className="mt-2 block text-2xl font-normal tracking-[0.4em] text-silver/80 sm:text-3xl">
                张 · 塔 · 罗
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-10 max-w-xl font-display text-xl leading-relaxed text-moon/85 md:text-2xl"
            >
              在午夜与晨曦的缝隙里歌唱 —— 把
              <span className="mx-1 italic text-rose-light">玫瑰</span>、
              <span className="mx-1 italic text-amethyst-light">月光</span>
              与一整座城市的安静，缝进每一段旋律里。
              <span className="mt-3 block text-base text-silver/70">
                A voice woven from velvet midnight and silver dawn.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto"
            >
              <Link
                href="/music"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amethyst via-rose to-amethyst bg-[length:200%_100%] px-8 py-3.5 text-base font-bold tracking-widest text-moon uppercase shadow-[0_0_25px_rgba(157,116,217,0.4)] transition-all hover:bg-[position:100%_0] hover:shadow-[0_0_45px_rgba(227,106,138,0.6)]"
              >
                <Disc3 className="h-4 w-4 transition-transform group-hover:rotate-180 duration-700" />
                Listen Now
              </Link>
              <Link
                href="/shows"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-silver/40 bg-ink-soft/50 px-8 py-3.5 text-base font-bold tracking-widest text-silver uppercase backdrop-blur-sm transition-all hover:border-rose-light/60 hover:text-rose-light hover:shadow-[0_0_25px_rgba(227,106,138,0.25)]"
              >
                <Mic2 className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                Live Shows
              </Link>
            </motion.div>

            {/* 引用语 */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="mt-12 max-w-md border-l-2 border-rose/60 pl-5 font-display italic text-silver/70"
            >
              &ldquo;Sing as if the night itself were listening.&rdquo;
              <span className="mt-1 block text-sm not-italic text-silver/50">
                — 唱给夜色的人。
              </span>
            </motion.blockquote>
          </div>

          {/* 右侧：玫瑰徽章 + 头像位 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-80 w-80 md:h-[26rem] md:w-[26rem]"
          >
            {/* 旋转玫瑰窗 */}
            <div className="absolute inset-0 rose-spin">
              <RoseEmblem className="h-full w-full opacity-90" />
            </div>

            {/* 中央圆形头像位 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[22%] flex items-center justify-center"
            >
              <div className="glow-pulse relative h-full w-full overflow-hidden rounded-full border-2 border-amethyst-light/40 bg-gradient-to-br from-velvet via-ink to-velvet">
                {/* 头像占位：用户可替换为 /images/portrait.jpg */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 text-rose-light/70">
                    <circle cx="50" cy="38" r="18" fill="currentColor" opacity="0.85" />
                    <path
                      d="M20 92 Q 20 60 50 60 Q 80 60 80 92 Z"
                      fill="currentColor"
                      opacity="0.85"
                    />
                  </svg>
                </div>
                {/* 若放入实际照片，可替换为：
                    <Image src="/images/portrait.jpg" alt="Kiki" fill className="object-cover" priority />
                */}
              </div>
            </motion.div>

            {/* 浮动星尘 */}
            {[
              { top: '8%', left: '10%', delay: 0 },
              { top: '15%', right: '12%', delay: 1.2 },
              { bottom: '20%', left: '6%', delay: 2.4 },
              { bottom: '12%', right: '16%', delay: 0.6 },
            ].map((p, i) => (
              <span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-rose-light shimmer"
                style={{ ...p, animationDelay: `${p.delay}s` }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* —— 三栏：风格 / 现场 / 故事 —— */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4"
      >
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose/60" />
          <h2 className="font-heading text-sm font-bold tracking-[0.5em] text-silver/80 uppercase">
            Aria Sanctum · 咏叹之所
          </h2>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose/60" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Vocal · 声线',
              cn: '低音域柔暗，高声区清亮如玻璃。擅长 R&B、Jazz Ballad 与中文叙事抒情。',
              accent: 'rose',
            },
            {
              title: 'Stage · 现场',
              cn: '从地下 Live House 到城市音乐节 —— 一支麦克风、一束追光，便是整夜仪式。',
              accent: 'amethyst',
            },
            {
              title: 'Story · 故事',
              cn: '从塔罗牌灵感取名，从一首首私人日记长成专辑，把脆弱与勇敢写成歌。',
              accent: 'gold',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="velvet-card group rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(157,116,217,0.4)]"
            >
              <div
                className={`mb-5 h-px w-12 ${
                  card.accent === 'rose'
                    ? 'bg-gradient-to-r from-rose to-rose-light'
                    : card.accent === 'amethyst'
                    ? 'bg-gradient-to-r from-amethyst to-amethyst-light'
                    : 'bg-gradient-to-r from-gold to-rose-light'
                } transition-all group-hover:w-24`}
              />
              <h3 className="mb-3 font-heading text-2xl font-bold tracking-wide text-moon">
                {card.title}
              </h3>
              <p className="font-display text-lg leading-relaxed text-silver/85">{card.cn}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* —— 最新单曲预告 —— */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4"
      >
        <div className="velvet-card relative overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="absolute -right-20 -top-20 opacity-20 rose-spin">
            <RoseEmblem size={420} />
          </div>
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.4em] text-rose-light uppercase">
                Latest Single · 最新单曲
              </p>
              <h3 className="mb-4 font-heading text-4xl font-bold leading-tight text-moon md:text-5xl">
                Velvet Midnight
              </h3>
              <p className="mb-6 max-w-xl font-display text-lg leading-relaxed text-silver/80">
                《天鹅绒午夜》—— 一首写给所有彻夜未眠的人的歌。
                从纸钢琴的第一个音符，到鼓点落下的瞬间，邀你共度一段被星辰托住的夜晚。
              </p>
              <Link
                href="/music"
                className="group inline-flex items-center gap-3 font-heading text-sm font-bold tracking-[0.3em] text-rose-light uppercase transition-colors hover:text-moon"
              >
                Enter the Track
                <span className="h-px w-12 bg-rose-light transition-all group-hover:w-20" />
              </Link>
            </div>
            <div className="floaty">
              <div className="relative h-40 w-40 md:h-52 md:w-52">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amethyst via-velvet to-rose opacity-70 blur-2xl" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-silver/30 bg-ink/80">
                  <Disc3 className="h-20 w-20 text-rose-light/80 rose-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
