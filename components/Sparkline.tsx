interface SparklineProps {
  seed?: number;
  className?: string;
}

/** Deterministic decorative line graphic for metric cards. */
export default function Sparkline({ seed = 7, className = "" }: SparklineProps) {
  const points: number[] = [];
  let v = seed;
  for (let i = 0; i < 24; i++) {
    v = (v * 1103515245 + 12345) % 2147483648;
    points.push(18 - ((v / 2147483648) * 12 + i * 0.12));
  }
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${(i / 23) * 120},${p.toFixed(1)}`)
    .join(" ");

  return (
    <svg
      viewBox="0 0 120 20"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d={path}
        fill="none"
        stroke="#E9A13B"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}
