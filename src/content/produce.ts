import type { Bilingual } from "./types";

export type ProduceCategory = "clay" | "orchards" | "gardens" | "fields";

export const produceCategories: Record<
  ProduceCategory,
  { label: Bilingual; tag: Bilingual; tone: string }
> = {
  clay: {
    label: { hi: "मिट्टी", en: "Clay" },
    tag: { hi: "मिट्टी के शिल्प", en: "Clay crafts" },
    tone: "rani",
  },
  orchards: {
    label: { hi: "बाग़", en: "Orchards" },
    tag: { hi: "बाग़", en: "Orchards" },
    tone: "genda",
  },
  gardens: {
    label: { hi: "बगीचे", en: "Gardens" },
    tag: { hi: "बगीचे", en: "Gardens" },
    tone: "mor",
  },
  fields: { label: { hi: "खेत", en: "Fields" }, tag: { hi: "खेत", en: "Fields" }, tone: "hara" },
};

export type Availability = "available" | "seasonal" | "coming-soon";

export const availabilityLabel: Record<Availability, Bilingual> = {
  available: { hi: "उपलब्ध", en: "Available" },
  seasonal: { hi: "मौसमी — पूछताछ करें", en: "Seasonal — enquire" },
  "coming-soon": { hi: "शीघ्र उपलब्ध", en: "Coming soon" },
};

export interface ProduceItem {
  id: string;
  name: Bilingual;
  category: ProduceCategory;
  season: Bilingual | null;
  description: Bilingual;
  photo: { id: string; alt: Bilingual } | null;
  /** Producer or family — only with their consent. */
  producer: Bilingual | null;
  availability: Availability;
}

export const produceIntro = {
  title: { hi: "हमारी मिट्टी से", en: "From our soil" },
  lede: {
    hi: "अपने खेतों की मिट्टी से हाथ से गढ़े शिल्प, और हमारे बाग़ों, बगीचों और खेतों की उपज।",
    en: "Shaped by hand from the clay of our own fields, and grown in our orchards, gardens and fields.",
  },
  note: {
    hi: "अभी ऑनलाइन ख़रीद उपलब्ध नहीं है। उपलब्धता और मात्रा के लिए व्हाट्सऐप पर पूछें।",
    en: "Online ordering isn't available yet. Enquire on WhatsApp for availability and quantities.",
  },
};

export const produce: ProduceItem[] = [
  {
    id: "clay-pots",
    name: { hi: "मटके", en: "Clay pots" },
    category: "clay",
    season: { hi: "पूरे वर्ष", en: "All year" },
    description: {
      hi: "स्थानीय मिट्टी से हाथ से बने मटके।",
      en: "Pots made by hand from local clay.",
    },
    photo: null,
    producer: null,
    availability: "coming-soon",
  },
  {
    id: "clay-lamps",
    name: { hi: "दीये और मिट्टी की मोमबत्तियाँ", en: "Clay lamps & candles" },
    category: "clay",
    season: { hi: "त्योहारों से पहले विशेष", en: "Especially before festivals" },
    description: {
      hi: "हाथ से बने मिट्टी के दीये और मोमबत्तियाँ।",
      en: "Handmade clay lamps and candles.",
    },
    photo: null,
    producer: null,
    availability: "coming-soon",
  },
  {
    id: "mango",
    name: { hi: "आम", en: "Mango" },
    category: "orchards",
    season: { hi: "गर्मी", en: "Summer" },
    description: {
      hi: "जमानी के बाग़ों से मौसमी आम।",
      en: "Seasonal mangoes from Jamani's orchards.",
    },
    photo: null,
    producer: null,
    availability: "seasonal",
  },
  {
    id: "orange",
    name: { hi: "संतरा", en: "Orange" },
    category: "orchards",
    season: { hi: "सर्दी", en: "Winter" },
    description: { hi: "बाग़ों से ताज़े संतरे।", en: "Fresh oranges from the orchards." },
    photo: null,
    producer: null,
    availability: "seasonal",
  },
  {
    id: "banana",
    name: { hi: "केला", en: "Banana" },
    category: "orchards",
    season: { hi: "पूरे वर्ष", en: "All year" },
    description: { hi: "गाँव में उगाए गए केले।", en: "Bananas grown in the village." },
    photo: null,
    producer: null,
    availability: "seasonal",
  },
  {
    id: "flowers",
    name: { hi: "फूल", en: "Flowers" },
    category: "gardens",
    season: { hi: "त्योहारों के मौसम में", en: "Festival seasons" },
    description: { hi: "गेंदा और मौसमी फूल।", en: "Marigolds and seasonal flowers." },
    photo: null,
    producer: null,
    availability: "coming-soon",
  },
  {
    id: "vegetables",
    name: { hi: "मौसमी सब्ज़ियाँ", en: "Seasonal vegetables" },
    category: "gardens",
    season: { hi: "मौसम के अनुसार", en: "By the season" },
    description: {
      hi: "मौसम के अनुसार ताज़ी सब्ज़ियाँ।",
      en: "Fresh vegetables through the seasons.",
    },
    photo: null,
    producer: null,
    availability: "coming-soon",
  },
  {
    id: "wheat",
    name: { hi: "गेहूँ", en: "Wheat" },
    category: "fields",
    season: { hi: "रबी फ़सल, वसंत", en: "Rabi harvest, spring" },
    description: { hi: "जमानी के खेतों से गेहूँ।", en: "Wheat from Jamani's fields." },
    photo: null,
    producer: null,
    availability: "seasonal",
  },
  {
    id: "rice",
    name: { hi: "चावल", en: "Rice" },
    category: "fields",
    season: { hi: "ख़रीफ़ फ़सल, शरद", en: "Kharif harvest, autumn" },
    description: { hi: "खेतों से चावल।", en: "Rice from the fields." },
    photo: null,
    producer: null,
    availability: "seasonal",
  },
  {
    id: "gram",
    name: { hi: "चना", en: "Gram" },
    category: "fields",
    season: { hi: "रबी फ़सल, वसंत", en: "Rabi harvest, spring" },
    description: { hi: "खेतों से चना।", en: "Gram (chickpea) from the fields." },
    photo: null,
    producer: null,
    availability: "seasonal",
  },
  {
    id: "pulses",
    name: { hi: "दालें", en: "Pulses" },
    category: "fields",
    season: { hi: "पूरे वर्ष", en: "Through the year" },
    description: { hi: "गाँव में उगाई गई दालें।", en: "Pulses grown in the village." },
    photo: null,
    producer: null,
    availability: "coming-soon",
  },
];
