import { WarliFigure } from "./WarliFigure";

const CX = 200;
const CY = 200;

function round(n: number) {
  return Math.round(n * 100) / 100;
}

function Rays({ count = 32, inner = 132, outerA = 196, outerB = 176 }) {
  const rays = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const half = Math.PI / count;
    const outer = i % 2 ? outerB : outerA;
    const p1 = [CX + Math.cos(a - half) * inner, CY + Math.sin(a - half) * inner];
    const p2 = [CX + Math.cos(a) * outer, CY + Math.sin(a) * outer];
    const p3 = [CX + Math.cos(a + half) * inner, CY + Math.sin(a + half) * inner];
    rays.push(
      <polygon
        key={i}
        points={`${round(p1[0])},${round(p1[1])} ${round(p2[0])},${round(p2[1])} ${round(p3[0])},${round(p3[1])}`}
        fill={i % 2 ? "#F9A825" : "#EF6C00"}
      />,
    );
  }
  return <g>{rays}</g>;
}

function DotRing({
  r,
  count,
  size,
  color,
}: {
  r: number;
  count: number;
  size: number;
  color: string;
}) {
  return (
    <g fill={color}>
      {Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2;
        return (
          <circle
            key={i}
            cx={round(CX + Math.cos(a) * r)}
            cy={round(CY + Math.sin(a) * r)}
            r={size}
          />
        );
      })}
    </g>
  );
}

/**
 * The brand-book tree-and-sun motif (Brand Board 02) — a design sketch, not
 * commissioned Gond artwork. Dots and dashes fill every shape.
 */
export function TreeSun({
  className,
  variant = "tree",
}: {
  className?: string;
  variant?: "tree" | "warli";
}) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      <Rays />
      <circle cx={CX} cy={CY} r="140" fill="#F9A825" />
      <DotRing r={128} count={44} size={3.6} color="#EF6C00" />
      <DotRing r={112} count={38} size={3.2} color="#EF6C00" />
      {variant === "tree" ? (
        <>
          <circle cx={CX} cy={CY + 10} r="86" fill="#EF6C00" />
          <path d="M191 196 L209 196 L214 318 L186 318 Z" fill="#6D2E1F" />
          <path
            d="M200 232 L178 206 M200 250 L224 214"
            stroke="#6D2E1F"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <ellipse cx="163" cy="160" rx="62" ry="70" fill="#2E7D32" />
          <ellipse cx="237" cy="160" rx="62" ry="70" fill="#2E7D32" />
          <ellipse cx="200" cy="150" rx="40" ry="66" fill="#2E7D32" />
          {/* Gond fill: columns of dots and dashes */}
          <g fill="#FFF6E8">
            {[122, 140, 158, 176, 194, 212, 230, 248, 266, 282].map((x, col) =>
              [0, 1, 2, 3, 4, 5].map((row) => {
                const y = 112 + row * 18 + (col % 2) * 9;
                const dx = x - 200;
                const inside = (dx * dx) / (95 * 95) + ((y - 158) * (y - 158)) / (68 * 68) < 1;
                if (!inside) return null;
                return (col + row) % 3 === 0 ? (
                  <rect
                    key={`${x}-${row}`}
                    x={x - 1.6}
                    y={y - 9}
                    width="3.2"
                    height="18"
                    rx="1.6"
                  />
                ) : (
                  <circle key={`${x}-${row}`} cx={x} cy={y} r="3.2" />
                );
              }),
            )}
          </g>
          {[
            [150, 214],
            [228, 208],
            [262, 176],
            [188, 108],
            [136, 184],
          ].map(([x, y]) => (
            <ellipse
              key={`${x}${y}`}
              cx={x}
              cy={y}
              rx="9"
              ry="12"
              fill="#F9A825"
              stroke="#EF6C00"
              strokeWidth="2"
            />
          ))}
        </>
      ) : (
        <>
          <circle cx={CX} cy={CY} r="96" fill="#EF6C00" />
          <circle cx={CX} cy={CY} r="86" fill="#A6432B" />
          <circle cx={CX} cy={CY} r="9" fill="#FFFFFF" />
          <circle
            cx={CX}
            cy={CY}
            r="16"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="2 3"
          />
          {Array.from({ length: 10 }, (_, i) => {
            const a = (i / 10) * Math.PI * 2;
            return (
              <WarliFigure
                key={`o${i}`}
                x={round(CX + Math.cos(a) * 64)}
                y={round(CY + Math.sin(a) * 64 - 10)}
                scale={0.9}
                color="#FFFFFF"
                armsUp={i % 2 === 0}
              />
            );
          })}
          {Array.from({ length: 6 }, (_, i) => {
            const a = (i / 6) * Math.PI * 2 + 0.5;
            return (
              <WarliFigure
                key={`i${i}`}
                x={round(CX + Math.cos(a) * 38)}
                y={round(CY + Math.sin(a) * 38 - 9)}
                scale={0.75}
                color="#FFFFFF"
              />
            );
          })}
        </>
      )}
    </svg>
  );
}
