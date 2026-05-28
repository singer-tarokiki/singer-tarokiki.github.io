import Link from 'next/link';
import { Instagram, Youtube, Music2, Mail } from 'lucide-react';

const links = [
  { icon: Music2, label: 'Spotify', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@tarokiki.com' },
];

export function Footer() {
  return (
    <footer className="border-t border-silver/10 bg-ink/70 backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-heading text-lg font-bold tracking-[0.3em] text-cantarella">
            TAROKIKI
          </p>
          <p className="mt-1 text-xs text-silver/50">
            © {new Date().getFullYear()} Tarokiki. All songs sung under moonlight.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {links.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-silver/20 text-silver/70 transition-all hover:border-rose-light/60 hover:text-rose-light hover:shadow-[0_0_20px_rgba(227,106,138,0.4)]"
            >
              <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
