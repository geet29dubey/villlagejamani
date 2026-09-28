import { WarliFigure } from "./WarliFigure";

/**
 * Jamani brand mark (Brand Board 01): a tree inside a geru disc,
 * ringed with a dotted line, with a row of Warli dancers at its roots.
 */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      <circle cx="50" cy="50" r="49" fill="#A6432B" />
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="#FFF6E8"
        strokeWidth="1.6"
        strokeDasharray="0.1 4"
        strokeLinecap="round"
      />
      <rect x="47.5" y="42" width="5" height="30" rx="1.5" fill="#1E1420" />
      <ellipse cx="41" cy="36" rx="15" ry="17" fill="#3F6B34" />
      <ellipse cx="59" cy="36" rx="15" ry="17" fill="#3F6B34" />
      {[34, 40, 46, 54, 60, 66].map((x, i) => (
        <g key={x} fill="#FFF6E8">
          <circle cx={x} cy={26 + (i % 2) * 3} r="1.3" />
          <circle cx={x} cy={33 + (i % 2) * 3} r="1.3" />
          <circle cx={x} cy={40 + (i % 2) * 3} r="1.3" />
        </g>
      ))}
      <circle cx="44" cy="46" r="2.6" fill="#F2A93B" />
      <circle cx="58" cy="44" r="2.6" fill="#F2A93B" />
      <line x1="22" y1="72" x2="78" y2="72" stroke="#FFF6E8" strokeWidth="1.4" />
      {[28, 39, 50, 61, 72].map((x) => (
        <WarliFigure key={x} x={x} y={73} scale={0.5} color="#FFF6E8" />
      ))}
    </svg>
  );
}
