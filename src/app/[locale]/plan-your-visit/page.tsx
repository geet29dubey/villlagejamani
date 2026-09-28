import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { travel } from "@/content/travel";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WarliBand } from "@/components/brand/WarliBand";
import { MapEmbed } from "@/components/visit/MapEmbed";
import { ContactForm } from "@/components/visit/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "plan-your-visit",
    title: {
      hi: "यात्रा की योजना — इटारसी से जमानी कैसे पहुँचें",
      en: "Plan Your Visit — How to Reach Jamani from Itarsi",
    },
    description: {
      hi: "जमानी इटारसी से लगभग 12 किमी दूर है। सड़क और रेल मार्ग, घूमने का सही मौसम, उत्सव यात्रा और सम्मानजनक यात्रा के सुझाव।",
      en: "Jamani is about 12 km from Itarsi, Madhya Pradesh. Getting there by road and rail, the best seasons, festival travel tips and visitor guidance.",
    },
  });
}

export default async function PlanVisitPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  const facts = [
    {
      icon: "📍",
      title: hi ? "स्थान" : "Location",
      body: `${travel.location[locale]} · ${travel.distance[locale]}`,
    },
    { icon: "🛣", title: hi ? "सड़क मार्ग" : "By road", body: travel.byRoad[locale] },
    { icon: "🚆", title: hi ? "रेल मार्ग" : "By rail", body: travel.byRail[locale] },
  ];
  return (
    <>
      <PageHero
        eyebrow={hi ? "यात्रा की योजना" : "Plan your visit"}
        title={hi ? "जमानी आइए" : "Come to Jamani"}
        lede={`${travel.location[locale]} — ${travel.distance[locale]}.`}
      />
      <WarliBand />

      <section className="section section--chuna" aria-labelledby="getting-title">
        <div className="container">
          <SectionHeading
            id="getting-title"
            eyebrow={hi ? "पहुँचना" : "Getting here"}
            title={hi ? "कैसे पहुँचें" : "How to reach"}
          />
          <div className="two-col">
            <ul className="visit-facts grid" role="list">
              {facts.map((f) => (
                <li key={f.title} className="visit-fact card card--white">
                  <div className="visit-fact__icon" aria-hidden="true">
                    {f.icon}
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </li>
              ))}
            </ul>
            <MapEmbed locale={locale} />
          </div>
        </div>
      </section>

      <section className="section section--sand ground-dots" aria-labelledby="seasons-title">
        <div className="container">
          <SectionHeading
            id="seasons-title"
            eyebrow={hi ? "मौसम" : "Seasons"}
            title={hi ? "कब आएँ" : "When to visit"}
          />
          <ul
            className="grid grid--3"
            role="list"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {travel.seasons.map((s) => (
              <li key={s.title.en} className="card card--white">
                <h3>{s.title[locale]}</h3>
                <p style={{ margin: 0 }}>{s.body[locale]}</p>
              </li>
            ))}
          </ul>
          <div className="grid grid--2" style={{ marginTop: 32 }}>
            <div className="card card--indigo">
              <h3>{hi ? "उत्सव के दौरान यात्रा" : "Travelling for the festival"}</h3>
              <p style={{ margin: 0 }}>{travel.festivalTravel[locale]}</p>
            </div>
            <div className="card card--hara">
              <h3>{hi ? "बाग़ों का मौसम" : "Orchard seasons"}</h3>
              <p style={{ margin: 0 }}>{travel.orchardSeason[locale]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--chuna" aria-labelledby="respect-title">
        <div className="container grid grid--2">
          <div className="card card--white">
            <SectionHeading
              id="respect-title"
              eyebrow={hi ? "ज़िम्मेदार यात्रा" : "Responsible travel"}
              title={hi ? "सुरक्षा और ज़िम्मेदारी" : "Safety & responsibility"}
            />
            <ul className="guidance-list">
              {travel.responsibility.map((r, i) => (
                <li key={i}>{r[locale]}</li>
              ))}
            </ul>
          </div>
          <div className="card card--sand">
            <SectionHeading
              eyebrow={hi ? "फ़ोटोग्राफ़ी" : "Photography"}
              title={hi ? "सम्मान के साथ तस्वीरें" : "Photograph with respect"}
            />
            <ul className="guidance-list">
              {travel.photography.map((r, i) => (
                <li key={i}>{r[locale]}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--sand" id="contact" aria-labelledby="contact-title">
        <div className="container two-col">
          <div>
            <SectionHeading
              id="contact-title"
              eyebrow={hi ? "संपर्क" : "Contact"}
              title={hi ? "हमसे पूछें" : "Send an enquiry"}
              lede={
                hi
                  ? "यात्रा, उत्सव, अनुभव या उपज के बारे में पूछें। कृपया ध्यान दें: हम किसी का निजी पता साझा नहीं करते; मिलने की व्यवस्था बातचीत के बाद की जाती है।"
                  : "Ask about visiting, the festival, experiences or produce. Please note: we don't publish private home addresses — meeting arrangements are made after we're in touch."
              }
            />
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>
    </>
  );
}
