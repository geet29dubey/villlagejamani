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

/** Recent photographs supplied for this project (not historical scans). */
const recentSource = {
  ...archiveSource,
  sourceName: "Supplied by the Dubey family",
  editorialNotes: undefined,
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
  {
    id: "kathak-dancer-spin-bw",
    imageId: "kathak-dancer-spin-bw",
    categories: ["kathak", "historical-archive"],
    caption: {
      hi: "चक्कर लेती हुई कथक नृत्यांगना — घूमता घेरदार परिधान, हाथ में दुपट्टा और पैरों में घुँघरू; पीछे संगतकार।",
      en: "A Kathak dancer mid-spin — a flaring skirt, a veil held aloft and ghungroo at the ankles, with accompanists behind.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: मंच पर एक कथक नृत्यांगना चक्कर ले रही है, उसका घेरदार परिधान फैला हुआ है और हाथ में उठा दुपट्टा है; पृष्ठभूमि में बैठे संगतकार।",
      en: "Black-and-white photograph: a Kathak dancer spins on stage, her flared skirt and a raised veil swirling around her, with seated accompanists in the background.",
    },
    ...archiveSource,
    editorialNotes: "Identify the dancer, occasion and year; confirm consent to publish.",
  },
  {
    id: "kathak-dancer-red-costume",
    imageId: "kathak-dancer-red-costume",
    categories: ["kathak", "people", "historical-archive"],
    caption: {
      hi: "“कथक की महारानी” कहलाने वाली प्रसिद्ध कथक नृत्यांगना सितारा देवी, लाल चौखानेदार परिधान में माइक्रोफ़ोन के सामने; पीछे बैठे श्रोता और ऊपर चित्रों की पंक्ति।",
      en: "Sitara Devi, the celebrated Kathak dancer known as the “Queen of Kathak”, in a red checked costume before a microphone, with seated listeners behind and a row of framed pictures above.",
    },
    alt: {
      hi: "पुराना रंगीन चित्र: लाल-सुनहरे चौखानेदार परिधान में सितारा देवी कथक मुद्रा में; सामने माइक्रोफ़ोन, अग्रभूमि में दर्शक, पीछे मेहराबदार आला और दीवार पर चित्र।",
      en: "Faded colour photograph: Sitara Devi in a red and gold checked costume holds a Kathak pose; a microphone in front, spectators in the foreground, an arched niche and framed pictures on the wall behind.",
    },
    ...archiveSource,
    peoplePictured: { hi: "सितारा देवी", en: "Sitara Devi" },
    editorialNotes:
      "Dancer identified by the family as Sitara Devi (1920–2014); reference: https://en.wikipedia.org/wiki/Sitara_Devi. Year still needed. The wall niche and row of framed pictures resemble other archive photos — confirm the venue before stating it.",
  },
  {
    id: "kathak-dancer-with-musicians",
    imageId: "kathak-dancer-with-musicians",
    categories: ["kathak", "classical-music", "people", "historical-archive"],
    caption: {
      hi: "कथक नृत्यांगना सितारा देवी अपने संगतकारों के साथ बैठी हुईं — पखावज, हारमोनियम और तबला; पीछे सरस्वती के चित्र के सामने भरी हुई सभा।",
      en: "Kathak dancer Sitara Devi seated with her accompanists — pakhawaj, harmonium and tabla — before a packed audience and a painting of Saraswati.",
    },
    alt: {
      hi: "पुराना रंगीन चित्र: लाल परिधान में सितारा देवी मंच पर बैठी हैं; बाईं ओर पखावज वादक, बीच में हारमोनियम, दाईं ओर तबला वादक; पीछे बच्चों और बड़ों की भीड़ और सरस्वती का चित्र।",
      en: "Faded colour photograph: Sitara Devi, in red, sits on stage; a pakhawaj player to the left, a harmonium at the centre, a tabla player to the right; behind them a crowd of children and adults and a painting of Saraswati.",
    },
    ...archiveSource,
    peoplePictured: {
      hi: "सितारा देवी; संगतकारों की पहचान जारी",
      en: "Sitara Devi; accompanists being identified",
    },
    editorialNotes:
      "Dancer identified by the family as Sitara Devi; reference: https://en.wikipedia.org/wiki/Sitara_Devi. Identify musicians and year. Saraswati backdrop resembles 'stage-saraswati-backdrop' — confirm if this is the same stage in Jamani.",
  },
  {
    id: "kathak-performer-microphone",
    imageId: "kathak-performer-microphone",
    categories: ["kathak"],
    caption: {
      hi: "माइक्रोफ़ोन पर प्रस्तुति देती कथक कलाकार, लाल और सुनहरे परिधान में; ऊपर रंग-बिरंगी झालरें।",
      en: "A Kathak artist speaking or reciting at the microphone in red and gold, beneath strings of coloured tinsel.",
    },
    alt: {
      hi: "रंगीन चित्र: माँग-टीका और लाल-सुनहरे परिधान में एक कलाकार माइक्रोफ़ोन के सामने खड़ी है; छत पर रंगीन झालरें और तेज़ रोशनी, पीछे सफ़ेद दीवार पर मेहराबदार आला।",
      en: "Colour photograph: an artist in a red and gold costume with a maang tikka stands at a microphone; coloured tinsel and bright lights across the ceiling, a white wall with an arched niche behind.",
    },
    ...archiveSource,
    editorialNotes: "Identify the artist and year; confirm consent to publish.",
  },
  {
    id: "kathak-duet-pranam",
    imageId: "kathak-duet-pranam",
    categories: ["kathak"],
    caption: {
      hi: "प्रणाम की मुद्रा में दो कथक नृत्यांगनाएँ — सिर के ऊपर जुड़े हाथ, गहरे परिधान और लाल दुपट्टे।",
      en: "Two Kathak dancers in pranam — hands joined above their heads, in dark costumes with red dupattas.",
    },
    alt: {
      hi: "रंगीन चित्र: दो नृत्यांगनाएँ बैठी मुद्रा में सिर के ऊपर हाथ जोड़े हुए हैं; गहरे रंग के परिधान और लाल दुपट्टे; बीच में माइक्रोफ़ोन स्टैंड, पीछे सफ़ेद दीवार में मेहराबदार आले और नीली बीम।",
      en: "Colour photograph: two dancers kneel with hands joined above their heads, in dark costumes with red dupattas; a microphone stand between them, a white wall with arched niches and blue beams behind.",
    },
    ...archiveSource,
    editorialNotes:
      "Identify the dancers and year; confirm consent. This appears to be a photograph of a screen — request the original file if available.",
  },
  {
    id: "village-women-water-pot",
    imageId: "village-women-water-pot",
    categories: ["village-life", "historical-archive"],
    caption: {
      hi: "खेत के किनारे कच्चे रास्ते पर चलती दो महिलाएँ — एक सिर पर धातु का घड़ा और गोद में बच्चा लिए, दूसरी सिर पर गठरी लिए।",
      en: "Two women walking along a dirt path beside a field — one with a metal water pot on her head and a child on her hip, the other carrying a bundle on her head.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: कच्चे रास्ते पर दो महिलाएँ मुस्कुराती हुई चल रही हैं; आगे वाली सिर पर धातु का घड़ा थामे और एक बच्चे को गोद में लिए है; पीछे कटा हुआ खेत, सूखी टहनियाँ और पेड़।",
      en: "Black-and-white photograph: two smiling women walk along a dirt path; the one in front steadies a metal pot on her head and carries a child; behind them a harvested field, dry branches and trees.",
    },
    ...archiveSource,
    editorialNotes: "Identify place, year and people (names only with consent).",
  },
  {
    id: "village-field-silhouettes",
    imageId: "village-field-silhouettes",
    categories: ["village-life", "agriculture", "historical-archive"],
    caption: {
      hi: "ढलते सूरज के सामने सिर पर बोझ लिए खेत पार करती तीन आकृतियाँ; पीछे चरते मवेशी।",
      en: "Three figures carrying loads on their heads cross a field against the setting sun, with cattle grazing behind.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: बादलों भरे आकाश और डूबते सूरज के सामने तीन लोगों की परछाइयाँ, सिर पर टोकरियाँ या घड़े; कटे हुए खेत में दूर मवेशी।",
      en: "Black-and-white photograph: three silhouetted people with baskets or pots on their heads walk across a stubble field beneath a cloudy sky at sunset; cattle in the distance.",
    },
    ...archiveSource,
    editorialNotes: "Identify place and year.",
  },
  {
    id: "village-folk-music-circle",
    imageId: "village-folk-music-circle",
    categories: ["village-life", "people", "historical-archive"],
    caption: {
      hi: "घेरे में बैठे गाँववासी — ढोलक बजाते एक व्यक्ति के साथ गीत-संगीत की बैठक।",
      en: "Villagers seated in a circle for songs, with a man playing the dholak.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: सिर ढके महिलाएँ और दो पुरुष ज़मीन पर घेरा बनाकर बैठे हैं; एक पुरुष ढोलक बजा रहा है, पास में एक और छोटा वाद्य रखा है।",
      en: "Black-and-white photograph: women with covered heads and two men sit on the ground in a circle; one man plays a dholak, and a second small drum rests nearby.",
    },
    ...archiveSource,
    editorialNotes:
      "Identify the occasion (folk song? festival?), place, year and people — names only with consent.",
  },
  {
    id: "village-bullock-cart",
    imageId: "village-bullock-cart",
    categories: ["village-life", "historical-archive"],
    caption: {
      hi: "लंबे सींगों वाले दो सफ़ेद बैलों की छतरीदार बैलगाड़ी, काँटेदार बाड़ के पास।",
      en: "A covered bullock cart drawn by two long-horned white bullocks, beside a thorn fence.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: धारीदार छतरी वाली बैलगाड़ी में दो सफ़ेद बैल जुते हैं; गाड़ी में टोपी पहने एक व्यक्ति; पीछे लकड़ियों और झाड़ियों की बाड़।",
      en: "Black-and-white photograph: two white bullocks yoked to a cart with a striped hooded canopy; a man in a cap sits inside; a fence of sticks and shrubs behind.",
    },
    ...archiveSource,
    editorialNotes:
      "Identify place and year. Do NOT link to the family account of performers arriving by bullock cart unless the family confirms this photo shows that.",
  },
  {
    id: "village-hand-mill",
    imageId: "village-hand-mill",
    categories: ["village-life", "agriculture", "historical-archive"],
    caption: {
      hi: "हाथ की चक्की से अनाज पीसती एक युवती; पास में अनाज का ढेर, सूपा और दीवार से टिके मूसल।",
      en: "A young woman grinding grain on a hand mill, with a heap of grain, a tray and wooden pestles leaning against the wall.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: धारीदार ओढ़नी पहने युवती ज़मीन पर बैठकर मिट्टी से लिपी हाथ-चक्की का हत्था घुमा रही है; पीछे अनाज का ढेर, एक सूपा और दीवार के सहारे दो लकड़ी के मूसल।",
      en: "Black-and-white photograph: a young woman in a striped head-cloth sits on the floor turning the handle of a mud-plastered hand mill; behind her a heap of grain, a tray and two wooden pestles against the wall.",
    },
    ...archiveSource,
    editorialNotes: "Identify place, year and person (name only with consent).",
  },
  {
    id: "orchard-mango-rows",
    imageId: "orchard-mango-rows",
    categories: ["orchards"],
    caption: {
      hi: "आम के बाग़ में पेड़ों की कतारें — चूने से पुते तने और पत्तियों से ढकी ज़मीन।",
      en: "Rows of mango trees in an orchard — whitewashed trunks and a floor of fallen leaves.",
    },
    alt: {
      hi: "रंगीन चित्र: फैली हुई डालियों वाले आम के पेड़ों की कतारें, तनों के निचले हिस्से सफ़ेद पुते हुए; नीचे सूखी पत्तियों से ढकी लाल-भूरी ज़मीन।",
      en: "Colour photograph: rows of spreading mango trees with the lower trunks painted white, above reddish-brown ground covered in dry leaves.",
    },
    ...recentSource,
    editorialNotes:
      "Confirm this is a Jamani orchard, whose orchard it is (with consent) and the year.",
  },
  {
    id: "orchard-beside-green-field",
    imageId: "orchard-beside-green-field",
    categories: ["orchards", "agriculture"],
    caption: {
      hi: "हरे-भरे खेत के पार घने आम के पेड़ों का बाग़।",
      en: "A dense mango orchard beyond a lush green field.",
    },
    alt: {
      hi: "रंगीन चित्र: आगे चमकीली हरी फ़सल या घास से भरा खेत; पीछे घने, गोल छत्र वाले आम के पेड़ों की कतार, जिनके तने सफ़ेद पुते हैं।",
      en: "Colour photograph: a bright green field in the foreground; behind it a line of dense, round-crowned mango trees with whitewashed trunks.",
    },
    ...recentSource,
    editorialNotes: "Confirm location, the crop in the foreground and the year.",
  },
  {
    id: "field-ploughed-man-seated",
    imageId: "field-ploughed-man-seated",
    categories: ["agriculture", "village-life"],
    caption: {
      hi: "जुते हुए खेत में बैठे एक व्यक्ति, पास में धुआँ और एक टोकरी; आगे एक नन्हा पौधा।",
      en: "A man seated in a freshly ploughed field beside curling smoke and a basket, with a young sapling in the foreground.",
    },
    alt: {
      hi: "रंगीन चित्र: धूप में जुता हुआ भूरा खेत; सफ़ेद कपड़ों में एक व्यक्ति ज़मीन पर बैठे हैं, पास से धुआँ उठ रहा है और एक टोकरी रखी है; किनारे पर पेड़ों की कतार और आगे एक छोटा पौधा।",
      en: "Colour photograph: a sunlit, freshly ploughed brown field; a man in white sits on the ground with smoke rising beside him and a basket nearby; a line of trees along the edge and a small sapling in front.",
    },
    ...recentSource,
    editorialNotes:
      "What is happening here (a puja before sowing? clearing stubble?) — ask the family before describing it. Name only with consent.",
  },
  {
    id: "field-young-crop-hut",
    imageId: "field-young-crop-hut",
    categories: ["agriculture"],
    caption: {
      hi: "नई उगी फ़सल वाला खेत और किनारे पर घास-फूस की छप्पर वाली झोपड़ी।",
      en: "A field of young green crop with a thatched field hut at its edge.",
    },
    alt: {
      hi: "रंगीन चित्र: आगे नई हरी फ़सल की कतारें; पीछे लकड़ी के खंभों पर टिकी सूखी घास की छत वाली झोपड़ी, एक मोटरसाइकिल और धुंध में बाँस के झुरमुट।",
      en: "Colour photograph: rows of young green crop in the foreground; behind, a hut with a dry-grass roof on wooden posts, a motorcycle and misty bamboo clumps.",
    },
    ...recentSource,
    editorialNotes:
      "Which crop is this (wheat? gram?) and which season — confirm before naming it.",
  },
  {
    id: "village-churning-madhani",
    imageId: "village-churning-madhani",
    categories: ["village-life", "people", "historical-archive"],
    caption: {
      hi: "रस्सी वाली मथानी से मटके में मथती एक बुज़ुर्ग महिला, उनसे लिपटी एक छोटी बच्ची।",
      en: "An elderly woman churning with a rope-drawn wooden churn (madhani) in a large pot, a little girl holding on to her.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: सिर ढके एक बुज़ुर्ग महिला खंभे से बँधी लकड़ी की मथानी की रस्सी खींच रही हैं; नीचे बड़ा मटका; उनसे एक छोटी बच्ची लिपटी है और पीछे एक और महिला खड़ी है; पृष्ठभूमि में घर की दीवार, दरवाज़ा और खिड़की।",
      en: "Black-and-white photograph: an elderly woman with a covered head pulls the rope of a wooden churn fixed to a post above a large pot; a little girl clings to her side and another woman stands behind; a house wall, door and window in the background.",
    },
    ...archiveSource,
    editorialNotes: "Identify the people (names only with family consent), the house and the year.",
  },
  {
    id: "mary-ellen-patterson-dubey-family",
    imageId: "mary-ellen-patterson-dubey-family",
    categories: ["people", "historical-archive"],
    caption: {
      hi: "IFYE प्रतिनिधि मैरी एलेन पैटरसन (दाएँ), साड़ी पहने, आर. एस. दुबे की पत्नी विमला दुबे (बाएँ) के साथ।",
      en: "IFYE delegate Mary Ellen Patterson (right), wearing a sari, with Vimla Dubey (left), wife of R. S. Dubey.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: सिर पर पल्लू लिए एक भारतीय महिला और साड़ी पहने एक युवा अमेरिकी महिला साथ खड़ी मुस्कुरा रही हैं।",
      en: "Black-and-white photograph: an Indian woman with her head covered and a young American woman wearing a sari stand side by side, smiling.",
    },
    ...archiveSource,
    peoplePictured: {
      hi: "विमला दुबे, आर. एस. दुबे की पत्नी (बाएँ); मैरी एलेन पैटरसन (दाएँ)",
      en: "Vimla Dubey, wife of R. S. Dubey (left); Mary Ellen Patterson (right)",
    },
    editorialNotes:
      "Identification supplied by the family. Year of visit not yet confirmed (see IFYE cards).",
  },
  {
    id: "rs-dubey-with-shield",
    imageId: "rs-dubey-with-shield",
    categories: ["people", "historical-archive"],
    caption: {
      hi: "आर. एस. दुबे, एक शील्ड-ट्रॉफ़ी के पास बैठे हुए।",
      en: "R. S. Dubey seated beside a shield trophy.",
    },
    alt: {
      hi: "पुराना श्वेत-श्याम चित्र: सफ़ेद कमीज़ पहने एक व्यक्ति कुर्सी पर बैठे हैं; बगल की कुर्सी पर कई छोटी पट्टियों वाली बड़ी शील्ड रखी है; पीछे लकड़ी की बाड़ और एक इमारत।",
      en: "Old black-and-white photograph: a man in a white shirt sits on a chair; on the chair beside him rests a large shield trophy with many small plaques; a wooden fence and a building behind.",
    },
    ...archiveSource,
    peoplePictured: { hi: "आर. एस. दुबे", en: "R. S. Dubey" },
    editorialNotes: "What was the shield awarded for, where and when? Ask the family.",
  },
  {
    id: "nirmala-devi-performance",
    imageId: "nirmala-devi-performance",
    categories: ["classical-music", "people", "historical-archive"],
    caption: {
      hi: "पटियाला घराने की हिंदुस्तानी शास्त्रीय गायिका निर्मला देवी, सरस्वती के चित्र वाली पृष्ठभूमि के सामने हारमोनियम पर गाती हुईं; साथ में तबला, सारंगी और हारमोनियम संगतकार।",
      en: "Nirmala Devi, Hindustani classical vocalist of the Patiala gharana, singing at the harmonium before a painted backdrop of Saraswati, accompanied on tabla, sarangi and harmonium.",
    },
    alt: {
      hi: "पुराना रंगीन चित्र: नारंगी साड़ी में निर्मला देवी माइक्रोफ़ोन के सामने हारमोनियम बजाते हुए गा रही हैं; बाईं ओर तबला वादक और एक वृद्ध संगतकार, दाईं ओर सारंगी वादक; पीछे वीणा-वादिनी सरस्वती और ताड़ के पेड़ों वाला चित्रित पर्दा; आगे श्रोताओं के सिर।",
      en: "Faded colour photograph: Nirmala Devi in an orange sari sings at a microphone while playing the harmonium; a tabla player and an older accompanist to the left, a sarangi player to the right; behind them a painted backdrop of Saraswati with the veena between palm trees; listeners' heads in the foreground.",
    },
    ...archiveSource,
    peoplePictured: {
      hi: "निर्मला देवी (बीच में); संगतकारों की पहचान जारी",
      en: "Nirmala Devi (centre); accompanists being identified",
    },
    editorialNotes:
      "Identified by the family; reference: https://en.wikipedia.org/wiki/Nirmala_Devi. The Saraswati backdrop matches other archive photos — confirm this is the Jamani festival stage and the year.",
  },
  {
    id: "winnowing-grain-rooftop",
    imageId: "winnowing-grain-rooftop",
    categories: ["agriculture", "village-life"],
    caption: {
      hi: "छत पर गेहूँ फटकती तीन महिलाएँ — एक लकड़ी के पटरे से हवा कर रही है, दूसरी गेहूँ से भरा तसला लिए है; पास में तिरपाल पर गेहूँ का ढेर।",
      en: "Three women winnowing wheat on a rooftop — one fanning with a wooden board, another holding a basin of wheat, with a heap of wheat on a tarpaulin nearby.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: सफ़ेद मुंडेर वाली छत पर तीन महिलाएँ; बाईं ओर एक युवती लकड़ी का पटरा पकड़े, दाईं ओर साड़ी पहने महिला गेहूँ से भरा बड़ा तसला थामे; ज़मीन पर बिखरा गेहूँ और तिरपाल पर ढेर; पीछे पेड़।",
      en: "Black-and-white photograph: three women on a rooftop with a white parapet; on the left a young woman holds a wooden board, on the right a woman in a sari holds a large basin of wheat; wheat spread on the floor and heaped on a tarpaulin; trees behind.",
    },
    ...recentSource,
    editorialNotes:
      "Grain confirmed by the family as wheat. Location to confirm. Name the women only with consent.",
  },
];
