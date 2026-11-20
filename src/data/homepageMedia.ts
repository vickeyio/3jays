// Owner's real photos (3 Jays Tours & Safaris)
import ownerLion from "@/assets/owner-lion.webp";
import ownerGiraffe from "@/assets/owner-giraffe.webp";
import ownerElephants from "@/assets/owner-elephants.webp";
import ownerTsavo from "@/assets/owner-tsavo.webp";
import ownerNakuruLounge from "@/assets/owner-nakuru-lounge.webp";
import ownerAmboseli from "@/assets/owner-amboseli.webp";
import ownerSaltLick from "@/assets/owner-salt-lick.webp";
import ownerTaitaHills from "@/assets/owner-taita-hills.webp";
import ownerVehicle from "@/assets/owner-vehicle.webp";
import ownerNairobiGate from "@/assets/owner-nairobi-gate.webp";

import beachDiani from "@/assets/public-domain/beach-diani.webp.asset.json";
import cultureMaasai from "@/assets/public-domain/culture-maasai.webp.asset.json";
import heroElephants from "@/assets/public-domain/hero-elephants.webp.asset.json";
import historyGedi from "@/assets/public-domain/history-gedi.webp.asset.json";
import kenyaGiraffe from "@/assets/public-domain/kenya-giraffe.webp.asset.json";
import kenyaMaraCrossing from "@/assets/public-domain/kenya-mara-crossing.webp.asset.json";
import museumNairobi from "@/assets/public-domain/museum-nairobi.webp.asset.json";
import somaliaCoast from "@/assets/public-domain/somalia-coast.webp.asset.json";
import tanzaniaKilimanjaro from "@/assets/public-domain/tanzania-kilimanjaro.webp.asset.json";
import tanzaniaNgorongoroWildebeest from "@/assets/public-domain/tanzania-ngorongoro-wildebeest.webp.asset.json";
import tanzaniaSerengeti from "@/assets/public-domain/tanzania-serengeti.webp.asset.json";
import tanzaniaSerengetiZebra from "@/assets/public-domain/tanzania-serengeti-zebra.webp.asset.json";
import tanzaniaZanzibar from "@/assets/public-domain/tanzania-zanzibar.webp.asset.json";
import ugandaBwindiGorilla from "@/assets/public-domain/uganda-bwindi-gorilla.webp.asset.json";
import ugandaMurchison from "@/assets/public-domain/uganda-murchison.webp.asset.json";
import ugandaQenpKazinga from "@/assets/public-domain/uganda-qenp-kazinga.webp.asset.json";
import wildlifeCheetah from "@/assets/public-domain/wildlife-cheetah.webp.asset.json";

export type PublicDomainPhoto = {
  id: string;
  src: string;
  alt: string;
  place: string;
  category: string;
  creator: string;
  license: "CC0" | "Public domain";
  source: string;
};

