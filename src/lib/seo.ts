import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { localeMeta, type Bilingual, type Locale } from "@/i18n/config";
import { href, type PageKey } from "@/i18n/routes";

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

/** Page metadata with canonical, hreflang alternates, Open Graph and Twitter cards. */
export function pageMetadata({
  locale,
  page,
  title,
  description,
  noindex = false,
}: {
  locale: Locale;
  page: PageKey;
  title: Bilingual;
  description: Bilingual;
  noindex?: boolean;
}): Metadata {
  const path = href(locale, page);
  const siteName = siteConfig.name[locale];
  return {
    metadataBase: new URL(siteConfig.url),
    title: title[locale],
    description: description[locale],
    alternates: {
      canonical: path,
      languages: {
        hi: href("hi", page),
        en: href("en", page),
        "x-default": href("hi", page),
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName,
      title: title[locale],
      description: description[locale],
      locale: localeMeta[locale].ogLocale,
      alternateLocale: [localeMeta[locale === "hi" ? "en" : "hi"].ogLocale],
      images: [
        {
          url: "/og/jamani-og.png",
          width: 1200,
          height: 630,
          alt: "Jamani — near Itarsi, Madhya Pradesh",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title[locale],
      description: description[locale],
      images: ["/og/jamani-og.png"],
    },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
