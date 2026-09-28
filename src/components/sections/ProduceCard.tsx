import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { availabilityLabel, produceCategories, type ProduceItem } from "@/content/produce";
import { ArchiveImage } from "@/components/ui/ArchiveImage";
import { EnquiryButton } from "@/components/ui/EnquiryButton";

function Motif({ category }: { category: ProduceItem["category"] }) {
  // Simple single-colour line icons (Line & Earth), never photographs of other places.
  const paths: Record<ProduceItem["category"], React.ReactNode> = {
    clay: <path d="M20 14h24M22 14c-8 8-8 26 10 30 18-4 18-22 10-30M26 10h12" />,
    orchards: (
      <>
        <circle cx="32" cy="24" r="14" />
        <path d="M32 38v16M26 54h12" />
      </>
    ),
    gardens: (
      <>
        <circle cx="32" cy="24" r="6" />
        <path d="M32 12v-4M32 40v14M20 24h-4M48 24h-4M24 16l-3-3M40 16l3-3M24 32l-3 3M40 32l3 3" />
      </>
    ),
    fields: <path d="M32 54V12M32 20l-8-6M32 20l8-6M32 30l-8-6M32 30l8-6M32 40l-8-6M32 40l8-6" />,
  };
  return (
    <svg
      viewBox="0 0 64 64"
      className="produce-card__motif"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[category]}
    </svg>
  );
}

export function ProduceCard({ item, locale }: { item: ProduceItem; locale: Locale }) {
  const cat = produceCategories[item.category];
  const soon = item.availability === "coming-soon";
  return (
    <li
      className={`produce-card card card--${cat.tone} card--stitched`}
      data-category={item.category}
    >
      <div className="produce-card__media">
        {item.photo ? (
          <ArchiveImage
            id={item.photo.id}
            alt={item.photo.alt[locale]}
            sizes="(min-width:1024px) 25vw, 50vw"
          />
        ) : (
          <Motif category={item.category} />
        )}
      </div>
      <span className="produce-card__tag">{cat.tag[locale]}</span>
      <h3 className="produce-card__name">
        <span lang="hi">{item.name.hi}</span>
        {locale === "en" ? <span className="produce-card__en"> · {item.name.en}</span> : null}
      </h3>
      {locale === "hi" ? (
        <p className="produce-card__en-sub" lang="en">
          {item.name.en}
        </p>
      ) : null}
      <p className="produce-card__season">
        {item.season ? item.season[locale] : ui.beingDocumented[locale]}
      </p>
      <p className="produce-card__desc">{item.description[locale]}</p>
      {item.producer ? <p className="produce-card__producer">{item.producer[locale]}</p> : null}
      <p className="produce-card__status">
        <span aria-hidden="true">{soon ? "◌ " : "● "}</span>
        {availabilityLabel[item.availability][locale]}
      </p>
      <EnquiryButton
        locale={locale}
        topic={`${item.name.en} / ${item.name.hi}`}
        label={soon ? ui.registerInterest[locale] : undefined}
        variant="secondary"
      />
    </li>
  );
}
