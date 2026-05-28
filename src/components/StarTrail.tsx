interface StarTrailProps {
  className?: string;
  width?: number;
  height?: number;
}

// A single elongated star trail — Amis' "voyaging star" motif, drawn as a thin arc.
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
        <linearGradient id="trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9D7DCC" stopOpacity="0" />
          <stop offset="55%" stopColor="#9D7DCC" stopOpacity="0.45" />
          <stop offset="90%" stopColor="#7FB5BF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#F4ECEF" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M0 100 Q 200 30, 460 30"
        stroke="url(#trail)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <circle cx="460" cy="30" r="3" fill="#F4ECEF" />
      <circle cx="460" cy="30" r="6" fill="#F4ECEF" opacity="0.25" />
    </svg>
  );
}
