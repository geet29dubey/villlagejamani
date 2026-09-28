export function SectionHeading({
  id,
  eyebrow,
  title,
  sub,
  lede,
  level = 2,
  eyebrowClass,
  lang,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  lede?: React.ReactNode;
  level?: 1 | 2;
  eyebrowClass?: string;
  /** Set when the title is in a different language to the page (e.g. Hindi title on EN page). */
  lang?: string;
}) {
  const H = level === 1 ? "h1" : "h2";
  return (
    <header className="section-head">
      {eyebrow ? (
        <span className={["eyebrow", eyebrowClass].filter(Boolean).join(" ")}>{eyebrow}</span>
      ) : null}
      <H id={id} lang={lang}>
        {title}
      </H>
      {sub ? <p className="section-head__sub">{sub}</p> : null}
      {lede ? <p className="lede">{lede}</p> : null}
    </header>
  );
}
