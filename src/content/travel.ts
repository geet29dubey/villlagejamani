import type { Bilingual } from "./types";

export const travel = {
  location: {
    hi: "जमानी, नर्मदापुरम ज़िला, मध्य प्रदेश",
    en: "Jamani, Narmadapuram district, Madhya Pradesh",
  },
  distance: { hi: "इटारसी से लगभग 12 किमी", en: "Approximately 12 km from Itarsi" },
  byRoad: {
    hi: "इटारसी से सड़क मार्ग द्वारा टैक्सी, ऑटो या निजी वाहन से जमानी पहुँचा जा सकता है।",
    en: "Jamani is reached by road from Itarsi by taxi, auto-rickshaw or private vehicle.",
  },
  byRail: {
    hi: "निकटतम रेल संपर्क: इटारसी जंक्शन, जो देश के कई हिस्सों से जुड़ा एक प्रमुख रेलवे जंक्शन है।",
    en: "Nearest railway connection: Itarsi Junction, a major railway junction with connections across India.",
  },
  seasons: [
    {
      title: { hi: "सर्दी (अक्टूबर–फ़रवरी)", en: "Winter (October–February)" },
      body: {
        hi: "घूमने के लिए सबसे सुहावना मौसम; संतरे का मौसम।",
        en: "The most comfortable time to visit; orange season.",
      },
    },
    {
      title: { hi: "गर्मी (मार्च–जून)", en: "Summer (March–June)" },
      body: {
        hi: "आम का मौसम। दोपहर बहुत गर्म होती है — सुबह-शाम घूमें।",
        en: "Mango season. Afternoons are very hot — plan outings for mornings and evenings.",
      },
    },
    {
      title: { hi: "वर्षा (जुलाई–सितंबर)", en: "Monsoon (July–September)" },
      body: {
        hi: "हरियाली का मौसम और गणेश उत्सव का समय; कच्चे रास्ते कीचड़ भरे हो सकते हैं।",
        en: "Green season and the time of Ganesh Utsav; unpaved lanes can be muddy.",
      },
    },
  ] as { title: Bilingual; body: Bilingual }[],
  festivalTravel: {
    hi: "गणेश उत्सव भाद्रपद मास (प्रायः अगस्त–सितंबर) में होता है और मुख्य कार्यक्रम अनंत चतुर्दशी की रात को। तिथियाँ हर वर्ष बदलती हैं — इस पृष्ठ पर घोषित होने पर देखें, इटारसी में ठहरने की व्यवस्था पहले से करें और रात में लौटने के लिए वाहन तय रखें।",
    en: "Ganesh Utsav falls in the month of Bhadrapada (usually August–September), with the principal programme on the night of Anant Chaturdashi. Dates change every year — check here once announced, book accommodation in Itarsi early and arrange transport for a late-night return.",
  },
  orchardSeason: {
    hi: "आम प्रायः गर्मियों में और संतरा सर्दियों में। फलों की उपलब्धता मौसम पर निर्भर है — आने से पहले पूछ लें।",
    en: "Mangoes are usually in summer and oranges in winter. Fruit depends on the season's weather — please check before you travel.",
  },
  responsibility: [
    {
      hi: "जमानी एक जीवित गाँव है, कोई पर्यटन-स्थल नहीं। घरों, खेतों और पूजा-स्थलों में बिना अनुमति प्रवेश न करें।",
      en: "Jamani is a living village, not a theme attraction. Do not enter homes, fields or places of worship without permission.",
    },
    {
      hi: "आपात स्थिति में 112 (राष्ट्रीय आपातकालीन नंबर) या 108 (एम्बुलेंस) पर कॉल करें। निकटतम बड़ी चिकित्सा सुविधाएँ इटारसी और नर्मदापुरम में हैं।",
      en: "In an emergency call 112 (national emergency number) or 108 (ambulance). The nearest major medical facilities are in Itarsi and Narmadapuram.",
    },
    {
      hi: "कचरा अपने साथ वापस ले जाएँ, पशुओं और फ़सलों से दूरी रखें, और तेज़ संगीत से बचें।",
      en: "Carry your waste back with you, keep a respectful distance from livestock and crops, and avoid loud music.",
    },
  ] as Bilingual[],
  photography: [
    {
      hi: "किसी व्यक्ति, विशेषकर बच्चों और महिलाओं की तस्वीर लेने से पहले उनकी अनुमति लें।",
      en: "Ask before photographing anyone — especially children and women.",
    },
    {
      hi: "घरों के भीतर, पूजा और अनुष्ठानों के दौरान फ़ोटो या वीडियो केवल परिवार की अनुमति से लें।",
      en: "Photograph or film inside homes, and during puja or ceremonies, only with the family's permission.",
    },
    {
      hi: "प्रस्तुति के दौरान फ़्लैश का प्रयोग न करें; कलाकारों की रिकॉर्डिंग साझा करने से पहले अनुमति लें।",
      en: "No flash during performances; ask before sharing recordings of artists.",
    },
    {
      hi: "किसी के घर का पता या निजी जानकारी ऑनलाइन साझा न करें।",
      en: "Please don't share anyone's home location or personal details online.",
    },
  ] as Bilingual[],
};
