import { TreeSun } from "@/components/brand/TreeSun";
import { Garland } from "@/components/brand/Garland";

export function PageHero({
  eyebrow,
  title,
  lede,
  tone = "chuna",
  art = "tree",
  children,
  titleLang,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: "chuna" | "indigo";
  art?: "tree" | "warli" | null;
  children?: React.ReactNode;
  titleLang?: string;
}) {
  return (
    <section
      className={`page-hero ${tone === "indigo" ? "page-hero--indigo section--indigo" : "ground-dots"}`}
      style={{ paddingTop: 0 }}
    >
      <Garland tone={tone === "indigo" ? "indigo" : "chuna"} />
      <div className="container page-hero__grid" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }}>
        <div>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 lang={titleLang}>{title}</h1>
          {lede ? <p className="lede">{lede}</p> : null}
          {children}
        </div>
        {art ? (
          <div className="page-hero__art" aria-hidden="true">
            <TreeSun variant={art} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
