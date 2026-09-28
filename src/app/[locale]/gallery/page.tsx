import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { gallery, galleryCategories } from "@/content/gallery";
import { galleryEntries } from "@/lib/archive-items";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryGrid } from "@/components/archive/GalleryGrid";
import { ContributeLink } from "@/components/ui/Placeholders";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "gallery",
    title: { hi: "चित्रदीर्घा — जमानी की झलक", en: "Gallery — Historic Photographs of Jamani" },
    description: {
      hi: "जमानी की संगीत बैठकों, गाँव के जीवन और पारिवारिक अभिलेख के ऐतिहासिक चित्र।",
      en: "Historic photographs of music gatherings, village life and the family archive of Jamani, near Itarsi.",
    },
  });
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  return (
    <>
      <PageHero
        eyebrow={hi ? "चित्रदीर्घा" : "Gallery"}
        title={hi ? "जमानी की झलक" : "Glimpses of Jamani"}
        lede={
          hi
            ? "हर चित्र के साथ उसका स्रोत, अनुमति और ज्ञात विवरण दिया गया है। केवल जमानी से जुड़े वास्तविक चित्र — कोई स्टॉक फ़ोटो नहीं।"
            : "Every photograph carries its source, permission and known details. Only genuine photographs connected with Jamani — no stock imagery."
        }
      >
        <ContributeLink locale={locale} />
      </PageHero>
      <section className="section section--chuna" aria-label={hi ? "चित्र" : "Photographs"}>
        <div className="container">
          <GalleryGrid
            entries={galleryEntries(gallery, locale)}
            categories={Object.entries(galleryCategories)}
            locale={locale}
          />
        </div>
      </section>
    </>
  );
}
