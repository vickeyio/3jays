import serengetiMigration from "@/assets/packages/serengeti-migration.webp";
import ngorongoroCrater from "@/assets/packages/ngorongoro-crater.webp";
import tarangireElephant from "@/assets/packages/tarangire-elephant.webp";
import lakeManyara from "@/assets/packages/lake-manyara.webp";
import tsavoLion from "@/assets/packages/tsavo-lion.webp";
import amboseliKilimanjaro from "@/assets/packages/amboseli-kilimanjaro.webp";
import lakeNakuru from "@/assets/packages/lake-nakuru.webp";
import zanzibarAsset from "@/assets/public-domain/tanzania-zanzibar.webp.asset.json";

export type AdditionalPackage = {
  id: string;
  country: "Kenya" | "Tanzania";
  title: string;
  days: number;
  description: string;
  itinerary: string[];
  destinationSlug: string;
  photo: {
    src: string;
    alt: string;
    creator: string;
    license: string;
    source: string;
  };
};

export const additionalPackages: AdditionalPackage[] = [
  {
    id: "tz-serengeti-migration",
    country: "Tanzania",
    title: "Serengeti Great Migration Safari",
    days: 5,
    description:
      "Follow the Great Migration across the endless Serengeti plains, where over a million wildebeest and zebra move with the rains — and big cats are never far behind. Balanced game drives, a crater visit and comfortable tented camps make this our most requested Tanzanian journey.",
    itinerary: [
      "Arusha to Central Serengeti with game viewing en route",
      "Full-day Serengeti game drives following the migration herds",
      "Sunrise drive and optional hot-air balloon safari",
      "Ngorongoro Crater floor game drive",
      "Return to Arusha with Maasai village stop",
    ],
    destinationSlug: "serengeti-national-park",
    photo: {
      src: serengetiMigration,
      alt: "Wildebeest crossing a riverbank during the Great Migration in Serengeti National Park",
      creator: "Agness Abubakar Saidi",
      license: "CC0",
      source:
        "https://commons.wikimedia.org/wiki/File:Wildebeest_crossing_the_riverbank_during_the_Great_Migration,_Serengeti_National_Park.jpg",
    },
  },
  {
    id: "tz-ngorongoro-crater",
    country: "Tanzania",
    title: "Ngorongoro Crater & Highlands Escape",
    days: 3,
    description:
      "Descend into the world's largest intact volcanic caldera, home to an astonishing density of wildlife — including resident black rhinos, lions and flamingo-filled lakes. A short, rewarding safari perfect for first-time visitors or a Tanzanian add-on.",
    itinerary: [
      "Arusha to the Ngorongoro Conservation Area via the Rift Valley escarpment",
      "Full-day game drive on the Ngorongoro Crater floor",
      "Highlands coffee-farm visit and return to Arusha",
    ],
    destinationSlug: "ngorongoro-crater",
    photo: {
      src: ngorongoroCrater,
      alt: "View across the Ngorongoro Crater in Tanzania",
      creator: "KennyKinyambo",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:The_View_of_Ngorongoro_Creater_in_Tanzania.jpg",
    },
  },
  {
    id: "tz-tarangire-elephants",
    country: "Tanzania",
    title: "Tarangire Elephants & Baobabs",
    days: 3,
    description:
      "Tarangire's giant baobabs and large elephant herds make it one of Tanzania's most atmospheric parks. In the dry season, animals crowd the Tarangire River — superb for photography without the crowds of the northern circuit's famous names.",
    itinerary: [
      "Arusha to Tarangire National Park with an afternoon game drive",
      "Full-day game drive along the Tarangire River",
      "Maasai cultural visit and return to Arusha",
    ],
    destinationSlug: "tarangire-national-park",
    photo: {
      src: tarangireElephant,
      alt: "African bull elephant in Tarangire National Park, Tanzania",
      creator: "Geir Kiste",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:African_bull_elephant_Tanzania.jpg",
    },
  },
  {
    id: "tz-lake-manyara",
    country: "Tanzania",
    title: "Lake Manyara & Rift Valley Escape",
    days: 2,
    description:
      "A compact safari beneath the Rift Valley wall: Tree-climbing lions, troops of baboons, and thousands of flamingos lining the lakeshore. Ideal as a quick getaway or the first stop on a longer northern-circuit journey.",
    itinerary: [
      "Arusha to Lake Manyara National Park with an afternoon game drive",
      "Morning lakeshore game drive, viewpoints of the Rift Valley and return to Arusha",
    ],
    destinationSlug: "lake-manyara-national-park",
    photo: {
      src: lakeManyara,
      alt: "Lakeshore and wildlife at Lake Manyara National Park, Tanzania",
      creator: "John Mackenzie Burke",
      license: "CC BY-SA 4.0",
      source:
        "https://commons.wikimedia.org/wiki/File:Lakeshore_and_wildlife,_Lake_Manyara_National_Park_(2015).jpg",
    },
  },
  {
    id: "tz-zanzibar-stone-town",
    country: "Tanzania",
    title: "Zanzibar & Stone Town Island Escape",
    days: 5,
    description:
      "Combine the history of Stone Town's winding alleys and carved doors with white-sand beaches and turquoise water. Spice-farm tours, dhow sunsets and total relaxation after — or before — a mainland safari.",
    itinerary: [
      "Arrive Zanzibar, transfer to Stone Town heritage hotel",
      "Stone Town walking tour and spice-farm experience",
      "Transfer to a beach resort on the island's east coast",
      "Free beach day with optional dhow sunset cruise",
      "Transfer to airport for departure",
    ],
    destinationSlug: "zanzibar",
    photo: {
      src: zanzibarAsset.url,
      alt: "Beach with fishing boats on the coast of Zanzibar, Tanzania",
      creator: "Mussi Katz from Israel",
      license: "Public domain",
      source: "https://commons.wikimedia.org/wiki/File:Zanzibar_beach.jpg",
    },
  },
  {
    id: "ke-tsavo-east",
    country: "Kenya",
    title: "Tsavo East Red Elephants & Lions",
    days: 3,
    description:
      "Kenya's largest park, famous for its dust-red elephants, open plains and the man-eating lions of legend. Galana River crocodiles, the Aruba dam and huge herds make Tsavo East a raw, wild contrast to the busier parks.",
    itinerary: [
      "Nairobi or Mombasa to Tsavo East with an afternoon game drive",
      "Full-day game drive to Galana River and Aruba dam",
      "Sunrise drive and return journey",
    ],
    destinationSlug: "tsavo-east-tsavo-west-national-parks",
    photo: {
      src: tsavoLion,
      alt: "Maneless male lion in Tsavo East National Park, Kenya",
      creator: "Mgiganteus",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Maneless_lion_from_Tsavo_East_National_Park.png",
    },
  },
  {
    id: "ke-amboseli",
    country: "Kenya",
    title: "Amboseli Under Kilimanjaro",
    days: 3,
    description:
      "Big elephant herds framed by Mount Kilimanjaro — the classic African postcard, live. Amboseli's swamps and dust devils draw buffalo, giraffe and cheetah, and mornings often reveal the mountain's snows.",
    itinerary: [
      "Nairobi to Amboseli National Park with an afternoon game drive",
      "Sunrise and full-day game drives with views of Mount Kilimanjaro",
      "Maasai community visit and return to Nairobi",
    ],
    destinationSlug: "amboseli-national-park",
    photo: {
      src: amboseliKilimanjaro,
      alt: "Elephants at Amboseli National Park in front of Mount Kilimanjaro",
      creator: "Amoghavarsha JS",
      license: "CC BY-SA 3.0",
      source:
        "https://commons.wikimedia.org/wiki/File:Elephants_at_Amboseli_national_park_against_Mount_Kilimanjaro.jpg",
    },
  },
  {
    id: "ke-lake-nakuru",
    country: "Kenya",
    title: "Lake Nakuru Flamingos & Rhino",
    days: 2,
    description:
      "A Rift Valley lake famous for its flamingo fringe, white and black rhinos, and tree-climbing lions. Close to Nairobi and easy to combine with the Maasai Mara or Naivasha.",
    itinerary: [
      "Nairobi to Lake Nakuru National Park with an afternoon game drive",
      "Morning game drive past Baboon Cliff and the lakeshore, return to Nairobi",
    ],
    destinationSlug: "lake-nakuru-national-park",
    photo: {
      src: lakeNakuru,
      alt: "Lesser flamingos gathered on Lake Nakuru, Kenya",
      creator: "Paul Mannix",
      license: "CC BY-SA 2.0",
      source: "https://commons.wikimedia.org/wiki/File:Flamingos,_Lake_Nakuru.jpg",
    },
  },
];
