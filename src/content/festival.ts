import type { Bilingual, SourceMeta } from "./types";
import type { QuoteRecord } from "@/components/ui/Quote";

export interface FestivalClaim extends SourceMeta {
  id: string;
  text: Bilingual;
}

export const festivalIntro = {
  title: { hi: "गणेश उत्सव", en: "Ganesh Utsav" },
  subheading: {
    hi: "एक गाँव की परंपरा, जो पूरे भारत को जमानी ले आती है।",
    en: "A village tradition that brings India to Jamani.",
  },
  heroLine: {
    hi: "गणपति आते हैं। भारत अपनी कला लेकर जमानी आता है।",
    en: "Ganpati comes home. India comes to play.",
  },
  summary: {
    hi: "दुबे परिवार लगभग पाँच पीढ़ियों से जमानी में गणेश उत्सव मनाता आ रहा है। उत्सव का मुख्य शास्त्रीय संगीत और कथक कार्यक्रम अनंत चतुर्दशी को होता है, जब आसपास के गाँवों और शहरों से लोग रात भर सुनने के लिए जुटते हैं।",
    en: "The Dubey family has sustained Ganesh Utsav in Jamani for approximately five generations. The principal classical music and Kathak programme is held on Anant Chaturdashi, when villagers and visitors from nearby towns and cities gather to listen through the night.",
  },
  attribution: {
    hi: "यह विवरण दुबे परिवार के इतिहास और मौखिक परंपरा पर आधारित है। जहाँ स्वतंत्र दस्तावेज़ मिलते जाएँगे, वहाँ स्रोत जोड़े जाएँगे।",
    en: "This account is drawn from Dubey family history and oral tradition. Sources will be added as independent documentation is gathered.",
  },
};

/** Each claim is presented as family history / oral tradition until independently documented. */
export const festivalClaims: FestivalClaim[] = [
  {
    id: "generations",
    text: {
      hi: "दुबे परिवार लगभग पाँच पीढ़ियों से इस उत्सव को निभाता आ रहा है।",
      en: "The Dubey family has sustained the celebration for approximately five generations.",
    },
    sourceType: "oral-history",
    sourceName: "Dubey family",
    sourceDate: null,
    verificationStatus: "oral-history",
    imageRights: "not-applicable",
    editorialNotes: "Confirm founding year and the name of the family member who began it.",
  },
  {
    id: "anant-chaturdashi",
    text: {
      hi: "मुख्य शास्त्रीय संगीत और कथक कार्यक्रम गणेश उत्सव के दौरान अनंत चतुर्दशी को आयोजित होता है।",
      en: "The principal classical music and Kathak programme is held during Ganesh Utsav on Anant Chaturdashi.",
    },
    sourceType: "family-archive",
    sourceName: "Dubey family",
    sourceDate: null,
    verificationStatus: "family-archive",
    imageRights: "not-applicable",
  },
  {
    id: "travel",
    text: {
      hi: "कलाकार और श्रोता मुंबई, लखनऊ, बनारस और भारत के अन्य हिस्सों से यहाँ आते रहे हैं।",
      en: "Performers and listeners have travelled from Mumbai, Lucknow, Banaras and other parts of India.",
    },
    sourceType: "oral-history",
    sourceName: "Dubey family",
    sourceDate: null,
    verificationStatus: "oral-history",
    imageRights: "not-applicable",
  },
  {
    id: "through-the-night",
    text: {
      hi: "आसपास के ग्रामीण और शहरी इलाक़ों से गाँववासी और अतिथि रात भर के कार्यक्रम के लिए जुटते हैं।",
      en: "Villagers and visitors from nearby rural and urban areas gather through the night.",
    },
    sourceType: "oral-history",
    sourceName: "Dubey family",
    sourceDate: null,
    verificationStatus: "oral-history",
    imageRights: "not-applicable",
  },
  {
    id: "bullock-cart",
    text: {
      hi: "पहले के वर्षों में कुछ अतिथि कलाकार रेलवे स्टेशन से जमानी तक बैलगाड़ी से आते थे।",
      en: "In earlier years, some visiting performers travelled from the railway station to Jamani by bullock cart.",
    },
    sourceType: "oral-history",
    sourceName: "Dubey family",
    sourceDate: null,
    verificationStatus: "oral-history",
    imageRights: "not-applicable",
    editorialNotes:
      "Which station (Itarsi?) and which years — confirm with the family before specifying.",
  },
  {
    id: "sadhana",
    text: {
      hi: "परिवार इस उत्सव को केवल एक वार्षिक आयोजन नहीं, बल्कि एक निरंतर सांस्कृतिक साधना मानता है।",
      en: "The family regards the festival as a continuing cultural sadhana rather than simply an annual programme.",
    },
    sourceType: "oral-history",
    sourceName: "Dubey family",
    sourceDate: null,
    verificationStatus: "oral-history",
    imageRights: "not-applicable",
  },
];

export interface FestivalMoment {
  id: "sthapana" | "music" | "visarjan";
  when: Bilingual;
  title: Bilingual;
  body: Bilingual;
  tone: "rani" | "genda" | "mor";
  photoNeed: string;
}

