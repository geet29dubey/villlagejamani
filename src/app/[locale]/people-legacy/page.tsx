import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { JsonLd, parsaiJsonLd } from "@/lib/structured-data";
import { PageHero } from "@/components/sections/PageHero";
import { WarliBand } from "@/components/brand/WarliBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParsaiProfile } from "@/components/people/ParsaiProfile";
import { RsDubeyProfile } from "@/components/people/RsDubeyProfile";
import { Contributors } from "@/components/people/Contributors";
import { IfyeSection } from "@/components/people/IfyeSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "people-legacy",
    title: {
      hi: "व्यक्तित्व और विरासत — हरिशंकर परसाई की जन्मभूमि जमानी",
      en: "People & Legacy — Harishankar Parsai's Birthplace, Jamani",
    },
    description: {
      hi: "जमानी में जन्मे व्यंग्यकार हरिशंकर परसाई, गाँव के निर्माता आर. एस. दुबे और 1964 के अंतरराष्ट्रीय कृषि युवा आदान-प्रदान की कहानी।",
      en: "Harishankar Parsai, the Hindi satirist born in Jamani in 1924; R. S. Dubey, a builder of the village; and Jamani's 1964 International Farm Youth Exchange connection.",
    },
  });
}

export default async function PeopleLegacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  return (
    <>
      <PageHero
        eyebrow={hi ? "व्यक्तित्व और विरासत" : "People & Legacy"}
        title={hi ? "वे लोग, जिनसे जमानी बना" : "The people who shaped Jamani"}
        lede={
          hi
            ? "लेखक, मेज़बान, कलाकार, किसान और गाँववासी — हर योगदान अपनी जगह महत्वपूर्ण है। ये कहानियाँ परिवारों, अभिलेखों और प्रकाशित स्रोतों से जोड़ी जा रही हैं।"
            : "Writers, hosts, artists, farmers and villagers — every contribution matters in its own way. These stories are drawn from families, archives and published sources."
        }
      />
      <WarliBand />

      <section className="section section--chuna" aria-labelledby="profiles-title">
        <div className="container">
          <h2 id="profiles-title" className="visually-hidden">
            {hi ? "व्यक्तित्व" : "Profiles"}
          </h2>
          <div className="people-stack">
            <ParsaiProfile locale={locale} />
            <RsDubeyProfile locale={locale} />
          </div>
        </div>
      </section>

      <IfyeSection locale={locale} />

      <section
        className="section section--sand ground-dots"
        id="contributors"
        aria-labelledby="contributors-title"
      >
        <div className="container">
          <SectionHeading
            id="contributors-title"
            eyebrow={hi ? "और भी लोग" : "More people"}
            title={hi ? "गाँव के योगदानकर्ता" : "Contributors to village life"}
          />
          <Contributors locale={locale} />
        </div>
      </section>
      <JsonLd data={parsaiJsonLd(locale)} />
    </>
  );
}
