import type { SVGAttributes } from 'react';

interface Props extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  size?: number;
}

// A four-point sparkle, used inline as cute punctuation.
export function SparkleIcon({ className, size = 16, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
      {...rest}
    >
      <path d="M12 0 L13.5 9 L22 12 L13.5 15 L12 24 L10.5 15 L2 12 L10.5 9 Z" opacity="0.95" />
      <circle cx="20" cy="4" r="1.4" opacity="0.55" />
      <circle cx="4" cy="20" r="1.2" opacity="0.4" />
    </svg>
  );
}
