import type { Bilingual } from "./types";

export interface Experience {
  id: string;
  title: Bilingual;
  summary: Bilingual;
  /** Null renders "to be confirmed". */
  duration: Bilingual | null;
  season: Bilingual | null;
  groupSize: Bilingual | null;
  accessibility: Bilingual | null;
  included: Bilingual[];
  /** Null renders "Enquire". */
  price: Bilingual | null;
  safety: Bilingual;
  status: "under-development" | "bookable";
  tone: "genda" | "rani" | "mor" | "hara" | "indigo" | "geru";
}

export const experiencesIntro = {
  title: { hi: "गाँव का अनुभव", en: "Village experiences" },
  lede: {
    hi: "बाग़ों में, कुम्हार के चाक पर और उत्सव के मंच के पास — जमानी को उसी तरह जिएँ जैसे गाँव जीता है।",
    en: "Spend time the way Jamani does: in the orchards, at the potter's wheel and around the festival stage.",
  },
  status: {
    hi: "अनुभव विकसित किया जा रहा है — अपनी रुचि दर्ज करें।",
    en: "Experience under development — register your interest.",
  },
};

const tbc = null;
const outdoorSafety: Bilingual = {
  hi: "धूप से बचाव, पानी और बंद जूते साथ रखें। खेतों और बाग़ों में स्थानीय मार्गदर्शक के निर्देशों का पालन करें।",
  en: "Bring sun protection, water and closed shoes. Follow your local host's guidance in fields and orchards.",
};

