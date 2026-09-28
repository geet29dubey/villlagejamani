import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { festivalIntro } from "@/content/festival";
import { TreeSun } from "@/components/brand/TreeSun";
import { FestivalMoments } from "./FestivalMoments";
import { FestivalClaims } from "./FestivalClaims";

/** Homepage Ganesh Utsav feature — night indigo with marigold accents. */
export function GaneshFeature({ locale }: { locale: Locale }) {
  const hi = locale === "hi";
  return (
    <section
      className="section section--indigo ground-dots festival-feature"
      aria-labelledby="ganesh-title"
    >
      <div className="container">
        <div className="festival-feature__head">
          <div>
            <span className="eyebrow">
              {hi ? "गणेश उत्सव की कहानी" : "The story of Ganesh Utsav"}
            </span>
            <h2 id="ganesh-title" className="festival-feature__title" lang="hi">
              {festivalIntro.title.hi}
            </h2>
            <p className="section-head__sub">{festivalIntro.subheading[locale]}</p>
            <p className="festival-feature__summary">{festivalIntro.summary[locale]}</p>
          </div>
          <div className="festival-feature__art" aria-hidden="true">
            <TreeSun variant="warli" />
          </div>
        </div>

        <div className="festival-feature__claims card card--indigo">
          <FestivalClaims locale={locale} ids={["travel", "bullock-cart", "sadhana"]} />
          <p className="festival-feature__attribution">{festivalIntro.attribution[locale]}</p>
        </div>

        <FestivalMoments locale={locale} />

        <div className="btn-row">
          <Link href={href(locale, "ganesh-utsav")} className="btn btn--genda">
            {hi ? "उत्सव को जानें" : "Explore the Festival"}
          </Link>
          <Link href={href(locale, "ganesh-utsav", "artists")} className="btn btn--ghost-light">
            {hi ? "कलाकार और स्मृतियाँ देखें" : "View Artists and Memories"}
          </Link>
        </div>
      </div>
    </section>
  );
}
