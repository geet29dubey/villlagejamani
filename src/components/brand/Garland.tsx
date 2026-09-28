/**
 * Toran-style marigold-and-leaf garland used as a restrained divider.
 */
export function Garland({ tone = "chuna" }: { tone?: "chuna" | "indigo" | "sand" }) {
  const bg = tone === "indigo" ? "#1A2359" : tone === "sand" ? "#F4E4C8" : "#FFF6E8";
  const id = `garland-${tone}`;
  return (
    <div className="garland" aria-hidden="true" style={{ background: bg }}>
      <svg width="100%" height="56" preserveAspectRatio="none">
        <defs>
          <pattern id={id} width="44" height="56" patternUnits="userSpaceOnUse">
            <path d="M0 6 Q22 12 44 6" fill="none" stroke="#1E1420" strokeWidth="2" />
            {/* marigold string */}
            {[14, 21, 28, 35, 42].map((y, i) => (
              <circle
                key={y}
                cx="8"
                cy={y}
                r="4.2"
                fill={i % 2 ? "#EF6C00" : "#F9A825"}
                stroke="#C45100"
                strokeWidth="0.6"
              />
            ))}
            {/* mango leaf */}
            <path d="M30 10 C24 20 26 32 30 40 C34 32 36 20 30 10 Z" fill="#2E7D32" />
            <line x1="30" y1="12" x2="30" y2="38" stroke="#1B5E20" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="56" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
