// Tanzania Safaris page content.
// Everything on /tanzania-safaris is driven by this file so the copy, images,
// example inclusions and FAQs can be edited without touching layout code.
//
// IMAGE LICENSING LOG — keep this updated whenever an image is replaced.
// All images below were generated for 3jay Tour & Safari with Lovable's image
// generation tool and are owned/licensed for our commercial use. No competitor
// or third-party photography is used. If you swap in a stock or own photo,
// record: source, creator, licence, attribution requirement, original URL and
// date obtained in the `credit` field.

import heroImg from "@/assets/tz-hero-serengeti.jpg";
import serengetiImg from "@/assets/tz-serengeti.jpg";
import ngorongoroImg from "@/assets/tz-ngorongoro.jpg";
import tarangireImg from "@/assets/tz-tarangire.jpg";
import manyaraImg from "@/assets/tz-manyara.jpg";
import campImg from "@/assets/tz-camp.jpg";

export type ImageAsset = {
  src: string;
  alt: string;
  /** Source / creator / licence / attribution / obtained-on. */
  credit: string;
};

export const tanzaniaSeo = {
  title: "Tanzania Safaris | Serengeti, Ngorongoro & Tarangire — 3jay Tour & Safari",
  description:
    "Plan a tailor-made Tanzania safari across the Serengeti, Ngorongoro Conservation Area, Tarangire and Lake Manyara. Share your dates and interests and we will build a route around you.",
  h1: "Tanzania Safaris",
};

export const hero = {
  label: "Northern Tanzania",
  heading: "Tanzania safaris shaped around the way you like to travel",
  paragraph:
    "Open plains, a collapsed volcano teeming with wildlife, baobab country and a lake fringed by forest — northern Tanzania packs an extraordinary range of scenery into a single unhurried route. Tell us how long you have and what you most want to see, and we will map out the days for you.",
  primaryCta: { label: "Plan Your Tanzania Safari", to: "/plan" as const },
  secondaryCta: { label: "Explore Safari Packages", to: "/safaris" as const },
  image: {
    src: heroImg,
    alt: "Wildebeest and zebra crossing the Serengeti plains beneath an acacia tree at golden hour",
    credit: "Commissioned for 3jay Tour & Safari · owned licence · no attribution required · 2026",
  } satisfies ImageAsset,
};

export const intro = {
  heading: "Why Tanzania rewards the traveller who takes their time",
  body: [
    "Tanzania is one of the few places where you can spend a morning watching grazing herds spread across grassland to the horizon, and an afternoon looking down into a volcanic caldera with its own resident wildlife. The northern circuit — Serengeti, the Ngorongoro Conservation Area, Tarangire and Lake Manyara — links these landscapes in comfortable driving distances, which is why it suits both first-time safari travellers and people returning for a closer look.",
    "What changes the experience most is pace. Three days is enough for a genuine taste of the bush; a week lets you slow down, reach quieter corners and give the wildlife time to come to you. We build every Tanzania route around your dates, your budget and the things you actually care about seeing.",
  ],
};

export const whyTanzania: { title: string; body: string }[] = [
  {
    title: "Wildlife viewing with real variety",
    body: "Predators on open grassland, elephants among ancient trees, waterbirds along the Rift Valley lakes — different parks in the north deliver noticeably different sightings rather than more of the same.",
  },
  {
    title: "Landscapes that change day to day",
    body: "Short-grass plains, acacia woodland, forested escarpment and highland farmland all sit within a few hours of each other, so the view from the vehicle keeps shifting.",
  },
  {
    title: "The Serengeti ecosystem",
    body: "The Serengeti is part of a much larger ecosystem in which grazing herds move with the rains. Movement patterns vary from year to year, and where you stay influences what you are likely to encounter.",
  },
  {
    title: "Ngorongoro's volcanic setting",
    body: "The Ngorongoro Conservation Area is a protected landscape where wildlife, highland scenery and Maasai pastoral life share the same ground — the crater floor is its most photographed feature.",
  },
  {
    title: "Good conditions for photography",
    body: "Long low light in the early morning and late afternoon, open sightlines and unhurried game drives give photographers — phone or full kit — plenty to work with.",
  },
  {
    title: "Flexible safari styles",
    body: "Couples, families, small groups and private travellers all travel differently. We adjust distances, driving days, room configurations and lodge style to suit who is travelling.",
  },
];

