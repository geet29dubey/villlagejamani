"use client";

import { useMemo, useState } from "react";
import type { Bilingual, Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { Lightbox } from "./Lightbox";
import type { ArchiveEntry } from "./ArchiveViewer";

type Entry = ArchiveEntry & { categories: string[] };

/** Filterable masonry gallery; photos open in the shared Lightbox. */
export function GalleryGrid({
  entries,
  categories,
  locale,
  showFilters = true,
}: {
  entries: Entry[];
  categories: [string, Bilingual][];
  locale: Locale;
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<string>("all");
  const [index, setIndex] = useState<number | null>(null);
  const visible = useMemo(
    () => (filter === "all" ? entries : entries.filter((e) => e.categories.includes(filter))),
    [entries, filter],
  );

  return (
    <>
      <div role="group" aria-label={ui.filterBy[locale]} hidden={!showFilters}>
        <ul className="filters">
          <li>
            <button
              type="button"
              className="filter-btn"
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
            >
              {ui.all[locale]} ({entries.length})
            </button>
          </li>
          {categories.map(([key, label]) => {
            const count = entries.filter((e) => e.categories.includes(key)).length;
            return (
              <li key={key}>
                <button
                  type="button"
                  className="filter-btn"
                  aria-pressed={filter === key}
                  onClick={() => setFilter(key)}
                >
                  {label[locale]} ({count})
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="visually-hidden" aria-live="polite">
        {ui.showing[locale]} {visible.length} {ui.items[locale]}
      </p>

      {visible.length === 0 ? (
        <div className="card card--white gallery-empty">
          <p style={{ margin: 0 }}>
            {locale === "hi"
              ? "इस श्रेणी के चित्र अभी जोड़े जा रहे हैं। क्या आपके पास कोई चित्र है?"
              : "Photographs for this category are still being gathered. Do you have one to share?"}
          </p>
        </div>
      ) : (
        <ul className="masonry">
          {visible.map((entry, i) => (
            <li key={entry.item.key}>
              <button
                type="button"
                className="gallery-card"
                onClick={() => setIndex(i)}
                aria-haspopup="dialog"
              >
                {entry.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element -- pre-optimised static asset
                  <img
                    src={entry.thumb.src}
                    srcSet={entry.thumb.srcSet}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    width={entry.thumb.width}
                    height={entry.thumb.height}
                    alt={entry.item.alt}
                    loading="lazy"
                    style={{ backgroundImage: `url(${entry.thumb.blur})`, backgroundSize: "cover" }}
                  />
                ) : null}
                <span className="gallery-card__body">
                  <span className="gallery-card__caption">{entry.item.caption}</span>
                  <span className="gallery-card__tags">
                    {entry.categories.map((c) => {
                      const label = categories.find(([k]) => k === c)?.[1];
                      return label ? <span key={c}>{label[locale]}</span> : null;
                    })}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <Lightbox
        items={visible.map((e) => e.item)}
        index={index}
        onChange={setIndex}
        onClose={() => setIndex(null)}
        locale={locale}
      />
    </>
  );
}
