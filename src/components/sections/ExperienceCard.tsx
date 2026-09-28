import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import type { Experience } from "@/content/experiences";
import { experiencesIntro } from "@/content/experiences";
import { EnquiryButton } from "@/components/ui/EnquiryButton";

export function ExperienceCard({
  exp,
  locale,
  compact = false,
}: {
  exp: Experience;
  locale: Locale;
  compact?: boolean;
}) {
  const hi = locale === "hi";
  const tbc = hi ? "पुष्टि होना शेष" : "To be confirmed";
  const rows: [string, string][] = [
    [hi ? "अवधि" : "Duration", exp.duration?.[locale] ?? tbc],
    [hi ? "मौसम" : "Season", exp.season?.[locale] ?? tbc],
    [hi ? "समूह" : "Group size", exp.groupSize?.[locale] ?? tbc],
    [hi ? "शुल्क" : "Price", exp.price?.[locale] ?? ui.enquire[locale]],
  ];
  return (
    <li className={`experience-card card card--white`}>
      <div
        className={`experience-card__band experience-card__band--${exp.tone}`}
        aria-hidden="true"
      />
      {exp.status === "under-development" ? (
        <p className="experience-card__status">
          <span aria-hidden="true">◌ </span>
          {experiencesIntro.status[locale]}
        </p>
      ) : null}
      <h3>{exp.title[locale]}</h3>
      <p>{exp.summary[locale]}</p>
      <dl className="meta-list">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      {compact ? null : (
        <details className="disclosure experience-card__more">
          <summary>{hi ? "शामिल, पहुँच और सुरक्षा" : "Included, access & safety"}</summary>
          <div className="disclosure__body">
            <h4>{hi ? "क्या शामिल है" : "What's included"}</h4>
            <ul>
              {exp.included.map((i) => (
                <li key={i.en}>{i[locale]}</li>
              ))}
            </ul>
            <h4>{hi ? "पहुँच संबंधी जानकारी" : "Accessibility"}</h4>
            <p>{exp.accessibility?.[locale] ?? tbc}</p>
            <h4>{hi ? "सुरक्षा" : "Safety"}</h4>
            <p style={{ marginBottom: 0 }}>{exp.safety[locale]}</p>
          </div>
        </details>
      )}
      <div className="experience-card__cta">
        <EnquiryButton
          locale={locale}
          topic={exp.title.en}
          label={exp.status === "under-development" ? ui.registerInterest[locale] : undefined}
        />
      </div>
    </li>
  );
}
