interface StarTrailProps {
  className?: string;
  width?: number;
  height?: number;
}

// Light, dreamy comet trail — fades from rose to white star.
export function StarTrail({ className, width = 480, height = 120 }: StarTrailProps) {
  return (
    <svg
      viewBox="0 0 480 120"
      width={width}
      height={height}
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="trail-light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8A4BD" stopOpacity="0" />
          <stop offset="55%" stopColor="#E8A4BD" stopOpacity="0.55" />
          <stop offset="92%" stopColor="#FFFFFF" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M0 100 Q 200 30, 460 30"
        stroke="url(#trail-light)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="460" cy="30" r="4" fill="#FFFFFF" />
      <circle cx="460" cy="30" r="9" fill="#FFFFFF" opacity="0.3" />
      <circle cx="460" cy="30" r="14" fill="#E8A4BD" opacity="0.25" />
    </svg>
  );
}
