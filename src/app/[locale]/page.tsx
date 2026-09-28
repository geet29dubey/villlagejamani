import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { ui } from "@/i18n/ui";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { Hero } from "@/components/sections/Hero";
import { HistoryTimeline } from "@/components/sections/HistoryTimeline";
import { GaneshFeature } from "@/components/sections/GaneshFeature";
import { TempleSection } from "@/components/sections/TempleSection";
import { LegacyPreview } from "@/components/sections/LegacyPreview";
import { ProduceCard } from "@/components/sections/ProduceCard";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WarliBand } from "@/components/brand/WarliBand";
import { TreeSun } from "@/components/brand/TreeSun";
import { GalleryGrid } from "@/components/archive/GalleryGrid";
import { produce, produceIntro } from "@/content/produce";
import { experiences, experiencesIntro } from "@/content/experiences";
import { gallery, galleryCategories } from "@/content/gallery";
import { galleryEntries } from "@/lib/archive-items";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "home",
    title: {
      hi: "जमानी गाँव — इटारसी के पास संगीत, कथक, बाग़ और विरासत",
      en: "Jamani Village near Itarsi — Ganesh Utsav, Parsai's Birthplace & Orchards",
    },
    description: {
      hi: "इटारसी से लगभग 12 किमी दूर जमानी: हरिशंकर परसाई की जन्मभूमि, दुबे परिवार का गणेश उत्सव, शास्त्रीय संगीत और कथक, बाग़ और गाँव के अनुभव।",
      en: "Jamani, about 12 km from Itarsi, Madhya Pradesh: birthplace of Harishankar Parsai, the Dubey family's Ganesh Utsav of classical music and Kathak, orchards and village experiences.",
    },
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale: Locale = await resolveLocale(params);
  const hi = locale === "hi";
  const homeProduce = ["clay-pots", "mango", "flowers", "wheat"].map((id) =>
    produce.find((p) => p.id === id)!,
  );
  const homeExperiences = ["orchard-walk", "potters-wheel", "ganesh-evening"].map((id) =>
    experiences.find((e) => e.id === id)!,
  );
  const categories = Object.entries(galleryCategories);

  return (
    <>
      <Hero locale={locale} />
      <WarliBand />
      <HistoryTimeline locale={locale} />
      <GaneshFeature locale={locale} />
      <TempleSection locale={locale} />
      <LegacyPreview locale={locale} />

      <WarliBand />
      <section className="section section--sand ground-dots" aria-labelledby="crafts-title">
        <div className="container">
          <SectionHeading
            id="crafts-title"
            eyebrow={hi ? "शिल्प और उपज" : "Crafts & Produce"}
            eyebrowClass="eyebrow--hara"
            title={produceIntro.title[locale]}
            lede={produceIntro.lede[locale]}
          />
          <ul className="produce-grid grid grid--4" role="list">
            {homeProduce.map((item) => (
              <ProduceCard key={item.id} item={item} locale={locale} />
            ))}
          </ul>
          <div className="btn-row">
            <Link href={href(locale, "crafts-produce")} className="btn btn--secondary">
              {hi ? "सभी शिल्प और उपज देखें" : "See all crafts & produce"}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--chuna" aria-labelledby="gallery-title">
        <div className="container">
          <SectionHeading
            id="gallery-title"
            eyebrow={hi ? "चित्रदीर्घा" : "Gallery"}
            title={hi ? "जमानी की झलक" : "Glimpses of Jamani"}
            lede={
              hi
                ? "पारिवारिक अभिलेख से संगीत बैठकों और गाँव के जीवन के चित्र।"
                : "Photographs of music gatherings and village life from the family archive."
            }
          />
          <GalleryGrid
            entries={galleryEntries(gallery.slice(0, 3), locale)}
            categories={categories}
            locale={locale}
            showFilters={false}
          />
          <div className="btn-row">
            <Link href={href(locale, "gallery")} className="btn btn--secondary">
              {hi ? "पूरी चित्रदीर्घा" : "Open the full gallery"}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--indigo ground-dots" aria-labelledby="exp-title">
        <div className="container">
          <SectionHeading
            id="exp-title"
            eyebrow={hi ? "अनुभव" : "Experiences"}
            title={experiencesIntro.title[locale]}
            lede={experiencesIntro.lede[locale]}
          />
          <ul className="experience-grid grid grid--3" role="list">
            {homeExperiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} locale={locale} compact />
            ))}
          </ul>
          <div className="btn-row">
            <Link href={href(locale, "experiences")} className="btn btn--genda">
              {hi ? "सभी अनुभव देखें" : "See all experiences"}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--chuna" aria-labelledby="visit-cta-title">
        <div className="container cta-banner">
          <div>
            <span className="eyebrow">{hi ? "यात्रा की योजना" : "Plan your visit"}</span>
            <h2 id="visit-cta-title">
              {hi ? "इटारसी से बस 12 किलोमीटर" : "Just 12 km from Itarsi"}
            </h2>
            <p className="prose">
              {hi
                ? "जमानी नर्मदापुरम ज़िले में, इटारसी जंक्शन से सड़क मार्ग द्वारा आसानी से पहुँचा जा सकता है। मौसम, उत्सव और सम्मानजनक यात्रा की पूरी जानकारी देखें।"
                : "Jamani lies in Narmadapuram district, an easy road journey from Itarsi Junction. Find seasons, festival travel and guidance for a respectful visit."}
            </p>
            <div className="btn-row">
              <Link href={href(locale, "plan-your-visit")} className="btn btn--primary">
                {ui.planVisit[locale]}
              </Link>
              <Link href={href(locale, "contribute")} className="btn btn--secondary">
                {ui.contributeMemory[locale]}
              </Link>
            </div>
          </div>
          <div className="cta-banner__art" aria-hidden="true">
            <TreeSun />
          </div>
        </div>
      </section>
    </>
  );
}
