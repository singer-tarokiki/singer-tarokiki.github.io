interface PaperPlaneProps {
  className?: string;
  size?: number;
}

// Minimal paper-plane mark — pays quiet tribute to Amis without being cartoonish.
export function PaperPlane({ className, size = 24 }: PaperPlaneProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 12L22 3L17 21L11 13.5L2 12Z" />
      <path d="M11 13.5L22 3" />
    </svg>
  );
}