export const publicDomainPhotos = {
  hero: {
    id: "hero-elephants",
    src: heroElephants.url,
    alt: "A family of African elephants gathered beside a watering hole in Kenya",
    place: "Kenya",
    category: "Wildlife",
    creator: "Sandro Senn",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Elephants_in_Kenya.jpg",
  },
  wildlife: {
    id: "wildlife-cheetah",
    src: wildlifeCheetah.url,
    alt: "A cheetah resting in natural grassland in the Maasai Mara, Kenya",
    place: "Maasai Mara, Kenya",
    category: "Wildlife & Safari",
    creator: "Hobbyfotowiki",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Cheetah_(Acinonyx_jubatus),_Maasai_Mara.jpg",
  },
  beach: {
    id: "beach-diani",
    src: beachDiani.url,
    alt: "Palm-lined Diani Beach meeting the Indian Ocean on Kenya's coast",
    place: "Diani, Kenya",
    category: "Beaches & Islands",
    creator: "CT Cooper",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Diani_Beach_towards_the_north_next_to_the_Indian_Ocean_Beach_Club_hotel_near_Mombasa,_Coast_Province,_Kenya.jpg",
  },
  culture: {
    id: "culture-maasai",
    src: cultureMaasai.url,
    alt: "A Maasai guide demonstrating a traditional bow in Ol Kinyei Conservancy, Kenya",
    place: "Ol Kinyei, Kenya",
    category: "Living Culture",
    creator: "Make it Kenya",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:2015-06-15_Maasai_guide_shoots_a_traditional_hunting_bow_and_arrow_during_a_walking_safari,_Ol_Kinyei_Conservancy_in_the_Maasai_Mara,_Kenya_0042.jpg",
  },
  museum: {
    id: "museum-nairobi",
    src: museumNairobi.url,
    alt: "Cultural exhibits displayed inside Nairobi National Museum in Kenya",
    place: "Nairobi, Kenya",
    category: "Museums & Culture",
    creator: "Aliceinthealice",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Various_exhibits_at_the_Nairobi_National_Museum_03.jpg",
  },
  history: {
    id: "history-gedi",
    src: historyGedi.url,
    alt: "Stone walls and forest at the historic Gedi ruins on the Kenyan coast",
    place: "Gedi, Kenya",
    category: "Historical Sites",
    creator: "ordercrazy",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Gede_Gedi_Ruins_01.jpg",
  },
  uganda: {
    id: "uganda-murchison",
    src: ugandaMurchison.url,
    alt: "The Nile surging through the rocky gorge at Murchison Falls in Uganda",
    place: "Murchison Falls, Uganda",
    category: "Waterfalls & Nature",
    creator: "Gorillawalkingsafaris",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Murchiosn_falls_in_uganda.jpg",
  },
  tanzania: {
    id: "tanzania-serengeti",
    src: tanzaniaSerengeti.url,
    alt: "Rocky kopjes rising from the open Serengeti grasslands in Tanzania",
    place: "Serengeti, Tanzania",
    category: "Savannah",
    creator: "Stolz Gary M, U.S. Fish and Wildlife Service",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Kopjes_on_the_serengeti_national_park_tanzania_africa_landscape.jpg",
  },
  zanzibar: {
    id: "tanzania-zanzibar",
    src: tanzaniaZanzibar.url,
    alt: "Travelers walking across the exposed shore at low tide in Zanzibar",
    place: "Zanzibar, Tanzania",
    category: "Island Life",
    creator: "Mussi Katz from Israel",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Beach_life_-_Zanzibar_-_Low_water_time_(33952871105).jpg",
  },
  mountain: {
    id: "tanzania-kilimanjaro",
    src: tanzaniaKilimanjaro.url,
    alt: "Clouds drifting across the rugged slopes of Mount Kilimanjaro in Tanzania",
    place: "Mount Kilimanjaro, Tanzania",
    category: "Mountains & Nature",
    creator: "Joel Peel (joel_m_peel)",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Clouds_Over_Mount_Kilimanjaro_(Unsplash).jpg",
  },
  somalia: {
    id: "somalia-coast",
    src: somaliaCoast.url,
    alt: "A natural view along the Indian Ocean coastline in Mogadishu, Somalia",
    place: "Mogadishu, Somalia",
    category: "Coast",
    creator: "AMISOM Public Information",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:2013_05_22_Mogadishu_Coast_E.jpg_(8785028342).jpg",
  },
} satisfies Record<string, PublicDomainPhoto>;

