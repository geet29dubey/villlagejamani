/**
 * A single-colour Warli figure: circle head, two triangles for the body,
 * stick limbs. Always drawn in one colour (white on geru, or kajal on chuna).
 * (x, y) is the top of the head; natural height is ~22 units before scaling.
 */
export function WarliFigure({
  x,
  y,
  scale = 1,
  color,
  armsUp = false,
}: {
  x: number;
  y: number;
  scale?: number;
  color: string;
  armsUp?: boolean;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill={color}
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <circle cx="0" cy="2.2" r="2.2" stroke="none" />
      <path d="M-4 5 L4 5 L0 11 Z" stroke="none" />
      <path d="M0 11 L-4 17 L4 17 Z" stroke="none" />
      {armsUp ? (
        <path d="M-3.5 5.5 L-7 1 M3.5 5.5 L7 1" fill="none" />
      ) : (
        <path d="M-3.5 5.5 L-7.5 9 M3.5 5.5 L7.5 9" fill="none" />
      )}
      <path d="M-2.5 17 L-4 22 M2.5 17 L4 22" fill="none" />
    </g>
  );
}
