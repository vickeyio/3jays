// AUTO-GENERATED DATA — edit values here to update the site.
// Images are served from Wikimedia Commons via Special:FilePath; see imageSource for the file page,
// which carries the author and licence details for attribution.

export type Country = "kenya" | "uganda" | "tanzania" | "somalia";

export type Faq = { q: string; a: string };

export type AfricaDestination = {
  country: Country;
  destinationName: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  whyVisit: string;
  thingsToDo: string[];
  highlights: string[];
  activities: string[];
  recommendedDays: number;
  recommendedNights: number;
  activityDuration: string;
  priceFrom: number;
  priceRange: string;
  currency: string;
  bestTimeToVisit: string;
  tags: string[];
  budget: "budget" | "mid-range" | "luxury";
  accommodation: string;
  transportation: string;
  whatToBring: string[];
  mapLocation: string;
  safetyNotes: string;
  imageUrl: string;
  imageAlt: string;
  imageCredit: string;
  imageLicense: string;
  imageSource: string;
  faqs: Faq[];
};

export type CountryInfo = {
  code: Country;
  name: string;
  flag: string;
  tagline: string;
  blurb: string;
};

export type DestinationVideo = {
  id: string;
  country: Country;
  title: string;
  channel: string;
  description: string;
};

export const countries: CountryInfo[] = [
  {
    "code": "kenya",
    "name": "Kenya",
    "flag": "🇰🇪",
    "tagline": "Where the safari began",
    "blurb": "Great Migration plains, elephants beneath Kilimanjaro, Rift Valley lakes and a warm Indian Ocean coast — Kenya packs an extraordinary range into short distances."
  },
  {
    "code": "uganda",
    "name": "Uganda",
    "flag": "🇺🇬",
    "tagline": "The Pearl of Africa",
    "blurb": "Mountain gorillas and chimpanzees in ancient rainforest, savannah parks along the Albertine Rift, and the Nile at its source."
  },
  {
    "code": "tanzania",
    "name": "Tanzania",
    "flag": "🇹🇿",
    "tagline": "Serengeti, Kilimanjaro, Zanzibar",
    "blurb": "The Serengeti and Ngorongoro Crater, Africa's highest summit and the reefs of Zanzibar — the classic safari-and-beach combination."
  },
  {
    "code": "somalia",
    "name": "Somalia",
    "flag": "🇸🇴",
    "tagline": "Ancient coast, Neolithic art",
    "blurb": "Africa's longest coastline, the Neolithic paintings of Laas Geel and the Cal Madow mountains — pioneering travel that needs careful, advised planning."
  }
];

