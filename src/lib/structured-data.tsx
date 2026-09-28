import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { parsai } from "@/content/people";
import { absoluteUrl } from "./seo";

type Json = Record<string, unknown>;

export function JsonLd({ data }: { data: Json | Json[] }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is generated from verified content only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function websiteJsonLd(locale: Locale): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name[locale],
    url: absoluteUrl(href(locale, "home")),
    inLanguage: locale,
    description:
      locale === "hi"
        ? "जमानी की विरासत का उत्सव मनाने वाली एक स्वतंत्र सांस्कृतिक और सामुदायिक परियोजना।"
        : "An independent cultural and community project celebrating Jamani's heritage.",
  };
}

/** Place: only verified, non-private facts (no private addresses or unverified coordinates). */
export function placeJsonLd(locale: Locale): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: locale === "hi" ? "जमानी" : "Jamani",
    description:
      locale === "hi"
        ? "मध्य प्रदेश के नर्मदापुरम ज़िले में इटारसी के पास स्थित गाँव।"
        : "A village near Itarsi in Narmadapuram district, Madhya Pradesh.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jamani",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Narmadapuram district, Madhya Pradesh",
    },
    url: absoluteUrl(href(locale, "home")),
  };
}

/** Person: Harishankar Parsai — published, widely documented facts only. */
export function parsaiJsonLd(locale: Locale): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: parsai.name[locale],
    alternateName: locale === "hi" ? parsai.name.en : parsai.name.hi,
    birthDate: parsai.birthDateIso,
    deathDate: parsai.deathYear,
    birthPlace: { "@type": "Place", name: "Jamani, Madhya Pradesh, India" },
    jobTitle: locale === "hi" ? "व्यंग्यकार और लेखक" : "Satirist and writer",
    url: absoluteUrl(href(locale, "people-legacy", "harishankar-parsai")),
  };
}

/** Event: only emitted when festival dates are configured (and therefore confirmed). */
export function festivalEventJsonLd(locale: Locale): Json | null {
  const f = siteConfig.festival;
  if (!f.anantChaturdashi) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name:
      locale === "hi"
        ? "जमानी गणेश उत्सव — शास्त्रीय संगीत और कथक"
        : "Jamani Ganesh Utsav — Classical Music and Kathak",
    startDate: f.anantChaturdashi,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Jamani",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jamani",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
    },
    url: absoluteUrl(href(locale, "ganesh-utsav")),
  };
}
