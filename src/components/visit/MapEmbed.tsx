import type { Locale } from "@/i18n/config";
import { siteConfig } from "@/config/site";

/** Configurable map of the village area — never a private residence. */
export function MapEmbed({ locale }: { locale: Locale }) {
  const hi = locale === "hi";
  if (siteConfig.mapEmbedUrl) {
    return (
      <div className="map-embed card">
        <iframe
          src={siteConfig.mapEmbedUrl}
          title={hi ? "जमानी और इटारसी का नक़्शा" : "Map of Jamani and Itarsi"}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }
  return (
    <div className="map-embed map-embed--fallback card card--sand">
      <svg viewBox="0 0 320 180" aria-hidden="true" className="map-embed__sketch">
        <path
          d="M20 150 C90 120 140 140 200 100 S290 60 300 40"
          fill="none"
          stroke="#1E1420"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
        <circle cx="40" cy="143" r="10" fill="#1A2359" />
        <circle cx="290" cy="46" r="12" fill="#A6432B" />
      </svg>
      <div className="map-embed__labels">
        <span>{hi ? "इटारसी" : "Itarsi"}</span>
        <span className="map-embed__km">{hi ? "≈ 12 किमी" : "≈ 12 km"}</span>
        <span>{hi ? "जमानी" : "Jamani"}</span>
      </div>
      <a
        className="btn btn--secondary btn--sm"
        href={siteConfig.mapSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {hi ? "नक़्शे पर देखें" : "View on map"}
        <span className="visually-hidden"> ({hi ? "नई विंडो में" : "opens in a new tab"})</span>
      </a>
    </div>
  );
}
