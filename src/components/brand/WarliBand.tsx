/**
 * Decorative Warli border: a chain of dancers holding hands.
 * Brand rule: white on geru, or kajal on chuna — never multicolour.
 */
export function WarliBand({ variant = "geru" }: { variant?: "geru" | "chuna" }) {
  const color = variant === "geru" ? "#FFFFFF" : "#1E1420";
  const figures = Array.from({ length: 12 }, (_, i) => i * 20 + 10);
  const id = `warli-${variant}`;
  return (
    <div
      className={`warli-band${variant === "chuna" ? " warli-band--chuna" : ""}`}
      aria-hidden="true"
    >
      <svg width="100%" height="46" preserveAspectRatio="none">
        <defs>
          <pattern id={id} width="240" height="46" patternUnits="userSpaceOnUse">
            <line x1="0" y1="18" x2="240" y2="18" stroke={color} strokeWidth="1.4" />
            {figures.map((x) => (
              <g
                key={x}
                transform={`translate(${x} 8)`}
                fill={color}
                stroke={color}
                strokeWidth="1.4"
                strokeLinecap="round"
              >
                <circle cx="0" cy="3" r="3" stroke="none" />
                <path d="M-5 7 L5 7 L0 15 Z" stroke="none" />
                <path d="M0 15 L-5 23 L5 23 Z" stroke="none" />
                <path d="M-4 8 L-10 10 M4 8 L10 10" fill="none" />
                <path d="M-3 23 L-6 31 M3 23 L6 31" fill="none" />
              </g>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="46" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
