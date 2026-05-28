// Floating stars scattered through the background — purely decorative.
// Use seeded deterministic positions so SSR & client render identically.
import { cn } from '@/lib/utils';

interface Star {
  x: number;   // percent
  y: number;   // percent
  size: number; // px
  delay: number;
  hue: 'rose' | 'violet' | 'sky' | 'gold';
}

const palette: Record<Star['hue'], string> = {
  rose: 'rgba(232, 164, 189, 0.85)',
  violet: 'rgba(184, 154, 196, 0.85)',
  sky: 'rgba(180, 212, 224, 0.95)',
  gold: 'rgba(232, 200, 152, 0.85)',
};

const stars: Star[] = [
  { x: 6,  y: 8,   size: 3,   delay: 0,   hue: 'rose'   },
  { x: 14, y: 22,  size: 5,   delay: 0.4, hue: 'violet' },
  { x: 24, y: 6,   size: 2.5, delay: 1.0, hue: 'sky'    },
  { x: 32, y: 18,  size: 4,   delay: 1.6, hue: 'rose'   },
  { x: 42, y: 4,   size: 3,   delay: 0.8, hue: 'gold'   },
  { x: 51, y: 16,  size: 5,   delay: 2.2, hue: 'violet' },
  { x: 61, y: 7,   size: 3.5, delay: 1.4, hue: 'sky'    },
  { x: 70, y: 22,  size: 4,   delay: 0.2, hue: 'rose'   },
  { x: 81, y: 9,   size: 3,   delay: 1.8, hue: 'violet' },
  { x: 90, y: 19,  size: 4.5, delay: 0.6, hue: 'rose'   },
  { x: 4,  y: 38,  size: 3,   delay: 2.4, hue: 'gold'   },
  { x: 16, y: 48,  size: 4.5, delay: 0.9, hue: 'rose'   },
  { x: 28, y: 36,  size: 2.5, delay: 1.2, hue: 'sky'    },
  { x: 38, y: 52,  size: 3.5, delay: 2.0, hue: 'violet' },
  { x: 50, y: 38,  size: 5,   delay: 0.5, hue: 'rose'   },
  { x: 62, y: 50,  size: 3,   delay: 1.7, hue: 'gold'   },
  { x: 74, y: 36,  size: 4,   delay: 2.5, hue: 'violet' },
  { x: 86, y: 48,  size: 3.5, delay: 0.3, hue: 'sky'    },
  { x: 96, y: 38,  size: 2.5, delay: 1.1, hue: 'rose'   },
  { x: 9,  y: 68,  size: 4,   delay: 2.7, hue: 'violet' },
  { x: 22, y: 78,  size: 3,   delay: 0.6, hue: 'rose'   },
  { x: 34, y: 66,  size: 5,   delay: 1.5, hue: 'sky'    },
  { x: 46, y: 82,  size: 3.5, delay: 2.1, hue: 'gold'   },
  { x: 56, y: 70,  size: 4,   delay: 0.7, hue: 'rose'   },
  { x: 68, y: 80,  size: 3,   delay: 1.9, hue: 'violet' },
  { x: 78, y: 68,  size: 4.5, delay: 0.4, hue: 'rose'   },
  { x: 88, y: 78,  size: 3,   delay: 2.3, hue: 'sky'    },
  { x: 12, y: 92,  size: 4,   delay: 1.3, hue: 'violet' },
  { x: 44, y: 96,  size: 3,   delay: 0.1, hue: 'gold'   },
  { x: 72, y: 94,  size: 4.5, delay: 2.6, hue: 'rose'   },
];

interface Props {
  className?: string;
  /** when true, also include a single occasional shooting star */
  shootingStar?: boolean;
}

export function Starfield({ className, shootingStar = false }: Props) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: palette[s.hue],
            boxShadow: `0 0 ${s.size * 2.5}px ${palette[s.hue]}`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
      {shootingStar && (
        <span
          className="absolute shooting"
          style={{
            top: '0',
            left: '0',
            width: '120px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(232, 164, 189, 0.9), rgba(255, 255, 255, 1))',
          }}
        />
      )}
    </div>
  );
}
