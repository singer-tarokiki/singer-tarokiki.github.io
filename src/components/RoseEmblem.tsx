interface RoseEmblemProps {
  className?: string;
  size?: number;
}

// A decorative rose-window / sigil — drawn purely in SVG so no images required.
export function RoseEmblem({ className, size = 280 }: RoseEmblemProps) {
  return (
    <svg
      viewBox="0 0 280 280"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="roseCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E36A8A" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#B4264A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2A1840" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="petalGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9D74D9" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#B4264A" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Outer ring */}
      <circle cx="140" cy="140" r="130" fill="none" stroke="#9D74D9" strokeOpacity="0.35" strokeWidth="0.75" />
      <circle cx="140" cy="140" r="118" fill="none" stroke="#D4B97A" strokeOpacity="0.25" strokeWidth="0.5" strokeDasharray="2 4" />

      {/* Twelve petals */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        return (
          <g key={i} transform={`rotate(${angle} 140 140)`}>
            <path
              d="M140 30 C 155 70, 155 105, 140 140 C 125 105, 125 70, 140 30 Z"
              fill="url(#petalGrad)"
              opacity="0.55"
            />
            <path
              d="M140 60 C 148 90, 148 115, 140 140 C 132 115, 132 90, 140 60 Z"
              fill="#E36A8A"
              opacity="0.35"
            />
          </g>
        );
      })}

      {/* Inner star */}
      <g transform="translate(140 140)">
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2="-95"
            stroke="#C9B7D6"
            strokeOpacity="0.4"
            strokeWidth="0.5"
            transform={`rotate(${i * 45})`}
          />
        ))}
      </g>

      {/* Core */}
      <circle cx="140" cy="140" r="46" fill="url(#roseCore)" />
      <circle cx="140" cy="140" r="14" fill="#F1E4EC" opacity="0.85" />
      <circle cx="140" cy="140" r="6" fill="#B4264A" />
    </svg>
  );
}
