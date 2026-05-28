import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://singer-tarokiki.github.io"),
  title: {
    default: "Tarokiki · Vocalist for Wuthering Waves",
    template: "%s · Tarokiki",
  },
  description:
    "Official site of Tarokiki — independent vocalist for Wuthering Waves (鸣潮 / 鳴潮 / 명조).",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      zh: "/zh",
      en: "/en",
      ja: "/ja",
      ko: "/ko",
    },
  },
  openGraph: {
    type: "website",
    url: "https://singer-tarokiki.github.io",
    siteName: "Tarokiki",
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
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
