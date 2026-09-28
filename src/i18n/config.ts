export const locales = ["hi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "hi";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeMeta: Record<Locale, { label: string; htmlLang: string; ogLocale: string }> = {
  hi: { label: "हिन्दी", htmlLang: "hi", ogLocale: "hi_IN" },
  en: { label: "EN", htmlLang: "en", ogLocale: "en_IN" },
};

/** A string available in both site languages. */
export type Bilingual = { hi: string; en: string };

export function t(value: Bilingual, locale: Locale): string {
  return value[locale];
}

/** Swap the locale segment of a path, preserving the rest of the page path and hash. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split("/");
  if (parts.length > 1 && isLocale(parts[1])) {
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  }
  return `/${target}`;
}
