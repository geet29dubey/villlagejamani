import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { experiences, experiencesIntro } from "@/content/experiences";
import { PageHero } from "@/components/sections/PageHero";
import { ExperienceCard } from "@/components/sections/ExperienceCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "experiences",
    title: {
      hi: "गाँव के अनुभव — बाग़, कुम्हार का चाक, उत्सव",
      en: "Orchard & Village Experiences near Itarsi",
    },
    description: {
      hi: "जमानी में बाग़ की सैर, फल तोड़ना, गाँव का भोजन, कुम्हार का चाक, खेतों की सैर और गणेश उत्सव — अपनी रुचि दर्ज करें।",
      en: "Orchard walks, fruit picking, village meals, the potter's wheel, farm visits and Ganesh Utsav evenings in Jamani near Itarsi — register your interest.",
    },
  });
}

export default async function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  return (
    <>
      <PageHero
        eyebrow={hi ? "अनुभव" : "Experiences"}
        title={experiencesIntro.title[locale]}
        lede={experiencesIntro.lede[locale]}
      >
        <p className="notice notice--genda" style={{ marginTop: 16 }}>
          <span className="notice__icon" aria-hidden="true">
            ◌
          </span>
          <span>{experiencesIntro.status[locale]}</span>
        </p>
      </PageHero>
      <section
        className="section section--indigo ground-dots"
        aria-label={hi ? "अनुभवों की सूची" : "List of experiences"}
      >
        <div className="container">
          <ul className="experience-grid grid grid--3" role="list">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} locale={locale} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
