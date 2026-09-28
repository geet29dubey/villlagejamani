"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { Lightbox, type LightboxItem } from "./Lightbox";

export interface ArchiveThumb {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  blur: string;
}

export interface ArchiveEntry {
  item: LightboxItem;
  thumb: ArchiveThumb | null;
  subtitle: string;
}

/** Thumbnail grid of archive documents that open in the full-screen Lightbox. */
export function ArchiveViewer({ entries, locale }: { entries: ArchiveEntry[]; locale: Locale }) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <ul className="archive-grid">
        {entries.map((entry, i) => (
          <li key={entry.item.key}>
            <button
              type="button"
              className="archive-thumb"
              onClick={() => setIndex(i)}
              aria-haspopup="dialog"
            >
              <span className="archive-thumb__img">
                {entry.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element -- pre-optimised static asset
                  <img
                    src={entry.thumb.src}
                    srcSet={entry.thumb.srcSet}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
                    width={entry.thumb.width}
                    height={entry.thumb.height}
                    alt={entry.item.alt}
                    loading="lazy"
                    style={{ backgroundImage: `url(${entry.thumb.blur})`, backgroundSize: "cover" }}
                  />
                ) : (
                  <span className="archive-thumb__pending">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h5" />
                    </svg>
                    {ui.scanPending[locale]}
                  </span>
                )}
              </span>
              <span className="archive-thumb__title">{entry.item.title}</span>
              <span className="archive-thumb__meta">{entry.subtitle}</span>
              <span className="archive-thumb__cta">
                {ui.openImage[locale]} <span aria-hidden="true">→</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox
        items={entries.map((e) => e.item)}
        index={index}
        onChange={setIndex}
        onClose={() => setIndex(null)}
        locale={locale}
      />
    </>
  );
}
