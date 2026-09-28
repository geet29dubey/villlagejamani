import type { Bilingual, SourceMeta } from "./types";
import type { QuoteRecord } from "@/components/ui/Quote";

export interface TimelineEntry extends SourceMeta {
  id: string;
  /** Null renders "Date being documented" — never a raw token. */
  dateLabel: Bilingual | null;
  title: Bilingual;
  body: Bilingual | null;
  tone: "chuna" | "rani" | "mor" | "indigo" | "genda";
  /** Hide the public verification badge (e.g. for present-day descriptions). */
  hideBadge?: boolean;
}

export const villageIntro: Bilingual = {
  hi: "जमानी मध्य प्रदेश के नर्मदापुरम ज़िले का एक गाँव है, जो इटारसी से लगभग 12 किलोमीटर दूर है। यहाँ के बाग़, खेत, मिट्टी के शिल्प और शास्त्रीय संगीत व कथक की जीवित परंपरा मिलकर इसकी पहचान बनाते हैं।",
  en: "Jamani is a village in the Narmadapuram district of Madhya Pradesh, approximately 12 km from Itarsi. Its orchards, fields, clay crafts and a living tradition of classical music and Kathak shape its character.",
};

export const originNote: Bilingual = {
  hi: "गाँव कैसे बसा और इसका नाम कैसे पड़ा — यह कथा बुज़ुर्गों से सुनकर दर्ज की जा रही है। पुष्टि होने पर इसे यहाँ जोड़ा जाएगा।",
  en: "How the village began, and how it came by its name, is being recorded from village elders. It will be added here once their account has been confirmed.",
};

/** A village elder's account of Jamani's origin — to be recorded verbatim, never invented. */
export const elderOriginAccount: QuoteRecord = {
  text: null,
  speaker: null,
  sourceType: "oral-history",
  sourceName: null,
  sourceDate: null,
  verificationStatus: "awaiting-confirmation",
  imageRights: "not-applicable",
  editorialNotes:
    "Record an elder's account of Jamani's origin (audio + written transcript), with the speaker's consent to publish their name.",
};

export const timeline: TimelineEntry[] = [
  {
    id: "settlement",
    dateLabel: null,
    title: { hi: "जमानी का प्रारंभिक बसाव", en: "The early settlement of Jamani" },
    body: {
      hi: "पहले परिवार कब और कहाँ से आकर यहाँ बसे, इसका दस्तावेज़ीकरण जारी है।",
      en: "When the first families settled here, and where they came from, is still being documented.",
    },
    tone: "chuna",
    sourceType: "not-yet-sourced",
    sourceName: null,
    sourceDate: null,
    verificationStatus: "awaiting-confirmation",
    imageRights: "not-applicable",
    editorialNotes:
      "Settlement date and origin unknown. Gather from elders, Gram Panchayat records, district gazetteer (Hoshangabad/Narmadapuram) or land records.",
  },
  {
    id: "parsai-born",
    dateLabel: { hi: "1924", en: "1924" },
    title: { hi: "हरिशंकर परसाई का जन्म", en: "Harishankar Parsai is born" },
    body: {
      hi: "हिंदी के प्रसिद्ध व्यंग्यकार हरिशंकर परसाई का जन्म 22 अगस्त 1924 को जमानी में हुआ।",
      en: "The celebrated Hindi satirist Harishankar Parsai was born in Jamani on 22 August 1924.",
    },
    tone: "rani",
    sourceType: "published-source",
    sourceName: "Published biographies of Harishankar Parsai",
    sourceDate: null,
    verificationStatus: "verified-published",
    imageRights: "not-applicable",
    editorialNotes:
      "Add a specific citation (publisher biography / Sahitya Akademi profile) to the Sources page before launch.",
  },
  {
    id: "ifye-1964",
    dateLabel: { hi: "1964", en: "1964" },
    title: {
      hi: "जमानी और दुनिया: IFYE से जुड़ाव",
      en: "Jamani and the world: the IFYE connection",
    },
    body: {
      hi: "पारिवारिक अभिलेख में सुरक्षित पत्र और कार्ड 1964 के अंतरराष्ट्रीय कृषि युवा आदान-प्रदान (IFYE) के प्रतिनिधियों को जमानी से जोड़ते हैं।",
      en: "Cards and letters preserved in the family archive connect delegates of the 1964 International Farm Youth Exchange (IFYE) with Jamani.",
    },
    tone: "mor",
    sourceType: "family-archive",
    sourceName: "Dubey Family Archive",
    sourceDate: "1964",
    verificationStatus: "family-archive",
    imageRights: "family-permission-granted",
    editorialNotes: "Confirm family permission in writing for publishing the IFYE scans.",
  },
  {
    id: "ganesh-utsav-tradition",
    dateLabel: { hi: "लगभग पाँच पीढ़ियाँ", en: "About five generations" },
    title: {
      hi: "दुबे परिवार के गणेश उत्सव की परंपरा",
      en: "The Dubey family's Ganesh Utsav tradition",
    },
    body: {
      hi: "परिवार के अनुसार यह उत्सव लगभग पाँच पीढ़ियों से निरंतर मनाया जा रहा है। आरंभ का वर्ष अभी पुष्टि की प्रतीक्षा में है।",
      en: "According to the family, the celebration has continued for approximately five generations. The founding year is awaiting confirmation.",
    },
    tone: "indigo",
    sourceType: "oral-history",
    sourceName: "Dubey family oral history",
    sourceDate: null,
    verificationStatus: "oral-history",
    imageRights: "not-applicable",
    editorialNotes:
      "Confirm founding year and founder's name; replace 'about five generations' once known.",
  },
  {
    id: "today",
    dateLabel: { hi: "आज", en: "Today" },
    title: { hi: "आज का जमानी", en: "Jamani today" },
    body: {
      hi: "बाग़, खेती, मिट्टी के शिल्प, शास्त्रीय संगीत और कथक — जमानी की परंपराएँ आज भी जीवित हैं।",
      en: "Orchards, agriculture, clay crafts, classical music and Kathak — Jamani's traditions continue today.",
    },
    tone: "genda",
    hideBadge: true,
    sourceType: "family-archive",
    sourceName: "Village and family knowledge",
    sourceDate: null,
    verificationStatus: "family-archive",
    imageRights: "not-applicable",
  },
];
