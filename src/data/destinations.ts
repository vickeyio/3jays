import ethiopia from "@/assets/dest-ethiopia.jpg";
import djibouti from "@/assets/dest-djibouti.jpg";
import kenya from "@/assets/dest-kenya.jpg";
import uganda from "@/assets/dest-uganda.jpg";
import sudan from "@/assets/dest-sudan.jpg";
import southSudan from "@/assets/dest-south-sudan.jpg";
import somalia from "@/assets/dest-somalia.jpg";

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  intro: string;
  highlights: string[];
  bestTime: string;
};

export const destinations: Destination[] = [
  {
    slug: "ethiopia",
    name: "Ethiopia",
    tagline: "The cradle of humankind",
    image: ethiopia,
    intro:
      "Ethiopia is Africa's oldest independent nation — a land of rock-hewn churches, walled cities and highlands that rise above the clouds. Trek the Simien Mountains, share a coffee ceremony in Addis Ababa, and stand inside churches carved from solid stone more than 800 years ago.",
    highlights: [
      "Rock-hewn churches of Lalibela",
      "Simien Mountains trekking & gelada baboons",
      "Danakil Depression salt flats and lava lakes",
      "Historic Axum, Gondar and the walled city of Harar",
    ],
    bestTime: "October – March",
  },
  {
    slug: "djibouti",
    name: "Djibouti",
    tagline: "Where the desert meets the sea",
    image: djibouti,
    intro:
      "Small but spectacular, Djibouti packs volcanic craters, salt lakes and coral reefs into a single short trip. Float effortlessly in Lake Assal, the lowest point in Africa, and swim alongside whale sharks in the Gulf of Tadjoura.",
    highlights: [
      "Lake Assal salt flats",
      "Whale shark snorkelling (Nov – Feb)",
      "Lake Abbe chimneys at sunrise",
      "Day Forest National Park",
    ],
    bestTime: "November – February",
  },
  {
    slug: "kenya",
    name: "Kenya",
    tagline: "The classic safari",
    image: kenya,
    intro:
      "Kenya is where the safari was born. Witness the Great Migration thunder across the Maasai Mara, spot the Big Five before breakfast, then finish your journey on the white sand beaches of Diani and Watamu.",
    highlights: [
      "Great Migration in the Maasai Mara (Jul – Oct)",
      "Amboseli elephants beneath Kilimanjaro",
      "Lake Nakuru flamingos & rhino sanctuary",
      "Diani and Watamu beach extensions",
    ],
    bestTime: "June – October, January – February",
  },
  {
    slug: "uganda",
    name: "Uganda",
    tagline: "The pearl of Africa",
    image: uganda,
    intro:
      "Green, gentle and astonishingly diverse, Uganda offers the single most moving wildlife encounter on earth: an hour with a habituated mountain gorilla family in Bwindi. Add chimpanzee tracking, tree-climbing lions and the roar of the Nile at Murchison Falls.",
    highlights: [
      "Mountain gorilla trekking in Bwindi",
      "Chimpanzee tracking in Kibale Forest",
      "Murchison Falls boat safari",
      "Source of the Nile at Jinja",
    ],
    bestTime: "June – September, December – February",
  },
  {
    slug: "sudan",
    name: "Sudan",
    tagline: "Pyramids without the crowds",
    image: sudan,
    intro:
      "Sudan has more pyramids than Egypt and a fraction of the visitors. Walk alone among the Nubian tombs of Meroe at sunrise, follow the Nile through ancient Kushite temples, and camp under some of the clearest desert skies in Africa.",
    highlights: [
      "Nubian pyramids of Meroe",
      "Temples of Naqa and Musawwarat",
      "Nile-side desert camping",
      "Red Sea reefs at Port Sudan",
    ],
    bestTime: "November – March",
  },
  {
    slug: "south-sudan",
    name: "South Sudan",
    tagline: "Africa's last great wilderness",
    image: southSudan,
    intro:
      "For the true pioneer. South Sudan holds the world's largest mammal migration — over a million antelope moving across the Boma-Badingilo plains — plus the vast Sudd wetlands and some of the most vibrant living cultures on the continent.",
    highlights: [
      "Great Nile antelope migration",
      "Sudd wetlands birdlife",
      "Mundari cattle camps along the Nile",
      "Boma National Park",
    ],
    bestTime: "December – March",
  },
  {
    slug: "somalia",
    name: "Somalia",
    tagline: "Africa's longest coastline",
    image: somalia,
    intro:
      "Over 3,000 kilometres of Indian Ocean shoreline, ancient port towns and the prehistoric rock art of Laas Geel. Somalia and Somaliland reward curious travellers with warm hospitality, fresh seafood and beaches you will have entirely to yourself.",
    highlights: [
      "Laas Geel rock art",
      "Berbera beaches and coral reefs",
      "Historic Hargeisa markets",
      "Fresh Indian Ocean seafood",
    ],
    bestTime: "October – April",
  },
];
