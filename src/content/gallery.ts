import type { Bilingual, SourceMeta } from "./types";

export type GalleryCategory =
  | "ganesh-utsav"
  | "classical-music"
  | "kathak"
  | "orchards"
  | "agriculture"
  | "crafts"
  | "people"
  | "historical-archive"
  | "village-life";

export const galleryCategories: Record<GalleryCategory, Bilingual> = {
  "ganesh-utsav": { hi: "गणेश उत्सव", en: "Ganesh Utsav" },
  "classical-music": { hi: "शास्त्रीय संगीत", en: "Classical Music" },
  kathak: { hi: "कथक", en: "Kathak" },
  orchards: { hi: "बाग़", en: "Orchards" },
  agriculture: { hi: "खेती", en: "Agriculture" },
  crafts: { hi: "शिल्प", en: "Crafts" },
  people: { hi: "लोग", en: "People" },
  "historical-archive": { hi: "ऐतिहासिक अभिलेख", en: "Historical Archive" },
  "village-life": { hi: "गाँव का जीवन", en: "Village Life" },
};

export interface GalleryPhoto extends SourceMeta {
  id: string;
  imageId: string;
  categories: GalleryCategory[];
  caption: Bilingual;
  alt: Bilingual;
  /** Null renders "Date being documented". */
  approximateDate: string | null;
  photographer: Bilingual | null;
  /** Null renders "Being identified". Only name people with consent. */
  peoplePictured: Bilingual | null;
  usagePermission: Bilingual;
  /** Visible text in the photo, transcribed exactly as written. */
  transcription?: string[];
}

const archiveSource = {
  sourceType: "photograph" as const,
  sourceName: "Dubey Family Archive",
  sourceDate: null,
  verificationStatus: "family-archive" as const,
  imageRights: "family-permission-granted" as const,
  photographer: null,
  peoplePictured: null,
  approximateDate: null,
  usagePermission: {
    hi: "दुबे परिवार की अनुमति से प्रकाशित",
    en: "Published with permission of the Dubey family",
  },
};

/**
 * Archival photographs supplied for this project. Captions describe only what is visible —
 * dates, places, occasions and people are left for the family to identify.
 */
export const gallery: GalleryPhoto[] = [
  {
    id: "music-gathering-room",
    imageId: "archive-music-gathering-room",
    categories: ["classical-music", "historical-archive"],
    caption: {
      hi: "एक कक्ष में शास्त्रीय संगीत की बैठक — तबला, हारमोनियम, तानपुरा और सारंगी के साथ कलाकार; दीवार पर चित्रों की पंक्ति।",
      en: "A classical music gathering in a room — musicians with tabla, harmonium, tanpura and sarangi, beneath a row of framed pictures.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: छह संगीतकार एक कक्ष में बैठे हैं; बीच में काली जैकेट पहने गायक, दाईं ओर तानपुरा और सारंगी, बाईं ओर तबला और हारमोनियम; सामने श्रोता।",
      en: "Black-and-white photograph: six musicians seated in a room; a vocalist in a dark jacket at the centre, tanpura and sarangi to the right, tabla and harmonium to the left, with listeners in the foreground.",
    },
    ...archiveSource,
    editorialNotes:
      "Identify place, occasion, date and performers with the family before naming anyone.",
  },
  {
    id: "stage-street-backdrop",
    imageId: "archive-stage-street-backdrop",
    categories: ["classical-music", "historical-archive"],
    caption: {
      hi: "चित्रित नगर-दृश्य की पृष्ठभूमि वाले मंच पर कलाकारों का समूह; बीच में माला पहने एक व्यक्ति।",
      en: "A group of musicians on a stage with a painted street-scene backdrop; a garlanded man sits at the centre.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: चित्रित इमारतों वाली पृष्ठभूमि के सामने मंच पर लगभग बारह लोग बैठे हैं, तबला, तानपुरा और सारंगी के साथ; बीच में माला पहने व्यक्ति।",
      en: "Black-and-white photograph: about twelve people seated on a stage before a painted backdrop of buildings, with tabla, tanpuras and a sarangi; a garlanded man at the centre.",
    },
    ...archiveSource,
    editorialNotes: "Identify the garlanded man, the occasion and the venue.",
  },
  {
    id: "stage-microphones",
    imageId: "archive-stage-microphones",
    categories: ["classical-music", "historical-archive"],
    caption: {
      hi: "स्तंभों वाली चित्रित पृष्ठभूमि के सामने माइक्रोफ़ोन के साथ मंच पर प्रस्तुति; हारमोनियम और गायक।",
      en: "A performance on a stage with microphones before a painted backdrop of pillars; a harmonium player and vocalists.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: मंच पर पाँच लोग बैठे हैं, सामने माइक्रोफ़ोन स्टैंड और हारमोनियम; पृष्ठभूमि में चित्रित स्तंभ।",
      en: "Black-and-white photograph: five people seated on a stage with microphone stands and a harmonium in front; painted pillars behind.",
    },
    ...archiveSource,
    editorialNotes: "Identify performers, venue and year.",
  },
  {
    id: "stage-saraswati-backdrop",
    imageId: "archive-stage-saraswati-backdrop",
    categories: ["classical-music", "historical-archive"],
    caption: {
      hi: "वीणा-वादिनी सरस्वती के चित्र वाली पृष्ठभूमि के सामने सजे मंच पर संगीत प्रस्तुति; सामने भीड़ भरे श्रोता।",
      en: "A music performance on a decorated stage before a painting of Saraswati with the veena, with a crowded audience in front.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: फूल-पत्ती की नक़्क़ाशी वाले मंच पर हारमोनियम, तानपुरा, सारंगी और तबले के साथ कलाकार; पीछे सरस्वती का चित्र; आगे श्रोताओं की भीड़।",
      en: "Black-and-white photograph: musicians with harmonium, tanpura, sarangi and tabla on an ornately bordered stage, a painting of Saraswati behind them and a crowd of listeners in front.",
    },
    ...archiveSource,
    editorialNotes:
      "Is this the Ganesh Utsav stage in Jamani? Confirm before adding the 'ganesh-utsav' category.",
  },
  {
    id: "gram-panchayat-bhawan",
    imageId: "archive-gram-panchayat-bhawan",
    categories: ["people", "village-life", "historical-archive"],
    caption: {
      hi: "खपरैल की छत वाले भवन के सामने खड़े पाँच व्यक्ति; दीवार पर “ग्राम पचायत भवन” लिखा है।",
      en: "Five men standing in front of a tiled-roof building; the wall is painted with “ग्राम पचायत भवन” (Gram Panchayat Bhawan).",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: खपरैल की छत वाले सफ़ेद भवन के सामने पाँच पुरुष खड़े हैं; दरवाज़े के ऊपर देवनागरी में भवन का नाम लिखा है।",
      en: "Black-and-white photograph: five men stand before a whitewashed building with a clay-tiled roof; the building's name is painted in Devanagari above the door.",
    },
    transcription: ["ग्राम पचायत भवन"],
    ...archiveSource,
    editorialNotes:
      "Text is transcribed exactly as painted (without the anusvara). Confirm whether this is Jamani's Panchayat Bhawan, the year and the people pictured (possibly connected with the 1964 visit? — do NOT state without confirmation).",
  },
];
