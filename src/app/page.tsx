// Root path — bounce to default locale (中文).
// We can't use redirect() under static export, so render a minimal HTML page
// with both <meta refresh> and a script fallback.
import Link from 'next/link';

export const dynamic = 'force-static';

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/zh/" />
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/zh/');",
        }}
      />
      <main className="flex min-h-screen items-center justify-center text-[var(--color-text-mute)]">
        <p className="font-display text-sm tracking-[0.3em] uppercase">
          Redirecting · 跳转中 ·{' '}
          <Link href="/zh/" className="link-underline">
            Tarokiki
          </Link>
        </p>
      </main>
    </>
  );
}
