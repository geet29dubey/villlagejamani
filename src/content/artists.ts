import type { Bilingual, SourceMeta } from "./types";

export interface ArtistRecord extends SourceMeta {
  id: string;
  name: Bilingual;
  knownAs?: Bilingual;
  /** Null renders "being documented". */
  artForm: Bilingual | null;
  cityOrGharana: Bilingual | null;
  /** Approximate performance year(s) in Jamani. Null renders "Year being documented". */
  performanceYear: string | null;
  /** Family account attached to this artist, if any. */
  familyAccount: Bilingual | null;
  photo: { id: string; alt: Bilingual } | null;
}

export const artistsIntro = {
  title: {
    hi: "जमानी के उत्सव इतिहास में स्मरणीय कलाकार",
    en: "Artists Remembered in Jamani's Festival History",
  },
  note: {
    hi: "यह सूची उत्सव के अभिलेखों, पारिवारिक संग्रह और मौखिक इतिहास पर आधारित है। यह न तो पूर्ण है और न ही स्वतंत्र रूप से सत्यापित — नई जानकारी मिलने पर इसे अद्यतन किया जाएगा।",
    en: "This list is drawn from festival records, family archives and oral history. It is neither complete nor independently verified, and will be updated as more is documented.",
  },
};

const familySource = {
  sourceType: "oral-history" as const,
  sourceName: "Dubey family — festival records and oral history",
  sourceDate: null,
  imageRights: "unknown" as const,
};

export const artists: ArtistRecord[] = [
  {
    id: "samta-prasad",
    name: { hi: "पंडित सामता प्रसाद", en: "Pandit Samta Prasad" },
    knownAs: { hi: "गुदई महाराज", en: "Gudai Maharaj" },
    artForm: { hi: "तबला", en: "Tabla" },
    cityOrGharana: { hi: "बनारस घराना", en: "Banaras gharana" },
    performanceYear: null,
    familyAccount: null,
    photo: null,
    ...familySource,
    verificationStatus: "awaiting-confirmation",
    editorialNotes:
      "Verify the intended identity (the Banaras tabla maestro Pandit Samta Prasad 'Gudai Maharaj'?) with the family before final publication.",
  },
  {
    id: "alla-rakha",
    name: { hi: "उस्ताद अल्ला रक्खा", en: "Ustad Alla Rakha" },
    artForm: { hi: "तबला", en: "Tabla" },
    cityOrGharana: { hi: "पंजाब घराना", en: "Punjab gharana" },
    performanceYear: null,
    familyAccount: null,
    photo: null,
    ...familySource,
    verificationStatus: "oral-history",
    editorialNotes: "Performance year and occasion needed.",
  },
  {
    id: "sitara-devi",
    name: { hi: "सितारा देवी", en: "Sitara Devi" },
    artForm: { hi: "कथक", en: "Kathak" },
    cityOrGharana: null,
    performanceYear: null,
    familyAccount: null,
    photo: null,
    ...familySource,
    verificationStatus: "oral-history",
    editorialNotes: "Performance year needed.",
  },
  {
    id: "nandita-puri",
    name: { hi: "नंदिता पुरी", en: "Nandita Puri" },
    artForm: null,
    cityOrGharana: null,
    performanceYear: null,
    familyAccount: null,
    photo: null,
    ...familySource,
    verificationStatus: "oral-history",
    editorialNotes: "Confirm art form, city/gharana and year.",
  },
  {
    id: "kali-nath-mishra",
    name: { hi: "पंडित काली नाथ मिश्र", en: "Pandit Kali Nath Mishra" },
    artForm: null,
    cityOrGharana: null,
    performanceYear: null,
    familyAccount: null,
    photo: null,
    ...familySource,
    verificationStatus: "oral-history",
    editorialNotes: "Confirm art form, city/gharana and year.",
  },
  {
    id: "amrit-mishra",
    name: { hi: "अमृत मिश्र", en: "Amrit Mishra" },
    artForm: null,
    cityOrGharana: null,
    performanceYear: null,
    familyAccount: null,
    photo: null,
    ...familySource,
    verificationStatus: "awaiting-confirmation",
    editorialNotes: "Discipline to be confirmed by the family.",
  },
  {
    id: "nirmala-devi",
    name: { hi: "निर्मला देवी", en: "Nirmala Devi" },
    artForm: null,
    cityOrGharana: null,
    performanceYear: null,
    familyAccount: {
      hi: "परिवार के अनुसार, निर्मला देवी ने 1978 के बाद लगातार छह या सात वर्षों तक जमानी में प्रस्तुति दी। (तिथियाँ अभिलेखीय पुष्टि की प्रतीक्षा में)",
      en: "According to the family, Nirmala Devi performed in Jamani for six or seven consecutive years after 1978. (Date range awaiting archival confirmation.)",
    },
    photo: null,
    ...familySource,
    verificationStatus: "awaiting-confirmation",
    editorialNotes:
      "Confirm identity/discipline and the post-1978 date range from programmes, letters or photographs.",
  },
  {
    id: "birju-maharaj-circle",
    name: {
      hi: "पंडित बिरजू महाराज से जुड़े शिष्य और परिवारजन",
      en: "Disciples and family members associated with Pandit Birju Maharaj",
    },
    artForm: { hi: "कथक", en: "Kathak" },
    cityOrGharana: { hi: "लखनऊ घराना", en: "Lucknow gharana" },
    performanceYear: null,
    familyAccount: null,
    photo: null,
    ...familySource,
    verificationStatus: "oral-history",
    editorialNotes: "Names of the individual disciples/family members who performed, and years.",
  },
];
