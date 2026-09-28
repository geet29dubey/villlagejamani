import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { ContributeLink } from "@/components/ui/Placeholders";
import { PageHero } from "@/components/sections/PageHero";
import { VerificationBadge } from "@/components/ui/Verification";
import { gallery } from "@/content/gallery";
import { ifyeDocuments } from "@/content/ifye";
import type { VerificationStatus } from "@/content/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "sources",
    title: { hi: "स्रोत और आभार", en: "Sources & Acknowledgements" },
    description: {
      hi: "इस वेबसाइट की ऐतिहासिक सामग्री के स्रोत, सत्यापन की स्थिति और चित्रों के श्रेय।",
      en: "Sources, verification states and image credits for the historical content on this website.",
    },
  });
}

const statuses: { status: VerificationStatus; desc: { hi: string; en: string } }[] = [
  {
    status: "verified-published",
    desc: {
      hi: "प्रकाशित, स्वतंत्र स्रोतों से पुष्ट तथ्य।",
      en: "Facts confirmed by published, independent sources.",
    },
  },
  {
    status: "family-archive",
    desc: {
      hi: "दुबे परिवार के पास सुरक्षित दस्तावेज़, पत्र और चित्र।",
      en: "Documents, letters and photographs held by the Dubey family.",
    },
  },
  {
    status: "oral-history",
    desc: {
      hi: "परिवार और गाँववासियों की स्मृतियाँ, जैसी उन्होंने बताईं।",
      en: "Memories of the family and villagers, as they tell them.",
    },
  },
  {
    status: "awaiting-confirmation",
    desc: {
      hi: "ऐसी जानकारी जिसकी पुष्टि अभी की जा रही है।",
      en: "Information that is still being confirmed.",
    },
  },
];

export default async function SourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  return (
    <>
      <PageHero
        eyebrow={hi ? "स्रोत" : "Sources"}
        title={hi ? "स्रोत और आभार" : "Sources & acknowledgements"}
        lede={
          hi
            ? "हम कोई ऐतिहासिक तथ्य, तिथि, उद्धरण या चित्र गढ़ते नहीं हैं। हर जानकारी के साथ उसकी सत्यापन स्थिति दिखाई जाती है।"
            : "We do not invent historical facts, dates, quotations or photographs. Every record shows how it is known."
        }
        art={null}
      />
      <section className="section section--chuna">
        <div className="container container--narrow legal">
          <h2>{hi ? "सत्यापन की स्थितियाँ" : "Verification states"}</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
            {statuses.map((s) => (
              <li key={s.status}>
                <VerificationBadge status={s.status} locale={locale} /> — {s.desc[locale]}
              </li>
            ))}
          </ul>

          <h2>{hi ? "प्रकाशित स्रोत" : "Published sources"}</h2>
          <p>
            {hi
              ? "हरिशंकर परसाई के जन्म (22 अगस्त 1924, जमानी) और साहित्य अकादमी सम्मान की जानकारी उनके प्रकाशित जीवन-परिचयों पर आधारित है। विस्तृत संदर्भ-सूची तैयार की जा रही है।"
              : "Information on Harishankar Parsai's birth (22 August 1924, Jamani) and Sahitya Akademi recognition is based on his published biographies. A detailed bibliography is being prepared."}
          </p>

          <h2 id="credits">{hi ? "चित्र और अभिलेख श्रेय" : "Image & archive credits"}</h2>
          <ul>
            {gallery.map((g) => (
              <li key={g.id}>
                {g.caption[locale]} — {g.sourceName}. {g.usagePermission[locale]}.
              </li>
            ))}
            {ifyeDocuments.map((d) => (
              <li key={d.id}>
                {d.title[locale]} ({d.approximateDate}) — {d.sourceName}.
              </li>
            ))}
          </ul>
          <p>
            {hi
              ? "ब्रांड के गोंड और वारली रूपांकन डिज़ाइन-रेखाचित्र हैं। अंतिम गोंड कलाकृति एक गोंड कलाकार द्वारा बनाई जाएगी और उन्हें श्रेय दिया जाएगा।"
              : "The Gond- and Warli-inspired motifs are design sketches from the Jamani brand system. Final Gond artwork will be painted by a Gond artist and credited by name."}
          </p>

          <h2>{hi ? "आभार" : "Acknowledgements"}</h2>
          <p>
            {hi
              ? "दुबे परिवार, जमानी के गाँववासियों और उन सभी का आभार जिन्होंने अपनी स्मृतियाँ, चित्र और दस्तावेज़ साझा किए।"
              : "With thanks to the Dubey family, the people of Jamani and everyone who has shared memories, photographs and documents."}
          </p>
          <ContributeLink locale={locale} />
        </div>
      </section>
    </>
  );
}
