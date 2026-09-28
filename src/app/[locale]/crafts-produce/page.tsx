import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { produce, produceIntro, produceCategories, type ProduceCategory } from "@/content/produce";
import { PageHero } from "@/components/sections/PageHero";
import { ProduceCard } from "@/components/sections/ProduceCard";
import { ProduceFilter } from "@/components/sections/ProduceGrid";
import { WarliBand } from "@/components/brand/WarliBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "crafts-produce",
    title: {
      hi: "शिल्प और उपज — मिट्टी के बर्तन, आम, संतरा",
      en: "Crafts & Produce — Clay Pots, Mangoes & Oranges near Itarsi",
    },
    description: {
      hi: "जमानी के हाथ से बने मिट्टी के मटके और दीये, बाग़ों के आम, संतरे और केले, फूल, सब्ज़ियाँ और खेतों की उपज।",
      en: "Handmade clay pots and lamps, orchard mangoes, oranges and bananas, flowers, vegetables and field crops from Jamani village.",
    },
  });
}

export default async function CraftsProducePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  const counts = Object.fromEntries(
    (Object.keys(produceCategories) as ProduceCategory[]).map((c) => [
      c,
      produce.filter((p) => p.category === c).length,
    ]),
  ) as Record<ProduceCategory, number>;
  return (
    <>
      <PageHero
        eyebrow={hi ? "शिल्प और उपज" : "Crafts & Produce"}
        title={produceIntro.title[locale]}
        lede={produceIntro.lede[locale]}
      />
      <WarliBand />
      <section
        className="section section--sand ground-dots"
        aria-label={hi ? "उत्पाद" : "Products"}
      >
        <div className="container">
          <div className="notice" style={{ marginBottom: 28 }}>
            <span className="notice__icon" aria-hidden="true">
              ℹ
            </span>
            <p style={{ margin: 0 }}>{produceIntro.note[locale]}</p>
          </div>
          <ProduceFilter locale={locale} counts={counts}>
            <ul className="produce-grid grid grid--4" role="list">
              {produce.map((item) => (
                <ProduceCard key={item.id} item={item} locale={locale} />
              ))}
            </ul>
          </ProduceFilter>
        </div>
      </section>
    </>
  );
}
