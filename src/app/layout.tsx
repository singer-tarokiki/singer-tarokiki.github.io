import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Kiki Zhang · 张塔罗 — Independent Vocalist",
    template: "%s | Kiki · Taro",
  },
  description:
    "独立歌手 Kiki Zhang（张塔罗）的官方网站 —— 收录最新单曲、演出预告、相册与故事。在午夜与晨曦的缝隙里歌唱。",
  keywords: [
    "Kiki Zhang",
    "塔罗",
    "tarokiki",
    "singer-tarokiki",
    "独立歌手",
    "Independent Vocalist",
    "中文流行",
    "Jazz Ballad",
    "Live Music",
    "Singer",
  ],
  authors: [{ name: "Kiki Zhang" }],
  creator: "Kiki Zhang",
  publisher: "Kiki Zhang",
  metadataBase: new URL("https://singer-tarokiki.github.io"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://singer-tarokiki.github.io",
    title: "Kiki Zhang · 张塔罗 — Independent Vocalist",
    description:
      "独立歌手 Kiki Zhang —— 在午夜与晨曦的缝隙里歌唱。最新单曲《Velvet Midnight》上线中。",
    siteName: "Kiki · Taro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiki Zhang · Independent Vocalist",
    description: "A voice woven from velvet midnight and silver dawn.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://singer-tarokiki.github.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Kiki Zhang",
              alternateName: ["张塔罗", "Kiki · Taro"],
              url: "https://singer-tarokiki.github.io",
              genre: ["Pop", "R&B", "Jazz Ballad"],
              description:
                "Independent vocalist singing in the seam between midnight and dawn.",
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