export type DestinationCard = {
  slug: string;
  name: string;
  blurb: string;
  experience: string[];
  idealFor: string;
  image: ImageAsset;
};

export const destinationCards: DestinationCard[] = [
  {
    slug: "serengeti",
    name: "Serengeti National Park",
    blurb:
      "The classic image of an African safari: grassland running to the horizon, scattered rocky outcrops and skies that seem to double in size at sunrise.",
    experience: [
      "Long game drives across open plains",
      "Predator and plains-game viewing",
      "Wide, uninterrupted sunrise and sunset scenery",
    ],
    idealFor: "Travellers who want the big-country safari feeling and time to look for wildlife properly.",
    image: {
      src: serengetiImg,
      alt: "Lion resting on a rock outcrop with grazing antelope on the Serengeti grassland behind",
      credit: "Commissioned for 3jay Tour & Safari · owned licence · no attribution required · 2026",
    },
  },
  {
    slug: "ngorongoro",
    name: "Ngorongoro Conservation Area",
    blurb:
      "A protected highland landscape best known for its vast volcanic caldera, where grassland, swamp and a shallow soda lake sit side by side.",
    experience: [
      "Descending onto the crater floor for a game drive",
      "Highland views from the crater rim",
      "Concentrated wildlife within a compact area",
    ],
    idealFor: "Short trips and first safaris — a lot of landscape and wildlife interest in one day.",
    image: {
      src: ngorongoroImg,
      alt: "View across the Ngorongoro crater at sunrise with mist along the green caldera walls",
      credit: "Commissioned for 3jay Tour & Safari · owned licence · no attribution required · 2026",
    },
  },
  {
    slug: "tarangire",
    name: "Tarangire National Park",
    blurb:
      "Rolling country studded with baobabs and cut by a seasonal river, giving Tarangire a character quite unlike the open plains further north.",
    experience: [
      "Elephant viewing in a scenic setting",
      "Baobab-dotted landscapes and riverine woodland",
      "Rewarding birdlife for keen watchers",
    ],
    idealFor: "Photographers and anyone who enjoys a quieter, more intimate park.",
    image: {
      src: tarangireImg,
      alt: "Herd of elephants walking through golden grass beneath large baobab trees in Tarangire",
      credit: "Commissioned for 3jay Tour & Safari · owned licence · no attribution required · 2026",
    },
  },
  {
    slug: "lake-manyara",
    name: "Lake Manyara National Park",
    blurb:
      "A narrow strip of groundwater forest, floodplain and lake shore beneath the Rift Valley escarpment — often the first or last stop on a northern route.",
    experience: [
      "Forest and lakeshore game drives",
      "Waterbirds, including flamingos when conditions suit",
      "Dramatic escarpment scenery",
    ],
    idealFor: "Adding variety to a short itinerary without long driving days.",
    image: {
      src: manyaraImg,
      alt: "Flamingos wading in the shallows of Lake Manyara with the forested Rift Valley escarpment behind",
      credit: "Commissioned for 3jay Tour & Safari · owned licence · no attribution required · 2026",
    },
  },
];

export type PackageIdea = {
  duration: string;
  title: string;
  summary: string;
  couldInclude: string[];
};

/** Example durations only — not confirmed itineraries or prices. */
export const packageIdeas: PackageIdea[] = [
  {
    duration: "3 days",
    title: "3-Day Tanzania Safari",
    summary:
      "A short wildlife escape for travellers with limited time or those adding a safari onto other travel plans.",
    couldInclude: ["One or two northern parks", "Minimal driving between stops", "Full game-drive days"],
  },
  {
    duration: "4 days",
    title: "4-Day Tanzania Safari",
    summary:
      "Enough time to pair a scenic park with a bigger wildlife area and still travel at a comfortable pace.",
    couldInclude: ["Two to three parks", "A rest afternoon", "Sunrise or late-afternoon drives"],
  },
  {
    duration: "5 days",
    title: "5-Day Tanzania Safari",
    summary:
      "A balanced route that allows more than one night in the same place, so you are not packing every morning.",
    couldInclude: ["Three parks", "Two nights in one location", "Optional cultural visit where available"],
  },
  {
    duration: "7 days",
    title: "7-Day Tanzania Safari",
    summary:
      "The most relaxed way to see the northern circuit, with time to return to a good sighting area rather than rushing on.",
    couldInclude: ["Multiple parks", "Longer stays per camp", "Scope to extend to the coast"],
  },
  {
    duration: "Flexible",
    title: "Custom Tanzania Safari",
    summary:
      "Built entirely from your dates, interests and budget — the right option if none of the examples above quite fit.",
    couldInclude: ["Your chosen destinations", "Private or shared travel", "Accommodation to your preference"],
  },
];

