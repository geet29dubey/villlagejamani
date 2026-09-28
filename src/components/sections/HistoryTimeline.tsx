import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { timeline, villageIntro, originNote, elderOriginAccount } from "@/content/history";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VerificationBadge, EditorialNote } from "@/components/ui/Verification";
import { Quote } from "@/components/ui/Quote";

export function HistoryTimeline({
  locale,
  headingLevel = 2,
}: {
  locale: Locale;
  headingLevel?: 1 | 2;
}) {
  const hi = locale === "hi";
  return (
    <section className="section section--sand ground-dots" aria-labelledby="history-title">
      <div className="container two-col two-col--history">
        <div className="history-intro">
          <SectionHeading
            id="history-title"
            level={headingLevel}
            eyebrow={hi ? "इतिहास" : "Village history"}
            eyebrowClass="eyebrow--mor"
            title={hi ? "गाँव का इतिहास" : "The story of Jamani"}
          />
          <div className="prose history-intro__text">
            <p>{villageIntro[locale]}</p>
            <p>{originNote[locale]}</p>
          </div>
          <Quote
            quote={elderOriginAccount}
            locale={locale}
            placeholder={{
              hi: "जमानी के आरंभ की कथा, किसी बुज़ुर्ग की ज़ुबानी — जल्द ही यहाँ, उनके अपने शब्दों में।",
              en: "The story of how Jamani began, in the words of a village elder — to be recorded and shared here in their own words.",
            }}
          />
        </div>

        <ol className="timeline">
          {timeline.map((entry) => (
            <li
              key={entry.id}
              className={`timeline__item card card--${entry.tone === "chuna" ? "white" : entry.tone}`}
            >
              <p className="timeline__date">
                {entry.dateLabel ? (
                  entry.dateLabel[locale]
                ) : (
                  <span className="timeline__date--pending">{ui.dateBeingDocumented[locale]}</span>
                )}
              </p>
              <div className="timeline__content">
                <h3>{entry.title[locale]}</h3>
                {entry.body ? <p>{entry.body[locale]}</p> : null}
                {entry.hideBadge ? null : (
                  <VerificationBadge status={entry.verificationStatus} locale={locale} />
                )}
                <EditorialNote note={entry.editorialNotes} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
