import beach from "@/assets/blog-beach.webp";
import maasaiMara from "@/assets/blog-maasai-mara.webp";
import pyramids from "@/assets/blog-pyramids.webp";
import nationalPark from "@/assets/blog-national-park.webp";
import gorilla from "@/assets/blog-gorilla.webp";
import riftLake from "@/assets/blog-rift-lake.webp";

export type PhotoStory = {
  id: string;
  title: string;
  place: string;
  image: string;
  alt: string;
  story: string;
};

export const photoStories: PhotoStory[] = [
  {
    id: "maasai-mara",
    title: "The river crossing that stops your heart",
    place: "Maasai Mara, Kenya",
    image: maasaiMara,
    alt: "Thousands of wildebeest churning through the Mara River at sunset during the great migration",
    story:
      "Between July and October, more than a million wildebeest pour across the Mara River. We park early, wait quietly, and let the herd choose its moment — then the water explodes.",
  },
  {
    id: "beaches",
    title: "Barefoot on the Indian Ocean",
    place: "Diani & Watamu, Kenya",
    image: beach,
    alt: "White sand beach with leaning palm trees and a wooden dhow anchored in turquoise water",
    story:
      "Powder-white sand, warm reef water and a dhow at anchor. The perfect three days to finish a safari — slow mornings, fresh seafood, nothing on the schedule.",
  },
  {
    id: "national-parks",
    title: "Elephants under a snow-capped mountain",
    place: "Amboseli National Park, Kenya",
    image: nationalPark,
    alt: "Herd of elephants walking through golden grass with snow-capped Mount Kilimanjaro behind them",
    story:
      "Amboseli gives you the postcard: big-tusked elephant families crossing open plains with Kilimanjaro floating above the treeline in the early light.",
  },
  {
    id: "pyramids",
    title: "Pyramids with nobody else in them",
    place: "Meroe, Sudan",
    image: pyramids,
    alt: "Steep Nubian pyramids rising from golden desert dunes at sunrise in Sudan",
    story:
      "Sudan has more pyramids than Egypt. Most mornings at Meroe, the only footprints in the dunes will be yours and your guide's.",
  },
  {
    id: "gorillas",
    title: "One hour, one metre away",
    place: "Bwindi Impenetrable Forest, Uganda",
    image: gorilla,
    alt: "Mountain gorilla silverback resting among dense green rainforest foliage in Uganda",
    story:
      "You climb through wet forest for hours. Then a silverback looks up, and the whole world goes quiet for sixty minutes you will never forget.",
  },
  {
    id: "rift-lakes",
    title: "A lake that turns pink at dawn",
    place: "Great Rift Valley lakes",
    image: riftLake,
    alt: "Thousands of pink flamingos standing in a misty Rift Valley soda lake at sunrise",
    story:
      "Flamingos in their tens of thousands, mist on the water, rift walls glowing behind. Bring a long lens and get there before the sun clears the hills.",
  },
];
