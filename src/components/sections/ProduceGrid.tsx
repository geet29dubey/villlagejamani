"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import type { ProduceCategory } from "@/content/produce";
import { produceCategories } from "@/content/produce";

/** Client-side category filter wrapping server-rendered produce cards. */
export function ProduceFilter({
  locale,
  counts,
  children,
}: {
  locale: Locale;
  counts: Record<ProduceCategory, number>;
  children: React.ReactNode;
}) {
  const [filter, setFilter] = useState<ProduceCategory | "all">("all");
  const cats = Object.keys(produceCategories) as ProduceCategory[];
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return (
    <div data-filter={filter} className="produce-filter">
      <div role="group" aria-label={ui.filterBy[locale]}>
        <ul className="filters">
          <li>
            <button
              type="button"
              className="filter-btn"
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
            >
              {ui.all[locale]} ({total})
            </button>
          </li>
          {cats.map((c) => (
            <li key={c}>
              <button
                type="button"
                className="filter-btn"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {produceCategories[c].label[locale]} ({counts[c]})
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="visually-hidden" aria-live="polite">
        {ui.showing[locale]} {filter === "all" ? total : counts[filter]} {ui.items[locale]}
      </p>
      {children}
    </div>
  );
}
