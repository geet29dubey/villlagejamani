import Link from "next/link";
import type { Metadata } from "next";
import { href } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { HistoryTimeline } from "@/components/sections/HistoryTimeline";
import { TempleSection } from "@/components/sections/TempleSection";
import { PageHero } from "@/components/sections/PageHero";
import { WarliBand } from "@/components/brand/WarliBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArchiveImage } from "@/components/ui/ArchiveImage";
import { gallery } from "@/content/gallery";
import { ContributeLink } from "@/components/ui/Placeholders";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "history",
    title: { hi: "जमानी का इतिहास", en: "History of Jamani Village, Narmadapuram" },
    description: {
      hi: "जमानी गाँव का इतिहास: हरिशंकर परसाई का जन्म (1924), 1964 का अंतरराष्ट्रीय कृषि युवा आदान-प्रदान और दुबे परिवार की गणेश उत्सव परंपरा।",
      en: "The history of Jamani village near Itarsi: Harishankar Parsai's birth in 1924, the 1964 International Farm Youth Exchange and the Dubey family's Ganesh Utsav tradition.",
    },
  });
}

export default async function HistoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  const panchayat = gallery.find((g) => g.id === "gram-panchayat-bhawan")!;
  return (
    <>
      <PageHero
        eyebrow={hi ? "इतिहास" : "History"}
        title={hi ? "मिट्टी में लिखी कहानियाँ" : "Stories written in the soil"}
        lede={
          hi
            ? "जमानी का इतिहास बुज़ुर्गों की स्मृतियों, परिवारों के अभिलेखों और प्रकाशित स्रोतों से धीरे-धीरे जोड़ा जा रहा है। हर प्रविष्टि के साथ बताया गया है कि वह कैसे ज्ञात है।"
            : "Jamani's history is being pieced together from elders' memories, family archives and published sources. Every entry shows how it is known."
        }
        art="warli"
      />
      <WarliBand />
      <HistoryTimeline locale={locale} />

      <section className="section section--chuna" aria-labelledby="village-life-title">
        <div className="container two-col two-col--center">
          <div>
            <SectionHeading
              id="village-life-title"
              eyebrow={hi ? "अभिलेख से" : "From the archive"}
              title={hi ? "गाँव का सार्वजनिक जीवन" : "Village public life"}
            />
            <p className="prose">{panchayat.caption[locale]}</p>
            <p className="prose pending">
              {hi
                ? "स्थान, वर्ष और चित्र में दिख रहे लोगों की पहचान की जा रही है।"
                : "The place, year and the people pictured are being identified."}
            </p>
            <ContributeLink locale={locale} />
          </div>
          <figure className="media-frame" style={{ margin: 0, boxShadow: "var(--shadow-offset)" }}>
            <ArchiveImage
              id={panchayat.imageId}
              alt={panchayat.alt[locale]}
              sizes="(min-width: 900px) 45vw, 100vw"
            />
          </figure>
        </div>
      </section>

      <TempleSection locale={locale} />

      <section className="section section--sand section--tight">
        <div className="container">
          <p className="prose" style={{ marginBottom: 12 }}>
            {hi
              ? "जमानी को दुनिया से जोड़ने वाले 1964 के अंतरराष्ट्रीय आदान-प्रदान की कहानी पढ़ें।"
              : "Read the story of the 1964 international exchange that connected Jamani with the world."}
          </p>
          <Link
            className="btn btn--primary"
            href={href(locale, "people-legacy", "jamani-and-the-world")}
          >
            {hi ? "जमानी और दुनिया" : "Jamani and the World"}
          </Link>
        </div>
      </section>
    </>
  );
}