export const customOptions = [
  "Trip duration",
  "Preferred destinations",
  "Accommodation style",
  "Budget",
  "Private or group travel",
  "Wildlife interests",
  "Family or honeymoon requirements",
];

export const experienceItems = [
  "Morning and afternoon game drives",
  "Unhurried wildlife observation",
  "Scenic landscapes and viewpoints",
  "Time and light for safari photography",
  "Lodge or tented-camp stays",
  "Local cultural experiences where available",
  "Relaxed downtime in nature",
];

export const experienceImage: ImageAsset = {
  src: campImg,
  alt: "Tented safari camp at dusk with lantern light and a campfire under acacia trees",
  credit: "Commissioned for 3jay Tour & Safari · owned licence · no attribution required · 2026",
};

export const seasons: { title: string; body: string }[] = [
  {
    title: "Dry seasons",
    body: "Drier months generally mean firmer roads, thinner vegetation and wildlife gathering around remaining water. These are the busiest periods, so accommodation is worth arranging well ahead.",
  },
  {
    title: "Green season",
    body: "Wetter months bring lush scenery, dramatic skies and fewer vehicles. Some areas become harder to reach, but landscape photography and birding are often at their best.",
  },
  {
    title: "Migration periods",
    body: "Grazing herds move through the wider Serengeti ecosystem across the year, following rainfall rather than a fixed calendar. We can suggest where to base yourself for the best chance at a given time, but no operator can guarantee a particular sighting on a particular date.",
  },
];

/** Examples only — replace with confirmed package terms before quoting. */
export const exampleInclusions = [
  "Safari transportation",
  "Professional safari guide",
  "Park entry fees",
  "Accommodation",
  "Meals",
  "Drinking water during safari",
];

export const exampleExclusions = [
  "International flights",
  "Travel insurance",
  "Personal expenses",
  "Tips",
  "Optional activities",
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "How many days do I need for a Tanzania safari?",
    a: "Three days is enough for a short, focused wildlife trip. Five to seven days lets you combine several parks at a more relaxed pace and spend more than one night in the same place.",
  },
  {
    q: "What animals can I see in Tanzania?",
    a: "Northern Tanzania supports a broad range of wildlife, including elephant, buffalo, giraffe, zebra, antelope species, big cats and a great variety of birds. Sightings are always down to nature, so nothing can be promised in advance.",
  },
  {
    q: "What is the best time to visit Tanzania?",
    a: "Tanzania can be visited year-round. Drier months are popular for easier game viewing, while the green season offers lush scenery and quieter parks. The right choice depends on what you want from the trip.",
  },
  {
    q: "Can I customise my safari?",
    a: "Yes. Every route we plan is adjustable — duration, destinations, accommodation style, pace and whether you travel privately or in a group.",
  },
  {
    q: "Is Tanzania suitable for families?",
    a: "It can be. We usually shorten driving days, choose family-friendly accommodation and keep game drives flexible so younger travellers stay comfortable.",
  },
  {
    q: "Can I combine Tanzania with Zanzibar?",
    a: "A coastal extension after a safari is a common request. Tell us if you would like one and we will look at how it fits your dates.",
  },
  {
    q: "What type of accommodation is available?",
    a: "Options in the region range from simple lodges to tented camps and more comfortable properties. We will confirm exactly what is available for your dates before quoting.",
  },
  {
    q: "How do I request a Tanzania safari quotation?",
    a: "Send us your travel dates, group size, rough budget and what you would most like to see. We will come back with a suggested route and a written quotation.",
  },
];

export const finalCta = {
  heading: "Your Tanzania Adventure Starts Here",
  body: "Whether you have fixed dates or only a rough idea, the next step is simple: tell us who is travelling and what you are hoping for. We will reply with an honest, clearly costed suggestion — no pressure, no templates.",
  ctaLabel: "Request a Safari Quote",
};
