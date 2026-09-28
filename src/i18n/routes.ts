import type { Bilingual, Locale } from "./config";

export type PageKey =
  | "home"
  | "history"
  | "ganesh-utsav"
  | "people-legacy"
  | "crafts-produce"
  | "gallery"
  | "experiences"
  | "plan-your-visit"
  | "sources"
  | "contribute"
  | "privacy"
  | "terms";

export const pageSlugs: Record<PageKey, string> = {
  home: "",
  history: "history",
  "ganesh-utsav": "ganesh-utsav",
  "people-legacy": "people-legacy",
  "crafts-produce": "crafts-produce",
  gallery: "gallery",
  experiences: "experiences",
  "plan-your-visit": "plan-your-visit",
  sources: "sources",
  contribute: "contribute",
  privacy: "privacy",
  terms: "terms",
};

export function href(locale: Locale, page: PageKey, hash?: string): string {
  const slug = pageSlugs[page];
  const base = slug ? `/${locale}/${slug}` : `/${locale}`;
  return hash ? `${base}#${hash}` : base;
}

/** Primary navigation, in brand-book order. */
export const primaryNav: { key: PageKey; label: Bilingual }[] = [
  { key: "history", label: { hi: "इतिहास", en: "History" } },
  { key: "ganesh-utsav", label: { hi: "गणेश उत्सव", en: "Ganesh Utsav" } },
  { key: "people-legacy", label: { hi: "व्यक्तित्व और विरासत", en: "People & Legacy" } },
  { key: "crafts-produce", label: { hi: "शिल्प और उपज", en: "Crafts & Produce" } },
  { key: "gallery", label: { hi: "चित्रदीर्घा", en: "Gallery" } },
  { key: "experiences", label: { hi: "अनुभव", en: "Experiences" } },
  { key: "plan-your-visit", label: { hi: "यात्रा की योजना", en: "Plan Your Visit" } },
];
