import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/visit/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "contribute",
    title: { hi: "चित्र या स्मृति साझा करें", en: "Contribute a Photograph or Memory" },
    description: {
      hi: "जमानी के इतिहास, उत्सव और लोगों से जुड़े चित्र, दस्तावेज़ और स्मृतियाँ साझा करें।",
      en: "Share photographs, documents and memories of Jamani's history, festival and people.",
    },
  });
}

export default async function ContributePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  const points = hi
    ? [
        "पुराने चित्र — उत्सव, संगीत बैठकें, गाँव का जीवन, खेत और बाग़।",
        "कार्यक्रम-पत्रक, पत्र, निमंत्रण या समाचार-पत्र की कतरनें।",
        "किसी बुज़ुर्ग की स्मृति या गाँव की कोई कहावत — उनके अपने शब्दों में।",
        "चित्र में दिख रहे लोगों, स्थान और वर्ष की पहचान।",
      ]
    : [
        "Old photographs — the festival, music gatherings, village life, fields and orchards.",
        "Programme leaflets, letters, invitations or newspaper cuttings.",
        "An elder's memory or a village saying — in their own words.",
        "Help identifying the people, places and years in existing photographs.",
      ];
  return (
    <>
      <PageHero
        eyebrow={hi ? "योगदान" : "Contribute"}
        title={hi ? "चित्र या स्मृति साझा करें" : "Contribute a photograph or memory"}
        lede={
          hi
            ? "जमानी का अभिलेख सबकी साझा स्मृति से बनता है। आप जो भी साझा करें, हम उसे आपकी अनुमति और श्रेय के साथ ही प्रकाशित करेंगे।"
            : "Jamani's archive is built from shared memory. Anything you share will be published only with your permission and credit."
        }
      />
      <section className="section section--sand">
        <div className="container two-col">
          <div className="card card--white">
            <h2 style={{ fontSize: "var(--step-2)" }}>
              {hi ? "हम क्या खोज रहे हैं" : "What we are looking for"}
            </h2>
            <ul className="guidance-list">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p style={{ margin: 0 }}>
              {hi
                ? "मूल चित्र और दस्तावेज़ आपके पास ही रहेंगे — हम केवल अनुमति से स्कैन या प्रति लेते हैं।"
                : "Original photographs and documents stay with you — we only scan or copy them with your permission."}
            </p>
          </div>
          <ContactForm locale={locale} defaultTopic="archive" />
        </div>
      </section>
    </>
  );
}
