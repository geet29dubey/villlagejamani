import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { href } from "@/i18n/routes";
import { TreeSun } from "@/components/brand/TreeSun";
import { Garland } from "@/components/brand/Garland";
import { festivalDateLabel } from "@/lib/festival-dates";

const copy = {
  location: {
    hi: "नर्मदापुरम, मध्य प्रदेश · इटारसी से लगभग 12 किमी",
    en: "Narmadapuram, Madhya Pradesh · About 12 km from Itarsi",
  },
  title: { hi: "जमानी", en: "Jamani" },
  tagline: {
    hi: "परंपरा, कला और मिट्टी की जीवित कहानी",
    en: "Where tradition, art and the earth tell stories.",
  },
  body: {
    hi: "हरिशंकर परसाई की जन्मभूमि, लगभग पाँच पीढ़ियों से चली आ रही गणेश उत्सव की परंपरा, ऐतिहासिक अंतरराष्ट्रीय मित्रता और बाग़ों के सच्चे अनुभव — इटारसी से बस थोड़ी दूर।",
    en: "Discover the birthplace of Harishankar Parsai, a five-generation Ganesh Utsav tradition, historic international friendships and authentic orchard experiences—just outside Itarsi.",
  },
};

export function Hero({ locale }: { locale: Locale }) {
  const festivalWhen = festivalDateLabel(locale);
  return (
    <section className="hero ground-dots" aria-labelledby="hero-title">
      <Garland />
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="pill pill--genda hero__pill">{copy.location[locale]}</span>
          <h1 id="hero-title" className="hero__title">
            {copy.title[locale]}
            {locale === "en" ? (
              <span className="hero__title-alt" lang="hi">
                {" "}
                · जमानी
              </span>
            ) : null}
          </h1>
          <p className="hero__tagline">{copy.tagline[locale]}</p>
          <p className="hero__welcome" lang="hi">
            पधारिए, आपका स्वागत है।
            {locale === "en" ? (
              <span className="hero__welcome-en" lang="en">
                {" "}
                — Welcome, please come in.
              </span>
            ) : null}
          </p>
          <p className="hero__body">{copy.body[locale]}</p>
          <div className="btn-row btn-row--stack-mobile">
            <Link href={href(locale, "plan-your-visit")} className="btn btn--primary">
              {ui.planVisit[locale]}
            </Link>
            <Link href={href(locale, "ganesh-utsav")} className="btn btn--secondary">
              {ui.discoverGanesh[locale]}
            </Link>
          </div>
        </div>
        <div className="hero__art">
          <TreeSun className="hero__sun" />
          <Link href={href(locale, "ganesh-utsav")} className="hero__badge">
            <span className="hero__badge-title" lang="hi">
              गणेश उत्सव
            </span>
            <span className="hero__badge-date">{festivalWhen}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
