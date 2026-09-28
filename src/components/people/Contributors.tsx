import type { Locale } from "@/i18n/config";
import { contributors, contributorCategories, type ContributorCategory } from "@/content/people";
import { VerificationBadge } from "@/components/ui/Verification";
import { ArchiveImage } from "@/components/ui/ArchiveImage";
import { ContributeLink } from "@/components/ui/Placeholders";
import { Quote } from "@/components/ui/Quote";

/**
 * Reusable, expandable format for additional contributors. Add entries to
 * src/content/people.ts — they appear here grouped by category, no redesign needed.
 */
export function Contributors({ locale }: { locale: Locale }) {
  const hi = locale === "hi";
  const published = contributors.filter((c) => c.consentToPublish);
  const categories = Object.keys(contributorCategories) as ContributorCategory[];

  return (
    <div className="contributors">
      {published.length ? (
        categories.map((cat) => {
          const people = published.filter((p) => p.category === cat);
          if (!people.length) return null;
          return (
            <section key={cat} aria-labelledby={`cat-${cat}`} className="contributors__group">
              <h3 id={`cat-${cat}`}>{contributorCategories[cat][locale]}</h3>
              <ul className="grid grid--3" role="list">
                {people.map((p) => (
                  <li key={p.id} className="card card--white contributor-card">
                    {p.portrait ? (
                      <div className="media-frame" style={{ marginBottom: 12 }}>
                        <ArchiveImage
                          id={p.portrait.id}
                          alt={p.portrait.alt[locale]}
                          sizes="(min-width:1024px) 30vw, 90vw"
                        />
                      </div>
                    ) : null}
                    <h4>{p.name[locale]}</h4>
                    <p className="contributor-card__meta">
                      {p.role ? p.role[locale] : contributorCategories[p.category][locale]}
                      {p.lifespan ? ` · ${p.lifespan}` : ""}
                    </p>
                    {p.story ? <p>{p.story[locale]}</p> : null}
                    {p.quote ? (
                      <Quote
                        quote={p.quote}
                        locale={locale}
                        placeholder={{ hi: "", en: "" }}
                        tone="sand"
                      />
                    ) : null}
                    <VerificationBadge status={p.verificationStatus} locale={locale} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })
      ) : (
        <div className="contributors__empty card card--white">
          <p>
            {hi
              ? "जमानी को गढ़ने वाले अनेक लोग हैं — बुज़ुर्ग, किसान, शिक्षक, कलाकार, शिल्पकार, सांस्कृतिक आयोजक, सामाजिक कार्यकर्ता और दुबे परिवार के सदस्य। उनकी कहानियाँ, उनकी या उनके परिवार की सहमति से, यहाँ जोड़ी जाएँगी।"
              : "Many people have shaped Jamani — elders, farmers, teachers, artists, craftspeople, cultural organisers, social contributors and members of the wider Dubey family. Their stories will be added here with their, or their family's, consent."}
          </p>
          <ul className="tag-list" aria-label={hi ? "श्रेणियाँ" : "Categories"}>
            {categories.map((c) => (
              <li key={c}>{contributorCategories[c][locale]}</li>
            ))}
          </ul>
          <ContributeLink locale={locale} />
        </div>
      )}
    </div>
  );
}