// Owner's real photos — not public domain, all rights reserved by 3 Jays Tours & Safaris
export const ownerPhotos = {
  lion: {
    id: "owner-lion",
    src: ownerLion,
    alt: "A lion resting in Kenya's savannah, photographed on a 3 Jays Tours & Safaris game drive",
    place: "Kenya",
    category: "Wildlife & Safari",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
  giraffe: {
    id: "owner-giraffe",
    src: ownerGiraffe,
    alt: "A giraffe standing tall against the African sky on a 3 Jays Tours & Safaris safari",
    place: "Kenya",
    category: "Wildlife & Safari",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
  elephants: {
    id: "owner-elephants",
    src: ownerElephants,
    alt: "A group of elephants gathered together during a game drive in Kenya",
    place: "Kenya",
    category: "Wildlife & Safari",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
  tsavo: {
    id: "owner-tsavo",
    src: ownerTsavo,
    alt: "A breathtaking view inside Tsavo East National Park, Kenya",
    place: "Tsavo East, Kenya",
    category: "National Parks",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
  nakuruLounge: {
    id: "owner-nakuru-lounge",
    src: ownerNakuruLounge,
    alt: "Guests relaxing at the Lake Nakuru safari lounge during a 3 Jays Tours & Safaris stay",
    place: "Lake Nakuru, Kenya",
    category: "Luxury Lodges",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
  amboseli: {
    id: "owner-amboseli",
    src: ownerAmboseli,
    alt: "A scenic view at Amboseli National Park with Mount Kilimanjaro in the distance",
    place: "Amboseli, Kenya",
    category: "National Parks",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
  saltLick: {
    id: "owner-salt-lick",
    src: ownerSaltLick,
    alt: "The unique elevated stilted cabins of Salt Lick Safari Lodge in Tsavo, Kenya",
    place: "Tsavo West, Kenya",
    category: "Luxury Lodges",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
  taitaHills: {
    id: "owner-taita-hills",
    src: ownerTaitaHills,
    alt: "A peaceful evening at Taita Hills Safari Lodge & Spa in Kenya",
    place: "Taita Hills, Kenya",
    category: "Luxury Lodges",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
  vehicle: {
    id: "owner-vehicle",
    src: ownerVehicle,
    alt: "A 3 Jays Tours & Safaris 4×4 Land Cruiser safari vehicle on a Kenya game drive",
    place: "Kenya",
    category: "Safari Vehicles",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
  nairobiGate: {
    id: "owner-nairobi-gate",
    src: ownerNairobiGate,
    alt: "The main entrance gate of Nairobi National Park in Kenya",
    place: "Nairobi, Kenya",
    category: "National Parks",
    creator: "3 Jays Tours & Safaris",
    license: "CC0" as const,
    source: "3 Jays Tours & Safaris",
  },
};

export const travelMosaic = [
  ownerPhotos.lion,         // Wildlife & Safari — real owner lion photo
  publicDomainPhotos.beach, // Beaches & Islands
  publicDomainPhotos.museum,// Museums & Culture
  publicDomainPhotos.history,// Historical Sites
  publicDomainPhotos.mountain,// Mountains & Nature
];

export const safariDestinationPhotos = {
  tsavo: {
    id: "kenya-giraffe",
    src: kenyaGiraffe.url,
    alt: "A giraffe standing on the open savannah in Kenya",
    place: "Kenya",
    category: "Savannah wildlife",
    creator: "The Trump White House Archived",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Giraffe_at_Nairobi_National_Park,_Kenya.jpg",
  },
  mara: {
    id: "kenya-mara-crossing",
    src: kenyaMaraCrossing.url,
    alt: "A herd of wildebeest crossing the riverbank during the Great Migration in Serengeti National Park, Tanzania",
    place: "Serengeti, Tanzania",
    category: "Great Migration",
    creator: "Agness Abubakar Saidi",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Wildebeest_crossing_the_riverbank_during_the_Great_Migration,_Serengeti_National_Park.jpg",
  },
  serengeti: {
    id: "tanzania-serengeti-zebra",
    src: tanzaniaSerengetiZebra.url,
    alt: "Zebras running and splashing through mud and shallow water in Serengeti National Park, Tanzania",
    place: "Serengeti, Tanzania",
    category: "Plains wildlife",
    creator: "MC1 Eric Dietrich, U.S. Navy",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Zebra_are_seen_running_at_the_Serengeti_National_Park_in_Tanzania_Nov._14,_2013_131114-N-LE393-065.jpg",
  },
  ngorongoro: {
    id: "tanzania-ngorongoro-wildebeest",
    src: tanzaniaNgorongoroWildebeest.url,
    alt: "A herd of wildebeest grazing beneath acacia trees beside a lake in Ngorongoro Crater, Tanzania",
    place: "Ngorongoro Crater, Tanzania",
    category: "Crater wildlife",
    creator: "MC1 Eric Dietrich, U.S. Navy",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Wildebeests_are_seen_in_Ngorongoro_Crater_in_Tanzania_Nov._15,_2013_131115-N-LE393-050.jpg",
  },
  bwindi: {
    id: "uganda-bwindi-gorilla",
    src: ugandaBwindiGorilla.url,
    alt: "A mountain gorilla resting among dense green foliage in Bwindi Impenetrable Forest, Uganda",
    place: "Bwindi, Uganda",
    category: "Gorilla trekking",
    creator: "Rebeccananonof",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Bwindi_impenetrable_forest_gorilla.jpg",
  },
  qenp: {
    id: "uganda-qenp-kazinga",
    src: ugandaQenpKazinga.url,
    alt: "Elephants and buffalo gathered on the banks of the Kazinga Channel in Queen Elizabeth National Park, Uganda",
    place: "Queen Elizabeth National Park, Uganda",
    category: "Watering wildlife",
    creator: "Alvinategyeka",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Wild_Life_at_the_banks_of_Kazinga_channel,_Queen_Elizabeth_National_Park_06.jpg",
  },
} satisfies Record<string, PublicDomainPhoto>;

export const travelHighlights = [
  { ...ownerPhotos.lion, description: "Patient mornings on open plains, reading tracks and watching wild lives unfold at their own pace." },
  { ...ownerPhotos.giraffe, category: "Giraffe Country", description: "Look for giraffes moving across Kenya's open savannah landscapes." },
  { ...safariDestinationPhotos.mara, description: "Witness the Great Migration as wildebeest cross the Mara River in a rush of water and movement." },
  { ...safariDestinationPhotos.bwindi, category: "Mountain Gorillas", description: "Explore Uganda's lush forest, home to remarkable mountain gorilla encounters." },
  { ...publicDomainPhotos.beach, description: "Warm Indian Ocean water, palm-fringed shores and unhurried days after the dust of safari." },
  { ...safariDestinationPhotos.ngorongoro, category: "Ngorongoro Wildlife", description: "See wildebeest grazing beneath acacia trees in Tanzania's Ngorongoro Crater." },
  { ...publicDomainPhotos.history, description: "Walk through stone settlements and coastal histories shaped by centuries of trade and exchange." },
  { ...ownerPhotos.vehicle, description: "Custom 4×4 Land Cruisers with pop-up roofs and expert local guides — your home between game drives." },
  { ...ownerPhotos.nakuruLounge, description: "Unwind at iconic lodges overlooking the bush — from Salt Lick to Lake Nakuru." },
];

export const safariDestinations = [
  {
    id: "tsavo",
    country: "Kenya",
    title: "Tsavo East & Tsavo West",
    tagline: "Wild Kenya Unveiled",
    description:
      "Discover Kenya's untamed wilderness, where powerful lions roam, giraffes wander freely, and dramatic landscapes reveal the true spirit of Africa.",
    photo: safariDestinationPhotos.tsavo,
    slug: "tsavo-east-tsavo-west-national-parks",
  },
  {
    id: "mara",
    country: "Kenya",
    title: "Maasai Mara",
    tagline: "Where the Wild Runs Free",
    description:
      "Witness the extraordinary rhythm of the Great Migration as vast herds thunder across the plains and plunge through rushing rivers in one of nature's greatest spectacles.",
    photo: safariDestinationPhotos.mara,
    slug: "maasai-mara-national-reserve",
  },
  {
    id: "serengeti",
    country: "Tanzania",
    title: "Serengeti National Park",
    tagline: "The Endless Wild",
    description:
      "Follow the heartbeat of the Serengeti, where endless golden plains, remarkable wildlife encounters, and unforgettable sunsets create a truly wild adventure.",
    photo: safariDestinationPhotos.serengeti,
    slug: "serengeti-national-park",
  },
  {
    id: "ngorongoro",
    country: "Tanzania",
    title: "Ngorongoro Crater",
    tagline: "Nature's Living Eden",
    description:
      "Descend into a breathtaking natural sanctuary filled with extraordinary wildlife, lush crater scenery, and unforgettable encounters in one remarkable ecosystem.",
    photo: safariDestinationPhotos.ngorongoro,
    slug: "ngorongoro-crater",
  },
  {
    id: "bwindi",
    country: "Uganda",
    title: "Bwindi Impenetrable Forest",
    tagline: "Into the Gorilla Kingdom",
    description:
      "Venture into mist-covered forests for a rare encounter with mountain gorillas, surrounded by ancient trees and the extraordinary beauty of Uganda's wilderness.",
    photo: safariDestinationPhotos.bwindi,
    slug: "bwindi-impenetrable-national-park",
  },
  {
    id: "qenp",
    country: "Uganda",
    title: "Queen Elizabeth National Park",
    tagline: "Where Wildlife Meets Water",
    description:
      "Explore a landscape of sweeping savannahs, winding waterways, and remarkable wildlife, where every turn brings a new glimpse of Uganda's natural beauty.",
    photo: safariDestinationPhotos.qenp,
    slug: "queen-elizabeth-national-park",
  },
] as const;

export const countryPhotos = {
  kenya: ownerPhotos.tsavo,
  uganda: publicDomainPhotos.uganda,
  tanzania: publicDomainPhotos.tanzania,
  somalia: publicDomainPhotos.somalia,
};

export const itineraryPhotos = countryPhotos;

export const blogPosts = [
  { category: "Kenya", title: "Best places to visit in Kenya", description: "From big-cat country to the Indian Ocean, these stops reveal how much variety fits into one journey.", date: "September 8, 2026", photo: publicDomainPhotos.hero, to: "/destinations/kenya" as const },
  { category: "Safari", title: "Safari experiences you should not miss", description: "Early drives, walking safaris and patient wildlife watching—the moments that make time in the bush matter.", date: "August 28, 2026", photo: publicDomainPhotos.wildlife, to: "/safaris" as const },
  { category: "Coast", title: "The beaches of East Africa", description: "A practical introduction to Diani, Zanzibar and the region's warm-water coastlines.", date: "August 16, 2026", photo: publicDomainPhotos.beach, to: "/gallery" as const },
  { category: "Heritage", title: "Exploring East Africa's historical sites", description: "Old stone walls, trade routes and living towns that add deeper context to every journey.", date: "August 2, 2026", photo: publicDomainPhotos.history, to: "/destinations" as const },
  { category: "Uganda", title: "Things to know before visiting Uganda", description: "A grounded guide to waterfalls, forests, wildlife permits and planning time between regions.", date: "July 21, 2026", photo: publicDomainPhotos.uganda, to: "/destinations/uganda" as const },
  { category: "Tanzania", title: "Discovering Tanzania beyond the Serengeti", description: "Pair classic wildlife country with Kilimanjaro landscapes and the everyday rhythms of the coast.", date: "July 8, 2026", photo: publicDomainPhotos.zanzibar, to: "/tanzania-safaris" as const },
];