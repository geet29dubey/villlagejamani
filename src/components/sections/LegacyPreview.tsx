import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { parsai, rsDubey, rsDubeyLifespan } from "@/content/people";
import { ifyeIntro } from "@/content/ifye";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ui } from "@/i18n/ui";

/**
 * Homepage People & Legacy: three visually balanced cards of equal size —
 * no contribution is ranked above another.
 */
export function LegacyPreview({ locale }: { locale: Locale }) {
  const hi = locale === "hi";
  const cards = [
    {
      key: "parsai",
      tone: "card--white",
      kicker: parsai.kicker[locale],
      title: parsai.name[locale],
      years: parsai.lifespan,
      body: parsai.summary[locale],
      link: href(locale, "people-legacy", parsai.id),
    },
    {
      key: "dubey",
      tone: "card--sand",
      kicker: rsDubey.kicker[locale],
      title: rsDubey.name[locale],
      years: rsDubeyLifespan(),
      body: `${rsDubey.contribution[locale]} ${rsDubey.ifyeRole[locale]}`,
      link: href(locale, "people-legacy", rsDubey.id),
    },
    {
      key: "ifye",
      tone: "card--white",
      kicker: ifyeIntro.subtitle[locale],
      title: ifyeIntro.title[locale],
      years: "1964",
      body: ifyeIntro.paragraphs[1][locale],
      link: href(locale, "people-legacy", "jamani-and-the-world"),
    },
  ];
  return (
    <section className="section section--chuna ground-dots" aria-labelledby="legacy-title">
      <div className="container">
        <SectionHeading
          id="legacy-title"
          eyebrow={hi ? "व्यक्तित्व और विरासत" : "People & Legacy"}
          title={hi ? "व्यक्तित्व और विरासत" : "People & Legacy"}
          lede={
            hi
              ? "जमानी को अनेक लोगों ने गढ़ा है — लेखकों, मेज़बानों, कलाकारों और गाँववासियों ने। उनकी कहानियाँ यहाँ बराबर सम्मान के साथ।"
              : "Jamani has been shaped by many people — writers, hosts, artists and villagers. Their stories, told here with equal respect."
          }
        />
        <ul className="legacy-grid grid grid--3" role="list">
          {cards.map((c, i) => (
            <li
              key={c.key}
              className={`legacy-card card ${c.tone} card--lift ${i === 1 ? "card--tilt-r" : ""}`}
            >
              <span className="eyebrow">{c.kicker}</span>
              <h3>{c.title}</h3>
              {c.years ? <p className="legacy-card__years">{c.years}</p> : null}
              <p>{c.body}</p>
              <Link href={c.link} className="text-link">
                {ui.readMore[locale]} →<span className="visually-hidden">: {c.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 28 }}>
          <Link href={href(locale, "people-legacy", "contributors")} className="text-link">
            {hi ? "गाँव के अन्य योगदानकर्ता →" : "More people who shaped Jamani →"}
          </Link>
        </p>
      </div>
    </section>
  );
}
