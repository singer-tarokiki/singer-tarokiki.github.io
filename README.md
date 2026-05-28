# Tarokiki

> 独立歌手 **Tarokiki（塔罗琪琪）** 的个人网站。
> 主题灵感来自《鸣潮》的爱弥斯 —— 深紫天鹅绒、血玫瑰、月光银。

## 技术栈

- [Next.js 16](https://nextjs.org) (App Router, Static Export)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev) 图标
- [next-themes](https://github.com/pacocoursey/next-themes) 明暗主题切换

## 本地开发

```bash
# 安装依赖（推荐 pnpm，但 npm / yarn 也都能用）
pnpm install

# 启动开发服务器（默认 http://localhost:3000）
pnpm dev

# 构建静态站点
pnpm build
```

构建产物会输出到 `out/`，GitHub Pages workflow 会自动部署。

## 目录结构

```
src/
├─ app/
│  ├─ layout.tsx        # 全局布局 + metadata
│  ├─ page.tsx          # 首页
│  ├─ music/page.tsx    # 音乐 / 专辑
│  ├─ shows/page.tsx    # 演出排期
│  ├─ gallery/page.tsx  # 相册
│  ├─ about/page.tsx    # 关于
│  └─ globals.css       # 颜色变量 + 字体 + 动画
├─ components/
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ Hero.tsx
│  ├─ RoseEmblem.tsx    # SVG 玫瑰窗装饰
│  ├─ ThemeProvider.tsx
│  └─ ThemeToggle.tsx
└─ lib/utils.ts         # cn() 类名合并
public/
├─ favicon.svg
├─ robots.txt
├─ sitemap.xml
├─ site.webmanifest
└─ images/              # 放头像、封面、相册照片
```

## 主题色板

| Token | Hex | 用途 |
| --- | --- | --- |
| `--color-ink` | `#0E0814` | 最深的紫黑底色 |
| `--color-ink-soft` | `#1A1226` | 卡片底 |
| `--color-velvet` | `#2A1840` | 深紫天鹅绒 |
| `--color-amethyst` | `#5C2E8E` | 主紫水晶色 |
| `--color-amethyst-light` | `#9D74D9` | 高光淡紫 |
| `--color-rose` | `#B4264A` | 血玫瑰 / 主强调色 |
| `--color-rose-light` | `#E36A8A` | 花瓣粉光 |
| `--color-moon` | `#F1E4EC` | 月光奶白主文字 |
| `--color-silver` | `#C9B7D6` | 银紫副文字 |
| `--color-gold` | `#D4B97A` | 暗金线条 |

## 自定义指南

最常改的几个地方：

| 想改什么 | 改哪个文件 |
| --- | --- |
| 艺名 / Logo 文字 | `src/components/Header.tsx`、`src/components/Hero.tsx` |
| 首页文案、最新单曲 | `src/components/Hero.tsx` |
| 专辑 / 单曲列表 | `src/app/music/page.tsx` 顶部的 `albums` 数组 |
| 演出排期 | `src/app/shows/page.tsx` 顶部的 `upcoming` / `past` 数组 |
| 艺人小传、时间线 | `src/app/about/page.tsx` 顶部的 `milestones` 与正文 |
| 颜色 / 字体 | `src/app/globals.css` |
| 元信息 / SEO | `src/app/layout.tsx` |

放真实照片：把图片放进 `public/images/`，然后在对应组件里把 SVG 占位换成 `<Image src="/images/xxx.jpg" ... />`。

## 部署到 GitHub Pages

仓库已经预置好 `.github/workflows/deploy.yml`，推到 `main` 分支会自动构建并发布到 GitHub Pages。

第一次启用前需要在仓库设置里：

1. 打开 **Settings → Pages**
2. **Source** 选择 `GitHub Actions`

之后每次 `git push origin main`，几分钟后即可在
`https://singer-tarokiki.github.io` 看到最新版本。

---

For the one whose voice belongs to velvet midnight. 🌹
