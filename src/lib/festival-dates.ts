import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";

export function parseDate(iso: string | null): Date | null {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00+05:30`);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function formatDate(iso: string | null, locale: Locale): string | null {
  const d = parseDate(iso);
  if (!d) return null;
  return new Intl.DateTimeFormat(locale === "hi" ? "hi-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(d);
}

/** Short label for the festival badge — never a raw placeholder. */
export function festivalDateLabel(locale: Locale): string {
  const f = siteConfig.festival;
  const main = formatDate(f.anantChaturdashi, locale);
  if (main) return locale === "hi" ? `अनंत चतुर्दशी · ${main}` : `Anant Chaturdashi · ${main}`;
  return locale === "hi" ? "अनंत चतुर्दशी की रात" : "Anant Chaturdashi night";
}
