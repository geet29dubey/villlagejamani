import type { Locale } from "@/i18n/config";
import { festivalMoments } from "@/content/festival";
import { PhotoSlot } from "@/components/ui/Placeholders";

/** Three large cards: Sthapana · Classical Music and Kathak · Visarjan. */
export function FestivalMoments({
  locale,
  headingLevel = 3,
}: {
  locale: Locale;
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="moments grid grid--3" role="list">
      {festivalMoments.map((m, i) => (
        <li
          key={m.id}
          id={`moment-${m.id}`}
          className={`moment card card--${m.tone} card--stitched card--lift ${i === 0 ? "card--tilt-l" : i === 2 ? "card--tilt-r" : ""}`}
        >
          <PhotoSlot locale={locale} need={m.photoNeed} />
          <span className="pill moment__when">{m.when[locale]}</span>
          <H className="moment__title display">{m.title[locale]}</H>
          <p className="moment__body">{m.body[locale]}</p>
        </li>
      ))}
    </ul>
  );
}