/** General descriptions of the three moments of Ganesh Utsav; Jamani-specific details are added as documented. */
export const festivalMoments: FestivalMoment[] = [
  {
    id: "sthapana",
    when: { hi: "पहला दिन", en: "Day 1" },
    title: { hi: "स्थापना", en: "Sthapana" },
    body: {
      hi: "गणपति का स्वागत होता है और पूजा के साथ प्रतिमा की स्थापना की जाती है।",
      en: "Ganpati is welcomed and the idol is installed with puja.",
    },
    tone: "rani",
    photoNeed: "Sthapana in Jamani (with family permission)",
  },
  {
    id: "music",
    when: { hi: "अनंत चतुर्दशी की रात", en: "Anant Chaturdashi night" },
    title: { hi: "शास्त्रीय संगीत और कथक", en: "Classical Music and Kathak" },
    body: {
      hi: "उत्सव का मुख्य कार्यक्रम — गायन, वादन और कथक की रात, जिसे सुनने दूर-दूर से लोग आते हैं।",
      en: "The festival's principal programme — a night of vocal and instrumental music and Kathak that draws listeners from near and far.",
    },
    tone: "genda",
    photoNeed: "Night concert / Kathak performance at the festival",
  },
  {
    id: "visarjan",
    when: { hi: "अंतिम दिन", en: "Final day" },
    title: { hi: "विसर्जन", en: "Visarjan" },
    body: {
      hi: "भक्ति और गीतों के साथ गणपति को विदा किया जाता है, अगले वर्ष फिर आने की प्रार्थना के साथ।",
      en: "Ganpati is given a devotional farewell with song, and a prayer to return next year.",
    },
    tone: "mor",
    photoNeed: "Visarjan procession (with family permission)",
  },
];

export const festivalSong: QuoteRecord = {
  text: null,
  speaker: null,
  sourceType: "oral-history",
  sourceName: null,
  sourceDate: null,
  verificationStatus: "awaiting-confirmation",
  imageRights: "not-applicable",
  editorialNotes:
    "A festival song line or bhajan sung in Jamani, with the name of the person who shared it.",
};

/** Programme for the current year. Leave `items` empty until confirmed by the organisers. */
export const programme: {
  day: "sthapana" | "concert" | "visarjan";
  label: Bilingual;
  items: { time: string | null; text: Bilingual }[];
}[] = [
  { day: "sthapana", label: { hi: "पहला दिन · स्थापना", en: "Day 1 · Sthapana" }, items: [] },
  {
    day: "concert",
    label: { hi: "अनंत चतुर्दशी · संगीत और कथक", en: "Anant Chaturdashi · Music & Kathak" },
    items: [],
  },
  { day: "visarjan", label: { hi: "अंतिम दिन · विसर्जन", en: "Final day · Visarjan" }, items: [] },
];

export const performerInfo: Bilingual[] = [
  {
    hi: "उत्सव में प्रस्तुति देने के इच्छुक शास्त्रीय संगीत और कथक कलाकार परिचय, गुरु/घराना और प्रस्तुति के नमूने के साथ संपर्क कर सकते हैं।",
    en: "Classical musicians and Kathak artists who would like to perform may get in touch with an introduction, their guru/gharana and a sample of their work.",
  },
  {
    hi: "आयोजक यात्रा, ठहराव और मंच-व्यवस्था की जानकारी सीधे साझा करेंगे।",
    en: "The organisers will share travel, accommodation and stage details directly.",
  },
];

export const visitorGuidance: Bilingual[] = [
  {
    hi: "यह एक पारिवारिक और धार्मिक आयोजन है — शालीन वस्त्र पहनें और पूजा के समय शांति बनाए रखें।",
    en: "This is a family and devotional occasion — dress modestly and keep quiet during puja.",
  },
  {
    hi: "पूजा, घरों या लोगों की तस्वीर लेने से पहले अनुमति लें। प्रस्तुति के दौरान फ़्लैश का उपयोग न करें।",
    en: "Ask before photographing puja, homes or people. Please do not use flash during performances.",
  },
  {
    hi: "कार्यक्रम रात भर चलता है — पानी, टॉर्च और मच्छर-रोधी साथ रखें और लौटने की व्यवस्था पहले से कर लें।",
    en: "The programme runs through the night — bring water, a torch and insect repellent, and arrange your return travel in advance.",
  },
  {
    hi: "उत्सव के दिनों में इटारसी से यात्रा की योजना पहले से बनाएँ।",
    en: "Plan your travel from Itarsi in advance during festival days.",
  },
];

/** Why 4 February matters to Jamani's Kathak community. */
export const birjuMaharajDay = {
  title: {
    hi: "4 फ़रवरी: पंडित बिरजू महाराज की जयंती",
    en: "4 February: Pandit Birju Maharaj's birth anniversary",
  },
  body: {
    hi: "4 फ़रवरी लखनऊ घराने के कथक सम्राट पंडित बिरजू महाराज की जयंती है। पंडित बिरजू महाराज से जुड़े शिष्य और परिवारजन जमानी के उत्सव की स्मृतियों का हिस्सा रहे हैं, इसलिए यह तिथि जमानी के कथक समुदाय के लिए विशेष महत्व रखती है।",
    en: "4 February is the birth anniversary of Pandit Birju Maharaj, the Kathak maestro of the Lucknow gharana. Disciples and family members associated with him are part of the memory of Jamani's festival, which is why the date holds special significance for Jamani's Kathak community.",
  },
  /** How the day is marked in Jamani — to be supplied by the community. */
  observance: null as Bilingual | null,
  sourceType: "oral-history",
  verificationStatus: "oral-history",
  editorialNotes:
    "Ask the family/Kathak community how 4 February is observed in Jamani (event, guru-vandana, performance?) and fill `observance`.",
} as const;