export const africaDestinations: AfricaDestination[] = [
  {
    "country": "kenya",
    "destinationName": "Maasai Mara National Reserve",
    "slug": "maasai-mara-national-reserve",
    "shortDescription": "Kenya's best-known reserve, famous for big cat sightings and the annual wildebeest crossing of the Mara River. Open grassland makes wildlife viewing straightforward year-round, and Maasai communities on the surrounding conservancies offer cultural visits.",
    "fullDescription": "The Maasai Mara National Reserve covers roughly 1,510 km² in south-western Kenya and forms the northern tip of the wider Serengeti-Mara ecosystem. Rolling grassland, riverine forest along the Mara and Talek rivers and scattered acacia give it exceptional visibility for game viewing. Between roughly July and October, wildebeest and zebra move north from Tanzania in the migration, with river crossings drawing visitors from around the world. The reserve is bordered by community conservancies where vehicle numbers are limited and night drives and walking safaris are permitted.",
    "whyVisit": "Reliable big cat sightings, wide open plains that suit photography, and the seasonal migration make the Mara a strong first safari in Kenya.",
    "thingsToDo": [
      "Morning and afternoon game drives",
      "Hot-air balloon safari over the plains at dawn",
      "Visit a Maasai village or community conservancy",
      "Guided bush walk in a conservancy",
      "Sundowner on the escarpment"
    ],
    "highlights": [
      "Lion, leopard and cheetah",
      "Wildebeest migration river crossings (approx. Jul-Oct)",
      "Mara River hippo and crocodile pools",
      "Oloololo Escarpment views"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography",
      "Culture"
    ],
    "recommendedDays": 3,
    "recommendedNights": 2,
    "activityDuration": "6-10 hours of game viewing per day, usually split into a dawn and a late-afternoon drive",
    "priceFrom": 450,
    "priceRange": "$450-$1,800 per person depending on season, camp and group size",
    "currency": "USD",
    "bestTimeToVisit": "July to October for the migration; January to March for green landscapes and calving",
    "tags": [
      "safari",
      "wildlife",
      "photography",
      "culture"
    ],
    "budget": "mid-range",
    "accommodation": "Options range from public campsites and tented camps in Talek and Sekenani to mid-range lodges and small luxury camps inside the conservancies.",
    "transportation": "About 5-6 hours by road from Nairobi in a 4x4, or a 45-minute scheduled flight to one of the Mara airstrips.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "South-western Kenya, Narok County, bordering the Serengeti",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Masai_Mara_at_Sunset.jpg?width=1280",
    "imageAlt": "Wildebeest and zebra grazing on the open grassland plains of the Maasai Mara at sunset, Kenya",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Maasai_Mara",
    "faqs": [
      {
        "q": "When are the river crossings?",
        "a": "Crossings are most likely between July and October, but they depend on rainfall and herd movement and can never be guaranteed."
      },
      {
        "q": "How many days do I need?",
        "a": "Two nights is the practical minimum; three nights gives you far better odds of varied sightings."
      }
    ]
  },
  {
    "country": "kenya",
    "destinationName": "Amboseli National Park",
    "slug": "amboseli-national-park",
    "shortDescription": "Best known for large elephant herds photographed against Mount Kilimanjaro. The park is compact, easy to combine with the Mara, and its swamps hold wildlife through the dry months.",
    "fullDescription": "Amboseli lies at the foot of Kilimanjaro on the Kenya-Tanzania border and covers about 392 km². Meltwater from the mountain feeds permanent swamps that attract elephants, buffalo, hippo and hundreds of bird species even when the surrounding plains are dry. The park has been the site of one of the longest-running elephant studies in the world, and many of its families are individually known to researchers and guides.",
    "whyVisit": "Few places in Africa give you a clearer view of free-ranging elephants with a snow-capped mountain behind them.",
    "thingsToDo": [
      "Game drives around Enkongo Narok swamp",
      "Sunrise photography with Kilimanjaro",
      "Observation Hill viewpoint walk",
      "Maasai cultural visit near the park boundary"
    ],
    "highlights": [
      "Large elephant herds",
      "Kilimanjaro backdrop on clear mornings",
      "Swamp birdlife including pelicans and flamingos",
      "Big skies and dust-plume landscapes"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "5-8 hours of game viewing per day",
    "priceFrom": 380,
    "priceRange": "$380-$1,200 per person depending on season and lodge",
    "currency": "USD",
    "bestTimeToVisit": "June to October and January to February, when skies are clearest",
    "tags": [
      "safari",
      "wildlife",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Lodges and tented camps inside the park and on the neighbouring Maasai group ranches, plus simpler guesthouses in Kimana.",
    "transportation": "Roughly 4 hours by road from Nairobi, or a short scheduled flight to Amboseli airstrip.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Southern Kenya, Kajiado County, on the Tanzanian border",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%22Tim%22_the_Elephant_at_Amboseli_national_park.jpg?width=1280",
    "imageAlt": "Elephants walking across dry lake bed with Mount Kilimanjaro rising behind, Amboseli National Park, Kenya",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://commons.wikimedia.org/wiki/File:%22Tim%22_the_Elephant_at_Amboseli_national_park.jpg",
    "faqs": []
  },
  {
    "country": "kenya",
    "destinationName": "Nairobi National Park",
    "slug": "nairobi-national-park",
    "shortDescription": "A working wildlife park on the edge of the capital where rhino, lion and giraffe are viewed against a city skyline. Ideal for a first or last day in Kenya when time is short.",
    "fullDescription": "Established in 1946, Nairobi National Park covers about 117 km² and is fenced on the city side but open to the south, allowing seasonal wildlife movement. It holds a significant black rhino population, along with lion, buffalo, giraffe, zebra and more than 400 recorded bird species. The park can be combined in one morning with the nearby elephant orphanage and giraffe centre.",
    "whyVisit": "It is the easiest wildlife experience in Kenya to fit around flights, meetings or a family arrival day.",
    "thingsToDo": [
      "Half-day game drive",
      "Ivory Burning Site Monument",
      "Combine with the elephant orphanage and giraffe centre",
      "Walking trail at the hippo pools"
    ],
    "highlights": [
      "Black and white rhino",
      "Lion and buffalo close to the city",
      "Skyline-and-wildlife photography",
      "Hippo pools picnic area"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 1,
    "recommendedNights": 0,
    "activityDuration": "3-5 hours for a typical half-day drive",
    "priceFrom": 90,
    "priceRange": "$90-$250 per person including park fees and a guided vehicle",
    "currency": "USD",
    "bestTimeToVisit": "Year-round; June to October and January to February are driest",
    "tags": [
      "safari",
      "wildlife",
      "photography"
    ],
    "budget": "budget",
    "accommodation": "Not required inside the park; visitors stay in Nairobi hotels and guesthouses to suit any budget.",
    "transportation": "20-40 minutes from central Nairobi by road, depending on traffic and gate.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Nairobi County, immediately south of Nairobi city",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lions_of_Kenya_02.jpg?width=1280",
    "imageAlt": "Lions resting on grassland with the Nairobi city skyline visible in the background, Kenya",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Nairobi_National_Park",
    "faqs": []
  },
  {
    "country": "kenya",
    "destinationName": "Lake Nakuru National Park",
    "slug": "lake-nakuru-national-park",
    "shortDescription": "A fenced Rift Valley park around an alkaline lake, known for rhino conservation, Rothschild's giraffe and large numbers of waterbirds. Compact enough for a one-night stop.",
    "fullDescription": "Lake Nakuru National Park protects around 188 km² of lake, acacia woodland and yellow-barked fever tree forest inside the Great Rift Valley. It is one of Kenya's most important rhino sanctuaries and also holds Rothschild's giraffe, lion, leopard and waterbuck. Flamingo numbers fluctuate widely with water level and algae, so large flocks are seasonal rather than guaranteed.",
    "whyVisit": "Good rhino viewing and dramatic escarpment viewpoints in a park you can cover thoroughly in a single day.",
    "thingsToDo": [
      "Game drive along the lake shore",
      "Baboon Cliff and Out of Africa viewpoints",
      "Birdwatching from the causeway",
      "Makalia Falls in the south of the park"
    ],
    "highlights": [
      "White and black rhino",
      "Rothschild's giraffe",
      "Pelicans, flamingos and over 400 bird species",
      "Rift Valley escarpment views"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "4-7 hours of game viewing per day",
    "priceFrom": 220,
    "priceRange": "$220-$700 per person depending on lodge standard",
    "currency": "USD",
    "bestTimeToVisit": "Year-round; birdlife is strongest after the rains",
    "tags": [
      "safari",
      "wildlife",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Lodges inside the park plus a wide range of hotels in Nakuru town.",
    "transportation": "About 3 hours by road from Nairobi via the Rift Valley escarpment.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Central Rift Valley, Nakuru County",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lake-Nakuru-Baboon-Hill-View.JPG?width=1280",
    "imageAlt": "View over Lake Nakuru from Baboon Cliff with acacia woodland and shoreline birds, Kenya",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Lake_Nakuru",
    "faqs": []
  },
  {
    "country": "kenya",
    "destinationName": "Tsavo East & Tsavo West National Parks",
    "slug": "tsavo-east-tsavo-west-national-parks",
    "shortDescription": "Together these form one of the largest protected areas in the world — red-dust elephants, lava flows and the Mzima Springs. Wildlife is spread out, which suits travellers who value space over quick sightings.",
    "fullDescription": "Tsavo East and Tsavo West cover roughly 22,000 km² between Nairobi and the coast. Tsavo East is flat, semi-arid and famous for elephants coated in its red soil; Tsavo West is greener and more rugged, with volcanic hills, the Shetani lava flow and the crystal-clear Mzima Springs where hippos can be watched from an underwater hide. Because the parks are so large, sightings take patience but crowds are few.",
    "whyVisit": "Vast, uncrowded landscapes and an easy stop between Nairobi and the Kenyan coast.",
    "thingsToDo": [
      "Game drives on the Galana River circuit",
      "Mzima Springs underwater hippo hide",
      "Shetani lava flow and caves",
      "Lugard Falls walk",
      "Rhino sanctuary at Ngulia"
    ],
    "highlights": [
      "Red elephants of Tsavo",
      "Yatta Plateau, one of the world's longest lava flows",
      "Mzima Springs",
      "Big skies and open wilderness"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography",
      "Adventure"
    ],
    "recommendedDays": 3,
    "recommendedNights": 2,
    "activityDuration": "6-9 hours of game viewing per day",
    "priceFrom": 300,
    "priceRange": "$300-$950 per person depending on camp and season",
    "currency": "USD",
    "bestTimeToVisit": "June to October and January to March",
    "tags": [
      "safari",
      "wildlife",
      "photography",
      "adventure"
    ],
    "budget": "mid-range",
    "accommodation": "Tented camps, self-catering bandas and lodges spread across both parks.",
    "transportation": "4-6 hours by road from Nairobi or roughly 3 hours from Mombasa; the Nairobi-Mombasa railway also stops nearby.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "South-eastern Kenya, between Nairobi and the coast",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mudanda_Rock_in_Tsavo_East_National_Park_%28edited%29.jpg?width=1280",
    "imageAlt": "Red-dust elephants and Mudanda Rock in Tsavo East National Park, Kenya",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Mudanda_Rock_in_Tsavo_East_National_Park_(edited).jpg",
    "faqs": []
  },
  {
    "country": "kenya",
    "destinationName": "Diani Beach",
    "slug": "diani-beach",
    "shortDescription": "A long stretch of white sand on Kenya's south coast with a protective reef, calm swimming and a wide choice of hotels. The natural pairing with a Maasai Mara or Tsavo safari.",
    "fullDescription": "Diani runs for about 17 km south of Mombasa along the Indian Ocean. A fringing reef keeps the lagoon calm and clear, making it suitable for swimming, snorkelling and kitesurfing depending on the season. Inland are the Shimba Hills, home to sable antelope, and the Kaya Kinondo sacred forest, a UNESCO-listed Mijikenda site open to guided visits.",
    "whyVisit": "A straightforward, comfortable way to end a safari with a few days by the sea.",
    "thingsToDo": [
      "Snorkelling and diving on the reef",
      "Dhow trip to Wasini Island and Kisite Marine Park",
      "Kitesurfing lessons in season",
      "Shimba Hills day safari",
      "Guided walk in Kaya Kinondo sacred forest"
    ],
    "highlights": [
      "Reef-protected swimming beach",
      "Colobus monkeys in the coastal forest",
      "Kisite-Mpunguti Marine Park",
      "Fresh Swahili seafood"
    ],
    "activities": [
      "Beach",
      "Adventure",
      "Culture"
    ],
    "recommendedDays": 4,
    "recommendedNights": 3,
    "activityDuration": "Flexible; boat and reef excursions typically run 4-6 hours",
    "priceFrom": 150,
    "priceRange": "$150-$900 per person per stay depending on hotel standard",
    "currency": "USD",
    "bestTimeToVisit": "December to March and July to October",
    "tags": [
      "beach",
      "adventure",
      "culture"
    ],
    "budget": "mid-range",
    "accommodation": "Everything from backpacker cottages to all-inclusive resorts and private villas.",
    "transportation": "About 1 hour by road from Mombasa, or a scheduled flight to Ukunda airstrip.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Kenyan south coast, Kwale County",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Diani_Beach_Ukunda.jpg?width=1280",
    "imageAlt": "White sand and turquoise water framed by palm trees at Diani Beach on the Kenyan south coast",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Diani_Beach",
    "faqs": []
  },
  {
    "country": "kenya",
    "destinationName": "Lamu Island",
    "slug": "lamu-island",
    "shortDescription": "A UNESCO World Heritage Swahili town of coral-stone houses, carved doors and donkey-lined lanes, with quiet beaches at Shela. Best suited to travellers who enjoy slow, cultural travel.",
    "fullDescription": "Lamu Old Town is the oldest continuously inhabited Swahili settlement in East Africa and has kept its traditional layout and architecture. There are almost no cars: transport is by donkey or by dhow. Shela village, a short boat ride away, has a long dune-backed beach and a cluster of small hotels. The Maulidi festival and annual dhow races are significant cultural events.",
    "whyVisit": "A living Swahili town rather than a resort — the atmosphere is the attraction.",
    "thingsToDo": [
      "Guided walk through Lamu Old Town",
      "Sunset dhow sail",
      "Lamu Museum and Swahili House Museum",
      "Beach day at Shela",
      "Manda Island and mangrove excursions"
    ],
    "highlights": [
      "UNESCO-listed Swahili architecture",
      "Traditional dhow building",
      "Shela beach dunes",
      "Swahili cuisine and coffee culture"
    ],
    "activities": [
      "Culture",
      "Beach",
      "Photography"
    ],
    "recommendedDays": 3,
    "recommendedNights": 2,
    "activityDuration": "2-4 hours for town walks; full-day dhow excursions available",
    "priceFrom": 120,
    "priceRange": "$120-$700 per person per stay depending on the guesthouse or hotel",
    "currency": "USD",
    "bestTimeToVisit": "November to March; check current travel advice before booking",
    "tags": [
      "culture",
      "beach",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Restored Swahili houses, boutique guesthouses and beach hotels in Shela.",
    "transportation": "Scheduled flights from Nairobi or Mombasa to Manda Island, then a short boat transfer.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Lamu Archipelago, northern Kenyan coast",
    "safetyNotes": "Lamu Island itself is a long-established visitor destination, but parts of Lamu County near the mainland border carry travel advisories. Check your government's current advice and fly in rather than driving the northern coastal road.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamu%2C_Lamu_Island%2C_Kenya.jpg?width=1280",
    "imageAlt": "Dhow sailing boats moored along the waterfront of Lamu Old Town, Kenya",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Lamu_Island",
    "faqs": []
  },
  {
    "country": "kenya",
    "destinationName": "Mount Kenya",
    "slug": "mount-kenya",
    "shortDescription": "Africa's second-highest mountain, with a trekking route to Point Lenana that most reasonably fit walkers can complete. Forest, moorland and glacial valleys in a few days of walking.",
    "fullDescription": "Mount Kenya is an extinct stratovolcano whose highest peaks, Batian and Nelion, require technical climbing. The trekking summit, Point Lenana at 4,985 m, is reached on foot via the Sirimon, Naro Moru or Chogoria routes. Trekkers pass through montane forest, giant heather and afro-alpine moorland with lobelias and groundsels. Altitude is the main challenge, so extra acclimatisation days matter more than fitness alone.",
    "whyVisit": "A serious high-altitude trek with more varied scenery and far fewer people than Kilimanjaro.",
    "thingsToDo": [
      "Sirimon-Chogoria traverse trek",
      "Point Lenana summit at sunrise",
      "Day walks in the montane forest",
      "Wildlife viewing on the lower slopes"
    ],
    "highlights": [
      "Point Lenana (4,985 m)",
      "Giant lobelia and groundsel moorland",
      "Glacial tarns and valleys",
      "Chogoria route scenery"
    ],
    "activities": [
      "Hiking",
      "Adventure",
      "Photography"
    ],
    "recommendedDays": 5,
    "recommendedNights": 4,
    "activityDuration": "5-8 hours of walking per day on trekking days",
    "priceFrom": 600,
    "priceRange": "$600-$1,500 per person including guides, porters and park fees",
    "currency": "USD",
    "bestTimeToVisit": "January to February and July to October",
    "tags": [
      "hiking",
      "adventure",
      "photography",
      "mountains"
    ],
    "budget": "mid-range",
    "accommodation": "Mountain huts and camps on the trekking routes; lodges in Nanyuki and Naro Moru before and after.",
    "transportation": "About 3 hours by road from Nairobi to Nanyuki or Chogoria trailheads.",
    "whatToBring": [
      "Broken-in hiking boots and warm layers",
      "Waterproof jacket and rain cover",
      "Headtorch and refillable water bottles",
      "Gloves, hat and thermal base layers",
      "Personal first-aid kit"
    ],
    "mapLocation": "Central Kenya, Mount Kenya National Park",
    "safetyNotes": "Altitude sickness is the main risk. Build in acclimatisation days, ascend slowly and trek with a licensed guide.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MtKenya.jpg?width=1280",
    "imageAlt": "Snow-capped peaks of Mount Kenya rising above alpine moorland and glacial tarns",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Mount_Kenya",
    "faqs": []
  },
  {
    "country": "kenya",
    "destinationName": "Samburu National Reserve",
    "slug": "samburu-national-reserve",
    "shortDescription": "A semi-arid northern reserve along the Ewaso Ng'iro River, home to species you will not see in the Mara — Grevy's zebra, reticulated giraffe, gerenuk, beisa oryx and Somali ostrich.",
    "fullDescription": "Samburu covers about 165 km² of dry acacia scrub and doum palm riverine forest in northern Kenya. The river is the lifeline of the reserve and draws elephant herds and predators throughout the dry season. It is also a strong destination for cultural travel, with Samburu communities running conservancies and cultural visits nearby.",
    "whyVisit": "The northern 'special five' species and a landscape that feels very different from southern Kenya.",
    "thingsToDo": [
      "River-edge game drives",
      "Samburu cultural village visit",
      "Guided walking safari in a conservancy",
      "Birdwatching along the Ewaso Ng'iro"
    ],
    "highlights": [
      "Grevy's zebra and reticulated giraffe",
      "Gerenuk and beisa oryx",
      "Leopard sightings along the river",
      "Samburu culture"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Culture",
      "Photography"
    ],
    "recommendedDays": 3,
    "recommendedNights": 2,
    "activityDuration": "5-8 hours of game viewing per day",
    "priceFrom": 400,
    "priceRange": "$400-$1,400 per person depending on camp and season",
    "currency": "USD",
    "bestTimeToVisit": "June to October and December to March",
    "tags": [
      "safari",
      "wildlife",
      "culture",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Riverside tented camps and lodges inside the reserve and in the neighbouring conservancies.",
    "transportation": "About 5-6 hours by road from Nairobi, or a scheduled flight to Samburu airstrip.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Northern Kenya, Samburu County",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Samburu_National_Reserve%2C_Kenya-26December2012.jpg?width=1280",
    "imageAlt": "Elephants and doum palms along the Ewaso Ng'iro River in Samburu National Reserve, Kenya",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Samburu_National_Reserve",
    "faqs": []
  },
  {
    "country": "kenya",
    "destinationName": "Hell's Gate National Park",
    "slug": "hell-s-gate-national-park",
    "shortDescription": "One of the few Kenyan parks you can explore on foot or by bicycle. Dramatic gorges, geothermal steam and rock towers, an easy day trip from Nairobi or Naivasha.",
    "fullDescription": "Hell's Gate covers about 68 km² beside Lake Naivasha and is defined by red cliffs, volcanic plugs and the narrow Ol Njorowa Gorge. Because there are no large predators in significant numbers, walking and cycling are permitted, and zebra, giraffe, buffalo and eland are commonly seen at close range. Geothermal steam vents and the Olkaria hot springs sit within the park boundary.",
    "whyVisit": "Active, affordable and refreshingly different from a vehicle-based safari.",
    "thingsToDo": [
      "Cycle the main park track",
      "Guided hike through Ol Njorowa Gorge",
      "Rock climbing at Fischer's Tower",
      "Boat trip and birdwatching on Lake Naivasha",
      "Crescent Island walking safari"
    ],
    "highlights": [
      "Fischer's Tower and Central Tower",
      "Ol Njorowa Gorge",
      "Geothermal steam vents",
      "Cycling among zebra and giraffe"
    ],
    "activities": [
      "Adventure",
      "Hiking",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 1,
    "recommendedNights": 0,
    "activityDuration": "4-6 hours for cycling and the gorge walk",
    "priceFrom": 70,
    "priceRange": "$70-$220 per person including entry, bicycle hire and a gorge guide",
    "currency": "USD",
    "bestTimeToVisit": "Year-round; avoid the gorge during heavy rain",
    "tags": [
      "adventure",
      "hiking",
      "wildlife",
      "photography"
    ],
    "budget": "budget",
    "accommodation": "Day trip from Nairobi, or stay at hotels and campsites around Lake Naivasha.",
    "transportation": "About 2 hours by road from Nairobi via Naivasha town.",
    "whatToBring": [
      "Broken-in hiking boots and warm layers",
      "Waterproof jacket and rain cover",
      "Headtorch and refillable water bottles",
      "Gloves, hat and thermal base layers",
      "Personal first-aid kit"
    ],
    "mapLocation": "Rift Valley, near Lake Naivasha, Nakuru County",
    "safetyNotes": "Flash flooding can occur in the gorge. Always walk with a park-registered guide and follow their advice on conditions.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hell%27s_Gate%2C_Kenya.jpg?width=1280",
    "imageAlt": "Red rock cliffs and Fischer's Tower rising above open grassland in Hell's Gate National Park, Kenya",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Hell's_Gate_National_Park",
    "faqs": []
  },
  {
    "country": "uganda",
    "destinationName": "Bwindi Impenetrable National Park",
    "slug": "bwindi-impenetrable-national-park",
    "shortDescription": "Home to roughly half the world's mountain gorillas. A trek to a habituated family is Uganda's flagship experience and requires a permit booked well in advance.",
    "fullDescription": "Bwindi is an ancient montane and lowland rainforest of about 331 km², listed as a UNESCO World Heritage Site. Several habituated gorilla families are visited from four trekking sectors: Buhoma, Ruhija, Rushaga and Nkuringo. Trekking groups are strictly limited, and time with the gorillas is capped at one hour. The forest also holds chimpanzees, forest elephants and over 350 bird species including many Albertine Rift endemics.",
    "whyVisit": "There are only a handful of places on earth where you can spend an hour with wild mountain gorillas, and Bwindi is the most accessible.",
    "thingsToDo": [
      "Mountain gorilla trekking",
      "Gorilla habituation experience (longer contact time, limited permits)",
      "Batwa community cultural walk",
      "Birding along the Ruhija trail",
      "Waterfall forest hike"
    ],
    "highlights": [
      "Habituated mountain gorilla families",
      "Albertine Rift endemic birds",
      "Batwa cultural heritage",
      "Dense primary rainforest"
    ],
    "activities": [
      "Wildlife",
      "Hiking",
      "Culture",
      "Photography"
    ],
    "recommendedDays": 3,
    "recommendedNights": 2,
    "activityDuration": "Gorilla treks last 2-8 hours in total, with a strictly limited one hour at the gorillas",
    "priceFrom": 900,
    "priceRange": "Gorilla permits are set by the Uganda Wildlife Authority and are additional to trip costs; total trips typically $900-$2,500 per person",
    "currency": "USD",
    "bestTimeToVisit": "June to August and December to February, though trekking runs year-round",
    "tags": [
      "wildlife",
      "hiking",
      "culture",
      "photography"
    ],
    "budget": "luxury",
    "accommodation": "Lodges and community-run guesthouses in Buhoma, Ruhija, Rushaga and Nkuringo.",
    "transportation": "8-10 hours by road from Kampala or Entebbe, or a scheduled flight to Kihihi or Kisoro airstrip.",
    "whatToBring": [
      "Broken-in hiking boots and warm layers",
      "Waterproof jacket and rain cover",
      "Headtorch and refillable water bottles",
      "Gloves, hat and thermal base layers",
      "Personal first-aid kit"
    ],
    "mapLocation": "South-western Uganda, along the Democratic Republic of Congo border",
    "safetyNotes": "Gorilla permits are limited, must be booked in advance through the Uganda Wildlife Authority or a licensed operator, and permit prices are reviewed periodically — always confirm the current rate before budgeting. A minimum age applies, and trekkers with respiratory illness may be refused for the gorillas' protection. Terrain is steep and often muddy.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bwindi.JPG?width=1280",
    "imageAlt": "Dense misty rainforest covering the steep hills of Bwindi Impenetrable National Park, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Bwindi_Impenetrable_National_Park",
    "faqs": [
      {
        "q": "Do I need a permit?",
        "a": "Yes. Every trekker needs a gorilla permit issued by the Uganda Wildlife Authority. Numbers are capped daily and permits sell out in peak months, so book early through a licensed operator."
      },
      {
        "q": "Can permit prices change?",
        "a": "Yes. Permit fees are set by the authority and are reviewed from time to time, so we confirm the current price at the time of booking."
      }
    ]
  },
  {
    "country": "uganda",
    "destinationName": "Queen Elizabeth National Park",
    "slug": "queen-elizabeth-national-park",
    "shortDescription": "Uganda's most-visited savannah park, combining a boat cruise on the Kazinga Channel with game drives and the tree-climbing lions of the Ishasha sector.",
    "fullDescription": "Queen Elizabeth spans about 1,978 km² between Lake Edward and Lake George, taking in savannah, crater lakes, wetlands and forest. The Kazinga Channel boat cruise offers reliable close viewing of hippo, buffalo, elephant and waterbirds. In the southern Ishasha sector, lions are regularly seen resting in fig trees. Kyambura Gorge holds a habituated chimpanzee group.",
    "whyVisit": "Boat-based wildlife viewing plus classic game drives, and an easy pairing with Bwindi gorilla trekking.",
    "thingsToDo": [
      "Kazinga Channel boat cruise",
      "Game drives in the Kasenyi plains",
      "Tree-climbing lion search in Ishasha",
      "Chimpanzee tracking in Kyambura Gorge",
      "Crater drive viewpoints"
    ],
    "highlights": [
      "Kazinga Channel hippos and birdlife",
      "Ishasha tree-climbing lions",
      "Explosion crater lakes",
      "Over 600 recorded bird species"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 3,
    "recommendedNights": 2,
    "activityDuration": "5-8 hours per day; the boat cruise runs about 2 hours",
    "priceFrom": 350,
    "priceRange": "$350-$1,200 per person depending on lodge and season",
    "currency": "USD",
    "bestTimeToVisit": "June to September and December to February",
    "tags": [
      "safari",
      "wildlife",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Lodges, safari camps and community bandas in Mweya, Katunguru and Ishasha.",
    "transportation": "About 6-7 hours by road from Kampala, or a scheduled flight to Mweya or Kasese airstrip.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Western Uganda, along the Albertine Rift",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Crater_lake_in_Queen_Elizabeth_National_Park.jpg?width=1280",
    "imageAlt": "Elephants on the savannah beside the Kazinga Channel in Queen Elizabeth National Park, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Queen_Elizabeth_National_Park",
    "faqs": []
  },
  {
    "country": "uganda",
    "destinationName": "Murchison Falls National Park",
    "slug": "murchison-falls-national-park",
    "shortDescription": "Uganda's largest park, where the Nile squeezes through a 7-metre gap and drops into the Albert Nile. Boat trips to the falls plus strong savannah game viewing.",
    "fullDescription": "Murchison Falls National Park covers about 3,893 km² either side of the Victoria Nile. The northern bank has open savannah with elephant, giraffe, buffalo, lion and Uganda kob; the southern side is more wooded. The standard visit combines a launch trip to the base of the falls with a hike to the top, and game drives at dawn. Budongo Forest on the park's southern edge offers chimpanzee tracking.",
    "whyVisit": "The waterfall itself is genuinely dramatic, and the boat-plus-game-drive combination works well in a short trip.",
    "thingsToDo": [
      "Launch cruise to the base of the falls",
      "Hike to the top of the falls",
      "Northern bank game drive",
      "Chimpanzee tracking in Budongo Forest",
      "Delta boat trip for shoebill sightings"
    ],
    "highlights": [
      "Murchison Falls gorge",
      "Rothschild's giraffe",
      "Nile delta shoebill stork",
      "Nile crocodiles and hippo pods"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Adventure",
      "Photography"
    ],
    "recommendedDays": 3,
    "recommendedNights": 2,
    "activityDuration": "5-9 hours per day; the launch cruise runs about 3 hours",
    "priceFrom": 320,
    "priceRange": "$320-$1,100 per person depending on lodge and season",
    "currency": "USD",
    "bestTimeToVisit": "December to February and June to September",
    "tags": [
      "safari",
      "wildlife",
      "adventure",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Lodges and tented camps at Paraa and Pakuba, plus budget options in Masindi.",
    "transportation": "About 5 hours by road from Kampala, or a scheduled flight to Pakuba or Bugungu airstrip.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "North-western Uganda, along the Victoria Nile",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Murchison_Falls_-_by_Boschlech.jpg?width=1280",
    "imageAlt": "The Nile forced through a narrow gorge at Murchison Falls, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Murchison_Falls_National_Park",
    "faqs": []
  },
  {
    "country": "uganda",
    "destinationName": "Kibale Forest National Park",
    "slug": "kibale-forest-national-park",
    "shortDescription": "The best place in East Africa for chimpanzee tracking, with thirteen primate species in one tropical forest. Often combined with Queen Elizabeth National Park.",
    "fullDescription": "Kibale protects about 795 km² of moist evergreen forest in western Uganda and holds one of the highest primate densities in Africa, including a large habituated chimpanzee community. Tracking permits are limited per session. The neighbouring Bigodi Wetland Sanctuary is community-run and offers an excellent guided swamp walk for primates and birds.",
    "whyVisit": "A close, reliable primate encounter in genuine rainforest, with strong community tourism nearby.",
    "thingsToDo": [
      "Chimpanzee tracking",
      "Chimpanzee habituation experience (full day)",
      "Bigodi Wetland Sanctuary guided walk",
      "Night forest walk",
      "Crater lakes drive around Ndali-Kasenda"
    ],
    "highlights": [
      "Habituated chimpanzee communities",
      "Red colobus and L'Hoest's monkey",
      "Bigodi swamp birdlife",
      "Crater lake scenery"
    ],
    "activities": [
      "Wildlife",
      "Hiking",
      "Photography",
      "Culture"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "Chimpanzee tracking takes 3-5 hours; habituation days run 8-12 hours",
    "priceFrom": 300,
    "priceRange": "$300-$900 per person; chimpanzee permits are set by the Uganda Wildlife Authority and priced separately",
    "currency": "USD",
    "bestTimeToVisit": "June to September and December to February",
    "tags": [
      "wildlife",
      "hiking",
      "photography",
      "culture"
    ],
    "budget": "mid-range",
    "accommodation": "Forest lodges near Kanyanchu, plus guesthouses and campsites around Fort Portal.",
    "transportation": "About 5 hours by road from Kampala, or a short transfer from Fort Portal.",
    "whatToBring": [
      "Broken-in hiking boots and warm layers",
      "Waterproof jacket and rain cover",
      "Headtorch and refillable water bottles",
      "Gloves, hat and thermal base layers",
      "Personal first-aid kit"
    ],
    "mapLocation": "Western Uganda, near Fort Portal",
    "safetyNotes": "Chimpanzee tracking permits are limited and priced separately by the Uganda Wildlife Authority; confirm current rates when booking.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Red_colobus_kibale.JPG?width=1280",
    "imageAlt": "Chimpanzee sitting in the canopy of Kibale Forest, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Kibale_National_Park",
    "faqs": []
  },
  {
    "country": "uganda",
    "destinationName": "Lake Bunyonyi",
    "slug": "lake-bunyonyi",
    "shortDescription": "A deep, island-dotted lake in the south-western highlands with no hippos or crocodiles, making it a rare safe swimming lake in the region. The usual rest stop after gorilla trekking.",
    "fullDescription": "Lake Bunyonyi sits at about 1,960 m among steeply terraced hills and contains 29 islands. The name means 'place of many little birds'. It is a quiet destination for canoeing, swimming, island visits and walking, and is close enough to Bwindi and Mgahinga to serve as a recovery stop before or after a gorilla trek.",
    "whyVisit": "Cool highland scenery and genuine downtime in the middle of an otherwise active itinerary.",
    "thingsToDo": [
      "Dugout canoe trip between the islands",
      "Swimming and kayaking",
      "Village and terrace walk",
      "Birdwatching from the shore",
      "Community craft visits"
    ],
    "highlights": [
      "29 islands including Punishment Island",
      "Terraced hillsides",
      "Highland birdlife",
      "Calm, bilharzia-free swimming"
    ],
    "activities": [
      "Culture",
      "Adventure",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "2-5 hours for canoe trips and village walks",
    "priceFrom": 90,
    "priceRange": "$90-$400 per person per stay depending on lodge",
    "currency": "USD",
    "bestTimeToVisit": "June to August and December to February",
    "tags": [
      "culture",
      "adventure",
      "photography",
      "mountains"
    ],
    "budget": "budget",
    "accommodation": "Island eco-lodges, lakeside camps and backpacker resorts near Kabale.",
    "transportation": "About 8 hours by road from Kampala; 1-2 hours from Bwindi's southern sectors.",
    "whatToBring": [
      "Broken-in hiking boots and warm layers",
      "Waterproof jacket and rain cover",
      "Headtorch and refillable water bottles",
      "Gloves, hat and thermal base layers",
      "Personal first-aid kit"
    ],
    "mapLocation": "South-western Uganda, near Kabale",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_Bunyonyi_%288146148093%29.jpg?width=1280",
    "imageAlt": "Terraced green hillsides surrounding the islands of Lake Bunyonyi, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Lake_Bunyonyi",
    "faqs": []
  },
  {
    "country": "uganda",
    "destinationName": "Kidepo Valley National Park",
    "slug": "kidepo-valley-national-park",
    "shortDescription": "Uganda's most remote savannah park, set in a broad valley ringed by mountains near the South Sudan border. Very few visitors and genuinely wild scenery.",
    "fullDescription": "Kidepo covers about 1,442 km² in Uganda's far north-east. The Narus Valley holds water into the dry season and concentrates buffalo, elephant, giraffe, zebra and lion; the Kidepo Valley itself is sandy and seasonal. Species found here and almost nowhere else in Uganda include cheetah, caracal and ostrich. The Karamojong and Ik communities live around the park.",
    "whyVisit": "The most remote and least crowded park in Uganda, with landscapes that feel genuinely untouched.",
    "thingsToDo": [
      "Narus Valley game drives",
      "Guided nature walk with rangers",
      "Karamojong manyatta cultural visit",
      "Kanangorok hot springs drive",
      "Birding for Karamoja apalis and ostrich"
    ],
    "highlights": [
      "Narus Valley wildlife concentrations",
      "Mountain-ringed savannah",
      "Cheetah and caracal",
      "Karamojong culture"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Culture",
      "Photography"
    ],
    "recommendedDays": 3,
    "recommendedNights": 2,
    "activityDuration": "6-9 hours of game viewing per day",
    "priceFrom": 550,
    "priceRange": "$550-$1,600 per person; flights add significantly to the cost",
    "currency": "USD",
    "bestTimeToVisit": "September to March, when the Narus Valley holds water",
    "tags": [
      "safari",
      "wildlife",
      "culture",
      "photography"
    ],
    "budget": "luxury",
    "accommodation": "A small number of lodges and bandas near Apoka, plus community campsites.",
    "transportation": "10-12 hours by road from Kampala, or a 2-hour charter or scheduled flight.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "North-eastern Uganda, Karamoja region near the South Sudan border",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nataba_Track%2C_Kidepo_Valley_National_Park.jpg?width=1280",
    "imageAlt": "Open savannah valley framed by mountains in Kidepo Valley National Park, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Kidepo_Valley_National_Park",
    "faqs": []
  },
  {
    "country": "uganda",
    "destinationName": "Jinja & the Source of the Nile",
    "slug": "jinja-the-source-of-the-nile",
    "shortDescription": "East Africa's adventure capital, sitting where the Nile leaves Lake Victoria. White-water rafting, kayaking, quad biking and bungee jumping within a short drive of Kampala.",
    "fullDescription": "Jinja is a colonial-era town on the shores of Lake Victoria, best known as the launch point for Nile rafting. Grade III-V rapids run downstream of the source, with calmer family float options available. Beyond adrenaline activities, there are boat trips to the source, tea and sugar estate landscapes, and the Sezibwa Falls on the road back to Kampala.",
    "whyVisit": "Serious adventure activities with reliable operators, close to the capital and easy to slot into a short trip.",
    "thingsToDo": [
      "Full-day white-water rafting",
      "Kayaking and stand-up paddleboarding",
      "Bungee jumping over the Nile",
      "Quad biking through village trails",
      "Boat trip to the Source of the Nile"
    ],
    "highlights": [
      "Source of the Nile",
      "Grade III-V rapids",
      "Bujagali area river scenery",
      "Lake Victoria sunsets"
    ],
    "activities": [
      "Adventure",
      "Culture",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "Rafting is a full day of 6-8 hours; shorter activities run 1-3 hours",
    "priceFrom": 120,
    "priceRange": "$120-$450 per person depending on activities and accommodation",
    "currency": "USD",
    "bestTimeToVisit": "Year-round; drier from December to February and June to August",
    "tags": [
      "adventure",
      "culture",
      "photography"
    ],
    "budget": "budget",
    "accommodation": "Riverside camps, backpacker hostels and mid-range hotels around Jinja and Bujagali.",
    "transportation": "About 2-3 hours by road east of Kampala.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Eastern Uganda, on Lake Victoria and the Victoria Nile",
    "safetyNotes": "Use operators with certified safety kayakers, current equipment and clear briefings; river conditions vary with water levels.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Uganda_Jinja_Streetview.JPG?width=1280",
    "imageAlt": "White water rafting on the Nile River rapids near Jinja, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Jinja%2C_Uganda",
    "faqs": []
  },
  {
    "country": "uganda",
    "destinationName": "Entebbe & Lake Victoria",
    "slug": "entebbe-lake-victoria",
    "shortDescription": "Uganda's airport town on a Lake Victoria peninsula — botanical gardens, a wildlife education centre and island boat trips. A relaxed first or last night.",
    "fullDescription": "Entebbe is quieter and greener than Kampala and sits directly on Lake Victoria. The Uganda Wildlife Education Centre works with rescued animals, the botanical gardens date from 1898 and are excellent for birding, and boats run to Ngamba Island, a sanctuary for orphaned chimpanzees. It is the natural base for the night before an early flight.",
    "whyVisit": "An easy, low-effort start or finish to a Uganda itinerary, minutes from the international airport.",
    "thingsToDo": [
      "Uganda Wildlife Education Centre visit",
      "Entebbe Botanical Gardens birding walk",
      "Ngamba Island chimpanzee sanctuary day trip",
      "Mabamba Swamp shoebill canoe trip",
      "Lakeside sunset dinner"
    ],
    "highlights": [
      "Ngamba Island chimpanzees",
      "Mabamba Swamp shoebill stork",
      "Botanical gardens birdlife",
      "Lake Victoria beaches"
    ],
    "activities": [
      "Wildlife",
      "Culture",
      "Photography"
    ],
    "recommendedDays": 1,
    "recommendedNights": 1,
    "activityDuration": "2-6 hours depending on whether you take an island or swamp trip",
    "priceFrom": 80,
    "priceRange": "$80-$350 per person depending on hotel and excursions",
    "currency": "USD",
    "bestTimeToVisit": "Year-round",
    "tags": [
      "wildlife",
      "culture",
      "photography",
      "beach"
    ],
    "budget": "budget",
    "accommodation": "Airport hotels, lakeside resorts and guesthouses across a wide price range.",
    "transportation": "5-15 minutes from Entebbe International Airport; about 1 hour from Kampala.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Central Uganda, on the northern shore of Lake Victoria",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Entebbe_vue_du_ciel.jpg?width=1280",
    "imageAlt": "Lakeside shoreline and gardens at Entebbe on Lake Victoria, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Entebbe",
    "faqs": []
  },
  {
    "country": "uganda",
    "destinationName": "Rwenzori Mountains National Park",
    "slug": "rwenzori-mountains-national-park",
    "shortDescription": "The 'Mountains of the Moon' — a glaciated range with surreal high-altitude vegetation and Africa's third-highest summit. A demanding multi-day trek for experienced walkers.",
    "fullDescription": "The Rwenzori range rises to 5,109 m at Margherita Peak on Mount Stanley and is a UNESCO World Heritage Site. Unlike Kilimanjaro or Mount Kenya it is not volcanic, and the trekking is wetter and more technical, passing through bog, giant heather and afro-alpine zones before any glacier work. The central circuit takes 7-9 days; shorter 3-4 day treks reach the lower zones.",
    "whyVisit": "Extraordinary, otherworldly vegetation and one of the toughest and most rewarding treks in Africa.",
    "thingsToDo": [
      "Central Circuit trek (7-9 days)",
      "Short Rwenzori trek to Mahoma Lake",
      "Margherita Peak summit attempt (technical)",
      "Village and coffee walks in Kilembe"
    ],
    "highlights": [
      "Margherita Peak (5,109 m)",
      "Giant lobelia and groundsel zones",
      "Glaciers on the equator",
      "Rwenzori turaco and endemic birds"
    ],
    "activities": [
      "Hiking",
      "Adventure",
      "Photography"
    ],
    "recommendedDays": 8,
    "recommendedNights": 7,
    "activityDuration": "6-9 hours of trekking per day",
    "priceFrom": 1200,
    "priceRange": "$1,200-$2,500 per person including guides, porters and park fees",
    "currency": "USD",
    "bestTimeToVisit": "June to August and December to February",
    "tags": [
      "hiking",
      "adventure",
      "photography",
      "mountains"
    ],
    "budget": "luxury",
    "accommodation": "Mountain huts and camps on the trekking routes; lodges in Kasese and Kilembe.",
    "transportation": "About 7 hours by road from Kampala to Kasese, or a scheduled flight to Kasese airstrip.",
    "whatToBring": [
      "Broken-in hiking boots and warm layers",
      "Waterproof jacket and rain cover",
      "Headtorch and refillable water bottles",
      "Gloves, hat and thermal base layers",
      "Personal first-aid kit"
    ],
    "mapLocation": "Western Uganda, on the DR Congo border",
    "safetyNotes": "This is a genuinely difficult, wet and cold trek. Summit attempts on Margherita require glacier equipment and technical guiding. Assess your fitness honestly and allow acclimatisation days.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/1172_ruwenzori.jpg?width=1280",
    "imageAlt": "Glaciated peaks and alpine vegetation in the Rwenzori Mountains, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Rwenzori_Mountains",
    "faqs": []
  },
  {
    "country": "uganda",
    "destinationName": "Mgahinga Gorilla National Park",
    "slug": "mgahinga-gorilla-national-park",
    "shortDescription": "Uganda's smallest national park, set on three Virunga volcanoes. Gorilla trekking, golden monkey tracking and volcano hikes, with the Batwa Trail as a cultural highlight.",
    "fullDescription": "Mgahinga covers about 34 km² on the slopes of Muhabura, Gahinga and Sabyinyo, on the shared border with Rwanda and the DR Congo. It has one habituated gorilla family and a habituated golden monkey group. The Batwa Trail is led by members of the Batwa community, who lived in the forest before it was gazetted, and is one of the most substantial cultural experiences in the region.",
    "whyVisit": "Volcano scenery, golden monkeys and a strong community-led cultural trail alongside gorilla trekking.",
    "thingsToDo": [
      "Mountain gorilla trekking",
      "Golden monkey tracking or habituation",
      "Batwa Trail cultural experience",
      "Sabyinyo, Gahinga or Muhabura volcano hike",
      "Border viewpoint walk"
    ],
    "highlights": [
      "Virunga volcano scenery",
      "Golden monkeys",
      "Batwa cultural heritage",
      "Habituated gorilla family"
    ],
    "activities": [
      "Wildlife",
      "Hiking",
      "Culture",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "Gorilla treks 2-8 hours; volcano hikes 6-9 hours",
    "priceFrom": 800,
    "priceRange": "$800-$2,200 per person; gorilla permits are set by the Uganda Wildlife Authority and priced separately",
    "currency": "USD",
    "bestTimeToVisit": "June to August and December to February",
    "tags": [
      "wildlife",
      "hiking",
      "culture",
      "photography",
      "mountains"
    ],
    "budget": "luxury",
    "accommodation": "Lodges and community guesthouses in and around Kisoro.",
    "transportation": "About 9-10 hours by road from Kampala, or a scheduled flight to Kisoro airstrip.",
    "whatToBring": [
      "Broken-in hiking boots and warm layers",
      "Waterproof jacket and rain cover",
      "Headtorch and refillable water bottles",
      "Gloves, hat and thermal base layers",
      "Personal first-aid kit"
    ],
    "mapLocation": "South-western Uganda, in the Virunga Mountains",
    "safetyNotes": "Gorilla permit numbers are strictly limited and prices are reviewed periodically; confirm the current rate at booking. Volcano hikes are steep and can be slippery.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mgahinga_Gorilla_National_Park%2C_Uganda_%2831211353130%29.jpg?width=1280",
    "imageAlt": "Volcanic peaks of the Virunga range rising above Mgahinga Gorilla National Park, Uganda",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Mgahinga_Gorilla_National_Park",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Serengeti National Park",
    "slug": "serengeti-national-park",
    "shortDescription": "Tanzania's flagship park and the heart of the annual wildebeest migration. Vast plains, kopjes and consistently strong predator viewing across the seasons.",
    "fullDescription": "The Serengeti covers roughly 14,750 km² and is a UNESCO World Heritage Site. The migration moves in a broad annual loop: calving on the southern short-grass plains around January to March, the western corridor around May to June, and the northern Mara River area around July to October. Kopjes — granite outcrops — are reliable places to look for lion and leopard, and the central Seronera area offers good year-round game viewing.",
    "whyVisit": "The scale of the plains and the density of predators make it one of the most productive safari destinations in Africa.",
    "thingsToDo": [
      "Game drives in the Seronera Valley",
      "Follow the migration seasonally",
      "Hot-air balloon safari at dawn",
      "Kopje photography sessions",
      "Fly-camping in northern Serengeti (seasonal)"
    ],
    "highlights": [
      "Great wildebeest migration",
      "Large lion prides",
      "Leopards in riverine trees",
      "Endless short-grass plains"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 4,
    "recommendedNights": 3,
    "activityDuration": "6-10 hours of game viewing per day",
    "priceFrom": 800,
    "priceRange": "$800-$3,000 per person depending on season, camp and group size",
    "currency": "USD",
    "bestTimeToVisit": "Year-round; June to October for river crossings, January to March for calving",
    "tags": [
      "safari",
      "wildlife",
      "photography"
    ],
    "budget": "luxury",
    "accommodation": "Public and special campsites, permanent tented camps, mobile migration camps and luxury lodges.",
    "transportation": "About 8 hours by road from Arusha via Ngorongoro, or a scheduled flight to Seronera or a northern airstrip.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Northern Tanzania, bordering the Maasai Mara",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Serengeti-Landscape-2012.JPG?width=1280",
    "imageAlt": "Wildebeest herds crossing the open grass plains of Serengeti National Park, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Serengeti_National_Park",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Ngorongoro Crater",
    "slug": "ngorongoro-crater",
    "shortDescription": "A collapsed volcanic caldera holding one of Africa's densest concentrations of wildlife, including black rhino. Usually visited as a full-day descent from the rim.",
    "fullDescription": "The Ngorongoro Crater is about 260 km² of caldera floor enclosed by walls some 600 m high, within the wider Ngorongoro Conservation Area where Maasai pastoralists live alongside wildlife. Grassland, Lerai fever tree forest and the soda Lake Magadi support lion, elephant, buffalo, hippo, flamingo and one of Tanzania's most viewable black rhino populations. Vehicle access to the floor is time-limited by the authorities.",
    "whyVisit": "The most reliable single day of Big Five viewing in Tanzania, in a landscape unlike anywhere else.",
    "thingsToDo": [
      "Full-day crater floor game drive",
      "Rim viewpoint photography at sunrise",
      "Maasai boma cultural visit",
      "Olduvai Gorge museum stop",
      "Empakaai or Olmoti crater hike"
    ],
    "highlights": [
      "Black rhino",
      "Lake Magadi flamingos",
      "Caldera walls and rim views",
      "Olduvai Gorge archaeology nearby"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Culture",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "A crater descent is typically 6-8 hours including transfers",
    "priceFrom": 500,
    "priceRange": "$500-$1,500 per person including conservation and crater vehicle fees",
    "currency": "USD",
    "bestTimeToVisit": "June to October is driest; the crater is rewarding year-round",
    "tags": [
      "safari",
      "wildlife",
      "culture",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Rim lodges with crater views, plus mid-range lodges and campsites in Karatu.",
    "transportation": "About 3-4 hours by road from Arusha.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Northern Tanzania, Ngorongoro Conservation Area",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ngorongoro-1001-2.jpg?width=1280",
    "imageAlt": "View across the floor of Ngorongoro Crater with wildlife grazing below the caldera rim, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Ngorongoro_Conservation_Area",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Tarangire National Park",
    "slug": "tarangire-national-park",
    "shortDescription": "Baobab-studded country famous for very large elephant herds in the dry season, when wildlife concentrates along the Tarangire River.",
    "fullDescription": "Tarangire covers about 2,850 km² south-east of Lake Manyara. In the dry months from roughly June to October the river becomes the main water source for a wide area, drawing exceptional numbers of elephant along with buffalo, zebra, wildebeest and their predators. The park is also strong for birds, with over 500 recorded species, and its baobabs give it a distinctive look.",
    "whyVisit": "The best elephant viewing on Tanzania's northern circuit, and usually quieter than the Serengeti.",
    "thingsToDo": [
      "River circuit game drives",
      "Baobab and landscape photography",
      "Walking safari in a bordering concession",
      "Night drive outside the park boundary",
      "Birding in the swamps"
    ],
    "highlights": [
      "Large dry-season elephant herds",
      "Ancient baobab trees",
      "Silale Swamp birdlife",
      "Tree-climbing pythons and lions (occasional)"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "5-8 hours of game viewing per day",
    "priceFrom": 350,
    "priceRange": "$350-$1,100 per person depending on camp and season",
    "currency": "USD",
    "bestTimeToVisit": "June to October",
    "tags": [
      "safari",
      "wildlife",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Tented camps and lodges inside the park and along the eastern boundary.",
    "transportation": "About 2 hours by road from Arusha.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Northern Tanzania, Manyara Region",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tarangine_%2862%29.jpg?width=1280",
    "imageAlt": "Elephant herd walking past ancient baobab trees in Tarangire National Park, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Tarangire_National_Park",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Lake Manyara National Park",
    "slug": "lake-manyara-national-park",
    "shortDescription": "A narrow park between the Rift Valley escarpment and a soda lake — groundwater forest, flamingos, large baboon troops and occasional tree-climbing lions.",
    "fullDescription": "Lake Manyara National Park covers about 325 km², two-thirds of which is lake. Its habitats change quickly: groundwater forest at the entrance, then acacia woodland, floodplain and lake shore. It is a common half-day stop between Arusha and Ngorongoro, and offers a canopy walkway, night drives and good birding.",
    "whyVisit": "Compact and varied, and easy to combine with Ngorongoro on the same travel day.",
    "thingsToDo": [
      "Half-day game drive",
      "Treetop canopy walkway",
      "Night game drive",
      "Birdwatching on the lake shore",
      "Cycling and village visits in Mto wa Mbu"
    ],
    "highlights": [
      "Flamingos and pelicans",
      "Groundwater forest and baboon troops",
      "Rift Valley escarpment backdrop",
      "Canopy walkway"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography",
      "Culture"
    ],
    "recommendedDays": 1,
    "recommendedNights": 1,
    "activityDuration": "3-6 hours for a half or full-day drive",
    "priceFrom": 200,
    "priceRange": "$200-$650 per person depending on lodging",
    "currency": "USD",
    "bestTimeToVisit": "June to October for wildlife; November to May for birds",
    "tags": [
      "safari",
      "wildlife",
      "photography",
      "culture"
    ],
    "budget": "budget",
    "accommodation": "Lodges on the escarpment and guesthouses in Mto wa Mbu and Karatu.",
    "transportation": "About 2 hours by road from Arusha.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Northern Tanzania, below the Rift Valley escarpment",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_Manyara_Wildlife.jpg?width=1280",
    "imageAlt": "Flamingos on the shallows of Lake Manyara below the Rift Valley escarpment, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Lake_Manyara_National_Park",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Mount Kilimanjaro",
    "slug": "mount-kilimanjaro",
    "shortDescription": "Africa's highest mountain at 5,895 m, and the highest summit reachable by trekkers without technical climbing. Route choice and acclimatisation days matter more than raw fitness.",
    "fullDescription": "Kilimanjaro is a dormant volcano with three cones; Uhuru Peak on Kibo is the summit. Main routes include Marangu, Machame, Lemosho, Rongai and the Northern Circuit, ranging from about 5 to 9 days. Longer routes have markedly higher success rates because they allow better acclimatisation. Climbs must be undertaken with a licensed operator, and porters and guides are required.",
    "whyVisit": "A genuine high-altitude summit that experienced trekkers can reach, through five distinct climate zones in under a week.",
    "thingsToDo": [
      "Lemosho or Machame route climb",
      "Northern Circuit for maximum acclimatisation",
      "Summit night to Uhuru Peak",
      "Day hike on the Shira Plateau",
      "Post-climb rest in Moshi or Arusha"
    ],
    "highlights": [
      "Uhuru Peak (5,895 m)",
      "Glaciers and crater rim",
      "Five climate zones in one climb",
      "Shira Plateau"
    ],
    "activities": [
      "Hiking",
      "Adventure",
      "Photography"
    ],
    "recommendedDays": 8,
    "recommendedNights": 7,
    "activityDuration": "5-8 hours of walking per day; summit night runs 10-14 hours",
    "priceFrom": 1800,
    "priceRange": "$1,800-$4,500 per person depending on route, duration and operator standard",
    "currency": "USD",
    "bestTimeToVisit": "January to March and June to October",
    "tags": [
      "hiking",
      "adventure",
      "photography",
      "mountains"
    ],
    "budget": "luxury",
    "accommodation": "Mountain huts on Marangu; tented camps on all other routes. Hotels in Moshi before and after.",
    "transportation": "About 1 hour by road from Kilimanjaro International Airport to Moshi.",
    "whatToBring": [
      "Broken-in hiking boots and warm layers",
      "Waterproof jacket and rain cover",
      "Headtorch and refillable water bottles",
      "Gloves, hat and thermal base layers",
      "Personal first-aid kit"
    ],
    "mapLocation": "Northern Tanzania, near Moshi",
    "safetyNotes": "Altitude sickness is the main risk on Kilimanjaro. Choose a route of seven days or more where possible, ascend slowly and use an operator with oxygen, a pulse oximeter and a clear evacuation plan. Fair porter treatment is a mark of a responsible operator.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kilimanjaro_from_Amboseli.jpg?width=1280",
    "imageAlt": "Snow-capped summit of Mount Kilimanjaro rising above the clouds, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Mount_Kilimanjaro",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Zanzibar",
    "slug": "zanzibar",
    "shortDescription": "An Indian Ocean archipelago of white sand, reefs and Swahili history — the standard beach extension after a northern-circuit safari.",
    "fullDescription": "Zanzibar's main island, Unguja, offers very different experiences by coast: Nungwi and Kendwa in the north have swimmable beaches at all tides; the east coast has dramatic tidal flats and kitesurfing at Paje; the south is quieter with Jozani Forest and dolphin excursions nearby. Stone Town, the historic core, is a UNESCO World Heritage Site and a destination in its own right.",
    "whyVisit": "Reliable sunshine, reef diving and centuries of Swahili, Omani and Indian history in one compact island.",
    "thingsToDo": [
      "Snorkelling or diving at Mnemba Atoll",
      "Spice farm tour",
      "Jozani Forest red colobus walk",
      "Sunset dhow cruise",
      "Kitesurfing at Paje"
    ],
    "highlights": [
      "Mnemba Atoll reefs",
      "Stone Town heritage",
      "Zanzibar red colobus monkey",
      "Spice farms and Swahili cuisine"
    ],
    "activities": [
      "Beach",
      "Culture",
      "Adventure",
      "Photography"
    ],
    "recommendedDays": 5,
    "recommendedNights": 4,
    "activityDuration": "Flexible; reef and spice excursions typically run 3-6 hours",
    "priceFrom": 250,
    "priceRange": "$250-$2,000 per person per stay depending on hotel standard",
    "currency": "USD",
    "bestTimeToVisit": "June to October and December to February",
    "tags": [
      "beach",
      "culture",
      "adventure",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Everything from simple beach bungalows to five-star resorts and boutique Stone Town hotels.",
    "transportation": "Short flights from Arusha, Dar es Salaam or Nairobi, or ferry from Dar es Salaam.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Indian Ocean, off the Tanzanian coast",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Zanzibar.svg?width=1280",
    "imageAlt": "White sand beach with traditional dhow moored in turquoise water, Zanzibar, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Zanzibar",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Arusha National Park",
    "slug": "arusha-national-park",
    "shortDescription": "A small, varied park below Mount Meru with walking safaris, canoeing on the Momella Lakes and no lions — a good gentle first or last day.",
    "fullDescription": "Arusha National Park covers about 552 km² and packs in the Ngurdoto Crater, the Momella Lakes and the forested slopes of Mount Meru. The absence of lion allows guided walking safaris and canoeing, both rare on the northern circuit. Giraffe, buffalo, colobus monkey and flamingo are commonly seen, and Kilimanjaro is visible on clear days.",
    "whyVisit": "Walking and canoeing options make it a change of pace, and it is only 45 minutes from Arusha town.",
    "thingsToDo": [
      "Guided walking safari",
      "Canoeing on the Momella Lakes",
      "Ngurdoto Crater rim viewpoints",
      "Mount Meru day hike",
      "Colobus monkey forest drive"
    ],
    "highlights": [
      "Momella Lakes and flamingos",
      "Ngurdoto Crater",
      "Black-and-white colobus monkeys",
      "Mount Meru and Kilimanjaro views"
    ],
    "activities": [
      "Safari",
      "Hiking",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 1,
    "recommendedNights": 1,
    "activityDuration": "4-7 hours for a day visit with walking or canoeing",
    "priceFrom": 180,
    "priceRange": "$180-$550 per person including park fees and activities",
    "currency": "USD",
    "bestTimeToVisit": "June to October and December to February",
    "tags": [
      "safari",
      "hiking",
      "wildlife",
      "photography"
    ],
    "budget": "budget",
    "accommodation": "Day trip from Arusha; lodges available on the park boundary.",
    "transportation": "About 45 minutes by road from Arusha town.",
    "whatToBring": [
      "Broken-in hiking boots and warm layers",
      "Waterproof jacket and rain cover",
      "Headtorch and refillable water bottles",
      "Gloves, hat and thermal base layers",
      "Personal first-aid kit"
    ],
    "mapLocation": "Northern Tanzania, between Arusha and Kilimanjaro Airport",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Meru_Ashcone.jpg?width=1280",
    "imageAlt": "Giraffe grazing below Mount Meru in Arusha National Park, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Arusha_National_Park",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Nyerere National Park",
    "slug": "nyerere-national-park",
    "shortDescription": "One of Africa's largest protected areas, in Tanzania's south. Boat safaris on the Rufiji River and walking safaris, with far fewer vehicles than the north.",
    "fullDescription": "Nyerere National Park was created from the northern section of the Selous Game Reserve and covers roughly 30,000 km². The Rufiji River and its lakes form the centrepiece, allowing boat safaris among hippo, crocodile and waterbirds — an option the northern parks largely lack. Walking safaris with armed rangers are permitted, and wild dog sightings are a genuine possibility.",
    "whyVisit": "River-based safari, walking safaris and low visitor numbers, ideal for a second trip to Tanzania.",
    "thingsToDo": [
      "Rufiji River boat safari",
      "Walking safari with an armed ranger",
      "Game drives around the lake circuit",
      "Fly-camping overnight",
      "Birding along the riverbanks"
    ],
    "highlights": [
      "Rufiji River and lakes",
      "African wild dog",
      "Walking and boat safaris",
      "Very low vehicle density"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Adventure",
      "Photography"
    ],
    "recommendedDays": 4,
    "recommendedNights": 3,
    "activityDuration": "6-9 hours per day; boat safaris run 2-4 hours",
    "priceFrom": 700,
    "priceRange": "$700-$2,200 per person depending on camp and access",
    "currency": "USD",
    "bestTimeToVisit": "June to October and January to February",
    "tags": [
      "safari",
      "wildlife",
      "adventure",
      "photography"
    ],
    "budget": "luxury",
    "accommodation": "Riverside tented camps and lodges, mostly in the northern sector.",
    "transportation": "Short flight from Dar es Salaam or Zanzibar; road access is long and seasonal.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Southern Tanzania, along the Rufiji River",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/TZ_Selous_Game_Reserve_Aeroview.JPG?width=1280",
    "imageAlt": "Boat on the Rufiji River with palms and wildlife on the banks, Nyerere National Park, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Nyerere_National_Park",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Ruaha National Park",
    "slug": "ruaha-national-park",
    "shortDescription": "Tanzania's largest national park and a stronghold for lion and wild dog. Rugged, baobab-covered country with very few visitors.",
    "fullDescription": "Ruaha covers around 20,000 km² in central-southern Tanzania, centred on the Great Ruaha River. It sits at the meeting point of eastern and southern African ecosystems, so both greater and lesser kudu occur alongside sable and roan antelope. Lion prides here are among the largest recorded in Africa, and the park holds a significant African wild dog population.",
    "whyVisit": "Big-cat viewing at scale in a wilderness setting, without the vehicle traffic of the northern circuit.",
    "thingsToDo": [
      "Game drives along the Great Ruaha River",
      "Walking safari with a ranger",
      "Night drive in a bordering concession",
      "Baobab landscape photography",
      "Birding on the sand rivers"
    ],
    "highlights": [
      "Large lion prides",
      "African wild dog",
      "Greater and lesser kudu",
      "Baobab and sand-river scenery"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography",
      "Adventure"
    ],
    "recommendedDays": 4,
    "recommendedNights": 3,
    "activityDuration": "6-9 hours of game viewing per day",
    "priceFrom": 800,
    "priceRange": "$800-$2,400 per person depending on camp and flights",
    "currency": "USD",
    "bestTimeToVisit": "June to October for wildlife concentrations",
    "tags": [
      "safari",
      "wildlife",
      "photography",
      "adventure"
    ],
    "budget": "luxury",
    "accommodation": "A small number of tented camps and lodges along the river.",
    "transportation": "Scheduled flight from Dar es Salaam, Arusha or Selous; road access via Iringa is long.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Central-southern Tanzania, Iringa Region",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Purple_On_The_River.jpg?width=1280",
    "imageAlt": "Baobabs and dry riverbed in Ruaha National Park, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Ruaha_National_Park",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Mikumi National Park",
    "slug": "mikumi-national-park",
    "shortDescription": "The most accessible savannah park from Dar es Salaam, with open floodplain game viewing that resembles the Serengeti on a smaller scale.",
    "fullDescription": "Mikumi covers about 3,230 km² and borders Nyerere National Park, sharing much of its wildlife. The Mkata floodplain in the north offers open, easy viewing of elephant, buffalo, zebra, giraffe, lion and eland. A surfaced highway crosses the park, making it reachable in a morning's drive from Dar es Salaam, and it is often combined with Udzungwa Mountains for hiking.",
    "whyVisit": "The easiest overland safari from Dar es Salaam, and good value for a short trip.",
    "thingsToDo": [
      "Mkata floodplain game drives",
      "Hippo pool stop",
      "Combine with Udzungwa Mountains hiking",
      "Birding on the floodplain",
      "Sunset viewpoint drive"
    ],
    "highlights": [
      "Mkata floodplain wildlife",
      "Hippo pools",
      "Yellow baboon and eland",
      "Udzungwa Mountains nearby"
    ],
    "activities": [
      "Safari",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "5-8 hours of game viewing per day",
    "priceFrom": 250,
    "priceRange": "$250-$800 per person depending on lodge",
    "currency": "USD",
    "bestTimeToVisit": "June to October and December to February",
    "tags": [
      "safari",
      "wildlife",
      "photography"
    ],
    "budget": "budget",
    "accommodation": "Lodges and tented camps at the park boundary and in Mikumi town.",
    "transportation": "About 4-5 hours by road from Dar es Salaam.",
    "whatToBring": [
      "Neutral-coloured clothing",
      "Warm layer for early mornings",
      "Sun hat, sunglasses and high-SPF sunscreen",
      "Binoculars and a camera with spare batteries",
      "Insect repellent and personal medication"
    ],
    "mapLocation": "Eastern Tanzania, Morogoro Region",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/A_group_of_baobab_trees_in_the_Mikumi_National_Park%2C_Tanzania.jpg?width=1280",
    "imageAlt": "Baobab trees on the open Mkata floodplain in Mikumi National Park, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://commons.wikimedia.org/wiki/File:A_group_of_baobab_trees_in_the_Mikumi_National_Park,_Tanzania.jpg",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Mafia Island",
    "slug": "mafia-island",
    "shortDescription": "A quiet marine park south of Zanzibar known for whale shark encounters, healthy reefs and low-key lodges. Best for divers and travellers seeking calm.",
    "fullDescription": "Mafia Island lies about 120 km south-east of Dar es Salaam and is surrounded by the Mafia Island Marine Park, one of the largest marine protected areas in the Indian Ocean. Whale sharks feed in the channel roughly between October and March. Diving and snorkelling on Chole Bay's reefs is excellent, and the island has almost no mass tourism.",
    "whyVisit": "Outstanding reef diving and seasonal whale shark snorkelling, with very few other visitors.",
    "thingsToDo": [
      "Snorkelling with whale sharks (approx. Oct-Mar)",
      "Diving in Chole Bay",
      "Dhow trip to Chole and Juani islands",
      "Sandbank picnic",
      "Turtle nesting visits in season"
    ],
    "highlights": [
      "Mafia Island Marine Park reefs",
      "Seasonal whale sharks",
      "Chole Island ruins",
      "Turtle nesting beaches"
    ],
    "activities": [
      "Beach",
      "Adventure",
      "Wildlife",
      "Photography"
    ],
    "recommendedDays": 4,
    "recommendedNights": 3,
    "activityDuration": "3-6 hours for dive and snorkel excursions",
    "priceFrom": 300,
    "priceRange": "$300-$1,500 per person per stay depending on lodge",
    "currency": "USD",
    "bestTimeToVisit": "October to March for whale sharks; diving is best June to October",
    "tags": [
      "beach",
      "adventure",
      "wildlife",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "A handful of small lodges and dive resorts, mostly around Chole Bay.",
    "transportation": "Short scheduled flight from Dar es Salaam or Zanzibar.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Indian Ocean, south of Zanzibar",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mafia_Island_%2851554991378%29.jpg?width=1280",
    "imageAlt": "Coral reef and clear shallow water off Mafia Island, Tanzania",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Mafia_Island",
    "faqs": []
  },
  {
    "country": "tanzania",
    "destinationName": "Stone Town",
    "slug": "stone-town",
    "shortDescription": "The UNESCO-listed historic heart of Zanzibar City — narrow lanes, carved doors, spice markets and a layered Swahili, Omani, Indian and European history.",
    "fullDescription": "Stone Town's coral-rag buildings, winding alleys and seafront date largely from the 19th century, when Zanzibar was a major trading centre. Key sites include the House of Wonders, the Old Fort, the former slave market and Anglican cathedral, and the Darajani market. Evenings centre on the Forodhani Gardens food stalls along the waterfront.",
    "whyVisit": "A compact, walkable historic town that gives essential context to any Zanzibar beach stay.",
    "thingsToDo": [
      "Guided heritage walking tour",
      "Former slave market and memorial visit",
      "Darajani market and spice shopping",
      "Forodhani Gardens evening food stalls",
      "Sunset dhow from the seafront"
    ],
    "highlights": [
      "UNESCO World Heritage architecture",
      "Carved Zanzibari doors",
      "Former slave market memorial",
      "Forodhani night market"
    ],
    "activities": [
      "Culture",
      "Photography",
      "Beach"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "2-4 hours for a walking tour; easily a full day with museums",
    "priceFrom": 100,
    "priceRange": "$100-$600 per person per stay depending on hotel",
    "currency": "USD",
    "bestTimeToVisit": "June to October and December to February",
    "tags": [
      "culture",
      "photography",
      "beach"
    ],
    "budget": "budget",
    "accommodation": "Boutique hotels in restored merchant houses and simple guesthouses throughout the old town.",
    "transportation": "10-15 minutes from Zanzibar's Abeid Amani Karume International Airport.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Zanzibar City, Unguja Island",
    "safetyNotes": "",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zanzibar_sultan_palace.jpg?width=1280",
    "imageAlt": "Carved wooden doors and coral-stone buildings in the narrow lanes of Stone Town, Zanzibar",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Stone_Town",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Mogadishu",
    "slug": "mogadishu",
    "shortDescription": "Somalia's capital, an ancient Indian Ocean port with a long coastline, historic mosques and a lively market culture. Visits are typically arranged through specialist operators with local support.",
    "fullDescription": "Mogadishu has been a trading city on the Indian Ocean for more than a thousand years. Points of interest include the Arba'a Rukun and Fakr ad-Din mosques, the old Hamarweyne quarter, Bakaara market and the long city beachfront. Independent tourism is uncommon; most visitors travel with organised local support and pre-arranged permissions.",
    "whyVisit": "For travellers interested in Indian Ocean history and contemporary Somali city life, with careful planning.",
    "thingsToDo": [
      "Guided city and historic quarter tour",
      "Beachfront visit at Liido",
      "Local seafood dining",
      "Market visit with a local guide"
    ],
    "highlights": [
      "Hamarweyne old quarter",
      "Historic mosques",
      "Indian Ocean beachfront",
      "Somali cuisine"
    ],
    "activities": [
      "Culture",
      "Photography",
      "Beach"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "3-6 hours per guided outing",
    "priceFrom": 400,
    "priceRange": "$400-$1,500 per person; costs vary with security and logistics arrangements",
    "currency": "USD",
    "bestTimeToVisit": "November to March, outside the main rainy seasons",
    "tags": [
      "culture",
      "photography",
      "beach"
    ],
    "budget": "mid-range",
    "accommodation": "A limited number of hotels used by international visitors, usually booked through an operator.",
    "transportation": "International flights to Aden Adde International Airport; ground movement is arranged locally.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Coastal southern Somalia, Banaadir region",
    "safetyNotes": "Mogadishu carries the highest-level travel advisories from many governments. Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lido_beach_from_the_sea_in_Mogadishu.jpg?width=1280",
    "imageAlt": "Historic coastal architecture and Indian Ocean shoreline in Mogadishu, Somalia",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Mogadishu",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Laas Geel Rock Art",
    "slug": "laas-geel-rock-art",
    "shortDescription": "Neolithic rock art estimated at several thousand years old, in remarkably vivid condition. The best-known cultural site in the region and usually visited as a day trip from Hargeisa.",
    "fullDescription": "Laas Geel is a complex of rock shelters on a granite outcrop about 50 km from Hargeisa, decorated with polychrome paintings of cattle, herders, dogs and wild animals. The paintings are unusually well preserved thanks to the overhanging rock. Visits require a permit obtained in Hargeisa and are accompanied by a local guide.",
    "whyVisit": "One of Africa's most important and least-visited rock art sites, viewable at close range.",
    "thingsToDo": [
      "Guided visit to the painted shelters",
      "Permit arrangement and transfer from Hargeisa",
      "Photography of the panels",
      "Viewpoint over the surrounding plains"
    ],
    "highlights": [
      "Polychrome Neolithic paintings",
      "Granite shelter formations",
      "Panoramic plains views",
      "Local guiding and interpretation"
    ],
    "activities": [
      "Culture",
      "Photography"
    ],
    "recommendedDays": 1,
    "recommendedNights": 0,
    "activityDuration": "2-3 hours on site, plus about 2 hours of driving in total",
    "priceFrom": 120,
    "priceRange": "$120-$350 per person including permit, vehicle and guide",
    "currency": "USD",
    "bestTimeToVisit": "October to April",
    "tags": [
      "culture",
      "photography"
    ],
    "budget": "budget",
    "accommodation": "Day trip from Hargeisa; hotels of varying standards available in the city.",
    "transportation": "About 1 hour by road from Hargeisa with an arranged vehicle and guide.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Inland Somaliland, near Hargeisa",
    "safetyNotes": "A permit from the relevant Hargeisa authority is required and must be arranged before travel. Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Laas_Geel.jpg?width=1280",
    "imageAlt": "Prehistoric painted cattle and human figures on rock shelter walls at Laas Geel, Somaliland",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Laas_Geel",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Berbera",
    "slug": "berbera",
    "shortDescription": "A Gulf of Aden port town with long empty beaches, warm clear water and Ottoman-era architecture in its old quarter.",
    "fullDescription": "Berbera is Somaliland's main port and historically an important Red Sea and Gulf trade hub. Its beaches are wide and largely undeveloped, with snorkelling possible on nearby reefs. The old town retains coral-stone and Ottoman-influenced buildings, some in poor repair. Summer heat is extreme, so travel is concentrated in the cooler months.",
    "whyVisit": "Uncrowded Gulf of Aden beaches and a working port town with visible layers of history.",
    "thingsToDo": [
      "Beach day on the Berbera coast",
      "Old town architecture walk",
      "Snorkelling on nearby reefs",
      "Fresh seafood at the port"
    ],
    "highlights": [
      "Long undeveloped beaches",
      "Ottoman-era old town",
      "Gulf of Aden reefs",
      "Port town life"
    ],
    "activities": [
      "Beach",
      "Culture",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "3-6 hours for beach and town outings",
    "priceFrom": 150,
    "priceRange": "$150-$500 per person depending on hotel and transport",
    "currency": "USD",
    "bestTimeToVisit": "November to March; avoid May to September when heat is extreme",
    "tags": [
      "beach",
      "culture",
      "photography"
    ],
    "budget": "budget",
    "accommodation": "A small number of hotels in town and simple beachside accommodation.",
    "transportation": "About 2.5 hours by road from Hargeisa.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Somaliland's Gulf of Aden coast",
    "safetyNotes": "Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Berbera_6666.png?width=1280",
    "imageAlt": "Wide sandy beach and Gulf of Aden coastline at Berbera, Somaliland",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Berbera",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Hargeisa",
    "slug": "hargeisa",
    "shortDescription": "The regional capital and usual base for travel in Somaliland — markets, the Hargeisa War Memorial, camel trade and access to Laas Geel.",
    "fullDescription": "Hargeisa sits at around 1,300 m, which keeps its climate milder than the coast. The central market, gold and money-changer streets, and the livestock market give a clear picture of the local economy. The MiG memorial in the city centre is a significant national landmark. Most Somaliland itineraries begin and end here, with permits and guides arranged in the city.",
    "whyVisit": "The practical and cultural starting point for any Somaliland trip.",
    "thingsToDo": [
      "Central market and money-changer street walk",
      "Hargeisa War Memorial",
      "Livestock and camel market visit",
      "Local restaurant and coffee culture",
      "Permit arrangement for Laas Geel"
    ],
    "highlights": [
      "Central market",
      "War memorial",
      "Camel market",
      "Highland climate and city life"
    ],
    "activities": [
      "Culture",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "2-5 hours per guided outing",
    "priceFrom": 120,
    "priceRange": "$120-$400 per person depending on hotel and guiding",
    "currency": "USD",
    "bestTimeToVisit": "October to April",
    "tags": [
      "culture",
      "photography"
    ],
    "budget": "budget",
    "accommodation": "A range of city hotels used by business and NGO travellers.",
    "transportation": "Flights to Hargeisa Egal International Airport, or overland from Ethiopia via Wajaale.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Inland Somaliland highlands",
    "safetyNotes": "Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/HargeisaDrone.jpg?width=1280",
    "imageAlt": "Busy market street and city buildings in Hargeisa, Somaliland",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Hargeisa",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Zeila (Saylac)",
    "slug": "zeila-saylac",
    "shortDescription": "An ancient port near the Djibouti border with coral-stone ruins, mangroves and offshore islands. Remote and lightly visited.",
    "fullDescription": "Zeila was a major medieval trading port and later an Ottoman and colonial administrative centre. Today it is a small town with ruined mosques and merchant houses, mangrove channels and the Saad ad-Din islands offshore, which support birdlife and turtles. Facilities are very limited and travel here requires planning.",
    "whyVisit": "Layered medieval history and empty coastline for travellers comfortable with basic conditions.",
    "thingsToDo": [
      "Walk among the coral-stone ruins",
      "Boat trip to the Saad ad-Din islands",
      "Mangrove and birdwatching excursion",
      "Beach walk on the Gulf of Aden"
    ],
    "highlights": [
      "Medieval port ruins",
      "Saad ad-Din islands",
      "Mangrove channels",
      "Empty beaches"
    ],
    "activities": [
      "Culture",
      "Beach",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "3-5 hours per outing",
    "priceFrom": 200,
    "priceRange": "$200-$600 per person given the remote logistics",
    "currency": "USD",
    "bestTimeToVisit": "November to March",
    "tags": [
      "culture",
      "beach",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Very basic guesthouses only; many travellers visit from Borama or Djibouti.",
    "transportation": "Long road journey from Hargeisa or Borama; road conditions vary.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "North-western Somaliland, near the Djibouti border",
    "safetyNotes": "Facilities and medical care are extremely limited; travel with a well-equipped operator. Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zeila%2C_Somaliland.jpg?width=1280",
    "imageAlt": "Coastal ruins and shallow turquoise water at Zeila on the Gulf of Aden, Somaliland",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Zeila",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Sheikh Mountain Pass",
    "slug": "sheikh-mountain-pass",
    "shortDescription": "A cool highland town on the escarpment between Berbera and Burao, known for its dramatic mountain pass road and greener climate.",
    "fullDescription": "Sheikh sits at roughly 1,400 m where the escarpment drops sharply to the coastal plain. The Sheikh pass road, with its switchbacks and viewpoints, is one of the most scenic drives in the region. The town itself is small and quiet, with a well-known secondary school and a noticeably cooler, greener setting than the coast.",
    "whyVisit": "A scenic break in the drive between Berbera and the interior, with genuine highland views.",
    "thingsToDo": [
      "Drive the Sheikh mountain pass",
      "Escarpment viewpoints and photography",
      "Short walks around the town",
      "Local tea stops"
    ],
    "highlights": [
      "Escarpment switchback road",
      "Highland viewpoints",
      "Cool green climate",
      "Quiet rural setting"
    ],
    "activities": [
      "Mountains",
      "Photography",
      "Culture"
    ],
    "recommendedDays": 1,
    "recommendedNights": 0,
    "activityDuration": "2-4 hours including stops on the pass",
    "priceFrom": 80,
    "priceRange": "$80-$250 per person as part of a wider itinerary",
    "currency": "USD",
    "bestTimeToVisit": "October to April",
    "tags": [
      "mountains",
      "photography",
      "culture"
    ],
    "budget": "budget",
    "accommodation": "Very limited; usually visited en route between Berbera and Burao.",
    "transportation": "About 1 hour from Berbera by road on the escarpment route.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Somaliland escarpment between Berbera and Burao",
    "safetyNotes": "Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sheikh_mountain%2C_Somaliland.jpg?width=1280",
    "imageAlt": "Winding mountain road and green highland scenery on the Sheikh pass, Somaliland",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Sheikh%2C_Somaliland",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Daallo Mountain & Cal Madow",
    "slug": "daallo-mountain-cal-madow",
    "shortDescription": "Part of the Cal Madow range, with juniper forest, cliff-edge viewpoints and frankincense trees. Among the most scenic and biologically distinctive places in the region.",
    "fullDescription": "Daallo Mountain rises above the Gulf of Aden escarpment in the Cal Madow range, north of Erigavo. It supports relict juniper and Boswellia frankincense forest and endemic bird species, with the escarpment dropping over 1,000 m towards the coast. It is remote, cool and requires a 4x4 and local guiding.",
    "whyVisit": "Genuinely unusual mountain forest and escarpment views found nowhere else in the Horn of Africa.",
    "thingsToDo": [
      "Escarpment viewpoint drive",
      "Guided walk in the juniper forest",
      "Frankincense tree and harvesting visit",
      "Birdwatching for endemic species",
      "Camping under the escarpment"
    ],
    "highlights": [
      "Cal Madow juniper forest",
      "1,000 m escarpment drop",
      "Frankincense trees",
      "Endemic birdlife"
    ],
    "activities": [
      "Mountains",
      "Hiking",
      "Photography"
    ],
    "recommendedDays": 3,
    "recommendedNights": 2,
    "activityDuration": "4-8 hours per day of driving and walking",
    "priceFrom": 350,
    "priceRange": "$350-$900 per person given the remote 4x4 logistics",
    "currency": "USD",
    "bestTimeToVisit": "October to April",
    "tags": [
      "mountains",
      "hiking",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Camping or very basic guesthouses in Erigavo.",
    "transportation": "Long 4x4 journey from Hargeisa or Berbera via Erigavo.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Cal Madow range, eastern Somaliland",
    "safetyNotes": "Roads are rough and remote with little mobile coverage; a 4x4 convoy and local guide are essential. Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Daallo_Mountain_-_Erigavo%2C_Sanaag_Region%2C_Somaliland_08.jpg?width=1280",
    "imageAlt": "Forested escarpment and dramatic cliffs of the Cal Madow range at Daallo, Somaliland",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Daallo_Mountain",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Liido Beach",
    "slug": "liido-beach",
    "shortDescription": "Mogadishu's main city beach on the Indian Ocean, busy with residents at weekends and lined with seafood restaurants.",
    "fullDescription": "Liido Beach is the best-known stretch of Mogadishu's coastline and has become a symbol of the city's public life, with cafes and restaurants along the shore. Currents can be strong and there is limited lifeguard provision. Visits are normally made with local support and at times advised by your operator.",
    "whyVisit": "The clearest window into everyday leisure life in Mogadishu, on a genuinely attractive stretch of coast.",
    "thingsToDo": [
      "Beach walk and photography with a guide",
      "Seafood lunch at a beachfront restaurant",
      "Sunset at the shoreline"
    ],
    "highlights": [
      "Indian Ocean shoreline",
      "Beachfront restaurants",
      "Weekend city atmosphere"
    ],
    "activities": [
      "Beach",
      "Culture",
      "Photography"
    ],
    "recommendedDays": 1,
    "recommendedNights": 0,
    "activityDuration": "2-4 hours",
    "priceFrom": 50,
    "priceRange": "$50-$200 per person as part of a wider Mogadishu itinerary",
    "currency": "USD",
    "bestTimeToVisit": "November to March",
    "tags": [
      "beach",
      "culture",
      "photography"
    ],
    "budget": "budget",
    "accommodation": "Mogadishu hotels arranged through an operator.",
    "transportation": "Short drive within Mogadishu with arranged local transport.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Mogadishu coastline, Banaadir region",
    "safetyNotes": "Strong currents and limited lifeguard cover; follow your operator's advice on timing and access. Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2012_01_12_MGD_Stadiums_e_%288394616568%29.jpg?width=1280",
    "imageAlt": "Indian Ocean waves breaking on the sand at Liido Beach in Mogadishu, Somalia",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://commons.wikimedia.org/wiki/File:2012_01_12_MGD_Stadiums_e_(8394616568).jpg",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Maydh",
    "slug": "maydh",
    "shortDescription": "A historic fishing village on the Gulf of Aden below the Cal Madow escarpment, with an important shrine and a striking mountain-and-sea setting.",
    "fullDescription": "Maydh is a small coastal settlement with a long trading history and the shrine of Sheikh Isaaq, a significant pilgrimage site. The village sits where the Cal Madow mountains meet the sea, and the drive down from Erigavo is spectacular. Facilities are minimal and visits are usually part of a wider Cal Madow itinerary.",
    "whyVisit": "Dramatic mountain-to-sea scenery and a site of real cultural importance, almost never visited by outsiders.",
    "thingsToDo": [
      "Visit the shrine area with a local guide",
      "Coastal and fishing village walk",
      "Drive down the escarpment from Erigavo",
      "Beach and photography stops"
    ],
    "highlights": [
      "Shrine of Sheikh Isaaq",
      "Escarpment meeting the Gulf of Aden",
      "Traditional fishing village",
      "Empty coastline"
    ],
    "activities": [
      "Culture",
      "Beach",
      "Photography"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "3-5 hours in the village and on the coast",
    "priceFrom": 250,
    "priceRange": "$250-$700 per person given remote logistics",
    "currency": "USD",
    "bestTimeToVisit": "October to April",
    "tags": [
      "culture",
      "beach",
      "photography"
    ],
    "budget": "mid-range",
    "accommodation": "Extremely basic; most travellers base themselves in Erigavo.",
    "transportation": "Rough 4x4 descent from Erigavo, typically 2-4 hours.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Gulf of Aden coast, eastern Somaliland",
    "safetyNotes": "Dress modestly and follow guide instructions at religious sites; road conditions are difficult. Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sheekh_Isaaq.jpg?width=1280",
    "imageAlt": "Coastal village and Gulf of Aden shoreline at Maydh, Somaliland",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Maydh",
    "faqs": []
  },
  {
    "country": "somalia",
    "destinationName": "Las Qorey",
    "slug": "las-qorey",
    "shortDescription": "A remote Gulf of Aden coastal town near the Karin Heegan rock art sites, framed by the Cal Madow mountains.",
    "fullDescription": "Las Qorey is a small port town on the northern coast with a long history of maritime trade. Nearby are rock art shelters and caves, including sites in the Karin Heegan area, and the coastline is backed by dramatic mountain scenery. Infrastructure is very limited and travel requires a well-planned 4x4 itinerary.",
    "whyVisit": "Rock art, coastline and mountains combined, for travellers who want somewhere genuinely off the map.",
    "thingsToDo": [
      "Visit nearby rock art shelters with a guide",
      "Coastal and harbour walk",
      "Mountain-to-sea scenic drive",
      "Local seafood"
    ],
    "highlights": [
      "Nearby rock art sites",
      "Gulf of Aden coastline",
      "Cal Madow backdrop",
      "Traditional port life"
    ],
    "activities": [
      "Culture",
      "Photography",
      "Beach"
    ],
    "recommendedDays": 2,
    "recommendedNights": 1,
    "activityDuration": "3-6 hours per outing",
    "priceFrom": 250,
    "priceRange": "$250-$700 per person given remote logistics",
    "currency": "USD",
    "bestTimeToVisit": "October to April",
    "tags": [
      "culture",
      "photography",
      "beach"
    ],
    "budget": "mid-range",
    "accommodation": "Very basic guesthouses; camping is common on this route.",
    "transportation": "Long 4x4 journey along the northern coast or down from Erigavo.",
    "whatToBring": [
      "Light cotton clothing and swimwear",
      "Reef-safe sunscreen and a sun hat",
      "Modest cover-up for towns and villages",
      "Sandals and water shoes",
      "Dry bag for boat trips"
    ],
    "mapLocation": "Northern Somaliland coast, Sanaag region",
    "safetyNotes": "Remote with limited services; check current regional advice, as parts of the Sanaag area are disputed. Security conditions in Somalia vary significantly by region and can change at short notice. Check your government's current travel advisory, confirm visa and permit requirements for the specific region, and travel with a reputable local operator and licensed guides. Some areas require security escorts or special permits arranged in advance. We do not make safety guarantees, and any itinerary is planned around current official advice.",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Laasqoray_over_view.jpg?width=1280",
    "imageAlt": "Coastal cliffs and shoreline near Las Qorey on the Gulf of Aden, Somaliland",
    "imageCredit": "Photograph via Wikimedia Commons",
    "imageLicense": "See file page for licence",
    "imageSource": "https://en.wikipedia.org/wiki/Las_Khorey",
    "faqs": []
  }
];

export const destinationVideos: DestinationVideo[] = [
  {
    "id": "NSY7jfzsHqY",
    "country": "kenya",
    "title": "Experience Wonder | Magical Kenya",
    "channel": "Magical Kenya",
    "description": "The official Kenya Tourism Board film across the country's parks, coast and culture."
  },
  {
    "id": "cDi2fVCtuk0",
    "country": "kenya",
    "title": "Kenya Tourism",
    "channel": "Magical Kenya",
    "description": "A short official showcase of Kenyan wildlife, landscapes and coastline."
  },
  {
    "id": "SJrIPSPuASU",
    "country": "uganda",
    "title": "Explore Uganda — The Pearl of Africa",
    "channel": "Explore Uganda",
    "description": "The official Uganda Tourism Board campaign film covering gorillas, savannah and the Nile."
  },
  {
    "id": "vlwURHhsXtU",
    "country": "uganda",
    "title": "Explore Uganda's Untamed Beauty",
    "channel": "Explore Uganda",
    "description": "An official Uganda film narrated by George the Poet, following forests, lakes and communities."
  },
  {
    "id": "Fa8CjCfWNx8",
    "country": "tanzania",
    "title": "Explore Tanzania",
    "channel": "Tanzania Unforgettable",
    "description": "Official Tanzania tourism film across the Serengeti, Ngorongoro, Kilimanjaro and Zanzibar."
  },
  {
    "id": "YvO5-lZTHPw",
    "country": "tanzania",
    "title": "Amazing Tanzania Film",
    "channel": "Tanzania Unforgettable",
    "description": "A longer official showcase of Tanzania's parks, mountains and coastline."
  },
  {
    "id": "OXUiWHIpBto",
    "country": "somalia",
    "title": "Visiting Laas Geel in Somaliland",
    "channel": "Visit Every Country",
    "description": "An independent traveller's film at the Laas Geel rock art site near Hargeisa."
  }
];

export const budgetOptions = ["budget", "mid-range", "luxury"] as const;

export const durationOptions = [
  { value: "1-3", label: "1-3 Days" },
  { value: "4-7", label: "4-7 Days" },
  { value: "8-14", label: "8-14 Days" },
  { value: "14+", label: "14+ Days" },
] as const;

export const activityOptions = [
  "Safari",
  "Wildlife",
  "Beach",
  "Hiking",
  "Culture",
  "Photography",
  "Adventure",
  "Mountains",
] as const;

export function getDestination(slug: string) {
  return africaDestinations.find((d) => d.slug === slug);
}

export function destinationsByCountry(code: Country) {
  return africaDestinations.filter((d) => d.country === code);
}

export function countryInfo(code: Country) {
  return countries.find((c) => c.code === code)!;
}

export function matchesDuration(days: number, bucket: string) {
  if (bucket === "1-3") return days <= 3;
  if (bucket === "4-7") return days >= 4 && days <= 7;
  if (bucket === "8-14") return days >= 8 && days <= 14;
  if (bucket === "14+") return days > 14;
  return true;
}