export const experiences: Experience[] = [
  {
    id: "orchard-walk",
    title: { hi: "बाग़ की सैर और फलों का स्वाद", en: "Orchard walk and fruit tasting" },
    summary: {
      hi: "गाँव के बाग़ों में धीमी सैर और मौसमी फलों का स्वाद।",
      en: "An unhurried walk through the village orchards with a taste of seasonal fruit.",
    },
    duration: tbc,
    season: { hi: "आम — गर्मी · संतरा — सर्दी", en: "Mango — summer · Orange — winter" },
    groupSize: tbc,
    accessibility: {
      hi: "कच्चे, असमतल रास्ते; व्हीलचेयर के लिए उपयुक्त नहीं हो सकता।",
      en: "Uneven, unpaved paths; may not be suitable for wheelchairs.",
    },
    included: [
      { hi: "स्थानीय मेज़बान के साथ सैर", en: "Walk with a local host" },
      { hi: "मौसमी फल", en: "Seasonal fruit" },
    ],
    price: null,
    safety: outdoorSafety,
    status: "under-development",
    tone: "genda",
  },
  {
    id: "fruit-picking",
    title: { hi: "मौसमी फल तोड़ना", en: "Seasonal fruit picking" },
    summary: {
      hi: "मौसम में बाग़ से अपने हाथों फल तोड़ें।",
      en: "Pick fruit by hand from the orchard in season.",
    },
    duration: tbc,
    season: { hi: "फल के मौसम में", en: "During fruit season" },
    groupSize: tbc,
    accessibility: {
      hi: "खड़े होकर और चलकर की जाने वाली गतिविधि।",
      en: "Involves standing, reaching and walking.",
    },
    included: [{ hi: "फल तोड़ने का मार्गदर्शन", en: "Picking guidance" }],
    price: null,
    safety: outdoorSafety,
    status: "under-development",
    tone: "hara",
  },
  {
    id: "village-meal",
    title: { hi: "पारंपरिक गाँव का भोजन", en: "Traditional village meal" },
    summary: {
      hi: "एक गाँव के घर में सादा, पारंपरिक भोजन।",
      en: "A simple, traditional meal in a village home.",
    },
    duration: tbc,
    season: { hi: "पूरे वर्ष", en: "All year" },
    groupSize: tbc,
    accessibility: {
      hi: "भोजन पारंपरिक रूप से ज़मीन पर बैठकर हो सकता है; ज़रूरत हो तो पहले बताएँ।",
      en: "Meals may be served seated on the floor; tell us in advance if you need a chair.",
    },
    included: [{ hi: "शाकाहारी भोजन", en: "Vegetarian meal" }],
    price: null,
    safety: {
      hi: "भोजन-एलर्जी की जानकारी पहले से दें।",
      en: "Please share any food allergies in advance.",
    },
    status: "under-development",
    tone: "rani",
  },
  {
    id: "potters-wheel",
    title: { hi: "कुम्हार के चाक का अनुभव", en: "Potter's-wheel experience" },
    summary: {
      hi: "स्थानीय कुम्हार के साथ मिट्टी गूँधना और चाक पर आकार देना सीखें।",
      en: "Learn to prepare clay and shape it on the wheel alongside a local potter.",
    },
    duration: tbc,
    season: { hi: "सूखे मौसम में सर्वोत्तम", en: "Best in the dry season" },
    groupSize: tbc,
    accessibility: {
      hi: "बैठकर की जाने वाली गतिविधि; हाथ मिट्टी से सनेंगे।",
      en: "A seated activity; expect to get your hands muddy.",
    },
    included: [{ hi: "मिट्टी और चाक", en: "Clay and wheel time" }],
    price: null,
    safety: {
      hi: "चाक के पास ढीले कपड़े और आभूषण न पहनें।",
      en: "Avoid loose clothing and jewellery near the wheel.",
    },
    status: "under-development",
    tone: "geru",
  },
  {
    id: "agri-visit",
    title: { hi: "खेतों की सैर", en: "Agricultural visit" },
    summary: {
      hi: "किसानों से मिलें और मौसम के अनुसार खेती को करीब से देखें।",
      en: "Meet farmers and see the season's work in the fields up close.",
    },
    duration: tbc,
    season: { hi: "रबी और ख़रीफ़ मौसम", en: "Rabi and kharif seasons" },
    groupSize: tbc,
    accessibility: { hi: "खेतों में असमतल ज़मीन।", en: "Uneven ground in the fields." },
    included: [{ hi: "किसान के साथ बातचीत", en: "Conversation with a farmer" }],
    price: null,
    safety: outdoorSafety,
    status: "under-development",
    tone: "hara",
  },
  {
    id: "ganesh-evening",
    title: { hi: "गणेश उत्सव की एक शाम", en: "Ganesh Utsav evening" },
    summary: {
      hi: "उत्सव के दौरान आरती और संगीत की शाम में शामिल हों।",
      en: "Join an evening of aarti and music during the festival.",
    },
    duration: tbc,
    season: { hi: "गणेश उत्सव (भाद्रपद)", en: "Ganesh Utsav (Bhadrapada)" },
    groupSize: tbc,
    accessibility: {
      hi: "भीड़ और ज़मीन पर बैठने की व्यवस्था हो सकती है।",
      en: "Expect crowds and floor seating.",
    },
    included: [{ hi: "आयोजकों द्वारा स्वागत", en: "Welcome by the organisers" }],
    price: null,
    safety: {
      hi: "भीड़ में अपने समूह के साथ रहें और आयोजकों के निर्देश मानें।",
      en: "Stay with your group in crowds and follow the organisers' directions.",
    },
    status: "under-development",
    tone: "indigo",
  },
  {
    id: "music-kathak-heritage",
    title: {
      hi: "शास्त्रीय संगीत और कथक विरासत भ्रमण",
      en: "Classical music and Kathak heritage visit",
    },
    summary: {
      hi: "जमानी की संगीत और कथक परंपरा की कहानियाँ, अभिलेख और स्मृतियाँ।",
      en: "Stories, archives and memories of Jamani's music and Kathak tradition.",
    },
    duration: tbc,
    season: { hi: "पूरे वर्ष", en: "All year" },
    groupSize: tbc,
    accessibility: tbc,
    included: [{ hi: "पारिवारिक अभिलेख की झलक", en: "A look at the family archive" }],
    price: null,
    safety: {
      hi: "अभिलेखीय सामग्री को केवल अनुमति से छुएँ।",
      en: "Handle archival material only with permission.",
    },
    status: "under-development",
    tone: "mor",
  },
  {
    id: "temple-heritage",
    title: { hi: "राम–जानकी मंदिर विरासत दर्शन", en: "Ram–Janaki temple heritage visit" },
    summary: {
      hi: "दुबे परिवार परिसर में स्थित राम–जानकी मंदिर का श्रद्धापूर्ण दर्शन।",
      en: "A respectful visit to the Ram–Janaki temple within the Dubey family premises.",
    },
    duration: tbc,
    season: { hi: "पूरे वर्ष, पूर्व अनुमति से", en: "All year, by prior arrangement" },
    groupSize: { hi: "छोटे समूह", en: "Small groups" },
    accessibility: tbc,
    included: [{ hi: "परिवार के सदस्य द्वारा परिचय", en: "Introduction by a family member" }],
    price: null,
    safety: {
      hi: "यह निजी पारिवारिक पूजा-स्थल है — जूते बाहर उतारें और फ़ोटो से पहले अनुमति लें।",
      en: "This is a private family place of worship — remove footwear and ask before taking photographs.",
    },
    status: "under-development",
    tone: "rani",
  },
];
