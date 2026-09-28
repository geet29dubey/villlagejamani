import type { Locale } from "@/i18n/config";
import { ifyeIntro, ifyeDocuments, rayRoppBio } from "@/content/ifye";
import { siteConfig } from "@/config/site";
import { ifyeEntries } from "@/lib/archive-items";
import { ArchiveViewer } from "@/components/archive/ArchiveViewer";
import { VerificationBadge, EditorialFlag, EditorialNote } from "@/components/ui/Verification";

/** "Jamani and the World" — the 1964 International Farm Youth Exchange. */
export function IfyeSection({ locale }: { locale: Locale }) {
  const hi = locale === "hi";
  const featured = ifyeDocuments.find((d) => d.featured)!;
  const bioItems = rayRoppBio.items.filter(
    (i) => !i.requiresSource || i.source || siteConfig.editorialMode,
  );
  const withheld = rayRoppBio.items.some((i) => i.requiresSource && !i.source);

  return (
    <section
      className="section section--kajal ifye"
      id="jamani-and-the-world"
      aria-labelledby="ifye-title"
    >
      <div className="container">
        <header className="section-head ifye__head">
          <span className="eyebrow">{hi ? "अभिलेख से · 1964" : "From the archive · 1964"}</span>
          <h2 id="ifye-title">{ifyeIntro.title[locale]}</h2>
          <p className="section-head__sub">{ifyeIntro.subtitle[locale]}</p>
        </header>

        <div className="two-col two-col--wide-left">
          <div className="prose ifye__text">
            {ifyeIntro.paragraphs.map((p, i) => (
              <p key={i}>{p[locale]}</p>
            ))}
            <figure className="ifye__motto">
              <blockquote lang="en">{ifyeIntro.motto.en}</blockquote>
              <figcaption>{ifyeIntro.mottoNote[locale]}</figcaption>
            </figure>
            <VerificationBadge status="family-archive" locale={locale} />
          </div>

          <article className="card card--white ifye__feature" aria-labelledby="ray-ropp-title">
            <span className="pill pill--genda">
              {hi ? "1964 भारत प्रतिनिधि" : "1964 Delegate to India"}
            </span>
            <h3 id="ray-ropp-title" className="display ifye__name">
              {rayRoppBio.name}
            </h3>
            <p className="ifye__home">{rayRoppBio.hometown}</p>
            <p>{featured.caption[locale]}</p>
            <details className="disclosure">
              <summary>
                {hi ? "रे रॉप: संक्षिप्त जीवन-परिचय" : "Ray Ropp: a short biography"}
              </summary>
              <div className="disclosure__body">
                <ul className="bio-list">
                  {bioItems.map((item, i) => (
                    <li key={i}>
                      {item.text[locale]}
                      {item.requiresSource && !item.source ? (
                        <EditorialFlag>Needs external source before publication</EditorialFlag>
                      ) : null}
                    </li>
                  ))}
                </ul>
                {withheld && !siteConfig.editorialMode ? (
                  <p className="pending">
                    {hi
                      ? "उनके जीवन और कार्य का विस्तृत परिचय स्रोतों की पुष्टि के बाद जोड़ा जाएगा।"
                      : "A fuller account of his life and work will be added once sources are verified."}
                  </p>
                ) : null}
                <EditorialNote note="Do not publish 'legendary', award details, exact service duration or current organisational positions without source verification." />
              </div>
            </details>
          </article>
        </div>

        <div className="ifye__archive">
          <h3 className="ifye__archive-title">{hi ? "अभिलेख देखें" : "Explore the archive"}</h3>
          <p className="ifye__archive-note">
            {hi
              ? "कार्ड खोलकर ज़ूम करें और प्रतिलेख पढ़ें। स्रोत: दुबे परिवार अभिलेख।"
              : "Open a card to zoom in and read the transcription. Source: Dubey Family Archive."}
          </p>
          <ArchiveViewer entries={ifyeEntries(ifyeDocuments, locale)} locale={locale} />
          {ifyeDocuments.map((d) => (
            <EditorialNote key={d.id} note={`${d.id}: ${d.editorialNotes}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
