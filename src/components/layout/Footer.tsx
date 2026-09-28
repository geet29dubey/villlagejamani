import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { href, primaryNav } from "@/i18n/routes";
import { LogoMark } from "@/components/brand/Logo";
import { WarliBand } from "@/components/brand/WarliBand";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer({ locale }: { locale: Locale }) {
  const hi = locale === "hi";
  return (
    <footer className="site-footer">
      <WarliBand />
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link
            href={href(locale, "home")}
            className="brand"
            aria-label={`${ui.brandName[locale]} — ${ui.home[locale]}`}
          >
            <LogoMark className="brand__mark" />
            <span className="brand__text" aria-hidden="true">
              <span className="brand__name" lang="hi">
                जमानी
              </span>
              <span className="brand__sub">{hi ? "ग्राम जमानी" : "Village Jamani"}</span>
            </span>
          </Link>
          <p style={{ marginTop: 16 }}>
            {hi ? "ग्राम जमानी" : "Village Jamani"}
            <br />
            {hi ? "इटारसी के पास, मध्य प्रदेश" : "Near Itarsi, Madhya Pradesh"}
          </p>
          <LanguageSwitcher locale={locale} />
        </div>

        <div>
          <h2>{hi ? "नेविगेशन" : "Navigate"}</h2>
          <ul className="footer-links">
            {primaryNav.map((item) => (
              <li key={item.key}>
                <Link href={href(locale, item.key)}>{item.label[locale]}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>{hi ? "अभिलेख और स्रोत" : "Archive & sources"}</h2>
          <ul className="footer-links">
            <li>
              <Link href={href(locale, "sources")}>
                {hi ? "स्रोत और आभार" : "Sources & acknowledgements"}
              </Link>
            </li>
            <li>
              <Link href={href(locale, "sources", "credits")}>
                {hi ? "चित्र और अभिलेख श्रेय" : "Image & archive credits"}
              </Link>
            </li>
            <li>
              <Link href={href(locale, "contribute")}>{ui.contributeMemory[locale]}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>{hi ? "जानकारी" : "About"}</h2>
          <ul className="footer-links">
            <li>
              <Link href={href(locale, "plan-your-visit", "contact")}>
                {hi ? "संपर्क" : "Contact"}
              </Link>
            </li>
            <li>
              <Link href={href(locale, "privacy")}>{hi ? "गोपनीयता" : "Privacy"}</Link>
            </li>
            <li>
              <Link href={href(locale, "terms")}>{hi ? "नियम और शर्तें" : "Terms"}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-disclaimer">
        <p>
          {hi
            ? "जमानी की विरासत का उत्सव मनाने वाली एक स्वतंत्र सांस्कृतिक और सामुदायिक परियोजना।"
            : "An independent cultural and community project celebrating Jamani’s heritage."}
        </p>
        <p>© {new Date().getFullYear()} villagejamani.com</p>
      </div>
    </footer>
  );
}
