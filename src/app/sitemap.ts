import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";
import { href, type PageKey } from "@/i18n/routes";

export const dynamic = "force-static";

const pages: { key: PageKey; priority: number }[] = [
  { key: "home", priority: 1 },
  { key: "ganesh-utsav", priority: 0.9 },
  { key: "people-legacy", priority: 0.9 },
  { key: "history", priority: 0.8 },
  { key: "plan-your-visit", priority: 0.8 },
  { key: "crafts-produce", priority: 0.7 },
  { key: "experiences", priority: 0.7 },
  { key: "gallery", priority: 0.7 },
  { key: "sources", priority: 0.4 },
  { key: "contribute", priority: 0.4 },
  { key: "privacy", priority: 0.2 },
  { key: "terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ key, priority }) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}${href(locale, key)}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: {
          hi: `${siteConfig.url}${href("hi", key)}`,
          en: `${siteConfig.url}${href("en", key)}`,
        },
      },
    })),
  );
}
