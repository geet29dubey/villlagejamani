"use client";

import { useEffect, useId, useState } from "react";
import type { Locale } from "@/i18n/config";
import { siteConfig } from "@/config/site";

const topics = {
  visit: { hi: "यात्रा की योजना", en: "Planning a visit" },
  festival: { hi: "गणेश उत्सव", en: "Ganesh Utsav" },
  perform: { hi: "उत्सव में प्रस्तुति", en: "Performing at the festival" },
  experience: { hi: "अनुभव", en: "Experiences" },
  produce: { hi: "शिल्प और उपज", en: "Crafts & produce" },
  archive: { hi: "चित्र या स्मृति साझा करना", en: "Sharing a photograph or memory" },
  other: { hi: "अन्य", en: "Something else" },
};

/**
 * Enquiry form. No data is stored by this site: on submit the message is handed to
 * WhatsApp (or email) on the visitor's own device.
 */
export function ContactForm({
  locale,
  defaultTopic = "visit",
}: {
  locale: Locale;
  defaultTopic?: keyof typeof topics;
}) {
  const hi = locale === "hi";
  const uid = useId();
  const [topic, setTopic] = useState<string>(defaultTopic);
  const [custom, setCustom] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("topic");
    if (t) {
      setTopic("other");
      setCustom(t);
    }
  }, []);

  const channel = siteConfig.whatsappNumber ? "whatsapp" : siteConfig.contactEmail ? "email" : null;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const when = String(data.get("when") ?? "").trim();
    const people = String(data.get("people") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const topicLabel =
      topic === "other" && custom ? custom : topics[topic as keyof typeof topics][locale];
    const body = [
      hi ? `नमस्ते, मैं ${name} हूँ।` : `Hello, this is ${name}.`,
      `${hi ? "विषय" : "Topic"}: ${topicLabel}`,
      when ? `${hi ? "संभावित तिथि" : "Dates"}: ${when}` : "",
      people ? `${hi ? "लोगों की संख्या" : "Group size"}: ${people}` : "",
      message,
      "— villagejamani.com",
    ]
      .filter(Boolean)
      .join("\n");

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(body)}`,
        "_blank",
        "noopener",
      );
      setStatus(
        hi
          ? "व्हाट्सऐप खुल रहा है — संदेश भेजने के लिए वहाँ ‘Send’ दबाएँ।"
          : "Opening WhatsApp — press Send there to deliver your message.",
      );
    } else if (channel === "email") {
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(`Jamani: ${topicLabel}`)}&body=${encodeURIComponent(body)}`;
      setStatus(hi ? "आपका ईमेल ऐप खुल रहा है।" : "Opening your email app.");
    } else {
      setStatus(
        hi
          ? "पूछताछ के लिए संपर्क नंबर शीघ्र जोड़ा जा रहा है। कृपया कुछ समय बाद पुनः प्रयास करें।"
          : "The enquiry contact number is being set up. Please try again soon.",
      );
    }
  }

  const id = (s: string) => `${uid}-${s}`;
  return (
    <form className="contact-form card card--white" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor={id("name")}>{hi ? "आपका नाम" : "Your name"} *</label>
        <input id={id("name")} name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor={id("topic")}>{hi ? "विषय" : "Topic"}</label>
        <select id={id("topic")} value={topic} onChange={(e) => setTopic(e.target.value)}>
          {Object.entries(topics).map(([k, v]) => (
            <option key={k} value={k}>
              {v[locale]}
            </option>
          ))}
        </select>
      </div>
      {topic === "other" ? (
        <div className="field">
          <label htmlFor={id("custom")}>{hi ? "किस बारे में?" : "About what?"}</label>
          <input id={id("custom")} value={custom} onChange={(e) => setCustom(e.target.value)} />
        </div>
      ) : null}
      <div className="field-row">
        <div className="field">
          <label htmlFor={id("when")}>{hi ? "संभावित तिथि (वैकल्पिक)" : "Dates (optional)"}</label>
          <input id={id("when")} name="when" />
        </div>
        <div className="field">
          <label htmlFor={id("people")}>
            {hi ? "लोगों की संख्या (वैकल्पिक)" : "Group size (optional)"}
          </label>
          <input id={id("people")} name="people" inputMode="numeric" />
        </div>
      </div>
      <div className="field">
        <label htmlFor={id("message")}>{hi ? "संदेश" : "Message"} *</label>
        <textarea id={id("message")} name="message" rows={4} required />
      </div>
      <p className="field-hint">
        {hi
          ? "यह वेबसाइट आपकी जानकारी संग्रहीत नहीं करती। संदेश आपके अपने व्हाट्सऐप/ईमेल से भेजा जाता है।"
          : "This website doesn't store your details. Your message is sent from your own WhatsApp or email."}
      </p>
      <button type="submit" className="btn btn--primary">
        {channel === "email"
          ? hi
            ? "ईमेल से भेजें"
            : "Send by email"
          : hi
            ? "व्हाट्सऐप पर भेजें"
            : "Send on WhatsApp"}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
